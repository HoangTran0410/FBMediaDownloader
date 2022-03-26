import {
  ACCESS_TOKEN,
  FOLDER_TO_SAVE_USER_PHOTOS,
  PHOTO_FILE_FORMAT,
  WAIT_BEFORE_NEXT_FETCH,
} from "../config.js";
import { FB_API_HOST, S } from "./constants.js";
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
    console.log(`ĐANG TẢI TRANG ${page}...`);
    const fetchData = await myFetch(url);
    page++;

    if (!fetchData?.data) break;

    const photos = fetchData.data;
    all_photos.push(...photos);
    console.log(
      `> TÌM THẤY ${photos.length} ảnh. (TỔNG: ${all_photos.length})`
    );
    console.log(` > ID trang hiện tại: ${fetchData.paging?.cursors?.before}`);
    console.log(` > ID trang sau: ${fetchData.paging?.cursors?.after}\n`);

    // callback when each page fetched
    await pageFetchedCallback(photos);

    // get next paging
    url = fetchData?.paging?.next;

    // wait for next fetch - if needed
    if (WAIT_BEFORE_NEXT_FETCH) {
      console.log(`ĐANG TẠM DỪNG ${WAIT_BEFORE_NEXT_FETCH}ms...`);
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
  console.log(`ĐANG TẢI ẢNH CỦA USER ${targetId}...`);
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

          console.log(`Đang lưu ${saved}: ${savePath}... ${moreInfo}`);
          await download(largest_image.source, savePath);
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
