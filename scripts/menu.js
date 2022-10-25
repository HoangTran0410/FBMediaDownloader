import readline from "readline";
import fs from "fs";
import { S } from "./constants.js";
import {
  downloadAlbumPhoto,
  downloadAlbumPhotoLinks,
  fetchAlbumInfo,
} from "./download_album.js";
import { fetchTimeLineAlbumId_FBPage } from "./download_timeline_album.js";
import { downloadUserPhotos } from "./download_user_photos.js";
import { downloadUserVideos } from "./download_user_videos.js";
import {
  downloadWallMedia,
  downloadWallMediaLinks,
} from "./download_wall_media.js";
import { download, createIfNotExistDir } from "./utils.js";
import { LANGKEY, setLang, t } from "./lang.js";

// https://stackoverflow.com/a/68504470
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const prompt = (query) =>
  new Promise((resolve) => rl.question(S.FgGreen + query + S.Reset, resolve));

const wait_for_key_pressed = async () => await prompt(t("pressAnyKey"));

const choose = async (title, menu_items) => {
  let title_ui = `======== ${title} ========`;
  let ui = "";
  ui += "\n" + new Array(title_ui.length).fill("=").join("") + "\n";
  ui += title_ui + "\n";
  ui += new Array(title_ui.length).fill("=").join("");
  Object.entries(menu_items).map(([key, value], index) => {
    ui += `\n${key}: ${value}`;
  });
  console.log(ui);

  while (true) {
    const input = await prompt("\n" + t("chooseFunction"));
    if (input in menu_items) {
      return {
        key: input,
        value: menu_items[input],
      };
    } else {
      console.log(t("wrongChoice"));
    }
  }
};

// ========================================== MENU =========================================
const menuDownloadAlbum = async () => {
  while (true) {
    const action = await choose(t("downAlbumTitle"), {
      0: t("back"),
      1: t("downloadAllImageInAlbum"),
      2: t("downloadAllLinkInAlbum"),
    });

    if (action.key == 0) break;
    if (action.key == 1 || action.key == 2) {
      const album_id = await prompt(t("enterAlbumID"));
      if (album_id != -1) {
        const from_photo_id_text = await prompt(t("enterStartPhotoID"));
        const largest_photo = await prompt(t("downloadHD"));
        const from_photo_id =
          from_photo_id_text == "0" ? null : from_photo_id_text;
        const is_largest_photo = largest_photo == "0" ? false : true;

        if (action.key == 2 && is_largest_photo) {
          console.log(t("saveHDLinkNotSupported"));
        }

        action.key == 1
          ? await downloadAlbumPhoto({
              albumId: album_id,
              fromPhotoId: from_photo_id,
              isGetLargestPhoto: is_largest_photo,
            })
          : await downloadAlbumPhotoLinks({
              albumId: album_id,
              fromPhotoId: from_photo_id,
              isGetLargestPhoto: is_largest_photo,
            });
      }
    }
  }
};

const menuDownloadWallMedia = async () => {
  while (true) {
    const action = await choose(t("downloadWallTitle"), {
      0: t("back"),
      1: t("downloadAllMediaInWall"),
      2: t("donwloadAllMediaLinkWall"),
    });

    if (action.key == 0) break;
    if (action.key == 1 || action.key == 2) {
      const target_id = await prompt(t("enterTargetID"));
      if (target_id != -1) {
        const page_limit = await prompt(t("howManyPageWall"));
        if (page_limit >= 0) {
          const include_video = await prompt(t("downloadVideoWall"));
          const largest_photo = await prompt(t("downloadHDWall"));
          const is_largest_photo = largest_photo == "0" ? false : true;

          if (action.key == 2 && is_largest_photo) {
            console.log(t("saveHDLinkNotSupported"));
          }

          action.key == 1
            ? await downloadWallMedia({
                targetId: target_id,
                includeVideo: include_video == 1 ? true : false,
                pageLimit: page_limit == 0 ? Infinity : page_limit,
                isGetLargestPhoto: is_largest_photo,
              })
            : await downloadWallMediaLinks({
                targetId: target_id,
                includeVideo: include_video == 1 ? true : false,
                pageLimit: page_limit == 0 ? Infinity : page_limit,
                isGetLargestPhoto: is_largest_photo,
              });
        }
      }
    }
  }
};

