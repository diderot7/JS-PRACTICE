function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function helloAsync() {
  // return delay(2000).then(() => {
  //   return "hello Async";
  // });
  await delay(3000);
  return "hello Async";
}

async function main() {
  const res = await helloAsync();
  console.log(res);
}

main();

// helloAsync().then((res) => {
//   console.log(res);
// });
