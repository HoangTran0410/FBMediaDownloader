import { log } from "./logger.js";

export const LANGKEY = {
  vi: "vi",
  en: "en",
};

let currentLangKey = LANGKEY.vi;

export const setLang = (langKey) => {
  if (langKey in LANGKEY) currentLangKey = langKey;
  else log("ERROR. Not found lang " + langKey);
};

export const t = (key) => {
  return langs[currentLangKey || LANGKEY.en][key] || "?";
};

export const langs = {
  vi: {
    albumInfo: "Xem thông tin album",
    findTimelinkAlbum: "Tìm timeline album id của page",
    downloadAlbum: "Tải album (của user/page/group)",
    downloadWall: "Tải ảnh/video trên tường của đối tượng (user/group/page)",
    downloadUser: "[MỚI] Tải toàn bộ ảnh/video của user",
    downloadFromUrlFile: "[MỚI] Tải từ file chứa link (instagram)",
    language: "Ngôn ngữ / Language",
    help: "Hỗ trợ",
    exit: "Thoát",
    pressAnyKey: "..Nhấn phím bất kỳ để tiếp tục..",
    chooseFunction: "> Chọn chức năng: ",
    wrongChoice: "[!] Không hợp lệ. Vui lòng chọn lại.",
    back: "<- Quay lại",
    downAlbumTitle: "FB Media Downloader Tool > Tải Album",
    downloadAllImageInAlbum: "Tải tất cả ẢNH trong album",
    downloadAllLinkInAlbum: "Tải tất cả LINK của ảnh trong album",
    enterAlbumID: "> Nhập album id (Nhập -1 để quay lại): ",
    enterStartPhotoID:
      "> Tải từ vị trí id ảnh nào? (Nhập 0 để tải từ đầu album): ",
    downloadHD: "> Tải ảnh chất lượng cao nhất? (0-Không, 1-Có): ",
    saveHDLinkNotSupported: "[!] Lưu LINK ảnh chất lương cao hiện chưa hỗ trợ.",
    downloadWallTitle: "FB Media Downloader Tool > Tải ảnh/video trên tường",
    downloadAllMediaInWall:
      "Tải tất cả ẢNH/VIDEO trên tường của đối tượng (user/gorup/page)",
    donwloadAllMediaLinkWall:
      "Tải tất cả LINK ảnh/video trên tường của đối tượng (user/group/page)",
    enterTargetID:
      "> Nhập id của đối tượng (user_id/group_id/page_id) (Nhập -1 để quay lại): ",
    howManyPageWall:
      "> Tải bao nhiêu trang (Nhập 0 để tải mọi thứ trên tường): ",
    downloadVideoWall: "> Có tải cả video không (0-Không, 1-Có): ",
    downloadHDWall: "> Tải ảnh chất lượng cao nhất? (0-Không, 1-Có): ",
    downloadUserTitle:
      "FB Media Downloader Tool > Tải toàn bộ ảnh/video của user",
    downloadUserImagePost: "Tải toàn bộ Ảnh được đăng bởi user",
    downloadUserVideoPost: "Tải toàn bộ Video được đăng bởi user",
    enterUserID: "> Nhập id của user (Nhập -1 để quay lại): ",
    startPageUser:
      "> Tải từ trang nào (Nhập id trang. Nhập 0 để tải từ trang đầu): ",
    howManyPageUser: "> Tải bao nhiêu trang (Nhập 0 để tải tới khi hết): ",
    enterFilePath: "> Nhập đường dẫn file (Có thể kéo thả file vào đây): ",
    folderToSave: "> Nhập tên folder để lưu: ",
    foundLinks: `Tìm thấy {length} links.`,
    downloadingLinks: `Đang tải {progress}`,
    errorWhenDownloadUrl: `[LỖI]: Lỗi khi tải. {url}.`,
    error: "[LỖI]: ",
    contact:
      "---- Liên hệ mình để được hỗ trợ: https://www.facebook.com/99.hoangtran/ ----",
    enterPageID: "> Nhập page id (Nhập -1 để quay lại): ",
    foundTimelineAlbumID: "< TÌM THẤY Timeline Album ID: ",
    fetchingAlbumInfo: "< Đang tải thông tin album....",
    notFoundTimlineAlbum: "< KHÔNG TÌM THẤY timeline album.",
    downloadingPage: "ĐANG TẢI TRANG {page}...",
    foundWallMedia: `> TÌM THẤY {length} file ảnh/video. (TỔNG: {total})`,
    pausing: `ĐANG TẠM DỪNG {ms}ms...`,
    gettingWallInfo: `ĐANG TẢI DỮ LIỆU TRÊN TƯỜNG CỦA {id}...`,
    fetchingHDPhoto: "Đang tìm ảnh có độ phân giải lớn nhất của {media_id}...",
    skipVideo: `Bỏ qua video: {url}`,
    saving: `Đang lưu {count}: {path}...`,
    errorWhenSave: `[!] LỖI khi tải {path}`,
    foundVideos: `> TÌM THẤY {length} videos. (TỔNG: {total})`,
    currentPageID: " > ID trang hiện tại: ",
    nextPageID: " > ID trang sau: ",
    downloadingUserVideo: `ĐANG TẢI VIDEOS CỦA USER {user_id}...`,
    savingUserMedia: `Đang lưu {count}: {path}... {moreInfo}`,
    downloadingUserImage: `ĐANG TẢI ẢNH CỦA USER {user_id}...`,
    pageDontHaveTimelineAlbum: "! Page facebook này không có timeline album.",
    downloadingAlbum: `ĐANG TẢI TRANG: {page}, Kích thước trang: 100 ảnh...`,
    foundAlbumMedia: `> TÌM THẤY {length} ẢNH. (TỔNG: {total})`,
    fromPhotoID: "vị trí photo_id=",
    fromBeginAlbum: "đầu album",
    downloadAlbumFrom: `ĐANG TẢI DỮ LIỆU ALBUM {albumId} TỪ `,
  },
  en: {
    albumInfo: "Get album info",
    findTimelinkAlbum: "Find timeline album id of page",
    downloadAlbum: "Download album (user/page/group)",
    downloadWall: "Download wall media (user/group/page)",
    downloadUser: "[NEW] Download all media (video/photo) of user",
    downloadFromUrlFile: "[NEW] Download media from urls file (instagram)",
    language: "Ngôn ngữ / Language",
    help: "Help",
    exit: "Exit",
    pressAnyKey: "..Press any key to continue..",
    chooseFunction: "> Your choice: ",
    wrongChoice: "[!] Not valid. Please choose again.",
    back: "<- Go back",
    downAlbumTitle: "FB Media Downloader Tool > Download Album",
    downloadAllImageInAlbum: "Download all images FILE in album",
    downloadAllLinkInAlbum: "Download all images LINK in album",
    enterAlbumID: "> Enter album id (Enter -1 to go back): ",
    enterStartPhotoID:
      "> Start download from which image's ID? (Enter 0 to download all album): ",
    downloadHD: "> Download highest resolution image? (0-No, 1-Yes): ",
    saveHDLinkNotSupported:
      "[!] Save image's LINK with highest resolution is not supported yet.",
    downloadWallTitle:
      "FB Media Downloader Tool > Download wall media (images/video)",
    downloadAllMediaInWall:
      "Download all media FILE on target wall (user/gorup/page)",
    donwloadAllMediaLinkWall:
      "Download all media LINK on target wall (user/group/page)",
    enterTargetID:
      "> Enter target ID (user_id/group_id/page_id) (Enter -1 to go back): ",
    howManyPageWall:
      "> How many page you want to download? (Enter 0 to download all): ",
    downloadVideoWall: "> Download video? (0-No, 1-Yes): ",
    downloadHDWall: "> Download largest photo? (0-No, 1-Yes): ",
    downloadUserTitle:
      "FB Media Downloader Tool > Download all media from user",
    downloadUserImagePost: "Download all Image posted by user",
    downloadUserVideoPost: "Download all Video posted by user",
    enterUserID: "> Enter user id (Enter -1 to go back): ",
    startPageUser:
      "> Download from page id? (Enter 0 to download from the first page): ",
    howManyPageUser:
      "> How many page? (Enter 0 to download to the last page): ",
    enterFilePath:
      "> Enter absolute file path (Or drag and drop file in here): ",
    folderToSave: "> Enter folder's name to save: ",
    foundLinks: `Found {length} links.`,
    downloadingLinks: `Đang tải {progress}`,
    errorWhenDownloadUrl: `[ERROR]: Error when download. {url}.`,
    error: "[ERROR]: ",
    contact:
      "---- Contact me to get help: https://www.facebook.com/99.hoangtran/ ----",
    enterPageID: "> Enter page id (Enter -1 to go back): ",
    foundTsavingUserVideo: `Đang lưu {count}: {path}... {moreInfo}`,
    imelineAlbumID: "< FOUND Timeline Album ID: ",
    fetchingAlbumInfo: "< Fetching album info....",
    notFoundTimlineAlbum: "< NOT FOUND timeline album.",
    downloadingPage: "Downloading page number {page}...",
    foundWallMedia: `> FOUND {length} media files. (TOTAL: {total})`,
    pausing: `PAUSE for {ms}ms...`,
    gettingWallInfo: `FETCHING DATA FROM WALL OF {id}...`,
    fetchingHDPhoto: "Fetching highest resolution of {media_id}...",
    skipVideo: `Skip video: {url}`,
    saving: `Saving {count}: {path}...`,
    errorWhenSave: `[!] LỖI khi tải {path}`,
    foundVideos: `> FOUND {length} videos. (TOTAL: {total})`,
    currentPageID: " > Current page id: ",
    nextPageID: " > Next page id: ",
    downloadingUserVideo: `DOWNLOADING VIDEOS OF USER {user_id}...`,
    savingUserMedia: `Saving {count}: {path}... {moreInfo}`,
    downloadingUserImage: `DOWNLOADING PHOTOS OF USER {user_id}...`,
    pageDontHaveTimelineAlbum: "! This fb page dont have timeline album.",
    downloadingAlbum: `DOWNLOADING PAGE: {page}, Page size: 100 photos...`,
    foundAlbumMedia: `> FOUND {length} PHOTOS. (TOTAL: {total})`,
    fromPhotoID: "photo_id=",
    fromBeginAlbum: "begin of album",
    downloadAlbumFrom: `DOWNLOADING ALBUM {albumId} FROM `,
  },
};
