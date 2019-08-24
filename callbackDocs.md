# Documentation

### callback is also know as high order function

we can pass a function as an argument in another function and later execute that passed-in function.
At a fundamental level, functional programming specifies the use of functions as arguments

## Real explanation

passing a function inside another function is basically call function since
we are just passing the function inside the function we are not calling the function which is
passed inside the function it will be automatically called

## learning syntax

```javascript
function getPosts() {
  setTimeout(function testingset() {
    console.log("testing setTimeout");
  }, 3000);
}
```

===========================================

## syntax with arraow function

```javascript
function getPosts() {
  setTimeout(() => {
    console.log("testing setTimeout");
  }, 3000);
}
```

## some code

```javascript
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
  }, 2000);
}

getPosts();
```

### This callback function will be called after the completion of that function

```javascript
function createPost(post, callback) {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 3000);
}

createPost({ title: "third", body: "this is third post" }, getPosts);
```
