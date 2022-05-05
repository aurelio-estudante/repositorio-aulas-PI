window.onload = () =>{
    document.getElementById("li1").onclick = () =>{
        var div = document.getElementById("div1");
        var visible = window.getComputedStyle(div).display;
        if(visible == "none"){
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    }
    document.getElementById("li2").onclick = () =>{
        var div = document.getElementById("div2");
        var visible = window.getComputedStyle(div).display;
        if(visible == "none"){
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    }
    document.getElementById("li3").onclick = () =>{
        var div = document.getElementById("div3");
        var visible = window.getComputedStyle(div).display;
        if(visible == "none"){
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    }
    document.getElementById("li4").onclick = () =>{
        var div = document.getElementById("div4");
        var visible = window.getComputedStyle(div).display;
        if(visible == "none"){
            div.style.display = "block";
        }else{
            div.style.display = "none";
        }
    }
}