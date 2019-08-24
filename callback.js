console.log("testing callback js");

let posts = [
  { title: "one", body: "this is post one" },
  { title: "two", body: "this is post two" }
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      //   output = output + post.title + " ";
      output += `<li>${post.title}</li>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}

createPost({ title: "third", body: "this is third post" }, getPosts);
