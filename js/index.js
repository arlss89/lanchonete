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
        
        
        document.querySelector("#iddata").disabled = false
        document.querySelector("#Sim").disabled = false
        document.querySelector("#Nao").disabled = false
        document.querySelector("#idobs").disabled = false
        document.querySelector("#idSim").disabled = false
    })
    //Comando para Habilitar os tipos de bebidas
    document.querySelector('#S').addEventListener('click', function(){
        if(document.querySelector('#S').checked == true){
            document.querySelector('#idtpbebida').disabled = false
            document.querySelector("#Si").disabled = false
            document.querySelector("#Na").disabled = false
        }
    })
    //Comando para Desabilitar os tipos de bebidas
    document.querySelector('#N').addEventListener('click', function(){
        if(document.querySelector('#N').checked == true){
            document.querySelector('#idtpbebida').disabled = true
            document.querySelector("#Si").disabled = true
            document.querySelector("#Na").disabled = true
        }
    })
    //Comnado para mostrar a lista de opcionais
    document.querySelector('#Sim').addEventListener('click', function(){
        if(document.querySelector('#Sim').checked == true){
            document.querySelector('#opadicionais').style.display = 'block'
        }
    })
    //Comando para ocultar a lista de opcionais    
    document.querySelector('#Nao').addEventListener('click', function(){
        if(document.querySelector('#Nao').checked == true){
            document.querySelector('#opadicionais').style.display = 'none'
        }
    })
}