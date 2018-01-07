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





var sound = new Howl({
  src: ['sounds/a.wav','sounds/a.mp3']
})
//
// function s(){
//   // sound.play();
//   console.log('QQQQQQ')
// }
// document.getElementById('speak').addEventListener("click", s());
$( document ).ready(function() {
  $('#speak').on('click',function(){
    sound.play();
  })
  $('#speak').on('mouseover',function(){
    console.log("k")
    $(this).css({'cursor':'pointer'})
  })
});
