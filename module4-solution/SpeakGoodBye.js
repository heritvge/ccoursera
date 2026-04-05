(function(window) {
    var speakGoodBye = {};

    speakGoodBye.speak = function(name) {
        console.log("Goodbye " + name);
    };

    window.speakGoodBye = speakGoodBye;
})(window);
