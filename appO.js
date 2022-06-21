/* Função para alterar o tema de claro para escuro*/
function alterarTema () {
    document.getElementById("tema").innerHTML = "<link rel='stylesheet' href='mystyle2.css'>"
    document.getElementById("temaBotao").innerHTML = '<button onclick="voltarTema()">Tema Claro</button><button id="começarX"><a href="indexX.html">Começar com X</a></button><button><a href="frente..html">Voltar para início</a></button>'
    document.getElementById("botaoReinicio").innerHTML = '<img src="./restarbtn.jpg" width="35px" height="35px"onclick="reiniciar()"></img>'
}

/* Função para alterar o tema de escuro para claro */
function voltarTema () {
    document.getElementById('tema').innerHTML = "<link rel='stylesheet' href='mystyle.css'>"
    document.getElementById("temaBotao").innerHTML = '<button onclick="alterarTema()">Tema Escuro</button><button id="começarX"><a href="indexX.html">Começar com X</a></button><button><a href="frente..html">Voltar para início</a></button>'
    document.getElementById("botaoReinicio").innerHTML = '<img src="./restarbtn.jpg" width="35px" height="35px"onclick="reiniciar()"></img>'
}
/* Armazenamento das marcações dos jogadores */
var jogador = 'O'
var linha1 = []
var linha2 = []
var linha3 = []
var coluna1 = []
var coluna2 = []
var coluna3 = []
var diagonal1 = []
var diagonal2 = []

/* Função para verificar se os botões já estão marcados */
function testarBotao1 () {
    if (document.getElementById('botao1').innerHTML == 'X' || document.getElementById('botao1').innerHTML == 'O'){
        throw new Error()

    }
}
function testarBotao2 () {
    if (document.getElementById('botao2').innerHTML == 'X' || document.getElementById('botao2').innerHTML == 'O'){
        throw new Error()

    }
}
function testarBotao3 () {
    if (document.getElementById('botao3').innerHTML == 'X' || document.getElementById('botao3').innerHTML == 'O'){
        throw new Error()

    }
}
function testarBotao4 () {
    if (document.getElementById('botao4').innerHTML == 'X' || document.getElementById('botao4').innerHTML == 'O'){
        throw new Error()

    }
}
function testarBotao5 () {
    if (document.getElementById('botao5').innerHTML == 'X' || document.getElementById('botao5').innerHTML == 'O'){
        throw new Error()

    }
}
function testarBotao6 () {
    if (document.getElementById('botao6').innerHTML == 'X' || document.getElementById('botao6').innerHTML == 'O'){
        throw new Error()

    }
}
function testarBotao7 () {
    if (document.getElementById('botao7').innerHTML == 'X' || document.getElementById('botao7').innerHTML == 'O'){
        throw new Error()

    }
}
function testarBotao8 () {
    if (document.getElementById('botao8').innerHTML == 'X' || document.getElementById('botao8').innerHTML == 'O'){
        throw new Error()

    }
}
function testarBotao9 () {
    if (document.getElementById('botao9').innerHTML == 'X' || document.getElementById('botao9').innerHTML == 'O'){
        throw new Error()

    }
}

/* Função para povoar os botões */
function povoarBotao () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao1').innerHTML = 'X'
        linha1.push('X')
        diagonal1.push('X')
        coluna1.push('X')
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao1').innerHTML = 'O'
        linha1.push('O')
        diagonal1.push('O')
        coluna1.push('O')
        return jogador = 'x'
    }



}
function povoarBotao2 () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao2').innerHTML = 'X'
        linha1.push('X')
        coluna2.push('X')
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao2').innerHTML = 'O'
        linha1.push('O')
        coluna2.push('O')
        return jogador = 'x'
    }

}function povoarBotao3 () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao3').innerHTML = 'X'
        linha1.push('X')
        diagonal2.push('X')
        coluna3.push('X')
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao3').innerHTML = 'O'
        linha1.push('O')
        diagonal2.push('O')
        coluna3.push('O')
        return jogador = 'x'
    }

}

function povoarBotao4 () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao4').innerHTML = 'X'
        linha2.push('X')
        coluna1.push('X')
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao4').innerHTML = 'O'
        linha2.push('O')
        coluna1.push('O')
        return jogador = 'x'
}
}

