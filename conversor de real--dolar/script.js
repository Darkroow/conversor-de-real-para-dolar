function calcular() {
  var dolar = 5.56;
  var valor = document.getElementById("valor").value; //o .value pega o valor, se nao tiver ele aqui não da pra tarnsformar a var em number

  if (valor.length == 0) {
    window.alert("[ERROR] Por favor, coloque um número para ser convertido");
  } else {
    let reais = Number(valor); //convertem string - numeber
    let dolares = Number(dolar);
    let res = document.getElementById("res");
    let resto = reais % dolares;
    let restofix = resto.toFixed(2).replace(".", ","); //toFixed é pra deixar somente 2 números depois da virgula || o replace serve pra trocar o ponto por vírgula
    let dolarfinal = parseInt(reais / dolares); // o parseInt serve pra deixar o numero inteiro sem vírgula
    res.innerHTML = `com R$${reais} você ficaria com U$${dolarfinal} e sobrariam ${restofix} reais `;

    //coloca a imagem :
    let piorq = window.document.getElementById("piorq");

    var img = document.createElement("img");
    img.src =
      "https://i.pinimg.com/736x/91/6c/77/916c771a2b4f87fa5cd50dc89366677a.jpg";
    piorq.appendChild(img);

    img.className = "img-size"; // cria um elemento class pro css
  }
}
