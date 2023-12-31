// 동기
// function taskA() {
//   console.log("A 작업 끝");
// }

// taskA();
// console.log("코드 끝");

// 비동기

// function taskA() {
//   setTimeout(() => {
//     console.log("비동기인가요?");
//   }, 2000);
// }

// taskA();
// console.log("코드 끝");

// cb

function taskA(a, b, cb) {
  console.log("?");
  setTimeout(() => {
    const res = a + b;
    cb(res);
  }, 3000);
}

function taskB(a, cb) {
  setTimeout(() => {
    const res = a * 2;
    cb(res);
  }, 1000);
}

function taskC(a, cb) {
  setTimeout(() => {
    const res = a * -1;
    cb(res);
  }, 2000);
}

// 비동기로 결과값을 다른 비동기처리 하는 곳에 값으로 넣어줘야 하는 상황
// 콜백지옥

taskA(3, 4, (a_res) => {
  console.log("A TASK RESULT :", a_res);
  taskB(a_res, (b_res) => {
    console.log("B TASK RESULT :", b_res);
    taskC(b_res, (c_res) => {
      console.log("V TASK RESULT :", c_res);
    });
  });
});

// 비동기 처리 코드
// taskA(3, 4, (res) => {
//   console.log("A TASK RESULT :", res);
// });

// taskB(7, (res) => {
//   console.log("B RESULT :", res);
// });
// taskC(14, (res) => {
//   console.log("C RESULT :", res);
// });
console.log("코드 끝");
