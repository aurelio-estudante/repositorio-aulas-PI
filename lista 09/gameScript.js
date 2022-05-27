window.onload = () =>{
    var cartela = [];
    var imagem;
    var contador = 5;
    var sorteados = [];
    var marcados = [];
    var itensCartela = document.getElementsByClassName("imgPokemon");
    
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
    //Sorteio do pokemon
    setInterval(() =>{
        if(sorteados.length<152){
            numSorteado = Math.floor(Math.random()*151)+1;
            sorteados.forEach(element => {
                if(element == numSorteado){
                    numSorteado = Math.floor(Math.random()*151)+1;
                }
            });
            sorteados.push(numSorteado);
            document.getElementById("imgSorteio").src = source+numSorteado+".png";
            if(sorteados.length==151){
                sorteados.length=152;
            }
        }else{
            document.getElementById("imgSorteio").src = source+0+".png";
        }
    },5000);
    //Contador para o sorteio
    setInterval(() =>{
        document.getElementById("sorteioTimer").innerHTML = "Sorteando em "+contador+"!";
        contador-=1;
        if(contador==0){
            contador=5;
        }
    },1000);
    //Marcação
    document.getElementById("btnMarcar").onclick = () =>{
        var btnMarcar = document.getElementById("btnMarcar");
        var mark;
        if(btnMarcar.style.backgroundColor == "rgb(197, 13, 7)"){  //Active
            btnMarcar.style.backgroundColor = "#F7DD72";
            btnMarcar.style.color = "#C50D07";
            mark = 1;
        }else if(btnMarcar.style.backgroundColor == "rgb(247, 221, 114)"){ //Inactive
            btnMarcar.style.backgroundColor = "#C50D07";
            btnMarcar.style.color = "#F7DD72";
            mark = 2;
        }
        if(mark == 1){
            itensCartela[0].onclick = () =>{
                imgClicked = itensCartela[0].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[1].onclick = () =>{
                imgClicked = itensCartela[1].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[2].onclick = () =>{
                imgClicked = itensCartela[2].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[3].onclick = () =>{
                imgClicked = itensCartela[3].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[4].onclick = () =>{
                imgClicked = itensCartela[4].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[5].onclick = () =>{
                imgClicked = itensCartela[5].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[6].onclick = () =>{
                imgClicked = itensCartela[6].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[7].onclick = () =>{
                imgClicked = itensCartela[7].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[8].onclick = () =>{
                imgClicked = itensCartela[8].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[9].onclick = () =>{
                imgClicked = itensCartela[9].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[10].onclick = () =>{
                imgClicked = itensCartela[10].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[11].onclick = () =>{
                imgClicked = itensCartela[11].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[12].onclick = () =>{
                imgClicked = itensCartela[12].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[13].onclick = () =>{
                imgClicked = itensCartela[13].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[14].onclick = () =>{
                imgClicked = itensCartela[14].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
            itensCartela[15].onclick = () =>{
                imgClicked = itensCartela[15].firstElementChild;
                pokemonImage = String(imgClicked.src);
                var numPokemon = pokemonImage.replace(/\D/g, "");
                if(parseInt(numPokemon,10) == sorteados[sorteados.length-1]){
                    marcados.push(parseInt(numPokemon,10));
                    imgClicked.style.borderColor = "#C50D07";
                }
            }
        }
    }
    //Bingo
    document.getElementById("btnBingo").onclick = () =>{
        contador = 0;
        marcados.forEach(element => {
            for(i = 0; i<sorteados.length;i++){
                if(element == sorteados[i]){
                    contador+=1;
                }
            }
        });
        if(contador == 16){
            alert("Você ganhou!");
        }
    }
}