msg(hello(includeName()));

function hello(obj) {
    return "Hello " + obj + "!";
}

function msg(msg) {
    console.log(msg);
}

function includeName(name = null) {
    if(name == null) {
        return "World"
    }

    return name.captalize();
}

Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
  });
