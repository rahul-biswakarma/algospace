const Stack = (function () {
  const items = new WeakMap();

  return class {
    constructor() {
      items.set(this, []);
    }
    push(element) {
      items.get(this).push(element);
    }
    pop() {
      return items.get(this).pop();
    }
    peek() {
      return items.get(this)[items.get(this).length - 1];
    }
    isEmpty() {
      return items.get(this).length === 0;
    }
    size() {
      return items.get(this).length;
    }
    clear() {
      items.set(this, []);
    }
  };
})();

module.exports = Stack;
