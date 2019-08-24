console.log("testing callback js");

let posts = [
  { title: "one", body: "this is post one" },
  { title: "two", body: "this is post two" }
];

function getPosts() {
  setInterval(function testingset() {
    console.log("testing setInterval");
  }, 3000);
}

getPosts();