const menuDownloadPhotoVideoOfUser = async () => {
  while (true) {
    const action = await choose(t("downloadUserTitle"), {
      0: t("back"),
      1: t("downloadUserImagePost"),
      2: t("downloadUserVideoPost"),
    });

    if (action.key == 0) break;
    if (action.key == 1 || action.key == 2) {
      const target_id = await prompt(t("enterUserID"));
      if (target_id != -1) {
        const from_cursor = await prompt(t("startPageUser"));
        const page_limit = await prompt(t("howManyPageUser"));
        if (page_limit >= 0) {
          action.key == 1
            ? await downloadUserPhotos({
                targetId: target_id,
                fromCursor: from_cursor == 0 ? null : from_cursor,
                pageLimit: page_limit == 0 ? Infinity : page_limit,
              })
            : await downloadUserVideos({
                targetId: target_id,
                fromCursor: from_cursor == 0 ? null : from_cursor,
                pageLimit: page_limit == 0 ? Infinity : page_limit,
              });
        }
      }
    }
  }
};

const menuDownloadFromFile = async () => {
  const file_path = await prompt(t("enterFilePath"));

  if (file_path) {
    const folder_name = await prompt(t("folderToSave"));
    const folder_path = `downloads/from-file/${folder_name}/`;
    createIfNotExistDir(folder_path);

    try {
      const content = fs.readFileSync(file_path, "utf8");
      const urls = content.split("\n");

      console.log(t("foundLinks").replace("{length}", urls.length));

      let index = 1;
      for (let url of urls) {
        try {
          let isPhoto = url.indexOf(".jpg") > 0;
          let fileName = `${folder_path}/${index}.${isPhoto ? "jpg" : "mp4"}`;

          console.log(
            t("downloadingLinks").replace(
              "{progress}",
              `${index}/${urls.length}`
            )
          );
          await download(url, fileName);
          index++;
        } catch (e) {
          console.log(t("errorWhenDownloadUrl").replace("{url}", url), e);
        }
      }
    } catch (e) {
      console.log(t("error"), e);
    }
  }
};

const menuSelectLanguage = async () => {
  const action = await choose("Ngôn ngữ / Select Language", {
    1: "Tiếng Việt",
    2: "English",
  });

  if (action.key == 1) {
    setLang(LANGKEY.vi);
  }
  if (action.key == 2) {
    setLang(LANGKEY.en);
  }
};

export const menu = async () => {
  while (true) {
    const action = await choose("FB Media Downloader Tool", {
      1: t("albumInfo"),
      2: t("findTimelinkAlbum"),
      3: t("downloadAlbum"),
      4: t("downloadWall"),
      5: t("downloadUser"),
      6: t("downloadFromUrlFile"),
      7: t("language"),
      8: t("help"),
      9: t("exit"),
    });
    if (action.key == 1) {
      const album_id = await prompt(t("enterAlbumID"));
      if (album_id != -1) {
        console.log(await fetchAlbumInfo(album_id));
        await wait_for_key_pressed();
      }
    }
    if (action.key == 2) {
      const page_id = await prompt(t("enterPageID"));
      if (page_id != -1) {
        const timeline_album_id = await fetchTimeLineAlbumId_FBPage(page_id);
        if (timeline_album_id) {
          console.log(t("foundTimelineAlbumID"), timeline_album_id);
          console.log(t("fetchingAlbumInfo"));
          console.log(await fetchAlbumInfo(timeline_album_id));
        } else console.log(S.BgRed + t("notFoundTimlineAlbum") + S.Reset);
        await wait_for_key_pressed();
      }
    }
    if (action.key == 3) {
      await menuDownloadAlbum();
    }
    if (action.key == 4) {
      await menuDownloadWallMedia();
    }
    if (action.key == 5) {
      await menuDownloadPhotoVideoOfUser();
    }
    if (action.key == 6) {
      await menuDownloadFromFile();
    }
    if (action.key == 7) {
      await menuSelectLanguage();
    }
    if (action.key == 8) {
      console.log(t("contact"));
      await wait_for_key_pressed();
    }
    if (action.key == 9) break;
  }

  rl.close();
};

rl.on("close", () => process.exit(0));
