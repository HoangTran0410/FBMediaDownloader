// TimeLine Album là 1 album chứa tất cả hình ảnh có trong page
// Thường thì chỉ có page mới có timeline album
// Album này bị ẩn trên facebook (hoặc có mà mình ko biết cách tìm ở đâu), cần dùng FB graph API để lấy được id

import { FB_API_HOST } from "./constants.js";
import { ACCESS_TOKEN } from "../config.js";
import {
  downloadAlbumPhoto,
  downloadAlbumPhotoLinks,
} from "./download_album.js";
import { myFetch } from "./utils.js";
import { t } from "./lang.js";
import { log } from "./logger.js";

export const fetchTimeLineAlbumId_FBPage = async (page_id) => {
  // create link to fetch all albums of page
  let url = `${FB_API_HOST}/${page_id}/albums?fields=type&limit=100&access_token=${ACCESS_TOKEN}`;

  // fetch data
  const json = await myFetch(url);
  if (!json) return null;

  // find timeline album
  const timeLineAlbum = json.data.find((_) => _.type === "wall");

  // return id (or null if not found timeline album)
  return timeLineAlbum?.id;
};

export const downloadTimeLineAlbumPhotoLinks_FBPage = async ({
  page_id,
  fromPhotoId,
}) => {
  const album_id = await fetchTimeLineAlbumId_FBPage(page_id);
  if (album_id) {
    log(t("foundTimelineAlbumID"), album_id);
    await downloadAlbumPhotoLinks({ albumId: album_id, fromPhotoId });
  } else {
    console.error(t("pageDontHaveTimelineAlbum"));
  }
};

export const downloadTimeLineAlbum_FBPage = async ({
  page_id,
  fromPhotoId,
}) => {
  const album_id = await fetchTimeLineAlbumId_FBPage(page_id);
  if (album_id) {
    log(t("foundTimelineAlbumID"), album_id);
    await downloadAlbumPhoto({ albumId: album_id, fromPhotoId });
  } else {
    console.error(t("pageDontHaveTimelineAlbum"));
  }
};
