# Documentation

## Each in separate folder

### most important piece of code for me is

    * here we are calling the json placeholder api and waiting for the response

```javascript
async function callingFetch() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  console.log(data);
}
callingFetch();
```
