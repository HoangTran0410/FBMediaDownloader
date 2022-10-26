import {
  ACCESS_TOKEN,
  FOLDER_TO_SAVE_USER_VIDEOS,
  VIDEO_FILE_FORMAT,
  WAIT_BEFORE_NEXT_FETCH,
} from "../config.js";
import { FB_API_HOST, S } from "./constants.js";
import { t } from "./lang.js";
import { log } from "./logger.js";
import { createIfNotExistDir, download, myFetch, sleep } from "./utils.js";

const fetchUserVideos = async ({
  targetId,
  pageLimit = Infinity,
  fromCursor,
  pageFetchedCallback = () => {},
}) => {
  const all_videos = [];
  let page = 1;
  let url = `${FB_API_HOST}/${targetId}/videos?type=uploaded&fields=source,download_hd_url,download_sd_url,length,description,has_hd_quality&access_token=${ACCESS_TOKEN}`;

  if (fromCursor) {
    url += "&after=" + fromCursor;
  }

  while (url && page <= pageLimit) {
    log(t("downloadingPage").replace("{page}", page));
    const fetchData = await myFetch(url);
    page++;

    if (!fetchData?.data) break;

    const videos = fetchData.data;
    all_videos.push(...videos);
    log(
      t("foundVideos")
        .replace("{length}", videos.length)
        .replace("{total}", all_videos.length)
    );
    log(t("currentPageID"), fetchData.paging?.cursors?.before);
    log(t("nextPageID"), fetchData.paging?.cursors?.after, "\n");

    // callback when each page fetched
    await pageFetchedCallback(videos);

    // get next paging
    url = fetchData?.paging?.next;

    // wait for next fetch - if needed
    if (WAIT_BEFORE_NEXT_FETCH) {
      log(t("pausing").replace("{ms}", WAIT_BEFORE_NEXT_FETCH));
      await sleep(WAIT_BEFORE_NEXT_FETCH);
    }
  }

  return all_videos;
};

export const downloadUserVideos = async ({
  targetId,
  fromCursor,
  pageLimit = Infinity,
}) => {
  log(t("downloadingUserVideo").replace("{user_id}", targetId));
  let saved = 0;

  await fetchUserVideos({
    targetId,
    fromCursor,
    pageLimit,
    pageFetchedCallback: async (videos) => {
      // create dir if not exist
      const dir = `${FOLDER_TO_SAVE_USER_VIDEOS}/${targetId}`;
      createIfNotExistDir(dir);

      // save all videos to directory
      for (let data of videos) {
        const {
          source,
          download_hd_url,
          download_sd_url,
          id,
          length,
          description,
          has_hd_quality,
        } = data;
        const url = download_hd_url || source || download_sd_url;
        const savePath = `${dir}/${id}.${VIDEO_FILE_FORMAT}`;

        try {
          const moreInfo =
            (has_hd_quality ? "[HD]" : "[sd]") +
            ` [${~~length}s]` +
            (description ? ` [${description}]` : "");

          log(
            t("savingUserMedia")
              .replace("{count}", saved)
              .replace("{path}", savePath)
              .replace("{moreInfo}", moreInfo)
          );
          await download(url, savePath);
          saved++;
        } catch (e) {
          log(
            S.BgRed + t("errorWhenSave").replace("{path}", savePath) + S.Reset,
            e.toString()
          );
        }
      }
    },
  });
};
