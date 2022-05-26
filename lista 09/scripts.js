//Menu Start

window.onload = () =>{
    var img = document.getElementById("imagemMenu").firstElementChild;
    var source = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
    var number = Math.floor((Math.random()*150)+1);
    img.src = source+number+".png";
    
    document.getElementById("startGame").onclick = () =>{
        location.href = "jogo.html";
    }
}


//---------