# lanchonete
Projeto de avaliação para disciplina de programação em scripts


Enunciado

Desenvolva um sistema que faça o controle de pedidos de uma lanchonete, conforme a imagem anterior.
Utilize o framework Bootstrappara estruturar sua página•Ao fechar o pedido, o sistema deverá exibir o total dos itens,
Considere para os lanches, o valor de R$ 10,00, itens adicionais R$ 2,50 por item e bebida R$ 4,00, se for gelada, adicione R$ 1,00 no preço da bebida
Crie funçõespara cada um dos botões:
  Novo Pedido →gera um número aleatório e atribui ao campo Código do Pedido, habilita os campos para edição (propriedade enable=true)
  Salvar Pedido →Adiciona o pedido em um objeto
  Fechar Pedido →Concatena as informações do pedido no textareaPedido
  Imprimir Cupom →Imprime um documento pdfcom as informações do Pedido
  Limpar Campos →Reseta o formulário/limpa todos os campos
  Imprimir Todos os Pedidos →Imprime todos os pedidos salvos no objeto
  Sair →fecha a janela
Estrutura dos arquivos:
  Pasta Principal
  Lanchonete (contém arquivo index.html)
    →Pasta chamada “css” (contém arquivo bootstrape/ou outros de css)
    →Pasta chamada “scripts” (contém arquivo com as funções do exercício)
