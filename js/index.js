
// name greeting:
var sound = new Howl({
  src: ['sounds/a.wav','sounds/a.mp3']
})
//

$( document ).ready(function() {
  $('#speak').on('click',function(){
    sound.play();
  })
  $('#speak').on('mouseover',function(){
    $(this).css({'cursor':'pointer'})
  })
});

// console greeting:
 consoleText(['Hello there!', 'I am a web developer','I am available for work,', 'get in touch!'], 'text',['blaasck']);
function consoleText(words, id, colors) {
  if (colors === undefined) {colors = ['blue'];}
  var visible = true;
  var con = document.getElementById('console');
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function() {
    if (visible === true) {
      con.className = 'console-underscore hidden'
      visible = false;

    } else {
      con.className = 'console-underscore'

      visible = true;
    }
  }, 400)
}

//responsive height:
// // $(window).resize(function(){
// var height = $("body").height()
// console.log(height)
// // $('.first, .third').height(height / 2);
// // //alert(height);
// // })
// // $(window).resize();
// //
// // window.onload = function() {
// //   console.log("happening")
// //   $(window).resize();
// //
// // }
//
// window.onclick = function quarter() {
//   console.log("click")
//   $('.first, .third').height(height / 2);
//   // window.resizeTo(
//   //   window.screen.availWidth / 2,
//   //   window.screen.availHeight / 2
//   // );
// }
