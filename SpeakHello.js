(function (speak) {
  var helloSpeaker = {};
  var speakWord = "Hello ";
  helloSpeaker.sayHello = function () {
    console.log(speakWord + " " + name);
  }

  speak.helloSpeaker = helloSpeaker;
  (speak);

})