function x(y) {
  console.log("Aa");
  y();
}



x(function y() {
  console.log("yy called");
});