var app = new Vue({
  el: "#app",
  data: {
    resultado: "RESULTADO"
  }
})

function somar() {
  num1 = parseInt(document.getElementById('num1').value);
  num2 = parseInt(document.getElementById('num2').value);

  app.resultado = num1 + num2
}

document.addEventListener('keydown', function(event){
  if (event.keyCode == 13) {
    somar()
  }
})
