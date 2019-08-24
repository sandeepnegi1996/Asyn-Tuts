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
  setInterval(function testingset() {
    console.log("testing setInterval");
  }, 3000);
}
```

===========================================

## syntax with arraow function

```javascript
function getPosts() {
  setInterval(() => {
    console.log("testing setInterval");
  }, 3000);
}
```
