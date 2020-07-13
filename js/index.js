window.onload = function(){
    
    
    //vetor para anotar os adicionais e os pedidos
    adicionais = []
    pedidos = []
    

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
        //document.querySelector("#idSim").disabled = false
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
    
    //função para saber quais os adicionais escolhidos
    function listaradicionais(){
        if(document.querySelector('#Sim').checked == true){
            adicionais.length=0
            var check = document.getElementsByName('add')
            for(i=0;i<check.length;i++){
                if(check[i].checked == true){
                    adicionais.push(check[i].value)
                }
            }
            return adicionais   
        }else{
            return "Não"
        }
    }

    //Função para saber qual lanche foi escolhida
    function lancheescolhido(){
        var lanche = document.querySelector('#idlanche')
        return lanche.options[lanche.selectedIndex].text
    }

    //Função para saber qual bebida foi escolhida
    function tipobebida(){
        if(document.getElementById('S').checked == true){
            var tpbebida = document.querySelector('#idtpbebida')
            return tpbebida.options[tpbebida.selectedIndex].text
        }else{
            return "Sem Bebida"
        }
    }
    //Função para saber se a bebida acompanha gelo
    function comgelo(){
        if(document.querySelector("#Si").checked == true){
            return "Sim"
        }else{
            return "Não"
        }
    }

    //Configuração do botão Salvar Pedido
    document.querySelector('#btn2').addEventListener('click', function(){
        //Criação do Obejto de pedidos
        var objpedido = {
            codigoPedido: document.querySelector('#idcodPed').value,
            nomeCliente: document.querySelector("#idnome").value,
            lanche: lancheescolhido(),
            adicionais: listaradicionais(),
            bebida: tipobebida(),
            gelada: comgelo(),
            data: document.querySelector("#iddata").value,
            observacoes: document.querySelector("#idobs").value,
            total: totalpedido(),
            //Função para impressão
            imprimir: function (){
            var imprimir= "==========Pedido==========\n" +
                "Nome: " + this.nomeCliente + "\n" +
                "Pedido: " + this.codigoPedido + "\n" +
                "Lanche: " + this.lanche + "\n" +
                "Adicionais: " + this.adicionais + "\n" +
                "Bebida: " + this.bebida + "\n" +
                "Bebida Gelada: " + this.gelada + "\n" +
                "Observaçôes: " + this.observacoes + "\n" +
                "Total do Pedido: R$" + this.total
                document.querySelector('#areapedido').innerHTML = imprimir
            },
            imprimirPedido: function(){
                childWindow = window.open('','childWindow','location=yes, menubar=yes, toolbar=yes');
                childWindow.document.open();
                childWindow.document.write('<html><head></head><body>');
                childWindow.document.write(document.getElementById('areapedido').value.replace(/\n/gi,'<br>'));
                childWindow.document.write('</body></html>');
                childWindow.print();
                childWindow.document.close();
                childWindow.close();
            }
        }
        //Comando para criar objeto e para adicionar  o pedido em um vetor
        var escolhaPedido = Object.create(objpedido)
        pedidos.push(escolhaPedido)

        //Configuração do botão Imprimir pedido
        document.querySelector('#btn3').addEventListener('click', function(){
            escolhaPedido.imprimir()
        })
        document.querySelector("#btn4").addEventListener('click', function(){
            var conteudo = this.escolhaPedido
            escolhaPedido.imprimirPedido()
        })  
    })
    
    //Função para calcular o valor total do pedido
    function totalpedido(){
        var valor = 10.0
        if(document.querySelector('#S').checked == true){
            valor += 4
        }if(document.querySelector("#Si").checked == true){
            valor += 1
        }
        if(document.querySelector('#Sim').checked == true){
            var check = document.getElementsByName('add')
            for(i=0;i<check.length;i++){
                if(check[i].checked == true){
                    valor +=2.5
                }
            }  
        }
        return valor
    }
    //Limpar os campos
    document.querySelector('#btn5').addEventListener('click', function(){
        document.getElementById('formulariopedido').reset();
        var campoLimpo = "";
        document.querySelector('#areapedido').innerHTML = campoLimpo
    })
    //para fechar a aba do navegador ao clicar em sair
    document.querySelector("#btn7").addEventListener('click', function(){
        if(window.confirm("Deseja sair?")) {
            window.close();
        }
    })

    //função para abrir janela de impressão
    

}