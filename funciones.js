//VARIABLES GLOBALES
let Rjson;
let Ojson;
let Ejson;

/************************************************************************************/


/************************************************************************************/
function VerDat(rg){

 /*------------------------------------------------*/   
$('#acc').val(rg.acc);

$('#lid').html('Identificador: '+rg.idSolicitud);
$('#nom').val(rg.nombre);
$('#ape1').val(rg.apellido1);
$('#ape2').val(rg.apellido2);
$('#telefono').val(rg.telefono);   
$('#email').val(rg.email);

$('input:radio[name="bolsa"]').each(function(i){if(this.value==rg.bolsa){this.checked=true;}});  
$('input:radio[name="discapacidad"]').each(function(i){if(this.value==rg.discapacidad){this.checked=true;}});      
$('select[name="especialidad"]').find('option').each(function(i) {if (this.value==rg.especialidad){this.selected=true;}});
    

let cad=rg.provincias;
$('input:checkbox[name="prov"]').each(function(i){if(cad.indexOf(this.value)!=-1){this.checked=true;}});
cad=rg.titulaciones;
   // alert('titulaciones '+rg.titulaciones+' '+cad);
$('input:checkbox[name="titu"]').each(function(i){if(cad.indexOf(this.value)!=-1){this.checked=true;}});    
$('#puntos').val(rg.puntos);

    $('#env').prop('disabled','true');

}//fin de la function VerDat
/************************************************************************************/

function Reporter(Ljson){
	
var nodo;
var campo;
var Bcolor;
var par=true;
var puntos;

var nombre;
var bolsa;
var espe;
var prov;
var tel;    
 var titu;   
    
    
    
Ojson=Ljson;

//********************************************

nodo=document.getElementById("Lbody"); 
nodo.innerHTML="";

//********************************************
	                                    
											
$("#resumen").html('Registros encontrados');		
//......................................................................................................................................................................	
			
    for (var i=0; i<Ojson.length;i++) {
     puntos=Ojson[i].puntos;
	 nombre=Ojson[i].apellido1+' '+Ojson[i].apellido2+', '+Ojson[i].nombre;
	 bolsa=Ojson[i].bolsa;
     espe=Ojson[i].especialidad;
	 
	 switch(espe){
	   case "0":espe='Matem&aacute;tica';break;
       case "1":espe='Lengua';break;
       case "2":espe='Ciencias';break;
       case "3":espe='Historia';break;
       case "4":espe='Idiomas';break;
	   case "5":espe='Tecnolog&iacute;a';break;	  
	 }
	 
	 prov=Ojson[i].provincias;
	 
	 
   tel=Ojson[i].telefono;
   titu=Ojson[i].titulaciones;
     
	  if (par==true){par=false;Bcolor='Cgris';}else{par=true;Bcolor='Cblan';}
    
        nodo.innerHTML += '<tr>'+
                  '<td class="W5 Cac '+Bcolor+'">'+puntos+'</td>'+
                  '<td class="W35 Cai '+Bcolor+'">'+nombre+'</td>'+
                  '<td class="W5 Cac '+Bcolor+'">'+bolsa+'</td>'+
				  '<td class="W10 Cac '+Bcolor+'">'+espe+'</td>'+
				  '<td class="W30 Cac '+Bcolor+'">'+prov+'</td>'+
                  '<td class="W5 Cac '+Bcolor+'">'+titu+'</td>'+
                  '<td class="W5 Cai '+Bcolor+'">'+tel+'</td>'+
				  '<td class="W5 Cac '+Bcolor+'"><a href="javascript:VerDat(Ojson['+i+']);"><label>-></label></a></td></tr>';

	}//fin del for

}//fin de la funcion
//***********************************************************************
function TeclaNum(event,campo,sgte) {
	
	var c=campo.value;
	

	
    var char = event.which || event.keyCode;
	   
	  if (char==8||char==9||char==45||char==46||char==38||char==39||char==37||char==40 || char==47){
	   //tecla valida
	  }else if (char==13){
		  
	               if(sgte!="*"){   
					//alert('Estoy en la function TeclaNum siguiente es:'+ sgte);
				               
								           
				                                       document.getElementById(sgte).focus();
     		                                           document.getElementById(sgte).click();
				                                       				               
				   } 
	
	  }else if (char<48||char>57){ 
	             var letra=String.fromCharCode(char);
		             alert('El caracter '+letra+' no es v\xe1lido aqui');//
	                event.returnValue = false;
				 if (event.preventDefault){event.preventDefault();}
		
		            
	}//fin de if char==13
		
}//fin de function nombre_keypress
/****************************************************************************************/
function TeclaAlfa(event,campo,sgte) {
//	alert('estoy en teclaAlfa');
	
  var indice=campo.id;
  var char = event.which || event.keyCode;
  var c=campo.value;
	 //
	  
	   switch(char){
	 //--------------------------------------------------------------------------------------	   
		    case 13:
			//alert('Estoy en la function TeclaAlfa siguiente es:'+ sgte);
		         if(sgte!="*"){   
					 
				
				
                 document.getElementById(sgte).focus();
     		     document.getElementById(sgte).click();
				                         				               
				 }                                                  
	        break;
		//----------------------------------------------------------------------------
		case 48://0         
		case 49://1
		case 50://2
	    case 51://3
		case 52://4
		case 53://5
		case 54://6
		case 55://7
		case 56://8		
	    case 57://9
            	 alert('la tecla '+String.fromCharCode(char)+' no es v\xe1lida aqui');
	             event.returnValue = false;
				 if (event.preventDefault){event.preventDefault();}
				  
				    break;
	   }//fin de switch
}//fin de function TeclaAlfa

