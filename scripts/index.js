// 기존 함수 선언 방식
/* 
  function funPrint() {
    console.log(n);
   console.log("외부 자바스크립트");
   consloe.log("버튼" + 1);
  }
  */

// Es6+ : 화살표 함수
// const funPrint = (n) => {
//   // console.log(n);
//   // console.log("외부 자바스크립트");
//   console.log(`버튼${n}`);
// }

// //변수선언
// const x = 100;
// console.log(x);
//  DOM이 생성 되고 난 후에 요소를 CRUD 해야한다.
// document.addEventListener("DOMContentLoaded",콜백함수);
// document.addEventListener("DOMContentLoaded", function () {});
// document.addEventListener("DOMContentLoaded", () =>  {});

// const domAdd = () => {
//   const btn1 = document.createElement{"button"};
//   document.getElementById("bt1").append(btn1);
// }
// console.log("DOM TEST")

document.addEventListener("DOMContentLoaded", () => {
  //console.log(document.getElementById("bt").innerHTML);

  // 요소생성
  // let bt = document.createElement("button")
  // document.getElementById("bt").append(bt);

  // 요소 찾기
  // 결과가 HTMLCollection
  // const bts1 = document.getElementsByClassName("bt1");
  // console.log(bts1);

  // 결과가 HTMLCollection
  // const bts2 = document.getElementsByTagName("button");
  // console.log(bts2);

  // 결과 문자열
  // const bts3 = document.querySelector(".bt1");
  // console.log(bts3);

  // 결과 NodeList  
  const bts4 = document.querySelectorAll(".bt1");
  // console.log(bts4.length);

  // console.log(bts4[0].innerHTML);
  // console.log(bts4[0].innerText);
  // console.log(bts4[1].textContent);

  // 반복문 for
  // // 결과 NodeList를 반복으로 가져오기
  // for(let i = 0; i < bts4.length ; i++) {
  //   console.log(bts4[i]);
  //   // bts4[i].innerHTML = `mybutton${i}`
  //   // console.log(bts4[1

  // // 반복문 for in => 키만 가지고 옮
  // for (let i in bts4) {
  //   console.log(i);
  // }

  // 반복문 forEach(함수) :메소드 형식이어서 중간에 종료할 수 없음
  // bts4.forEach((item) => {
  //   console.log(item.innerHTML)
  // });

  // bts4.forEach((item, idx) => {
  //   console.log(`${idx} : ${item.innerHTML}`)
  // });

  // 반복문 for of
  for(let item of bts4) {
    console.log(item.innerHTML);
  }
  // 반복문 for of
  for(let [idx, item] of bts4.entries()) {
    console.log(`${idx} : ${item.innerHTML}`);
    break;
  }

});

