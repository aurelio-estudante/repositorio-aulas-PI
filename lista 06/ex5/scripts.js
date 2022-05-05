window.onload = () =>{
    //Logo
    document.getElementById("logoTitle").onclick = () =>{
        document.getElementById("logoTitle").style.display = "none";
        document.getElementById("inputLogo").style.display = "block";
        document.getElementById("btnLogo").style.display = "block";
    }
    document.getElementById("btnLogo").onclick = () =>{
        document.getElementById("logoTitle").innerHTML = document.getElementById("inputLogo").value;
        document.getElementById("logoTitle").style.display = "block";
        document.getElementById("inputLogo").style.display = "none";
        document.getElementById("btnLogo").style.display = "none";
    }
    //Nome Empresa
    document.getElementById("nomeEmpresa").onclick = () =>{
        document.getElementById("nomeEmpresa").style.display = "none";
        document.getElementById("inputNomeEmpresa").style.display = "block";
        document.getElementById("btnNomeEmpresa").style.display = "block";
    }
    document.getElementById("btnNomeEmpresa").onclick = () =>{
        document.getElementById("nomeEmpresa").innerHTML = document.getElementById("inputNomeEmpresa").value;
        document.getElementById("nomeEmpresa").style.display = "block";
        document.getElementById("inputNomeEmpresa").style.display = "none";
        document.getElementById("btnNomeEmpresa").style.display = "none";
    }
    //Nome Funcionario
    document.getElementById("nomeFuncionario").onclick = () =>{
        document.getElementById("nomeFuncionario").style.display = "none";
        document.getElementById("inputNomeFuncionario").style.display = "block";
        document.getElementById("btnNomeFuncionario").style.display = "block";
    }
    document.getElementById("btnNomeFuncionario").onclick = () =>{
        document.getElementById("nomeFuncionario").innerHTML = document.getElementById("inputNomeFuncionario").value;
        document.getElementById("nomeFuncionario").style.display = "block";
        document.getElementById("inputNomeFuncionario").style.display = "none";
        document.getElementById("btnNomeFuncionario").style.display = "none";
    }
    //Função do Funcionário
    document.getElementById("functionFuncionario").onclick = () =>{
        document.getElementById("functionFuncionario").style.display = "none";
        document.getElementById("inputFunction").style.display = "block";
        document.getElementById("btnFunction").style.display = "block";
    }
    document.getElementById("btnFunction").onclick = () =>{
        document.getElementById("functionFuncionario").innerHTML = document.getElementById("inputFunction").value;
        document.getElementById("functionFuncionario").style.display = "block";
        document.getElementById("inputFunction").style.display = "none";
        document.getElementById("btnFunction").style.display = "none";
    }
    //Função do Funcionário
    document.getElementById("profilePicture").onclick = () =>{
        document.getElementById("profilePicture").style.display = "none";
        document.getElementById("inputPicture").style.display = "block";
        document.getElementById("btnPicture").style.display = "block";
    }
    document.getElementById("btnPicture").onclick = () =>{
        document.getElementById("profilePicture").src = document.getElementById("inputPicture").value;
        document.getElementById("profilePicture").style.display = "block";
        document.getElementById("inputPicture").style.display = "none";
        document.getElementById("btnPicture").style.display = "none";
    }


}