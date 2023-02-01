
document.getElementById('boton').onclick= function() {
  document.getElementById('demo').innerHTML
  var x = document.createElement("IMG");
  x.setAttribute("src", "/medio/2018/09/13/capadocia-turquia_028ea546_1400x933.jpg");
  x.setAttribute("width", "304");
  x.setAttribute("height", "228");
  x.setAttribute("alt", "The Pulpit Rock");
  document.body.appendChild(x);
}
