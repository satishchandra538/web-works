function encode(){
  var str = document.getElementById("message").value;
  var encodedString = btoa(str);
  document.getElementById("output").innerHTML = encodedString;
  document.getElementById("message").value = "";
}
function decode() {
  var str = document.getElementById("message").value;
  var decodedString = atob(str);
  document.getElementById("output").innerHTML = decodedString;
  document.getElementById("message").value = "";
}