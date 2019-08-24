# Promise Documentaion

### We just took the same function from callback.js and modified it

we have initialized promise, so promise is having callback and two parameters resolve and reject
so it will either resolve or reject based on our case we have taken one variable name error which
we took as false

    *inside if the error variable is !error means true and hence resolve will run
    * while calling the createPost we can now use the then syntax

```javascript
function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject("this is an error message");
      }
    }, 3000);
  });
}

createPost({ title: "third", body: "this is third post" }).then(getPosts);
```