function povoarBotao5 () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao5').innerHTML = 'X'
        linha2.push('X')
        diagonal1.push('X')
        diagonal2.push('X')
        coluna2.push('X')
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao5').innerHTML = 'O'
        linha2.push('O')
        diagonal1.push('O')
        diagonal2.push('O')
        coluna2.push('O')
        return jogador = 'x'
}
}

function povoarBotao6 () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao6').innerHTML = 'X'
        linha2.push('X')
        coluna3.push('X')
        
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao6').innerHTML = 'O'
        linha2.push('O')
        coluna3.push('O')
        return jogador = 'x'
}
}

function povoarBotao7 () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao7').innerHTML = 'X'
        linha3.push('X')
        diagonal2.push('X')
        coluna1.push('X')
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao7').innerHTML = 'O'
        linha3.push('O')
        diagonal2.push('O')
        coluna1.push('O')
        return jogador = 'x'
}
}

function povoarBotao8 () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao8').innerHTML = 'X'
        linha3.push('X')
        coluna2.push('X')
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao8').innerHTML = 'O'
        linha3.push('O')
        coluna2.push('O')
        return jogador = 'x'
}
}

function povoarBotao9 () {
    
    if (jogador == 'x'){
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o O"
        document.getElementById('botao9').innerHTML = 'X'
        linha3.push('X')
        diagonal1.push('X')
        coluna3.push('X')
        return jogador = 'O'
    } else {
        document.getElementById('jogadorDaVez').innerHTML = "O proximo a jogar é o X"
        document.getElementById('botao9').innerHTML = 'O'
        linha3.push('O')
        diagonal1.push('O')
        coluna3.push('O')
        return jogador = 'x'
}
}

