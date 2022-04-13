window.onload = () =>{
    document.getElementById("btnSemZebra").onclick = () =>{
        var rows = document.querySelectorAll('#tabela tr:nth-child(even)');
        rows.forEach(element => {
            element.style.backgroundColor = "lightgray";
        });
    }
    document.getElementById("btnComZebra").onclick = () =>{
        var rows = document.querySelectorAll('#tabela tr:nth-child(even)');
        rows.forEach(element => {
            element.style.removeProperty('background-color');
        });
    }
}