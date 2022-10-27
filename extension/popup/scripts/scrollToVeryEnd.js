// Scroll trang web xuống cuối cùng và chờ cho load thêm, tiếp tục scroll, cho tới khi ko còn dữ liệu mới
(function () {
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
})();
