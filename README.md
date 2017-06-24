# HR.js

> Tiny JavaScript plugin for highlighting and replacing text in the DOM



## Install

[![NPM](https://nodei.co/npm/hrjs.png?mini=true)](https://www.npmjs.com/package/hrjs)

Include hr.js file:
```html
<script src="src/hr.js"></script>
```
or use CDN:
```html
<script src="https://rawgit.com/mburakerman/hrjs/master/src/hr.js"></script>
```



## Usage

```html
<p id="mytext">Lorem ipsum dolor sit amet.</p>
```
Activate

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


## Multiple

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



### Highlight example

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



## Customize

These are default options.

```js
new HR("elem", {
  highlight: null,
  replaceWith: null,
  backgroundColor: "#FFDE70"
}).hr();
```


## Support

- IE 10+
- Chrome 
- Firefox
- Safari
- Opera


## License

Licensed under the MIT License.
