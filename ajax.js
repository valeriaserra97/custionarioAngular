function CrearObjetoAjax(){//crear objeto de conexion Ajax
		var ObjetoAjax = false;
		try {
			ObjetoAjax = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {

			try {
				ObjetoAjax = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (E) {
				ObjetoAjax = false; }
		}

		if (!ObjetoAjax && typeof XMLHttpRequest!='undefined') {
		  ObjetoAjax = new XMLHttpRequest();
		}
		return ObjetoAjax;
	}// fin de la function 

/*----------------------------------------------------------------------*/
//getter funcion para obtener informacion de la BBDD
/*----------------------------------------------------------------------*/
function LeerBBDD() { //Retorna la petición a la función Reporter
//alert('estoy en LeerBBDD');
var xmlhttp;

xmlhttp=CrearObjetoAjax();	  

xmlhttp.onreadystatechange = function() {

if (xmlhttp.readyState==1 ) {
	
	//	VerWAjax(true);
	
} else if (xmlhttp.readyState==4){

      //   VerWAjax(false);

	if( xmlhttp.status==200) {

    var jsonResponse = xmlhttp.responseText;

 //alert('Proc.:LeeBBDD ->Respuesta: \n\r'+jsonResponse);

                   Rjson = JSON.parse(jsonResponse);
                
               
  
           

}//fin de state 200
}//fin de readyState==4
}//fin de la subfunction de listo cambio de estado

xmlhttp.open('POST','php/getTest.php',true);
xmlhttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
xmlhttp.send(null);
    
}//fin de la funcion..........................................................................................


//**********************************************************************************************************
//setter función para insertar/modificar datos en la BBDD
//***********************************************************************************************************
/*function EscribirBBDD(Pack) {

console.log('Estoy en EscribirBBDD '+Pack);

var ajax=CrearObjetoAjax();

    ajax.onreadystatechange=function(){
		if (ajax.readyState==1){
			//VerWAjax(true);
					}else if(ajax.readyState==4){
						//VerWAjax(false);
				                       if (ajax.status==200){
															 
								 var resp=ajax.responseText;
															  
								 //console.log('respuesta: '+resp);
															 
															 Ejson = JSON.parse(resp);//extrae el objeto json del texto plano
															
															 switch(Ejson.acc){
															 
															 case 'M':
															     														                         
			                                                    alert('Operación satisfactoria');							                                                 
                                                                LeerBBDD();  
           
																  break;
																  
															 case 'E':
                                               
                                                             alert('Servidor\n\rRespuesta(e): \n\r'+Ejson.msj+
  										                        'Se produjo un Error.Operaci&oacute;n Cancelada');
                                                             break;    
                                                             
															 default:     
				                                alert(' Ajax Fall&oacute;. Vuelva a Intentarlo');      
                                                             }
			                      }//fin de if-else(ajax.status==200)
                                    else{
                                        alert('estatus= '+ajax.status);
                                    }
		            }//fin de std=4
		  
	}//fin de la subfuntion

ajax.open('POST','php/setbolsa.php',true);
ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
ajax.send(Pack);

}//fin de la funcion
//=================================================================*/