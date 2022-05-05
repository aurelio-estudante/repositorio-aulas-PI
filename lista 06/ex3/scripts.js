window.onload = () =>{
    counter = 0;
    document.getElementById("add").onclick = () =>{
        var texto = document.getElementById("texto").value;
        document.getElementById("texto").value = "";
        var table = document.getElementById("caixaConteudo");        
        var row = table.insertRow(-1);
        var cell = row.insertCell(0);
        cell.innerHTML = `<span class="confirmIcon" id="confirmIcon"><i class="fa-solid fa-o"></i></span><span class="conteudoRow">${texto}</span><span class="trashIcon"><i class="fa-solid fa-trash-can"></i></span>`;
        cell.lastChild.onclick = () =>{
            cell.parentNode.remove();
        }
        cell.firstChild.onclick = () =>{
            console.log();
            var conteudoRow = cell.firstChild.nextElementSibling;
            if(conteudoRow.style.textDecoration == "" || conteudoRow.style.textDecoration == "none"){
                conteudoRow.style.textDecoration = "line-through";
                cell.firstChild.firstChild.className = "fa-solid fa-circle-check";
                
            }else if(conteudoRow.style.textDecoration == "line-through"){
                conteudoRow.style.textDecoration = "none";
                cell.firstChild.firstChild.className = "fa-solid fa-o";
            }
        }
    }
}