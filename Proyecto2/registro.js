var expr = /^[a-zA-Z0-9\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
    $("#bEnviar").click(function(){
        var nombre = $("#itNombre").val();
        var apellidoP = $("#itApellidoP").val();
        var apellidoM = $("#itApellidoM").val();
        var rut = $("#itRut").val();
        var fono = $("#itFono").val();
        var correo = $("#itCorreo").val();

        if(nombre == ""){
            $("#mensaje1").fadeIn();
            return false;
        }else{
            $("#mensaje1").fadeOut();
            if(apellidoP == ""){
                $("#mensaje2").fadeIn();
                return false;
            }else{
                $("#mensaje2").fadeOut();
                if(apellidoM == ""){
                    $("#mensaje3").fadeIn();
                    return false;
                }else{
                    $("#mensaje3").fadeOut();
                    if(rut == ""){
                        $("#mensaje4").fadeIn();
                        return false;
                    }else{
                        $("#mensaje4").fadeOut();
                        if(fono == ""){
                            $("#mensaje5").fadeIn();
                            return false;
                        }else{
                            $("#mensaje5").fadeOut();
                            if(correo == ""  || !expr.test(correo)){
                                $("#mensaje6").fadeIn();
                                return false;
                            }
                        }
                    }
                }
            }
        }
    });
});