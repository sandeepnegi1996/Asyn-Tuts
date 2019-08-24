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
  setTimeout(() => {
    posts.push(post);
  }, 3000);
}

// createPost({ title: "third", body: "this is third post" })
//   .then(getPosts)
//   .catch(error => {
//     console.log(error);
//   });

//not learnin ASYNC and AWAIT

// async function testAsyn() {
//   await createPost({ title: "third", body: "this is third post" });
//   //it will wait for create post to complete and then
//   //it will get the post
//   getPosts();
// }

// testAsyn();

//sue sync with fetch

async function callingFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
callingFetch();

//this is Promise All
//   //and fetch
// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000, "tatat see ya");
// });

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(res =>
//   res.json()
// );
// Promise.all([promise1, promise2, promise3, promise4]).then(values => {
//   console.log(values);
// });
