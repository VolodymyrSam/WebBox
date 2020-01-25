

// const Koa = require('koa');
// const Router = require('@koa/router');
// const multer = require('@koa/multer');

// const app = new Koa();
// const router = new Router();
// const upload = multer(); // note you can pass `multer` options here

//importScripts("plugins/p5.min.js");
//importScripts("plugins/Mp3LameEncoder.min.js");
//include("/plugins/WebAudioRecorderMp3.min.js");
//include("/plugins/p5.min.js");
// $.getScript("Mp3LameEncoder.min.", function(){alert("Загружено.");
$.getScript("WebAudioRecorderMp3.min.js", function(){alert("Загружено.");
//$.getScript("p5.min.js", function(){alert("Загружено.");
//используем скрипт здесь
});
//importScripts("plugins/WebAudioRecorderMp3.min.js");
// default path is on the same directory as Mp3LameEncoder.min.js
self.Mp3LameEncoderConfig = {
  memoryInitializerPrefixURL: "plugins/memory/"
  // => changed to javascripts/memory/Mp3LameEncoder.min.js.mem
};


// encoder = new Mp3LameEncoder(sampleRate, 160)
// encoder.encode(buffers);

var recordedAudio = document.querySelector("#recordedAudio");

navigator.mediaDevices.getUserMedia({audio:true})
.then(stream => {
  console.log("111");
  handlerFunction(stream)
})

function handlerFunction(stream) {
  rec = new MediaRecorder(stream);
  rec.ondataavailable = e => {
    audioChunks.push(e.data);
    if (1){
      console.log("222");
    // if (rec.state == "inactive"){
      let blob = new Blob(audioChunks,{type:'audio/mpeg-3'});
      console.log(audioChunks);
      recordedLink = URL.createObjectURL(blob);
      recordedAudio.src = recordedLink;
      recordedAudio.controls=true;
      recordedAudio.autoplay=true;
      //postSound(recordedLink);
      console.log(blob);
      console.log(recordedLink);
      //data['url'] = recordedLink;
      //sendData(data);
    }
  }
}
//function sendData(data) {}
var start = 0;
var record2 = document.querySelector("#record2");

//setup();
record2.onclick = e => {
  //record.disabled = true;
  if(start==0){
    console.log('I was start');
    start=1;
    //record.style.color = "blue";
    record2.innerHTML = "Поиск";
    //stopRecord.disabled=false;
    audioChunks = [];
    rec.start();
    //setup();
    //mousePressed()
  } else {
    console.log('I was stop');
    start=0;
    record2.innerHTML = "Запись";
    rec.stop();
    //mousePressed()
  }
}
stopRecord.onclick = e => {
  console.log("I was clicked")
  //record.disabled = false;
  stop.disabled=true;
  //record.style.backgroundColor = "red"
  rec.stop();
  //mousePressed()
}


var data = {
   'url': '',
  //'q': 'adele hello',
  'return': 'timecode,apple_music,deezer,spotify',
  'api_token': '169a4b4c362df807152482f2784903ce',
  //'method': 'recognizeWithOffset'
}

var foundsong = document.querySelector("#foundsong");
var sourcemp3 = document.querySelector("#sourcemp3");
var sourceogg = document.querySelector("#sourceogg");
var sourcewav = document.querySelector("#sourcewav");

function sendData(data) {
// $.getJSON('https://api.audd.io/?jsonp=?', data, function(result){
$.getJSON('https://api.audd.io/findLyrics/?', data, function(result){
  console.log(result);
  var content = "Композиция: " + result.result.title + " - " + result.result.artist;
  foundsong.innerHTML = content;
  sourcemp3.src = result.result.deezer.link;
});
}

// var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)
// var foo = new p5.SpeechRec('ru-RU', showResult); // speech recognition object (will prompt for mic access)
// foo.onResult = showResult; // bind callback function to trigger when speech is recognized
// foo.start(); // start listening

// function showResult()
// {
//   console.log(foo.resultString); // log the result
// }

// add a route for uploading single files
function postSound(recordedLink) {
  router.post(
    '/upload-single-file',
    upload.single(recordedLink),
    ctx => {
      console.log('ctx.request.file', ctx.request.file);
      console.log('ctx.file', ctx.file);
      console.log('ctx.request.body', ctx.request.body);
      ctx.body = 'done';
    },
    ctx.request.href,
    console.log('ctx.request.href', ctx.request.href)
  );

}

// add the router to our app
// app.use(router.routes());
// app.use(router.allowedMethods());

// // start the server
// app.listen(3000);
  


