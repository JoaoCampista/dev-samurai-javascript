/*
Com o conhecimento de objetos em mãos construa um programinha de controle de convidados mais
elaborado, considerando as propriedades:
Nome
Idade
CPF
Permita que o cadastrante digite estas informações em nosso array de convidados.
*/

messageNome = "Nome: "
messageIdade = "Idade: "
messageCPF = "CPF: "

messages = [messageNome, messageIdade, messageCPF]
lista = []

while (true) {

    var userCpf = prompt(messageCPF);
    var userNome = prompt(messageNome);
    var userIdade = prompt(messageIdade);
    
    if (userCpf == undefined || userNome == undefined || userIdade == undefined ||
        userCpf == "" || userNome == "" || userIdade == "") {
        break
    } else {
        user = {cpf: userCpf, nome: userNome, idade: userIdade}
        lista[userCpf] = user
    }
}