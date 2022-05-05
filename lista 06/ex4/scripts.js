window.onload = () =>{
    var numero = Math.floor(Math.random()*100)+1;
    var counter = 0;
    console.log(numero);
    document.getElementById("btnEnviar").onclick = () =>{
        var texto = document.getElementById("campoEnvio").value;
        if(!isNaN(texto) && texto!=""){
            if(texto>numero+15){
                conteudo = "<li>"+texto+" é muito alto"+"</li>";
            }else if(texto>numero && texto<numero+15){
                conteudo = "<li>"+texto+" é um pouco alto"+"</li>";
            }else if(texto<numero-15){
                conteudo = "<li>"+texto+" é muito baixo"+"</li>";
            }else if(texto<numero && texto>numero-15){
                conteudo = "<li>"+texto+" é um pouco baixo"+"</li>";
            }else if(texto == numero){
                conteudo = "<li style= 'font-weight: bold;'>"+texto+ " é o número certo!"+"</li>";
                document.getElementById("caixaConteudo").innerHTML += conteudo;
                counter = 6;
            }      
            document.getElementById("campoEnvio").value = "";
            if(counter<5){
                document.getElementById("caixaConteudo").innerHTML += conteudo;
                counter+=1;
            }else if(counter==6){
                document.getElementById("caixaConteudo").innerHTML += "<li>"+"Já venceu!"+"</li>";
            }
            else{
                document.getElementById("caixaConteudo").innerHTML += "<li>"+"Suas chances acabaram!"+"</li>";
            }
            
        }else{
            console.log("Not a number");
        }
    }
}