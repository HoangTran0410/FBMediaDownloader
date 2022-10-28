import { downloadWatchingStory } from "./doutube/downloadWatchingStory.js";
import { downloadWatchingVideo } from "./doutube/downloadWatchingVideo.js";
import { enableDownloadVideo } from "./doutube/enableDownloadVideo.js";
import { getAllVideoInUserProfile } from "./doutube/getAllVideoInUserProfile.js";
import { downloadAlbumMedia } from "./facebook/downloadAlbumMedia.js";
import { downloadCurrentVideo } from "./facebook/downloadCurrentVideo.js";
import { getAlbumId } from "./facebook/getAlbumId.js";
import { getAllAlbumId } from "./facebook/getAllAlbumId.js";
import { getAllUidFromFBSearch } from "./facebook/getAllUidFromFbSearch.js";
import { getAllUidFromFriendsPage } from "./facebook/getAllUidFromFriendsPage.js";
import { getAllUidOfGroupMembers } from "./facebook/getAllUidOfGroupMembers.js";
import { getAllVideoId } from "./facebook/getAllVideoId.js";
import { getAvatarFromUid } from "./facebook/getAvatarFromUid.js";
import { getGroupId } from "./facebook/getGroupId.js";
import { getPageId } from "./facebook/getPageId.js";
import { getTimelineAlbumId } from "./facebook/getTimelineAlbumId.js";
import { getTokenBusiness } from "./facebook/getTokenBusiness.js";
import { getTokenFacebook } from "./facebook/getTokenFacebook.js";
import { getTokenMFacebook } from "./facebook/getTokenMFacebook.js";
import { getUid as getFbUid } from "./facebook/getUid.js";
import { getUidFromUrl } from "./facebook/getUidFromUrl.js";
import { github1s } from "./github/github1s.js";
import { goToFirstCommit } from "./github/goToFirstCommit.js";
import { getAllImagesInNewFeed } from "./instagram/getAllImagesInNewFeed.js";
import { getAllImagesInUserProfile } from "./instagram/getAllImagesInUserProfile.js";
import { getAllUserMedia } from "./instagram/getAllUserMedia.js";
import { getToken as getTokenInsta } from "./instagram/getToken.js";
import { getUid as getUidInsta } from "./instagram/getUid.js";
import { webToPDF } from "./pdf/webToPDF.js";
import { darkModePDF } from "./pdf/darkModePDF.js";
import { enableTextSelection } from "./unlock/enableTextSelection.js";
import { openWaybackUrl } from "./more/openWaybackUrl.js";
import { reEnableContextMenu } from "./unlock/reEnableContextMenu.js";
import { runStatJs } from "./more/runStatJs.js";
import { scrollToVeryEnd } from "./automation/scrollToVeryEnd.js";
import { shortenURL } from "./more/shortenURL.js";
import { viewScriptsUsed } from "./more/viewScriptsUsed.js";
import { webToQRCode } from "./qrcode/webToQRCode.js";
import { bugMeNot } from "./unlock/bugMeNot.js";
import { textToQRCode } from "./qrcode/textToQRCode.js";
import { viewHiddenPassword } from "./unlock/viewHiddenPassword.js";
import { addSortTable } from "./table/addSortTable.js";
import { addNumberColumn } from "./table/addNumberColumn.js";
import { swapRowAndColumn } from "./table/swapRowAndColumn.js";
import { editPage } from "./more/editPage.js";
import { whatFont } from "./more/whatFont.js";

