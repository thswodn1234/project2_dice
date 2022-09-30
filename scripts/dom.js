//랜덤수
let randNum;
//사용자가 선택한 수
let userNum;

//화면 보기 함수
const dispDom = (msgP, iNumP, bt1P, bt2P) => {
  //DOM 제어
  document.getElementById("msg").style.display = msgP;
  document.getElementById("iNum").style.display = iNumP;
  document.getElementById("bt1").style.display = bt1P;
  document.getElementById("bt2").style.display = bt2P;
};

//주사위
//function showDice() {}
const showDice = () => {
  //랜덤수 생성
  randNum = Math.floor(Math.random() * 6) + 1;
  console.log(`주사위 랜덤수 => ${randNum}`);

  //DOM 제어
  dispDom("none", "block", "none", "block");
};

//확인
const showOk = () => {
  userNum = form1.num.value;

  //DOM 제어
  dispDom("block", "none", "block", "none");

  //주사위 그림
  let tag = `<img src="./images/${randNum}.png">`;

  //ox 그림
  let ox;
  if (randNum == userNum) ox = "o";
  else ox = "x";

  tag = `${tag}<img src="./images/${ox}.png">`;

  //이미지 표시
  document.getElementById("msg").innerHTML = tag;
  console.log(`사용자 선택 수 확인 => ${userNum}`);
};

//DOM이 생성이 되고 난 후에 요소를 CRUD해야한다.
document.addEventListener("DOMContentLoaded", () => {
  //주사위 버튼만 보여야 함
  dispDom("none", "none", "block", "none");
});

// DOM 요소가 생성된 후에 실행

//function 키워드로 함수 생성
/*
function show() {
  console.log("show");
}
*/

// 화살표 함수형식으로 생성
// 함수내 명령이 하나이면 {} 생략가능
// const show = () => console.log("show: 화살표함수");
// return문 하나이면 return도 생략가능

// msg 영역에 div 3개 생성\
// 태그만들기
// const show = () => {

//   const msgId = document.querySelector("#msg");

//   let i = Math.floor(Math.random() * 6) + 1;
//   msgTag = "";
//   for(let n = 1 ; n <= 6 ; n++){
//     msgTag = `<label ><input clss="radioMsg" type="radio" name="number" />${n}</label>`
//     msgId.innerHTML += msgTag;
//   }

//     // msgTag = `<div class="divMsg" id="divid${i}"><img src="./images/${i}.png" id="msgid" alt="주사위이미지"></div>`;
//     // msgId.innerHTML = msgTag;

// }

// const show = () => {
//   const msgId = document.querySelector("#msg");
//   msgId.innerHTML ="";

//   for(let i = 0; i < 3 ; i++) {
//     msgTag = `<div class="divMsg" id="divid${i+1}">${i+1}</div>`;
//     msgId.innerHTML += msgTag;
//   }
// }

// // const show = () => {
//   //1. 태그만들기
//   let tag = "";
//   for(let i = 1; i <= 3; i++) {
//     tag += `<div class="divMsg">${i}</div>`;
//   }
//   //2.DOM에서 태그를 넣을 요소 선택
//   const  msgDiv = document.querySelector('#msg');
//   //3.선택된 요소의 HTML 변경
//   msgDiv.innerHTML = tag;
//   //3-1. 스타일 변경
//   msgDiv.style.backgroundColor = "red";
//   console.log(msgDiv.getComputedStyle());
// }

// console.log("show: 화살표함수");

// msgId.innerHTML = "<h2>페이스북</h2>";
// console.log(msgId.innerHTML);
// console.log(msgId.innerText);
// msgId.innerText = "<h2>페이스북</h2>";

// msgId.textContent = "<h2>페이스북</h2>";
// console.log(msgId.textContent);

document.addEventListener("DOMContentLoaded", () => {});
