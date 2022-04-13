window.onload = () =>{
    document.getElementById("btnTrocar").onclick = () =>{
        var retem = document.getElementById("nome1").innerHTML;
        document.getElementById("nome1").innerHTML = document.getElementById("nome2").innerHTML;
        document.getElementById("nome2").innerHTML = retem;
    }
}