export const tabs = [
  {
    id: "facebook",
    name: "Facebook",
    description: "Facebook script tools",
    scripts: [
      {
        name: "Get Token (business.facebook.com)",
        description: "Get facebook access token from business.facebook.com",
        func: getTokenBusiness,
      },
      {
        name: "Get Token (www.facebook.com)",
        description: "Get facebook access token from www.facebook.com",
        func: getTokenFacebook,
      },
      {
        name: "Get Token (m.facebook.com)",
        description: "Get facebook access token from m.facebook.com",
        func: getTokenMFacebook,
      },
      {
        name: "Get User ID",
        description: "Get id of user in current website",
        func: getFbUid,
      },
      {
        name: "Get Group ID",
        description: "Get id of group in current website",
        func: getGroupId,
      },
      {
        name: "Get Page ID",
        description: "Get id of page in current website",
        func: getPageId,
      },
      {
        name: "Get Album ID",
        description: "Get id of album in current website",
        func: getAlbumId,
      },
      {
        name: "Get User ID from url",
        description: "Get id of user from entered url",
        func: getUidFromUrl,
      },
      {
        name: "Get all User ID from Friends page",
        description: "Get id of all user from friends page",
        func: getAllUidFromFriendsPage,
      },
      {
        name: "Get all User ID from group",
        description: "Get id of all user from group members",
        func: getAllUidOfGroupMembers,
      },
      {
        name: "Get all User ID from search page",
        description: "Get id of all user from fb search page",
        func: getAllUidFromFBSearch,
      },
      {
        name: "Get avatar from user id",
        description: "Get avatar from list user ids",
        func: getAvatarFromUid,
      },
      {
        name: "Get all Album ID",
        description: "Get all id of album in current website",
        func: getAllAlbumId,
      },
      {
        name: "Get timeline Album ID of page",
        description: "Get timeline album id of page in current website",
        func: getTimelineAlbumId,
      },
      {
        name: "Get all Video ID",
        description: "Get id of all video in current website",
        func: getAllVideoId,
      },
      {
        name: "Get download link of current video",
        description: "Get download link of current video",
        func: downloadCurrentVideo,
      },
      {
        name: "Download album media (beta)",
        description: "Download all media link in album",
        func: downloadAlbumMedia,
      },
    ],
  },
  {
    id: "instagram",
    name: "Instagram",
    description: "",
    scripts: [
      {
        name: "Get Token",
        description: "Get instagram access token",
        func: getTokenInsta,
      },
      {
        name: "Get User ID",
        description: "Get id of instagram user",
        func: getUidInsta,
      },
      {
        name: "Get all media of user",
        description: "Get all media of instagram user",
        func: getAllUserMedia,
      },
      {
        name: "Get all images in newfeed",
        description: "Get all images in newfeed",
        func: getAllImagesInNewFeed,
      },
      {
        name: "Get all images in user profile",
        description: "Get all images in user profile",
        func: getAllImagesInUserProfile,
      },
    ],
  },
  {
    id: "github",
    name: "Github",
    description: "",
    scripts: [
      {
        name: "Go to first commit",
        description: "Go to first commit of repo",
        func: goToFirstCommit,
      },
      {
        name: "Open repo in github1s.com",
        description: "Open current repo in github1s.com",
        func: github1s,
      },
    ],
  },
  {
    id: "doutube",
    name: "Doutu.be",
    description: "",
    scripts: [
      {
        name: "Enable download all video",
        description: "Enable download button for all video",
        func: enableDownloadVideo,
      },
      {
        name: "Download watching video",
        description: "Download video that you are watching",
        func: downloadWatchingVideo,
      },
      {
        name: "Download watching story",
        description: "Download story that you are watching",
        func: downloadWatchingStory,
      },
      {
        name: "Get all video from user profile ",
        description: "Get all video in user profile",
        func: getAllVideoInUserProfile,
      },
    ],
  },
  {
    id: "pdf",
    name: "PDF",
    description: "",
    scripts: [
      {
        name: "Darkmode for pdf",
        description: "Enable darkmode for PDF",
        func: darkModePDF,
      },
      {
        name: "Web to PDF",
        description: "Convert current website to PDF",
        func: webToPDF,
      },
    ],
  },
  {
    id: "qrcode",
    name: "QR Code",
    description: "",
    scripts: [
      {
        name: "URL to QR Code",
        description: "Convert current website URL to QR Code",
        func: webToQRCode,
      },
      {
        name: "Text to QR Code",
        description: "Convert text to QR Code",
        func: textToQRCode,
      },
    ],
  },
  {
    id: "automation",
    name: "Automation",
    description: "",
    scripts: [
      {
        name: "Scroll to very end",
        description:
          "Scoll to end, then wait for load data, then scroll again...",
        func: scrollToVeryEnd,
      },
    ],
  },
  {
    id: "unlock",
    name: "Unlock",
    description: "",
    scripts: [
      {
        name: "Bug me not",
        description: "Get free account for current website",
        func: bugMeNot,
      },
      {
        name: "View hidden passwords",
        description: "View hidden password",
        func: viewHiddenPassword,
      },
      {
        name: "Re-Enable text selection",
        description: "Enable text selection for website",
        func: enableTextSelection,
      },
      {
        name: "Re-Enable context menu (right click)",
        description: "Enable context menu for website",
        func: reEnableContextMenu,
      },
    ],
  },
  {
    id: "table",
    name: "Table",
    description: "",
    scripts: [
      {
        name: "Add sort to table",
        description: "Add sort functions to table",
        func: addSortTable,
      },
      {
        name: "Add number columns",
        description: "Add number columns to table",
        func: addNumberColumn,
      },
      {
        name: "Swap rows and columns",
        description: "Swap rows and columns (transpose)",
        func: swapRowAndColumn,
      },
    ],
  },
  {
    id: "more",
    name: "More...",
    description: "",
    scripts: [
      {
        name: "Edit page",
        description: "Edit all text in website",
        func: editPage,
      },
      {
        name: "What font",
        description: "Check font used in webpage",
        func: whatFont,
      },
      {
        name: "Shorten URL (j2team)",
        description: "Shorten URL using j2team.dev",
        func: shortenURL,
      },

      {
        name: "Open wayback url",
        description: "Open wayback url for current website",
        func: openWaybackUrl,
      },
      {
        name: "View scripts used in website",
        description: "View all scripts used in current website",
        func: viewScriptsUsed,
      },
      {
        name: "Run Stat.js",
        description: "Run stat.js in current website",
        func: runStatJs,
      },
    ],
  },
];
