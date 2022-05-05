window.onload = () =>{
    document.getElementById("add").onclick = () =>{
        texto = document.getElementById("texto").value;
        conteudo = "<li>"+texto+"</li>";
        document.getElementById("caixaConteudo").innerHTML += conteudo;
    }
}