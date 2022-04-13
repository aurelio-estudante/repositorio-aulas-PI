window.onload = () =>{
    document.getElementById("btnCor").onclick = () =>{
        var content = document.getElementsByClassName("mudarCor");
        for(var i = 0; i<content.length; i++){
            if(content[i].style.color!="red"){
                content[i].style.color = "red";
            }else{
                content[i].style.color = "black";
            }

        }
    }

    document.getElementById("btnBackground").onclick = () =>{
        var content = document.getElementsByClassName("mudarCor");
        var content = document.getElementsByClassName("mudarCor");
        for(var i = 0; i<content.length; i++){
            if(content[i].style.backgroundColor!="blue"){
                content[i].style.backgroundColor = "blue";
            }else{
                content[i].style.backgroundColor = "white";
            }
        }
    }
    
}