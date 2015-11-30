
var hello = {
    name: "Node.js",
    say: function () {
        return "Hello " + this.name + "!";
    }
};

// Export the rectangle object and all its functions.
module.exports = hello;