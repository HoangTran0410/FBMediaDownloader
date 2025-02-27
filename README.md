# FB Media Downloader

Donate? Muốn hỗ trợ mình 1 ly cafe <3 [Donate here](https://github.com/HoangTran0410/HoangTran0410/blob/main/DONATE.md)

## THÔNG BÁO: ĐÃ CÓ PHIÊN BẢN WEB TỐT HƠN [XEM NGAY](https://www.facebook.com/share/p/cPdJEQS43rzfgmxn/)

Công cụ tải ảnh facebook hiện tại đã có phiên bản web (extension)

Không cần cài đặt rườm rà

![preview](https://i.imgur.com/67q5JQz.jpeg)

## QUAN TRỌNG - NÊN ĐỌC

Hiện tại mình đang trong quá trình tích hợp FBMediaDownlader vào [Extension FB AIO](https://chromewebstore.google.com/detail/fb-aio/ncncagnhhigemlgiflfgdhcdpipadmmm)

- Mình sẽ không code thêm chức năng mới cho tool này nữa.

- Các chức năng đã có, và chức năng mới sẽ được cập nhật bên FB AIO nhé.

- Sử dụng FB AIO sẽ nhanh hơn, tiện hơn, không yêu cầu cài đặt phức tạp.

- FB AIO còn có rất nhiều chức năng khác đợi mọi người trải nghiệm.

## Giới thiệu

Bài post giới thiệu tool: [Post](https://www.facebook.com/groups/j2team.community/posts/1665799000418880/)

[Video hướng dẫn](https://youtu.be/g4zh9p-QfAQ)

1 Tool nhỏ viết bằng Nodejs <s>(kèm theo Bookmark hỗ trợ)</s> (***Cập nhật:** Bookmarks được di chuyển tới [Đây](https://github.com/HoangTran0410/useful-script)*). Giúp:

- Tải nhanh 1 album ảnh bất kì trên facebook, bạn chỉ cần có id của album ảnh đó là được.
- Tải nhanh toàn bộ ảnh/video trên tường của 1 đối tượng (user/group/page).
- Tải về đường link của các ảnh/video trên.
- **(MỚI)** Tải về toàn bộ hình ảnh/video của người dùng instagram đăng trên tường của họ.
- **(MỚI)** Đa ngôn ngữ (Tiếng anh/Tiếng việt) - Multilanguage (English/Vietnamese)
- **(MỚI)** Không cần mất thời gian tự tạo bookmarks nữa, đã có [Extension mới](https://github.com/HoangTran0410/useful-script) giúp lấy id user/page/group, access token, ... nhanh hơn

<details>
<summary>LỊCH SỬ CẬP NHẬT</summary>

- **UPDATE (15/11/2022)**

  - Tất cả Bookmarks hỗ trợ đã được tổng hợp tai extension mới [Useful-scripts](https://github.com/HoangTran0410/useful-script), từ giờ mọi người sử dụng extension cho tiện hơn, không cần tự tạo bookmarks nữa nhé.

- **UPDATE (26/10/2022)**

  - Thêm ngôn ngữ Tiếng anh


- **UPDATE (20/8/2022)**

  - Cách lấy token mới, dùng web bên thứ 3 (nên dùng nick clone thôi, mình không đảm bảo cookie của bạn được an toàn đâu :)
  - Link web: [https://ffb.vn/get-token](https://ffb.vn/get-token)

- **UPDATE** (17/04/2022)

  - Bài Post: [J2Team Community](https://www.facebook.com/groups/j2team.community/posts/1817757355223043/)
  - Video demo: [Youtube](https://youtu.be/wLRtrdD5Gaw)
  - Thêm bookmark mới cho instagram: Lấy toàn bộ link ảnh/video của người dùng instagram.
  - Thêm chức năng mới:
    - Tải từ file chứa links. (Chức năng số 6).
    - Chức năng này hỗ trợ cho bookmark instagram

- **UPDATE** (27/03/2022)

  - Thêm chức năng mới:
    - Tải toàn bộ/một phần ảnh/video từ user. (Chức năng số 5).
    - Chức năng này dành cho bạn nào muốn tải ảnh/video từ user. Chưa hỗ trợ group, page.
    - Hỗ trợ tải từ vị trí ảnh bất kỳ (Nếu có lỗi thì tải tiếp, ko cần tải lại từ đầu).
  - Fix vài lỗi nhỏ.

- **UPDATE** (01/03/2022)

  - Đã tìm được cách lấy token full quyền. Các bạn vào file bookmarks.js để lấy nhé, ngay đầu file luôn. Mong fb sẽ không fix :)
  - Nếu bị fix thì có những cách khác các bạn có thể thử:
    - Mua acc clone => sẽ có token full quyền
    - Tool log giả lập android

- **FIX** (12/11/2021)

  - Đã tìm được cách lấy token (hầu như) full quyền (UPDATE: Không còn full quyền)
  - Mọi người làm theo hướng dẫn trong link [Này](https://alotoi.com/get-token-full-quyen/#Cach_1_Get_token_qua_ung_dung_Instagram) nhé
  - Cách này khó làm bookmark quá nên mọi người chịu khó làm bằng tay nhé :))
  - Lấy token cũng làm 1 lần rồi là xong mà :)) khi nào không dùng được nữa mới phải lấy lại.

- **FIX** (08/11/2021)

  - Sau khi fb cập nhật thì bookmark lấy accesstoken đã không còn dùng được nữa, do fb đã giấu mất accesstoken.
  - Do đó mình đã tạo 1 bookmark mới "Lấy access token (có thời hạn. app token)"
  - Cách lấy này chỉ lấy được token dạng app token, không full quyền như user token cũ
  - Nên có thể vài chức năng sẽ không hoạt động được _(chức năng tải ảnh/video trên tường đối tượng)_
  - Mình sẽ tìm cách để fix lỗi này và cập nhật nhanh nhất có thể

- **Update** (20/10/2021):

  - Chức năng tải ảnh với độ phân giải GỐC:
  - ![](./screenshots/13.png)
  - **Ưu điểm**:
    - Tải ảnh gốc chắc chắn là sướng hơn ảnh bị nén rồi :)))))))
  - **Nhược điểm**:
    - Tốc độ tải chậm hơn tải ảnh chất lượng thường (Do với mỗi ảnh phải gọi thêm 1 API để lấy link tải ảnh gốc)
    - Tỷ lệ bị ban (FB không cho tải nữa và tự đăng xuất}) cao hơn, do gọi API liên tục.
      - => Các bạn chỉ cần login lại và lấy access token mới là tải được tiếp
    - Để giảm tỷ lệ bị ban, hãy tăng thời gian chờ ở biến WAIT_BEFORE_NEXT_FETCH_LARGEST_PHOTO trong file [config.js](./config.js) nhé

