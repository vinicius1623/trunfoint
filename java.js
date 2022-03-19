var Deiveti = {
    nome: "humm Granola",
  
    //adicionando imagem
    imagem:
      "https://uploaddeimagens.com.br/images/003/781/741/full/Deiveti.jpeg",
    atributos: {
      ataque: 7,
      defesa: 7,
      preguica: 3
    }
  };
  
  var Gordo = {
    nome: "Gordinho",
    imagem: "https://uploaddeimagens.com.br/images/003/781/742/full/Gordo.jpeg",
    atributos: {
      ataque: 6,
      defesa: 6,
      preguica: 8
    }
  };
  
  var Pedro = {
    nome: "Pedro, El Zorro",
    imagem:
      "https://uploaddeimagens.com.br/images/003/781/743/full/PedroZorro.jpeg",
    atributos: {
      ataque: 7,
      defesa: 5,
      preguica: 9
    }
  };
  
  var Rambo = {
    nome: "Rambo",
    imagem: "https://uploaddeimagens.com.br/images/003/781/744/full/Rambo.jpeg",
    atributos: {
      ataque: 9,
      defesa: 8,
      preguica: 5
    }
  };
  
  var Moreno = {
    nome: "Moreno Mandrake",
    imagem:
      "https://uploaddeimagens.com.br/images/003/781/745/full/MorenoMandrake.jpeg",
    atributos: {
      ataque: 7,
      defesa: 7,
      preguica: 4
    }
  };
  
  
  var cartaMaquina;
  var cartaJogador;
  var cartas = [Deiveti, Gordo, Rambo, Moreno, Pedro];
  //             0          1           2         3           4
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 5);
    cartaMaquina = cartas[numeroCartaMaquina];
    //console.log(cartaMaquina);
  
    var numeroCartaJogador = parseInt(Math.random() * 5);
    while (numeroCartaJogador == numeroCartaMaquina) {
      numeroCartaJogador = parseInt(Math.random() * 5);
    }
    //Força aparecer a carta escolhida na posição (0)
    // cartaJogador = cartas[0];
    cartaJogador = cartas[numeroCartaJogador];
    // console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
  
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName("atributo");
    for (var i = 0; i < radioAtributo.length; i++) {
      if (radioAtributo[i].checked) {
        return radioAtributo[i].value;
      }
    }
  }
  
  function jogar() {
    console.log("chamou");
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //ou pode escrever assim,para colocar a imagem dentro do HTML ->
    // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    //imagem da Web.teste
    // '<img src="https://png.pngtree.com/png-vector/20190411/ourmid/pngtree-vector-php-icon-png-image_925862.jpg" style=" width: inherit; height: inherit; position: absolute;">';
  
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    // ou ->divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    //colocar as opções dentro da moldura no HTML
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
    //mostra no Tela
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function jogarNovamente(){
    document.location.reload(true);
  }
  