/**********************************************************************************/

function ValidarEmail(campo) {
   
	var RegExPattern = /[\w-\.\d]{3,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/;
    var errorMessage = 'Email Incorrecto.';
    if ((campo.value.match(RegExPattern)) && (campo.value!='')&&(campo.value.length>=10)) {
	 // alert('Email Correcto');
	  return true;
    } else {
        alert(errorMessage);
        campo.focus();
		campo.click();
		return false;
    } 
}//fin de la funcion*/
//..........................................................................................
function TeclaMail(event,campo,siguiente) {
	
    var char = event.which || event.keyCode;
	   
	   if (char==13){
		
		var c=campo.value;
		//alert('estamos en TeclaMail  campo siguiente'+siguiente);	
		  var v=ValidarEmail(campo);
		
		if (v==true ){	
		                                               if(siguiente!='*'){ 
				                                                  document.getElementById(siguiente).focus();
     		                                                      document.getElementById(siguiente).click();                           
													   }
		 }else{
			
			 campo.value='no es un email v\xe1lido';
	   }//fin de validate*/
	}//fin de if char==13
		
}//fin de function email_keypress

/***************************************************************************************************/
function Edad(elem){
	
var fn=elem.value;
var d=fn.substr(0,2);d=parseInt(d);
var m=fn.substr(3,2);m=parseInt(m);
var y=fn.substr(6,4);y=parseInt(y);
var cumple= new Date(y,m-1,d);
var hoy =new Date();
var annus=Math.trunc((hoy-cumple)/(365*86400000));

document.getElementById('edad').innerHTML=' '+annus+' a\xf1os';

//alert('categoria user.cate ='+USER.cate);
}//fin de la function


/*-------------------------------------------------------------------------------------------------*/

function Es_Fecha(f){
var ok=false;
//alert('estamos en Es_Fecha:'+f);
var RegExPattern = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
    var errorMessage = 'La fecha no coincide con el patr\xf3n de formato';
    if ((f.match(RegExPattern)) && (f.value!='')) {
		//alert('El valor: '+f+'  una fecha v\xe1lida');
	 var dia=parseInt(f.substr(0,2));
	 var mes=parseInt(f.substr(3,2));
	   switch(mes){
		case 2:
		 if(dia<=29)ok=true; 
	    break;
		   
		case 4:
		case 6:
		case 9:
		case 11:
		 if(dia<=30)ok=true; 
	    break;
		
		default:
		 if(dia<=31)ok=true; 
	    break;
	   }
	
	 
    } else {
        alert(errorMessage);
		ok= false;
    } 	
	
if (ok!=true){alert('El valor: '+f+' NO tiene un formato de fecha correcto');}
return	ok;
}//fin de la function es fecha
//*********************************************************************
//.............................................................................
function Fecha(event,campo,sgte){
var c=campo.value;
	
//alert('Estoy en la function Fecha siguiente es:'+ sgte);
	
    var char = event.which || event.keyCode;
	   
	  if (char==8||char==9||char==45||char==46||char==38||char==39||char==37||char==40 || char==47){
	   //tecla valida
	  }else if (char==13){
		 // alert('Estoy en la function Fecha siguiente es:'+ sgte);
		   

                    var ok=Es_Fecha(c);
					if (ok===true){	   
						  sgte=campo; 
                    }else{alert('El valor: '+c.value+' NO es una fecha v\xe1lida');}
             
		   
		  	}else if (char<48||char>57){ 
	             var letra=String.fromCharCode(char);
		             alert('El caracter '+letra+' no es v\xe1lido aqui');//
	                event.returnValue = false;
				 if (event.preventDefault){event.preventDefault();}
		
		            
	}//fin de if char==13
	
	
}
//*********************************************************************


