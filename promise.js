// promise 예시
// function isPositiveP(number) {
//   const executor = (resolve, reject) => {
//     setTimeout(() => {
//       if (typeof number === "number") {
//         // resolve
//         resolve(number >= 0 ? "양수" : "음수");
//       } else {
//         reject("주어진 값이 숫자형이 아닙니다.");
//         // reject
//       }
//     }, 2000);
//   };

//   const asyncTask = new Promise(executor);
//   return asyncTask;
// }

// const res = isPositiveP(101);

// res
//   .then((res) => {
//     console.log("작업 성공", res);
//   })
//   .catch((res) => {
//     console.log("작업실패", res);
//   });

// ---------------------------------
// 2초 뒤에 음수인지 양수인지 검증하는 비동기 함수
// function isPositive(number, resolve, reject) {
//   setTimeout(() => {
//     if (typeof number === "number") {
//       // resolve
//       resolve(number >= 0 ? "양수" : "음수");
//     } else {
//       reject("주어진 값이 숫자형이 아닙니다.");
//       // reject
//     }
//   }, 2000);
// }

// isPositive(
//   10,
//   (res) => {
//     console.log("성공적으로 수행 :", res);
//   },
//   (err) => {
//     console.log(" 실패 :", err);
//   }
// );

function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 3000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 1000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 1000);
  });
}
// then 체이닝
taskA(5, 1)
  .then((a_res) => {
    console.log("A RESULT", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("B RESULT", b_res);
    return taskC(b_res);
  })
  .then((c_res) => {
    console.log("C RESULT", c_res);
  });

// 콜백 지옥이랑 비슷한 예시
// taskA(5, 1).then((a_res) => {
//   console.log("A RESULT", a_res);
//   taskB(a_res).then((b_res) => {
//     console.log("B RESULT", b_res);
//     taskC(b_res).then((c_res) => {
//       console.log("C RESULT", c_res);
//     });
//   });
// });
