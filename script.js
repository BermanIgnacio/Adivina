const events = ()=>{
    //evento boton generar
    $("#button_1").click(function (){
        const min = $("#input_1").val()=="" ? 0: parseInt($("#input_1").val());
        const max = $("#input_2").val()=="" ? 500: parseInt($("#input_2").val());
        random = parseInt(Math.random() * (max - min) + min);
        bool = Boolean((max-min)<=50);
        if(bool)
            $("#warning").text("Por Favor Aumente El Rango ");
        else
            $("#warning").text("");
    });
    //evento boton adivinar
    $("#button_2").click( function (){
        if(!bool)
            if(trys!=0){
                help=1;
                trys--;
                if(random == $("#input_3").val())
                    $("#result").text("Felicidades, Ganaste!");
                else{
                    $("#try").text(`Intentos: ${trys}`)
                    if(trys == 0)
                        $("#result").text("Lastima, Perdiste!");
                }

                    
            }  
    });
    //evento boton ayuda
    $("#button_3").click(function (){
        if(trys!=0 && !bool && help !=0) {
            help--;
            $("#input_3").val() < random ? $("#help").text("El número es mayor") : $("#help").text("El número es menor");
        }

    });
    //evento boton reiniciar
    $("#button_4").click(function (){
        window.location.reload();
    });
}

let bool = false;
let trys = 3; 
let help = 1;
let random = parseInt(Math.random() * 250);
console.log(random)
events();
