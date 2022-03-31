
//Eu sei colocar a cor nas caixas uma por uma, mas achei que ia ser muito mais legal se elas tivessem uma cor aleatória
//sempre que alguém abre o site
window.onload = function(){
    var color = 0;
    for(i=1;i<=8;i++){
        r = Math.floor(Math.random()*255);
        g = Math.floor(Math.random()*255);
        b = Math.floor(Math.random()*255);
        cor1 = "rgb("+r+","+g+","+b+");";
        brightness = Math.sqrt((0.299*r^2)+(0.587*g^2)+(0.114*b^2));
        console.log(brightness)
        if(brightness>7.2){
            brilho = "black";
        }else{
            brilho = "white";
        }
        document.getElementById("child"+i).setAttribute("style","background-color: "+cor1+"color: "+brilho);
        
    }
}