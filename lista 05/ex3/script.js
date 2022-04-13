window.onload = () =>{
    document.getElementById("btnLiga").onclick = () =>{
        document.getElementById("lampada").src = "https://www.w3schools.com/js/pic_bulbon.gif";
        document.getElementById("lampada").alt = "Lampada Ligada";
    }
    document.getElementById("btnDesliga").onclick = () =>{
        document.getElementById("lampada").src = "https://www.w3schools.com/js/pic_bulboff.gif";
        document.getElementById("lampada").alt = "Lampada Desligada";
    }
}