
//Eu sei colocar a cor nas caixas uma por uma, mas achei que ia ser muito mais legal se elas tivessem uma cor aleatória
//sempre que alguém abre o site
window.onload = function(){
    var color = 0;
    for(i=1;i<=8;i++){
        colorRed = Math.floor(Math.random()*255).toString(3);
        colorGreen = Math.floor(Math.random()*255).toString(3);
        colorBlue = Math.floor(Math.random()*255).toString(3);
        document.getElementById("child"+i).setAttribute("style","background-color: rgb("+colorRed+","+colorGreen+","+colorBlue+")");
        document.getElementById("child"+i).setAttribute("style","color: #"+color);
        
    }
}