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

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = true;
      if (!error) {
        resolve();
      } else {
        reject("this is an error message");
      }
    }, 3000);
  });
}

createPost({ title: "third", body: "this is third post" })
  .then(getPosts)
  .catch(error => {
    console.log(error);
  });
