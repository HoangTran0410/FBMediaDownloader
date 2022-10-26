export const getTokenMFacebook = function () {
  if (window.location.host !== "www.facebook.com") {
    alert(
      "Bookmark này chỉ dùng được trong trang www.facebook.com.\nBạn hãy vào trang www.facebook.com và ấn lại bookmark để lấy token nhé."
    );
    window.open("https://www.facebook.com");
    return;
  }
  var uid = /(?<=c_user=)(\d+)/.exec(document.cookie)[0],
    dtsg =
      require("DTSGInitialData").token ||
      document.querySelector('[name="fb_dtsg"]').value,
    http = new XMLHttpRequest(),
    url = "//www.facebook.com/v1.0/dialog/oauth/confirm",
    params =
      "fb_dtsg=" +
      dtsg +
      "&app_id=124024574287414&redirect_uri=fbconnect%3A%2F%2Fsuccess&display=page&access_token=&from_post=1&return_format=access_token&domain=&sso_device=ios&_CONFIRM=1&_user=" +
      uid;
  http.open("POST", url, !0),
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
    (http.onreadystatechange = function () {
      if (4 == http.readyState && 200 == http.status) {
        var a = http.responseText.match(/(?<=access_token=)(.*?)(?=\&)/);
        console.log(http.responseText);
        if (a && a[0]) {
          prompt("Token", a[0]);
        } else {
          alert("Failed to Get Access Token.");
        }
      }
    }),
    http.send(params);
};

