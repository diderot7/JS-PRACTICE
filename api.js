async function getData() {
  let rawResoponse = await fetch("https://jsonplaceholder.typicode.com/posts");
  let jsonResponse = await rawResoponse.json();
  console.log(jsonResponse);
}

getData();