- **Update** (03/10/2021):

  - Giao diện tiếng việt có dấu.
  - Tải từng hình/video. Tải liên tiếp chứ ko tải song song như cũ
    - Tốc độ tải chậm hơn (do chỉ tải bằng 1 luồng)
    - Nhưng tỉ lệ lỗi sẽ thấp hơn đáng kể, tải file nào xong file đó.
  - Thu gọn README

- **Update** (21/09/2021):

  - Có thêm chức năng **tải album tại vị trí bất kỳ** (không nhất thiết là từ đầu album tới cuối album). Dành cho trường hợp bạn tải được 1 nửa album rồi mà bị rớt mạng hoặc lỗi. Thì chỉ cần mở lại rồi tải từ vị trí ảnh tải được gần nhất là xong.
  - Giao diện tiếng việt (không dấu)
  - ![UI](./screenshots/11.png)

- **Update** (19/09/2021):
  - Tool có thêm chức năng tải tất cả ảnh/video trên tường của 1 đối tượng (user/group/page)

</details> <br/>

![Album with 30k photos](./screenshots/1.png)

## Ưu Điểm

<details>
<summary>Có 4 chức năng chính</summary>

1. Xem **thông tin album** (tên, số lượng ảnh, link, ...)
2. **Tải timeline album** của 1 **page** fb: _đây là album ẩn, chứa tất cả ảnh từ trước tới giờ trong page fb đó. Ví dụ như hình phía trên ([link](https://www.facebook.com/groups/j2team.community/posts/1377217242610392/))_.
3. **Tải album bất kì**: _album của user, của group, hay của page đều chơi được tất_.
4. **Tải tất cả ảnh/video** trên **tường** (wall) của 1 đối tượng **(user/group/page)**.

Để có thể tải những thứ trên thì bạn chỉ cần truyền vào **album_id / user_id / group_id / page_id**. Để có thể **dễ dàng lấy** được những id này mình cũng đã viết sẵn các **bookmark scripts** cho các bạn sử dụng. <s>Xem trong file [scripts/bookmarks.js](./scripts/bookmarks.js)</s>. **Cập nhật, sử dụng extension mới dễ dàng hơn không cần tạo bookmarks [Extension tại đây](https://github.com/HoangTran0410/useful-script)**

- ![bookmarks](./screenshots/2.png)

</details>

<details>
<summary>Có 2 chế độ</summary>

- Bạn có thể tải **FILE**:
  - Tất cả **FILE ẢNH** trong album
  - Tất cả **FILE ẢNH/VIDEO** trên tường của đối tượng (user/group/page).
- Hoặc có thể tải **URL**:
  - Tất cả **ĐƯỜNG DẪN URL** của những ảnh/video trong album/trên tường.
  - Tool sẽ lưu danh sách url đó vào **1 file**. (Rồi sau này muốn làm gì đống link đó thì tùy bạn).

</details>

<details>
<summary>Tốc độ tải cực nhanh</summary>

- Tại sao viết tool bằng **NodeJs** chứ không phải **chrome extension**, vì theo mình thấy những việc liên quan tới tải file vậy thì dùng NodeJs sẽ nhanh hơn rất nhiều so với extension (phải thông qua trình duyệt để tải file).
- Tốc độ tải file sẽ phụ thuộc vào đường truyền mạng của bạn. Có khi ngốn hết băng thông luôn đấy, MAX NHANH NHÉ.
- VÍ DỤ Tải [album 30 NGHÌN ảnh](https://www.facebook.com/media/set?vanity=ColourfulSpace&set=a.945632905514659) trong chưa đầy 15p (intel core i5, gen 8, 12GB RAM)

</details>

<details>
<summary>Khả năng tải cực nhiều</summary>

- Tool có thể tải và lưu cả **Timeline Album** - 1 dạng album ẨN, chứa TẤT CẢ các hình ảnh có trong 1 PAGE FACEBOOK. Ví dụ: [Post này](https://www.facebook.com/groups/j2team.community/posts/1377217242610392/) (Mình tải thử thì được 7GB ảnh)
- Tool có thể tải **TẤT CẢ ảnh/video trên wall** 1 đối tượng (user/group/page). Chẳng hạn bạn muốn tải hết ảnh/video từng được đăng lên [J2team Girl](https://www.facebook.com/groups/j2team.community.girls)? Chuyện đó giờ dễ như trở bàn tay!!

</details>

<details>
<summary>Không bị checkpoint</summary>

- Tool dùng acccess token của bạn để fetch dữ liệu từ Facebook (Các API mình tham khảo từ [Đây](https://developers.facebook.com/tools/explorer)).
- Việc Fetch dữ liệu thì không ảnh hưởng tới checkpoint nhé. Fetch sẽ trả về link ảnh/video.
- Việc tải ảnh/video từ link thì cũng không ảnh hưởng luôn.
- Mình đã thử ở album [Này](https://www.facebook.com/media/set?vanity=ColourfulSpace&set=a.945632905514659). Trên 30 NGHÌN ảnh, tải rất mượt và không vấn đề gì nhé.
- Nếu có vấn đề thật thì các bạn chỉ cần lấy access token khác là xong :))

</details>

<details>
<summary><s>Cung cấp sẵn các bookmark hỗ trợ</s> Extension giúp lấy id nhanh hơn</summary>

<s>Mình viết sẵn những bookmark sau (trong file [bookmarks.js](./scripts/bookmarks.js))</s> Extension mới [Tại đây](https://github.com/HoangTran0410/useful-script), sẽ giúp các bạn dùng tool được dễ dàng hơn:

- Bookmark lấy **Access Token**
- Bookmark lấy **Album ID** - khi đang xem 1 album bất kỳ
- Bookmark lấy **Group ID** - trường hợp url của group hiển thị tên chứ ko hiển thị id
- Bookmark lấy **User ID** - khi đang xem profile của 1 user
- Bookmark lấy **Page ID** - khi đang xem trang chủ của 1 page fb
- Bookmark lấy **Timeline Album ID** của Page FB - khi đang xem trang Home của 1 Page FB (script này ko ổn định, tùy page)
- Bonus:
  - Bookmark lấy **Tất cả album id** có trong trang web - khi đang xem danh sách album của user/group/page
  - Bookmark lấy **Tất cả video id** có trong trang web - khi đang trong tab xem video của youtube
  - Bookmark **Tải video** bằng _video id_ - nhập vào id của video là tool sẽ mở trang tải video đó (chất lượng SD)
  - Bookmark **Tải video đang xem** - trường hợp đang trong trang xem video - tool sẽ tự tìm video id ở trên url và mở trang tải video cho bạn (chất lượng SD)

</details> <br/>

## Demo

[Video hướng dẫn + demo](https://youtu.be/g4zh9p-QfAQ)

**Lưu ý:** Trong video thì mình đã cài sẵn nodejs rồi, nên sẽ không huớng dẫn cách cài nữa nhé.

## CÀI ĐẶT VÀ SỬ DỤNG

Để có thể chạy tool thì bạn làm các bước sau:

<details>

<summary>Bấm vào đây để mở rộng</summary>

0. Cài [NodeJS](https://nodejs.org/en/) (version 14 trở lên).

1. Cài đặt các bookmark script mình đã cung cấp trong file [scripts/bookmarks.js](./scripts/bookmarks.js).

2. Tải source code về (nhấn nút Clone > Download zip) và Giải Nén (hoặc dùng _git clone_).

3. Mở cmd trong folder code và chạy câu lệnh **npm install** để cài đặt tool.

4. Lấy AccessToken của bạn [Cách lấy](https://ahachat.com/help/blog/cach-lay-token-facebook#2-token-facebook-theo-t%C3%A0i-kho%E1%BA%A3n-c%C3%A1-nh%C3%A2n) (Hoặc dùng bookmark của mình để lấy). Sau đó bỏ access token vào file [config.js](./config.js)

- ![access token config.js](./screenshots/6.png)

5. Chạy câu lệnh **node index.js** trong cmd. Giao diện menu sẽ hiện ra và bạn có thể sử dụng ngay.

- ![menu](./screenshots/3.png)

6. Khi sử dụng tool tùy từng chức năng nó sẽ yêu cầu bạn cung cấp id (album_id/user_id/group_id/page_id). Bạn chỉ cần dùng bookmark đã tạo để lấy id rồi truyền vào là xong.

- ![get group id](./screenshots/4.png)

7. Các file mà tool tải sẽ được lưu trong folder [downloads/](./downloads/) (các bạn có thể thay đổi vị trí lưu bằng cách chỉnh sửa trong file [config.js](./config.js))

- ![downloads folder](./screenshots/5.png)

</details>
<br/>

## LINK NGON

- [facebook-scripts-dom-manipulation](https://github.com/jayremnt/facebook-scripts-dom-manipulation)

- Tham khảo cách làm việc với Facebook API từ [Hoàng Minh Dùng MMO](https://www.youtube.com/watch?v=auTBuwZOrBo&list=PL4BMIU_JnQBRSVZcc_ey0LDZdARdeuCh2&index=1)

## LỖI ĐÃ BIẾT

<details>
<summary> LỖI Tìm thấy 0 hình ảnh </summary>

- => **LÝ DO**: Có thể do accessToken của bạn chưa full quyền. Nên sẽ không lấy được dữ liệu hình ảnh/video.

- => **XỬ LÝ**: Hãy sử dụng bookmark mới nhất (01/03/2022) để lấy được token full quyền và thử lại nhé

</details>

<details>
<summary> LỖI dừng tải ảnh do đường truyền bị ngắt </summary>

- ![error 1](./screenshots/7.jpg)
- ![error 2](./screenshots/8.png)

- => **LÝ DO**: Do tool tải quá nhanh và nhiều ảnh cùng lúc, nên sẽ ngốn hết băng thông. Do đó nếu bạn vừa tải vừa mở trình duyệt hay ứng dụng nào sử dụng internet, thì sẽ gây ra hiện tượng nghẽn băng thông, gây lỗi.

- => **XỬ LÝ**: Trước khi dùng chức năng tải album về thì bạn tạm thời tắt hết những ứng dụng khác đi, đợi nó tải xong rồi hẵng mở lại nhé.

</details>

<details>
<summary> NẾU đang tải album mà BỊ LỖI như trên thì **tôi phải TẢI LẠI TỪ ĐẦU à**? </summary>

- Vào bản **cập nhật sáng ngày 21/09/2021** (ai cài tool từ trước thời gian này thì bạn vui lòng tải và cài lại tool nhé)
- Mình đã thêm chức năng **tải album ảnh từ vị trí photo_id bất kì**, không nhất thiết phải tải từ đầu album lại nữa
- Nếu đang tải mà bị lỗi, bạn chỉ cần **lấy id của ảnh gần nhất đã lưu được**, rồi mở lại chức năng Download album, truyền id đó vào **"from photo id"**, là tool sẽ tải từ vị trí đó cho bạn.
- Ví dụ bạn gặp lỗi dừng tải như hình bên dưới:
- ![from photo id](./screenshots/9.png)
- Copy id trên và tải lại tại vị trí id đó:
- ![from photo id](./screenshots/10.png)

</details>

<details>
<summary>LỖI *Unexpected token '.'* khi chạy câu lệnh *node index.js*</summary>

- ![unexpected token .](./screenshots/12.jpg)
- => LÝ DO: phiên bản nodejs của bạn quá thấp, tool cần phiên bản nodejs 14 trở lên để có thể chạy được.
- => XỬ LÝ:
  - Cách 1: Cập nhật nodejs lên phiên bản cao hơn (>=14).
  - Cách 2: Nếu bạn dùng win 7 (hoặc thấp hơn) và cài không được nodejs 14 trở lên thì bạn tải và cài bản **.zip** thay vì bản .msi nhé. Chi tiết xem trong [Đây](https://github.com/nodejs/node/issues/33000#issuecomment-644530517)

</details>

<details>
<summary>LỖI có chữ *OAuthException* gì đó khi tải ảnh/video</summary>

- Lý do: Có thể do token của bạn chưa đủ quyền, bạn nên thử các cách lấy token khác (hiện mình có 3 bookmarks, bạn cứ thử hết)
- Hoặc dùng vài trang web lấy token trên mạng: [https://ffb.vn/get-token](https://ffb.vn/get-token)
- (_Lưu ý: mình không đảm bảo trang web này có bảo mật thông tin/cookies/token của các bạn hay không, nên hãy sử dụng cẩn trọng nhé, dùng cookie của nick clone thôi, đừng dùng nick chính_)

</details>
