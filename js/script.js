let listaPessoas; //array vazio

function exibeResultado() {

    let template = "";
    
    for(let i = 0; i < listaPessoas.length; i++){

        template += `<tr>
            <td>${listaPessoas[i].nome}</td>
            <td>${listaPessoas[i].altura}</td>
            <td>${listaPessoas[i].peso}</td>
            <td>${listaPessoas[i].imc}</td>
            <td>${listaPessoas[i].situacao}</td>
        </tr>`
    }
    
    document.getElementById('cadastro').innerHTML = template;

}

if(localStorage.getItem("listaPessoas") == null){
    listaPessoas = [];
}
else{
    listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));
}

console.log(listaPessoas);
exibeResultado();

function calcular() {

    //pegar os dados do formulário

    let nome = document.getElementById('nome').value;
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);


    if (nome == "" || isNaN(altura) || isNaN(peso)) {//esqueceu campo sem preencher
        alert("Preencha os campos");
    }
    else {//tudo preenchido


        //calcular imc
        let imc = calculaIMC(altura, peso); 3

        //gerar a sistuação com base no IMC

        let situacao = geraSituacao(imc);

        //guardar o IMC e a situação no objeto pessoa
        let pessoa = {};
        pessoa.nome = nome;
        pessoa.altura = altura;
        pessoa.imc = imc;
        pessoa.peso = peso;
        pessoa.situacao = situacao;

        //exibir a pessoa na tela
        listaPessoas.push(pessoa);
        localStorage.setItem("listaPessoas",JSON.stringify(listaPessoas));//transforma em texto o array o json
        exibeResultado();
    }

    function calculaIMC(altura, peso) {

        return peso / (altura * altura);
    }

    function geraSituacao(imc) {


        /*
       Resultado	        Situação
       Menor que 18.5      Magreza Severa
       Entre 18.5 e 24.99	Peso normal
       Entre 25 e 29.99	Acima do peso
       Entre 30 e 34.99	Obesidade I
       Entre 35 e 39.99	Obesidade II (severa)
       Acima de 40         Cuidado!!!
       */


        if (imc < 18.5) {
            return "Magreza Severa";
        }
        else if (imc >= 18.5 && imc <= 24.99) {
            return "Peso Normal";
        }
        else if (imc >= 25 && imc <= 29.99) {
            return "Acima do Peso";
        }
        else if (imc >= 30 && imc <= 34.99) {
            return "Obseidade I";
        }
        else if (imc >= 35 && imc <= 39.99) {
            return "Obseidade II (severa)"
        }
        else {
            return "Cuidado";
        }

    }

  



    console.log(nome);
    console.log(altura)
    console.log(peso);
}


// EXPLICAÇÃO SOBRE JSON E LOCAL STORAGE

// let pessoa = {
//     nome: "Eduardo",
//     idade: 38
// }

// let stringPessoa = JSON.stringify(pessoa);

// console.log(pessoa);
// console.log(stringPessoa);

// localStorage.setItem("pessoa", pessoa);
// localStorage.setItem("stringPessoa", stringPessoa);


// console.log(JSON.parse(localStorage.getItem("stringPessoa")));
// localStorage.setItem("listaPessoas", 'teste');


// COMEÇO DO PROGRAMA
//let listaPessoas; //undefined


//if (localStorage.getItem("listaPessoas") == null) { //não tem dados
    //listaPessoas = []; //inicializa com array vazio

//} else { //não tem dados no localStorage
    //inicializa com os dados do storage
    //listaPessoas = JSON.parse(localStorage.getItem("listaPessoas"));

//}

// console.log(listaPessoas);
// console.log(listaPessoas.length);
// exibeResultado();