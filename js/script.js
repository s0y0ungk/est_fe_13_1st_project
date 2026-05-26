/* 팝업 */
const popup = document.querySelector("#popup");
const popupCloseBtn = popup.querySelector("button");
const agree = document.querySelector("#agree");

if (document.cookie.includes("popup=안보기")) {
  popup.close();
} else {
  popup.showModal();
}

//닫기 버튼을 클릭하면 popup이 안보인다.
popupCloseBtn.addEventListener("click", () => {
  popup.close();
  if (agree.checked) {
    //체크 여부 확인
    createCookie("popup", "안보기", 1);
  } else {
    createCookie("popup", "안보기", -1);
  }
});

//쿠키 생성 함수
function createCookie(name, value, expire) {
  let today = new Date();
  today.setDate(today.getDate() + expire);
  document.cookie = `${name}=${value}; Expires=${today.toString()}`;
}
