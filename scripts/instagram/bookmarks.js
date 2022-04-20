// https://github.com/mikf/gallery-dl/blob/master/gallery_dl/extractor/instagram.py

// Lấy access token - chỉ gọi được hàm này trong trang www.instagram.com VÀ đã đăng nhập
javascript: (function () {
  try {
    const encoded = document.cookie
      .split("; ")
      ?.find((_) => _.startsWith("fbsr"))
      ?.split(".")[1];
    if (encoded) {
      const decoded = JSON.parse(atob(encoded));
      console.log(decoded);
      window.prompt("Access token: ", decoded.oauth_token);
    } else {
      alert(
        "Không tìm thấy thông tin access token trong cookie!\nBạn đã đăng nhập instagram chưa??"
      );
    }
  } catch (e) {
    alert("Lỗi: " + e.toString());
  }
})();

// Lấy user id - Chỉ gọi được hàm này trong trang instagram.com
javascript: (function () {
  if (window.location.host === "www.instagram.com") {
    console.log("Đang lấy user id ...");
    fetch(location.href + "?__a=1")
      .then((response) => response.json())
      .then((json) => {
        const {
          fbid,
          id,
          username,
          full_name,
          profile_pic_url_hd,
          profile_pic_url,
          edge_owner_to_timeline_media,
        } = json.graphql.user;
        console.log(json.graphql.user);
        window.prompt(`User ID của ${username}:`, id);
      })
      .catch((e) => {
        alert("Lỗi: " + e.toString());
      });
  } else {
    alert(
      "Bookmark này chỉ hoạt động trên trang www.instagram.com\nBạn hãy vào trang www.instagram.com và ấn lại bookmark để lấy token an toàn nhé."
    );
    window.open("https://www.instagram.com");
  }
})();

// Tải tất cả ảnh trong profile 1 user - ver2 - using API
// Sửa lỗi 20/4/2022 - đã tải được video
javascript: (async function () {
  let user_id = prompt("Enter user id:", "");
  if (!user_id) return;

  function getBiggestMediaFromNode(node) {
    if (node.is_video) {
      return getUniversalCdnUrl(node.video_url);
    } else {
      let r = node.display_resources;
      return r[r.length - 1]?.src;
    }
  }

  function download(data, filename, type) {
    var file = new Blob([data], { type: type });
    if (window.navigator.msSaveOrOpenBlob)
      window.navigator.msSaveOrOpenBlob(file, filename);
    else {
      var a = document.createElement("a"),
        url = URL.createObjectURL(file);
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      setTimeout(function () {
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);
      }, 0);
    }
  }

  function getUniversalCdnUrl(cdnLink) {
    const cdn = new URL(cdnLink);
    cdn.host = "scontent.cdninstagram.com";
    return cdn.href;
  }

  let all_urls = [];
  let after = "";

  while (true) {
    console.log("FETCHING...");
    let data = await fetch(
      `https://www.instagram.com/graphql/query/?query_hash=396983faee97f4b49ccbe105b4daf7a0&variables={"id":"${user_id}","first":50,"after":"${after}"}`
    );
    let json = await data.json();
    let edges = json?.data?.user?.edge_owner_to_timeline_media?.edges || [];

    console.log(`Found ${edges?.length} medias. Processing...`);

    let urls = [];
    edges.forEach((e) => {
      let childs = e.node?.edge_sidecar_to_children?.edges;

      if (childs) {
        urls.push(...childs.map((c) => getBiggestMediaFromNode(c.node)));
      } else {
        urls.push(getBiggestMediaFromNode(e.node));
      }
    });

    all_urls.push(...urls);
    console.log(`Saved ${urls.length} medias. (TOTAL: ${all_urls.length})`);

    let pageInfo = json?.data?.user?.edge_owner_to_timeline_media?.page_info;
    if (pageInfo?.has_next_page) {
      after = pageInfo?.end_cursor;
    } else {
      console.log("[STOP] THIS IS THE LAST PAGE.");
      break;
    }
  }
  console.log(all_urls);

  download(all_urls.join("\n"), user_id, ".txt");
})();

// Tải tất cả ảnh trên new feed
javascript: (async function () {
  const getAllImgTag = () =>
    Array.from(document.querySelectorAll("img[sizes*=px]")) || [];
  const sleep = (m) => new Promise((r) => setTimeout(r, m));

  const img_srcs = [];
  const done = [];
  const img_queue = getAllImgTag();
  while (img_queue.length > 0) {
    const first = img_queue.shift();
    first.scrollIntoView();

    const src = first.src;
    img_srcs.push(src);
    console.log(src);

    done.push(first);
    const new_img = getAllImgTag().filter(
      (_) => done.indexOf(_) == -1 && img_queue.indexOf(_) == -1
    );
    img_queue.push(...new_img);

    await sleep(300);
  }

  console.log(img_srcs);
})();

// Tải tất cả ảnh trong profile một user - ver1 - access DOM
// https://github.com/theus/instantgram/blob/41ea64433f67f662e46182b7451cf30a65b74d62/src/helpers/getOriginalVideoFromBlob.ts#L1
javascript: (async function () {
  const WAIT_FOR_MODAL_IMG_LOAD = 5000;
  const FIND_IMG_IN_MODAL_INTERVAL = 100;

  const getOriginalVideoFromBlob = (videoEl) => {
    const instanceKey = Object.keys(videoEl).find((key) =>
      key.includes("Instance")
    );
    const $react = videoEl[instanceKey];
    const videoLink = $react.return.memoizedProps.fallbackSrc;
    return videoLink;
  };
  const getAllClickableDiv = () =>
    Array.from(document.querySelectorAll("div._9AhH0")) || [];
  const getMediaInViewport = () =>
    document.querySelector("article[role='presentation'] div.KL4Bh>img") ||
    document.querySelector("article[role='presentation'] div.E-66r>video");
  const sleep = (m) => new Promise((r) => setTimeout(r, m));
  window.onblur = function () {
    has_focus = false;
  };
  window.onfocus = function () {
    has_focus = true;
  };

  let has_focus = true;
  const queue = getAllClickableDiv();
  const done = [];
  const urls = [];
  while (queue.length > 0) {
    const first = queue.shift();
    first.scrollIntoView();
    first.click();

    done.push(first);
    const new_img = getAllClickableDiv().filter(
      (_) => done.indexOf(_) == -1 && queue.indexOf(_) == -1
    );
    queue.push(...new_img);

    let media;
    let limit = WAIT_FOR_MODAL_IMG_LOAD / FIND_IMG_IN_MODAL_INTERVAL;
    while ((!media && limit > 0) || !has_focus) {
      media = getMediaInViewport();
      limit--;
      await sleep(FIND_IMG_IN_MODAL_INTERVAL);
    }

    if (media) {
      let url;
      if (media.tagName == "VIDEO") {
        url = getOriginalVideoFromBlob(media);
        window.open(url);
        window.focus();
      }
      if (media.tagName == "IMG") {
        url = media.src;
      }

      if (url) {
        urls.push(url);

        console.log(media.tagName, url);
      }
    }

    document.querySelector("div.Igw0E>button.wpO6b")?.click();
  }

  console.log(urls);
})();

const download = (path, filename) => {
  const anchor = document.createElement("a");
  anchor.target = "_blank";
  anchor.href = path;
  anchor.download = filename;
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};

// https://github.com/theus/instantgram/blob/gh-pages/src/helpers/isElementInViewport.ts
const isElementInViewport = (el) => {
  const viewport = window;
  const rect = el.getBoundingClientRect();
  return (
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.left < viewport.innerWidth &&
    rect.top < viewport.innerHeight
  );
};
