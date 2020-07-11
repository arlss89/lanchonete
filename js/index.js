window.onload = function(){
    //Configuração do botão Novo Pedido
    document.querySelector('#btn1').addEventListener('click', function(){
        //Comando para gerar um número aleatório no campo código do Pedido
        document.querySelector('#idcodPed').value = Math.floor(Math.random()*(100-1+1)+1)
        //Comandos para liberar os campos de edição do formulário 
        document.querySelector("#idnome").disabled = false
        document.querySelector("#S").disabled = false
        document.querySelector("#N").disabled = false
        document.querySelector("#idlanche").disabled = false
        document.querySelector("#Si").disabled = false
        document.querySelector("#Na").disabled = false
        document.querySelector("#iddata").disabled = false
        document.querySelector("#Sim").disabled = false
        document.querySelector("#Nao").disabled = false
        document.querySelector("#idobs").disabled = false
        document.querySelector("#idSim").disabled = false
    })
    //para fechar a aba do navegador ao clicar em sair
    document.querySelector("#btn7").addEventListener('click', function(){
        if(window.confirm("Deseja sair?")) {
            window.close();
        }
    })

    
}