import {
  ACCESS_TOKEN,
  FOLDER_TO_SAVE_USER_VIDEOS,
  VIDEO_FILE_FORMAT,
  WAIT_BEFORE_NEXT_FETCH,
} from "../config.js";
import { FB_API_HOST, S } from "./constants.js";
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
    console.log(`ĐANG TẢI TRANG ${page}...`);
    const fetchData = await myFetch(url);
    page++;

    if (!fetchData?.data) break;

    const videos = fetchData.data;
    all_videos.push(...videos);
    console.log(
      `> TÌM THẤY ${videos.length} videos. (TỔNG: ${all_videos.length})`
    );
    console.log(` > ID trang hiện tại: ${fetchData.paging?.cursors?.before}`);
    console.log(` > ID trang sau: ${fetchData.paging?.cursors?.after}\n`);

    // callback when each page fetched
    await pageFetchedCallback(videos);

    // get next paging
    url = fetchData?.paging?.next;

    // wait for next fetch - if needed
    if (WAIT_BEFORE_NEXT_FETCH) {
      console.log(`ĐANG TẠM DỪNG ${WAIT_BEFORE_NEXT_FETCH}ms...`);
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
  console.log(`ĐANG TẢI VIDEOS CỦA USER ${targetId}...`);
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

          console.log(`Đang lưu ${saved}: ${savePath}... ${moreInfo}`);
          await download(url, savePath);
          saved++;
        } catch (e) {
          console.log(
            S.BgRed + `[!] LỖI khi tải ${savePath}` + S.Reset,
            e.toString()
          );
        }
      }
    },
  });
};
