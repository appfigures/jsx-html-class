# jsx-html-class
[Babel](https://babeljs.io/) plugin to allow the use of "class" instead of "className" in JSX

https://www.npmjs.com/package/jsx-html-class

## Motivation

React.js requires we use the attribute `className` instead of the traditional `class` in JSX elements.

```javascript
class MyComponent extends React.Component {
  render() {
    return <div className="container">Hello world</div>;
  }
}
```

If you are human, you've forgotten this at least once. If you're like me, you forget this all the time. Fortunately, React warns us...

> Warning: Unknown DOM property class. Did you mean className?


However, considering we are already transpiling this code with [Babel](https://babeljs.io/), why not just convert `class` to `className` and never think about this again?

This is especially useful if you are lucky enough to have designers writing JSX or you often copy & paste HTML into your React components.

## Installation

```
npm install --save-dev jsx-html-class
```

#### CLI
```
babel --plugins jsx-html-class script.js
```

#### .babelrc
```
{
  "plugins": ["jsx-html-class"]
}
```

#### Babelify
```
browserify({
  // etc etc
  transform: [
    babelify.configure({
      plugins: ["jsx-html-class"]
    })
  ]
});
```

Now you can freely use either `class` or `className` and safely ensure your HTML classes will be properly rendered.
