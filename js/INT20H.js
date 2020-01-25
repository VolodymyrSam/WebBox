
var data = {
  // 'url': 'https://audd.tech/example1.mp3',
  'q': 'adele hello',
  'return': 'timecode,apple_music,deezer,spotify',
  'api_token': '169a4b4c362df807152482f2784903ce',
  //'method': 'recognizeWithOffset'
}

// var foundsong = document.getElementByID('foundsong');
var foundsong = document.querySelector("#foundsong");
var sourcemp3 = document.querySelector("#sourcemp3");
var sourceogg = document.querySelector("#sourceogg");
var sourcewav = document.querySelector("#sourcewav");

// $.getJSON('https://api.audd.io/?jsonp=?', data, function(result){
$.getJSON('https://api.audd.io/findLyrics/?', data, function(result){
  console.log(result);
  var content = "Композиция: " + result.result.title + " - " + result.result.artist;
  foundsong.innerHTML = content;
  sourcemp3.src = result.result.deezer.link;
});

// var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
// var foo = new p5.SpeechRec('ru-RU', showResult); // speech recognition object (will prompt for mic access)
// foo.onResult = showResult; // bind callback function to trigger when speech is recognized
// foo.start(); // start listening

// function showResult()
// {
//   console.log(foo.resultString); // log the result
// }




