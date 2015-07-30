module.exports = function (babel) {
  return new babel.Transformer('jsx-html-class', {
    JSXAttribute: {
      exit: function (node, parent, scope, file) {
        if (node.name.name === 'class') {
          node.name.name = 'className';
        }
        return node;
      }
    }
  });
};