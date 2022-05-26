window.onload = () =>{
    var cartela = [];
    var imagem;
    var contador = 5;
    var sorteados = [];
    var disponiveis = [];
    for(i = 1; i<=4;i++){
        disponiveis.push(i);
    }
    source = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    for(var i=0; i<16;i++){
        numSorteado = Math.floor((Math.random()*150)+1);
        cartela.forEach(element => {
            while(numSorteado==element){
                numSorteado = Math.floor((Math.random()*150)+1);
            }
        });
        cartela.push(numSorteado);
        imagem = "img"+(i+1);
        document.getElementById(imagem).firstChild.src = source+cartela[i]+".png";
    }

    setInterval(() =>{
        //Tem bug, resolver
        if(disponiveis.length>0){
            numSorteado = Math.floor((Math.random()*disponiveis.length-1)+1);
            sorteados.push(numSorteado);
            disponiveis[numSorteado-1] = disponiveis[disponiveis.length-1];
            disponiveis.length -= 1;
            document.getElementById("imgSorteio").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+numSorteado+".png";
            console.log(disponiveis.length);
        }else{
            document.getElementById("imgSorteio").src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+0+".png";
        }

    },5000);

    setInterval(() =>{
        document.getElementById("sorteioTimer").innerHTML = "Sorteando em "+contador+"!";
        contador-=1;
        if(contador==0){
            contador=5;
        }
    },1000);
}