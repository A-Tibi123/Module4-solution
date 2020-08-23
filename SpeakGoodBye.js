(function (speak) {
  var byeSpeaker = {};
  var speakWord = "Good Bye ";
  byeSpeaker.sayGoodBye = function () {
    console.log(speakWord + " " + name);
  }

  speak.byeSpeaker = byeSpeaker;
  speak();
    
})