function minhaidade() {
 var idade= document.getElementById("idade").value;
 idade = parseInt(idade)
   if (idade > 5 && idade < 11 ){
        window.alert("é criança")
    }
    else if(idade > 10 &&  idade< 16){
        window.alert("é adolescente")
    }
    else if(idade > 15 && idade< 30){
        window.alert(" é jovem")
    }
    else if(idade > 29 && idade < 60){
        window.alert("é adulto")
    }
    else if(idade > 60){
        window.alert("é idoso")
    }    
}