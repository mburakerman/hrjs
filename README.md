# HR.js

> Tiny JavaScript plugin for highlighting and replacing text in the DOM

<br />

[![NPM](https://img.shields.io/npm/v/hrjs)](https://www.npmjs.com/package/hrjs)
![NPM License](https://img.shields.io/npm/l/hrjs)

<br />

## ⏬ Install

```js
npm install hrjs
```

or use CDN:
```html
<script src="https://unpkg.com/hrjs"></script>
```



## 🪡 Usage

```html
<p id="mytext">Lorem ipsum dolor sit amet.</p>
```

```html
<script>
  new HR("#mytext", {
    highlight: "dolor",
    replaceWith: "cat",
    backgroundColor: "#B4FFEB"
  }).hr();
</script>
```
That's it!

[CodePen demo](https://codepen.io/anon/pen/ZKWBYV)

![CodePen demo](https://media.giphy.com/media/l4FGuX1VuJFbENUjK/giphy.gif)



### 🪡 Multiple Keywords example

You can also highlight and replace multiple keywords.

```html
<p id="mytext">I love JavaScript.</p>
```

```html
<script>
  new HR("#mytext", {
    highlight: ["love","JavaScript"],
    replaceWith: ["like", "jQuery"],
    backgroundColor: "#B4FFEB"
  }).hr();
</script>
```
[CodePen Multiple demo](https://codepen.io/anon/pen/XRdNbw)



### 🪡 Highlight example

To highlight only, just add your keyword to `highlight` option.

```html
<p class="mytext">Lorem ipsum dolor sit consectetur amet.</p>
<h3 class="mytext">Consectetur enim ipsam voluptatem quia</h3>
```

```html
<script>
  new HR(".mytext", {
    highlight: "consectetur",
    backgroundColor: "#B4FFEB"
  }).hr();
</script>
```
[CodePen Highlight demo](https://codepen.io/anon/pen/Vbampm)


## ✅ Test
Clone project, install dependencies and run `npm run test`


## ⚙️ Customize

These are default options.

```js
new HR("elem", {
  highlight: null,
  replaceWith: null,
  backgroundColor: "#FFDE70"
}).hr();
```


## ©️ License

Licensed under the MIT License.
