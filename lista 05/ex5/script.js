window.onload = () =>{
    document.getElementById("btnSobrescreve").onclick = () =>{
        document.getElementById("conteudo").innerHTML = document.getElementById("inputSob").value;
    }
    document.getElementById("inputCor").addEventListener("input", () =>{
        document.getElementById("conteudo").style.color = document.getElementById("inputCor").value;
    });
}