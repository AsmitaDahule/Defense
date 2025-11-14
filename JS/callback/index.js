// function x(y) {
//   console.log("Aa");
//   y();
// }



// x(function y() {
//   console.log("yy called");
// });

function eventListener(){
  let count = 0;
  document.getElementById("btn").addEventListener("click", function(){
  console.log("hieee", ++count);
})
}

eventListener();
