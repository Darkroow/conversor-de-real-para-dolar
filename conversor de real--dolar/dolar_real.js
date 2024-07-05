function calcular() {
  var real = 5.56;
  var valor = document.getElementById("valor").value; //o .value pega o valor, se nao tiver ele aqui não da pra tarnsformar a var em number
  if (valor == 0) {
    window.alert("[ERROR] Por favor, coloque um número para ser convertido");
  } else {
    let valorf = (real * valor).toFixed(2); // 2 números depois da vírgula
    let resto = (valorf % real).toFixed(2); //o resto
    var res = document.getElementById("res");
    res.innerText = `Com U$${valor} você ficaria com R$${valorf} e sobrariam ${resto} dólares`;

    let piorq = window.document.getElementById("piorq");

    var img = document.createElement("img");
    img.src =
      "https://i.pinimg.com/736x/91/6c/77/916c771a2b4f87fa5cd50dc89366677a.jpg";
    piorq.appendChild(img);

    img.className = "img-size"; // cria um elemento class pro css
  }
}
