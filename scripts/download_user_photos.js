import {
  ACCESS_TOKEN,
  FOLDER_TO_SAVE_USER_PHOTOS,
  PHOTO_FILE_FORMAT,
  WAIT_BEFORE_NEXT_FETCH,
} from "../config.js";
import { FB_API_HOST, S } from "./constants.js";
import { t } from "./lang.js";
import { log } from "./logger.js";
import { createIfNotExistDir, download, myFetch, sleep } from "./utils.js";

const fetchUserPhotos = async ({
  targetId,
  pageLimit = Infinity,
  fromCursor,
  pageFetchedCallback = () => {},
}) => {
  const all_photos = [];
  let page = 1;
  let url = `${FB_API_HOST}/${targetId}/photos?type=uploaded&fields=largest_image,name,album&access_token=${ACCESS_TOKEN}`;

  if (fromCursor) {
    url += "&after=" + fromCursor;
  }

  while (url && page <= pageLimit) {
    log(t("downloadingPage").replace("{page}", page));
    const fetchData = await myFetch(url);
    page++;

    if (!fetchData?.data) break;

    const photos = fetchData.data;
    all_photos.push(...photos);
    log(`> TÌM THẤY ${photos.length} ảnh. (TỔNG: ${all_photos.length})`);
    log(t("currentPageID"), fetchData.paging?.cursors?.before);
    log(t("nextPageID"), fetchData.paging?.cursors?.after, "\n");

    // callback when each page fetched
    await pageFetchedCallback(photos);

    // get next paging
    url = fetchData?.paging?.next;

    // wait for next fetch - if needed
    if (WAIT_BEFORE_NEXT_FETCH) {
      log(t("pausing").replace("{ms}", WAIT_BEFORE_NEXT_FETCH));
      await sleep(WAIT_BEFORE_NEXT_FETCH);
    }
  }

  return all_photos;
};

export const downloadUserPhotos = async ({
  targetId,
  fromCursor,
  pageLimit = Infinity,
}) => {
  log(t("downloadingUserImage").replace("{user_id}", targetId));
  let saved = 0;

  await fetchUserPhotos({
    targetId,
    fromCursor,
    pageLimit,
    pageFetchedCallback: async (photos) => {
      // create dir if not exist
      const dir = `${FOLDER_TO_SAVE_USER_PHOTOS}/${targetId}`;
      createIfNotExistDir(dir);

      // save all videos to directory
      for (let data of photos) {
        const { largest_image, name, album, id } = data;
        const savePath = `${dir}/${id}.${PHOTO_FILE_FORMAT}`;

        try {
          const moreInfo = `[${album?.name}] [${name || ""}]`;

          log(
            t("savingUserMedia")
              .replace("{count}", saved)
              .replace("{path}", savePath)
              .replace("{moreInfo}", moreInfo)
          );
          await download(largest_image.source, savePath);
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
