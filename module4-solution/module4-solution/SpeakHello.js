(function(window) {
    var speakHello = {};

    speakHello.speak = function(name) {
        console.log("Hello " + name);
    };

    window.speakHello = speakHello;
})(window);