export const getTokenFacebook = function () {
  if (window.location.host !== "m.facebook.com") {
    alert(
      "Bookmark này chỉ hoạt động trên trang m.facebook.com\nBạn hãy vào trang m.facebook.com và ấn lại bookmark để lấy token an toàn nhé."
    );
    window.open("https://m.facebook.com");
    return;
  }
  console.log("Đang lấy token ...");
  fetch("https://m.facebook.com/composer/ocelot/async_loader/?publisher=feed")
    .then((response) => response.text())
    .then((text) => {
      if ("<" == text[0]) {
        alert("Chưa đăng nhập. Bạn cần đăng nhập fb thì mới lấy được token.");
      } else {
        const data = {
          token: /(?<=accessToken\\":\\")(.*?)(?=\\")/.exec(text)[0],
          fb_dtsg: /(?<=fb_dtsg\\" value=\\")(.*?)(?=\\")/.exec(text)[0],
          id: /(?<=USER_ID\\":\\").*?(?=\\",\\")/gm.exec(text)[0],
        };
        console.log(data);
        window.prompt("Access Token của bạn:", data.token);
      }
    });
};

export const getTokenBusiness = function () {
  if (window.location.host !== "business.facebook.com") {
    alert(
      "Bookmark này chỉ hoạt động trên trang https://business.facebook.com/content_management/\nBạn hãy vào trang web trên và ấn lại bookmark để lấy token an toàn nhé."
    );
    window.open("https://business.facebook.com/content_management/");
    return;
  }

  try {
    const accessToken =
      "EAAG" + /(?<=EAAG)(.*?)(?=\")/.exec(document.body.textContent)[0];
    window.prompt("Access Token của bạn:", accessToken);
  } catch (e) {
    alert("LỖI: " + e.message);
  }
};

// Lấy user id (uid) - khi đang trong tường của người dùng muốn lấy user id. Ví dụ: https://www.facebook.com/callchoulnhe
export const getUid = function () {
  const user_name = document.title;
  const found = (check) => {
    if (check && check[0]) {
      window.prompt(`USER ID của ${user_name}:`, check[0]);
      return true;
    }
    return false;
  };
  if (found(/(?<=\/profile\.php\?id=)(.\d+?)($|(?=&))/.exec(location.href)))
    return;
  const list_a = document.querySelectorAll("a");
  for (let a of Array.from(list_a)) {
    if (found(/(?<=set\=(pb|picfp|ecnf|pob)\.)(.\d+?)($|(?=\.))/.exec(a.href)))
      return;
  }
  if (
    found(
      /(?<=\"user\"\:\{\"id\"\:\")(.\d+?)(?=\")/.exec(document.body.innerHTML)
    )
  )
    return;
  window.prompt(
    "Không tìm thấy USER ID nào trong trang web!\nBạn có đang ở đúng trang profile chưa?\nTrang web Ví dụ: ",
    "https://www.facebook.com/callchoulnhe"
  );
};

// Lấy UID từ url của user fb. Ví dụ: https://www.facebook.com/99.hoangtran
export const getUidFromUrl = function () {
  const _getUidFromUrl = async (url) => {
    var response = await fetch(url);
    if (response.status == 200) {
      var text = await response.text();
      let uid = /(?<=\"userID\"\:\")(.\d+?)(?=\")/.exec(text);
      if (uid?.length) {
        return uid[0];
      }
    }
    return null;
  };
  const url = window.prompt("Nhập url của user fb:", "");
  if (url)
    _getUidFromUrl(url)
      .then((uid) => {
        if (uid) window.prompt(`UID của user ${url}:`, uid);
        else alert("Không tìm thấy uid của user!");
      })
      .catch((err) => alert("Lỗi: " + err.message));
};

// Lấy group id - trường hợp url của group hiển thị tên chứ ko hiển thị id. Ví dụ: https://www.facebook.com/groups/j2team.community.girls
export const getGroupId = function () {
  const group_name = document.title;
  const found = (check) => {
    if (check && check[0]) {
      window.prompt(`GROUP ID của ${group_name}:`, check[0]);
      return true;
    }
    return false;
  };
  if (found(/(?<=\/groups\/)(.\d+?)($|(?=\/)|(?=&))/.exec(location.href)))
    return;
  const list_a = document.querySelectorAll("a");
  for (let a of Array.from(list_a)) {
    if (found(/(?<=\/groups\/)(.\d+?)(?=\/user\/)/.exec(a.href))) return;
  }
  window.prompt(
    "Không tìm thấy GROUP ID nào trong trang web!\nBạn có đang ở đúng trang group chưa?\nTrang web Ví dụ:",
    "https://www.facebook.com/groups/j2team.community.girls"
  );
};

// Lấy album id - khi đang xem 1 album, ví dụ https://www.facebook.com/media/set/?vanity=ColourfulSpace&set=a.945632905514659
export const getAlbumId = function () {
  const list_a = document.querySelectorAll("a");
  for (let a of [location, ...Array.from(list_a)]) {
    const page_album_id = /(?<=\/photos\/a\.)(.\d+?)(?=\/)/.exec(a.href);
    if (page_album_id && page_album_id[0]) {
      window.prompt("PAGE ALBUM ID:", page_album_id[0]);
      return;
    }
    const group_album_id = /(?<=set\=oa\.)(.\d+?)($|(?=&))/.exec(a.href);
    if (group_album_id && group_album_id[0]) {
      window.prompt("GROUP ALBUM ID:", group_album_id[0]);
      return;
    }
    const user_album_id = /(?<=set\=a\.)(.\d+?)($|(?=&))/.exec(a.href);
    if (user_album_id && user_album_id[0]) {
      window.prompt("USER ALBUM ID:", user_album_id[0]);
      return;
    }
  }
  window.prompt(
    "Không tìm thấy ALBUM ID nào trong trang web!\nBạn có đang ở đúng trang album chưa?\nTrang web Ví dụ:",
    "https://www.facebook.com/media/set/?vanity=ColourfulSpace&set=a.945632905514659"
  );
};

// Lấy tất cả album id có trong trang web - Khi đang xem 1 danh sách album của user/group/page
export const getAllAlbumId = function () {
  const list_a = document.querySelectorAll("a");
  const list_id = [];
  for (let a of [location, ...Array.from(list_a)]) {
    const page_album_id = /(?<=\/photos\/a\.)(.\d+?)(?=\/)/.exec(a.href);
    if (page_album_id && page_album_id[0]) {
      list_id.push(page_album_id[0]);
    }
    const group_album_id = /(?<=set\=oa\.)(.\d+?)($|(?=&))/.exec(a.href);
    if (group_album_id && group_album_id[0]) {
      list_id.push(group_album_id[0]);
    }
    const user_album_id = /(?<=set\=a\.)(.\d+?)($|(?=&))/.exec(a.href);
    if (user_album_id && user_album_id[0]) {
      list_id.push(user_album_id[0]);
    }
  }
  if (list_id.length)
    window.prompt(
      `Tìm thấy ${list_id.length} album id trong trang web và trên url.`,
      list_id.join(", ")
    );
  else
    window.prompt(
      "Không tìm thấy ALBUM ID nào trong trang web!\nBạn có đang ở đúng trang album chưa?\nTrang web Ví dụ:",
      "https://www.facebook.com/media/set/?vanity=ColourfulSpace&set=a.945632905514659"
    );
};

// Lấy timeline album id của page - khi đang trong trang của page fb. Ví dụ: https://www.facebook.com/profile.php?id=100057998562930
export const getTimelineAlbumId = function () {
  const page_name = document.title;
  const list_a = document.querySelectorAll("a");
  for (let a of Array.from(list_a)) {
    const posts_screen = /(?<=set\=a\.)(.\d+?)(?=\&__cft__)/.exec(a.href);
    if (posts_screen && posts_screen[0]) {
      window.prompt(`Timeline Album ID của ${page_name}:`, posts_screen[0]) &&
        window.open("https://www.facebook.com/" + posts_screen[0]);
      return;
    }
  }
  window.prompt(
    "Không tìm thấy TIMELINE ALBUM trong trang web!\nBạn có đang ở đúng trang web của 1 Page fb chưa?\nThử kéo xuống tới bài post nào có kèm hình ảnh rồi ấn lại bookmark nhé\nTrang web Ví dụ: ",
    "https://www.facebook.com/profile.php?id=100057998562930"
  );
};

// Lấy page id - khi đang trong trang của page fb. Ví dụ: https://www.facebook.com/ColourfulSpace
export const getPageId = function () {
  const page_name = document.title;
  const found = (check) => {
    if (check && check[0]) {
      window.prompt(`PAGE ID của ${page_name}:`, check[0]);
      return true;
    }
    return false;
  };
  if (found(/(?<=\"pageID\"\:\")(.*?)(?=\")/.exec(document.body.innerHTML)))
    return;
  if (found(/(?<=facebook\.com\/)(.*?)($|(?=\/)|(?=&))/.exec(location.href)))
    return;
  window.prompt(
    "Không tìm thấy PAGE ID nào trong url!\nBạn có đang ở đúng trang page fb chưa?\nTrang web Ví dụ:",
    "https://www.facebook.com/ColourfulSpace"
  );
};

// Lấy tất cả uid từ trang facebook search bạn bè
// Ví dụ: https://www.facebook.com/search/people/?q=*a&epa=FILTERS&filters=eyJmcmllbmRzIjoie1wibmFtZVwiOlwidXNlcnNfZnJpZW5kc19vZl9wZW9wbGVcIixcImFyZ3NcIjpcIjEwMDA2NDI2NzYzMjI0MlwifSJ9
// Link trên được tạo từ web: https://sowsearch.info/
export const getAllUidFromFriendsPage = async () => {
  const _getUidFromUrl = async (url) => {
    var response = await fetch(url);
    if (response.status == 200) {
      var text = await response.text();
      let uid = /(?<=\"userID\"\:\")(.\d+?)(?=\")/.exec(text);
      if (uid?.length) {
        return uid[0];
      }
    }
    return null;
  };
  alert("Đang lấy thông tin uid, mở console để xem tiến trình...");
  let list_a = Array.from(
    document.querySelectorAll(".sjgh65i0 a[role='presentation']")
  );

  let uids = [];
  for (let a of list_a) {
    let l = a.href;

    let uid = l.split("profile.php?id=")[1];
    if (uid) {
      uids.push(uid);
      console.log(uid);
      continue;
    }

    let name = l.split("facebook.com/")[1];
    uid = await _getUidFromUrl(l);
    uids.push(uid);
    console.log(name, uid);
  }
  console.log(uids);
  window.prompt("Tất cả UID: ", uids.join("\n"));
};

// Lấy tất cả video id có trong trang
export const getAllVideoId = function () {
  const list_a = document.querySelectorAll("a");
  const list_id = [];
  for (let a of Array.from(list_a)) {
    const check = /(?<=\/videos\/)(.\d+?)($|(?=\/))/.exec(a.href);
    if (check && check[0]) {
      list_id.push(check[0]);
    }
  }
  if (list_id.length)
    window.prompt(`Tìm thấy ${list_id.length} video id: `, list_id.join(", "));
  else
    window.prompt(
      "Không tìm thấy video id nào trong trang web!\nBạn có ở đúng trang video chưa?\nTrang web ví dụ:",
      "https://www.facebook.com/watch/?ref=tab"
    );
};

// Tải video đang xem - khi đang trong trang web video, dạng: https://www.facebook.com/watch?v=254222479732213
// Nếu bạn muốn tải HD thì dùng snapsave: https://snapsave.app/vn
export const downloadCurrentVideo = function () {
  const found = (check) => {
    if (check && check[0]) {
      const url = window.location.href.replace(
        "www.facebook.com",
        "mbasic.facebook.com"
      );
      window.open(url);
      return true;
    }
    return false;
  };
  if (found(/(?<=\/watch\?v\=)(.\d+?)($|(?=\/))/.exec(location.href))) return;
  if (found(/(?<=videos\/)(.\d+?)($|(?=\/))/.exec(location.href))) return;
  window.prompt(
    "Không tìm thấy id của video trên url!\nBạn có ở đúng trang xem video chưa?\nTrang web ví dụ:",
    "https://www.facebook.com/watch?v=254222479732213"
  );
};

// Scroll trang web xuống cuối cùng và chờ cho load thêm, tiếp tục scroll, cho tới khi ko còn dữ liệu mới
export const scrollToVeryEnd = function () {
  let height = () => document.body.scrollHeight;
  let down = () =>
    window.scrollTo({ left: 0, top: height(), behavior: "smooth" });
  let sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  (async () => {
    let lastScroll = {
      time: Date.now(),
      top: 0,
    };

    while (true) {
      down();

      let currentHeight = height();
      if (currentHeight != lastScroll.top) {
        lastScroll.top = currentHeight;
        lastScroll.time = Date.now();
      } else if (Date.now() - lastScroll.time > 5000) {
        break;
      }
      await sleep(100);
    }
    console.log("end");
  })();
};

// Lấy tất cả id của member trong group
// source: https://gist.github.com/thinhbuzz/d8ba04c66f69dc78265b9a9ce5a118c0?fbclid=IwAR37QPDL1zlGWIv_pPq4UydYbFcQKlw7Dio-dP-jtztSJODGPD1RoIGFzZU#file-group-uuid-js-L1
export const getAllUidInGroup = function () {
  (async () => {
    function sleep(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function getId() {
      try {
        const props = require("CometRouteStore").getRoute(location.pathname)
          ?.rootView.props;
        const result = require("GroupsCometMembersPageNewMembersSectionRefetchQuery.graphql");
        if (!props || !result) {
          throw new Error("Không phải profile");
        }
        return {
          groupID: props.groupID,
          docId: result.params.id,
          method: "ProfileCometAppCollectionPhotosRendererPaginationQuery",
        };
      } catch (e) {
        console.error(e);
      }
      return { groupID: null, docId: null, method: null };
    }

    function prepareData({ dtsg: fb_dtsg, groupID, docId: doc_id, method }) {
      const variables = `{"count":10,"cursor":__CURSOR__,"groupID":"${groupID}","recruitingGroupFilterNonCompliant":false,"scale":1,"id":"${groupID}"}`;
      const data = {
        doc_id,
        fb_dtsg,
        variables,
        fb_api_caller_class: "RelayModern",
        fb_api_req_friendly_name: method,
      };
      const formBody = [];
      for (const property in data) {
        const encodedKey = encodeURIComponent(property);
        const encodedValue = encodeURIComponent(data[property]);
        formBody.push(encodedKey + "=" + encodedValue);
      }
      return formBody.join("&");
    }

    async function getLinks(method, formBody) {
      return fetch("https://www.facebook.com/api/graphql/", {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "user-agent":
            "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36",
          "x-fb-friendly-name": method,
        },
        body: formBody,
        method: "POST",
      })
        .then((response) => response.json())
        .then(({ data }) => {
          console.log(data);
          return {
            users: data.node.new_members.edges.map((item) => {
              return {
                id: item.node.id,
                name: item.node.name,
                url: item.node.url,
              };
            }),
            page: data.node.new_members.page_info,
          };
        });
    }

    window.scrollTo(0, document.body.scrollHeight);
    await sleep(1000);
    let cursor = null;
    const limit = +prompt("Số UUID tối đa sẽ lấy", "999999") || 999999;
    if (!limit) return;

    const { groupID, docId, method } = getId();
    const dtsg = require("DTSG").getCachedToken
      ? require("DTSG").getCachedToken()
      : require("DTSG").getToken();
    window.allItems = [];
    if (!groupID || !docId) {
      throw new Error("Không tìm thấy token");
    }
    alert(
      "Quá trình lấy uuid sẽ diễn ra trong console.\nNhấn F12 để mở console"
    );
    console.log("%cBắt đầu lấy link", "color: green;");
    const formBody = prepareData({ dtsg, groupID, docId, method });
    while (true) {
      let { users, page } = await getLinks(
        method,
        formBody.replace("__CURSOR__", cursor ? `"${cursor}"` : "null")
      );
      window.allItems.push(...users);
      console.log(
        "%cĐã lấy được %d uuid",
        "color: green;",
        window.allItems.length
      );
      if (!page.has_next_page) {
        break;
      }
      cursor = page.end_cursor;
      if (window.allItems.length >= limit) {
        break;
      }
    }
    console.log(window.allItems);
    const styles = ["color: green", "font-size: 20px", "padding: 10px"].join(
      ";"
    );

    console.log(
      "%cĐã lấy thành công %d uuid, gõ copy(window.allItems.map(({ id }) => id).join('\\n')) để sao chép uuid vào clipboard",
      styles,
      window.allItems.length
    );
  })().catch((error) => {
    console.log(error);
    alert("Vui lòng tải lại trang và thử lại.");
  });
};
