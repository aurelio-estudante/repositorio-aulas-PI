window.onload = () =>{
    var nomes = ["Patricia Whiteley","Layan Griffith","Finn Mcfarland","Kimberly Ventura","Lacie Howe","Wanda Amos","Sapphire Carlson","Alayah Michael","Maegan Mosley","Rukhsar Bridges"];

    document.getElementById("addLinha").onclick = () =>{
        var nome = nomes[Math.floor(Math.random() *nomes.length)];
        var tabela = document.getElementById("tabela");
        var row = tabela.insertRow(-1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = nome;
        cell2.innerHTML = Math.floor(Math.random() *100);
    }
    
    document.getElementById("removeLinha").onclick = () =>{
        var tabela = document.getElementById("tabela");
        if(tabela.rows.length>1){
            tabela.deleteRow(-1);
        }
    }

}