/* Funções para verificar quem venceu */
function resultadoFinal () {
    for (i=0; i < linha1.length ; i++){
        if (linha1[0] == 'X' && linha1[1] == 'X'  && linha1[2] == 'X'){
            alert('X ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "X ganhou!"
            document.getElementById('botao1').innerHTML = 'X'
            document.getElementById('botao2').innerHTML = 'X'
            document.getElementById('botao3').innerHTML = 'X'
            document.getElementById('botao4').innerHTML = 'X'
            document.getElementById('botao5').innerHTML = 'X'
            document.getElementById('botao6').innerHTML = 'X'
            document.getElementById('botao7').innerHTML = 'X'
            document.getElementById('botao8').innerHTML = 'X'
            document.getElementById('botao9').innerHTML = 'X'
            break
        } else if (linha1[0] == 'O' && linha1[1] == 'O'  && linha1[2] == 'O'){
            alert('O ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "O ganhou!"
            document.getElementById('botao1').innerHTML = 'O'
            document.getElementById('botao2').innerHTML = 'O'
            document.getElementById('botao3').innerHTML = 'O'
            document.getElementById('botao4').innerHTML = 'O'
            document.getElementById('botao5').innerHTML = 'O'
            document.getElementById('botao6').innerHTML = 'O'
            document.getElementById('botao7').innerHTML = 'O'
            document.getElementById('botao8').innerHTML = 'O'
            document.getElementById('botao9').innerHTML = 'O'
            break
    }
}
    for (i=0; i < linha2.length; i++){
        if (linha2[0] == 'X' && linha2[1] == 'X' && linha2[2] == 'X'){
            alert('X ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "X ganhou!"
            document.getElementById('botao1').innerHTML = 'X'
            document.getElementById('botao2').innerHTML = 'X'
            document.getElementById('botao3').innerHTML = 'X'
            document.getElementById('botao4').innerHTML = 'X'
            document.getElementById('botao5').innerHTML = 'X'
            document.getElementById('botao6').innerHTML = 'X'
            document.getElementById('botao7').innerHTML = 'X'
            document.getElementById('botao8').innerHTML = 'X'
            document.getElementById('botao9').innerHTML = 'X'
            break
        }   else if (linha2[0] == 'O' && linha2[1] == 'O'  && linha2[2] == 'O'){
            alert('O ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "O ganhou!"
            document.getElementById('botao1').innerHTML = 'O'
            document.getElementById('botao2').innerHTML = 'O'
            document.getElementById('botao3').innerHTML = 'O'
            document.getElementById('botao4').innerHTML = 'O'
            document.getElementById('botao5').innerHTML = 'O'
            document.getElementById('botao6').innerHTML = 'O'
            document.getElementById('botao7').innerHTML = 'O'
            document.getElementById('botao8').innerHTML = 'O'
            document.getElementById('botao9').innerHTML = 'O'
            break
    }
    }
    for (i=0; i < linha3.length; i++){
        if (linha3[0] == 'X' && linha3[1] == 'X' && linha3[2] == 'X'){
            alert('X ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "X ganhou!"
            document.getElementById('botao1').innerHTML = 'X'
            document.getElementById('botao2').innerHTML = 'X'
            document.getElementById('botao3').innerHTML = 'X'
            document.getElementById('botao4').innerHTML = 'X'
            document.getElementById('botao5').innerHTML = 'X'
            document.getElementById('botao6').innerHTML = 'X'
            document.getElementById('botao7').innerHTML = 'X'
            document.getElementById('botao8').innerHTML = 'X'
            document.getElementById('botao9').innerHTML = 'X'
            break
        } else if (linha3[0] == 'O' && linha3[1] == 'O'  && linha3[2] == 'O'){
            alert('O ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "O ganhou!"
            document.getElementById('botao1').innerHTML = 'O'
            document.getElementById('botao2').innerHTML = 'O'
            document.getElementById('botao3').innerHTML = 'O'
            document.getElementById('botao4').innerHTML = 'O'
            document.getElementById('botao5').innerHTML = 'O'
            document.getElementById('botao6').innerHTML = 'O'
            document.getElementById('botao7').innerHTML = 'O'
            document.getElementById('botao8').innerHTML = 'O'
            document.getElementById('botao9').innerHTML = 'O'
            break
    }
    }
    for (i=0; i < coluna1.length; i++){
        if (coluna1[0] == 'X' && coluna1[1] == 'X' && coluna1[2] == 'X'){
            alert('X ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "X ganhou!"
            document.getElementById('botao1').innerHTML = 'X'
            document.getElementById('botao2').innerHTML = 'X'
            document.getElementById('botao3').innerHTML = 'X'
            document.getElementById('botao4').innerHTML = 'X'
            document.getElementById('botao5').innerHTML = 'X'
            document.getElementById('botao6').innerHTML = 'X'
            document.getElementById('botao7').innerHTML = 'X'
            document.getElementById('botao8').innerHTML = 'X'
            document.getElementById('botao9').innerHTML = 'X'
            break
        } else if (coluna1[0] == 'O' && coluna1[1] == 'O' && coluna1[2] == 'O'){
            alert('O ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "O ganhou!"
            document.getElementById('botao1').innerHTML = 'O'
            document.getElementById('botao2').innerHTML = 'O'
            document.getElementById('botao3').innerHTML = 'O'
            document.getElementById('botao4').innerHTML = 'O'
            document.getElementById('botao5').innerHTML = 'O'
            document.getElementById('botao6').innerHTML = 'O'
            document.getElementById('botao7').innerHTML = 'O'
            document.getElementById('botao8').innerHTML = 'O'
            document.getElementById('botao9').innerHTML = 'O'
            break
    }
}
    for (i=0; i < coluna2.length; i++){
        if (coluna2[0] == 'X' && coluna2[1] == 'X' && coluna2[2] == 'X'){
            alert('X ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "X ganhou!"
            document.getElementById('botao1').innerHTML = 'X'
            document.getElementById('botao2').innerHTML = 'X'
            document.getElementById('botao3').innerHTML = 'X'
            document.getElementById('botao4').innerHTML = 'X'
            document.getElementById('botao5').innerHTML = 'X'
            document.getElementById('botao6').innerHTML = 'X'
            document.getElementById('botao7').innerHTML = 'X'
            document.getElementById('botao8').innerHTML = 'X'
            document.getElementById('botao9').innerHTML = 'X'
            break
        }   else if (coluna2[0] == 'O' && coluna2[1] == 'O' && coluna2[2] == 'O'){
            alert('O ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "O ganhou!"
            document.getElementById('botao1').innerHTML = 'O'
            document.getElementById('botao2').innerHTML = 'O'
            document.getElementById('botao3').innerHTML = 'O'
            document.getElementById('botao4').innerHTML = 'O'
            document.getElementById('botao5').innerHTML = 'O'
            document.getElementById('botao6').innerHTML = 'O'
            document.getElementById('botao7').innerHTML = 'O'
            document.getElementById('botao8').innerHTML = 'O'
            document.getElementById('botao9').innerHTML = 'O'
            break
    }
    }
    for (i=0; i < coluna3.length; i++){
        if (coluna3[0] == 'X' && coluna3[1] == 'X' && coluna3[2] == 'X'){
            alert('X ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "X ganhou!"
            document.getElementById('botao1').innerHTML = 'X'
            document.getElementById('botao2').innerHTML = 'X'
            document.getElementById('botao3').innerHTML = 'X'
            document.getElementById('botao4').innerHTML = 'X'
            document.getElementById('botao5').innerHTML = 'X'
            document.getElementById('botao6').innerHTML = 'X'
            document.getElementById('botao7').innerHTML = 'X'
            document.getElementById('botao8').innerHTML = 'X'
            document.getElementById('botao9').innerHTML = 'X'
            break
        } else if (coluna3[0] == 'O' && coluna3[1] == 'O' && coluna3[2] == 'O'){
            alert('O ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "O ganhou!"
            document.getElementById('botao1').innerHTML = 'O'
            document.getElementById('botao2').innerHTML = 'O'
            document.getElementById('botao3').innerHTML = 'O'
            document.getElementById('botao4').innerHTML = 'O'
            document.getElementById('botao5').innerHTML = 'O'
            document.getElementById('botao6').innerHTML = 'O'
            document.getElementById('botao7').innerHTML = 'O'
            document.getElementById('botao8').innerHTML = 'O'
            document.getElementById('botao9').innerHTML = 'O'
            break
    }
    }
    for (i=0; i < diagonal1.length; i++){
        if (diagonal1[0] == 'X' && diagonal1[1] == 'X' && diagonal1[2] == 'X'){
            alert('X ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "X ganhou!"
            document.getElementById('botao1').innerHTML = 'X'
            document.getElementById('botao2').innerHTML = 'X'
            document.getElementById('botao3').innerHTML = 'X'
            document.getElementById('botao4').innerHTML = 'X'
            document.getElementById('botao5').innerHTML = 'X'
            document.getElementById('botao6').innerHTML = 'X'
            document.getElementById('botao7').innerHTML = 'X'
            document.getElementById('botao8').innerHTML = 'X'
            document.getElementById('botao9').innerHTML = 'X'
            break
        } else if (diagonal1[0] == 'O' && diagonal1[1] == 'O' && diagonal1[2] == 'O'){
            alert('O ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "O ganhou!"
            document.getElementById('botao1').innerHTML = 'O'
            document.getElementById('botao2').innerHTML = 'O'
            document.getElementById('botao3').innerHTML = 'O'
            document.getElementById('botao4').innerHTML = 'O'
            document.getElementById('botao5').innerHTML = 'O'
            document.getElementById('botao6').innerHTML = 'O'
            document.getElementById('botao7').innerHTML = 'O'
            document.getElementById('botao8').innerHTML = 'O'
            document.getElementById('botao9').innerHTML = 'O'
            break
    }
    }
    for (i=0; i < diagonal2.length; i++){
        if (diagonal2[0] == 'X' && diagonal2[1] == 'X' && diagonal2[2] == 'X'){
            alert('X ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "X ganhou!"
            document.getElementById('botao1').innerHTML = 'X'
            document.getElementById('botao2').innerHTML = 'X'
            document.getElementById('botao3').innerHTML = 'X'
            document.getElementById('botao4').innerHTML = 'X'
            document.getElementById('botao5').innerHTML = 'X'
            document.getElementById('botao6').innerHTML = 'X'
            document.getElementById('botao7').innerHTML = 'X'
            document.getElementById('botao8').innerHTML = 'X'
            document.getElementById('botao9').innerHTML = 'X'
            break
        } else if (diagonal2[0] == 'O' && diagonal2[1] == 'O' && diagonal2[2] == 'O'){
            alert('O ganhou!!')
            document.getElementById('jogadorDaVez').innerHTML = "O ganhou!"
            document.getElementById('botao1').innerHTML = 'O'
            document.getElementById('botao2').innerHTML = 'O'
            document.getElementById('botao3').innerHTML = 'O'
            document.getElementById('botao4').innerHTML = 'O'
            document.getElementById('botao5').innerHTML = 'O'
            document.getElementById('botao6').innerHTML = 'O'
            document.getElementById('botao7').innerHTML = 'O'
            document.getElementById('botao8').innerHTML = 'O'
            document.getElementById('botao9').innerHTML = 'O'
            break
    }
    }
}

/* Função que recarrega a página quando o usuário clica no botão reiniciar*/
function reiniciar () {
    window.location.reload();
}
