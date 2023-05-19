
function Puntuar(){
     //alert('Funcion: Puntuar');
    let puntos=0;
   
    $('input:checkbox[name="titu"]:checked').each(function(i){
           puntos+=parseInt(this.value); 
         });
    $('#puntos').val(puntos);
}//

/**********************************************************/
function limpiar(){
   // alert('estmos limpiando');
    $(':input:text').val('');
    $('#email').val('');
    $('input:radio').attr('checked',false);
    $('input:checkbox').attr('checked',false);
    $('select').find('option').each(function(i){
                    if(this.value=='-'){this.selected=true;}
});
     $('#env').prop('disabled',false);
     $('#lid').html('');
}

/*********************************************************/
function validar(){
    //alert('estamos en validar');
let f1=document.getElementById('f1');
let id=document.getElementById('lid');    

let nom=document.getElementById('nom');
let ape1=document.getElementById('ape1');
let ape2=document.getElementById('ape2');
      
let telefono=document.getElementById('telefono'); 
let email=document.getElementById('email');      
let bolsa=$('input:radio[name="bolsa"]:checked').val();
    
let discapacidad=$('input:radio[name="discapacidad"]:checked').val();
let especialidad=$('select').find('option:selected').val();
    
let provincias=document.getElementById('provincias');
provincias.value='';    
$(':input:checkbox[name="prov"]:checked').each(function(i){
    if(provincias.value.length>0){provincias.value+=':'+this.value;}else{provincias.value=this.value;}
});   
    
      
let titulaciones=document.getElementById('titulaciones');
titulaciones.value='';
$(':input:checkbox[name="titu"]:checked').each(function(i){
    if(titulaciones.value.length>0){titulaciones.value+=':'+this.value;}else{titulaciones.value=this.value;} 
});


let puntos=document.getElementById('puntos');
let ok=false;
    
if(nom.value.length>0 &&
   ape1.value.length>0 &&
   ape2.value.length>0 &&
   telefono.value.length>0 &&
   email.value.length>0 &&
   bolsa.length>0 &&
   discapacidad.length>0 &&
   titulaciones.value.length>0 &&
   provincias.value.length>0 &&
   especialidad.length>0 &&
   puntos.value.length>0 
   ){ok=true;}


var cad=(ok)?'Satisfactoria':'Hubo errores en los datos'; 
alert('La comprobación del formulario resutó :\r\n'+cad);
/*f1.action='';*/

if(!ok){
    f1.action='';
}
else{
 ok=confirm('¿Enviar formulario usando Ajax?');
  if(ok){
     f1.action=''; 
 let paquete='&nombre='+nom.value+
             '&apellido1='+ape1.value+
             '&apellido2='+ape2.value+ 
             '&telefono='+telefono.value+
             '&email='+email.value+
             '&bolsa='+bolsa+
             '&discapacidad='+discapacidad+
             '&titulaciones='+titulaciones.value+
             '&provincias='+provincias.value+
             '&especialidad='+especialidad+
             '&puntos='+puntos.value;

console.log(paquete);
      
       EscribirBBDD(paquete); 
	  
		  
		 
      }else{
          alert('Se enviará por el proceso normal');
          f1.action='php/setbolsa.php';
      }

}//FIN ELSE 
}//fin defuncion verform
/**********************************************************************/

/******************************************************************/
