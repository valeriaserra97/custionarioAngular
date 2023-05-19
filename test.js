
function EvaluarTest(){
    
    let puntos=0;
    let cad='';
    for(let p=0;p<10;p++){
     contestadas[p]=$('input:radio[name="p'+p+'"]:checked').val();
     //console.log('Pregunta: '+p+' - '+ contestadas[p]+'  valor: '+vresp[p]);
     cad='';
     if(contestadas[p]==vresp[p]){
      puntos++;
      cad=$('#v'+p+contestadas[p]).html();
      cad='<span class="icon-ok" style="color:green"></span> '+cad;
      cad=$('#v'+p+contestadas[p]).html(cad);

     }else{
     cad=$('#v'+p+contestadas[p]).html();
     cad='<span class="icon-cancel" style="color:red"></span> '+cad;
     cad=$('#v'+p+contestadas[p]).html(cad);
     }
  
    $('#calificacion').css({visibility:'visible'});
    $('#nota').html('LA NOTA OBTENIDA ES DE : '+puntos+' puntos');

    }//fin del for
}//

/**********************************************************/
function Limpiar(tipo){
   // alert('estmos en limpiar');
    $('input:radio').attr('checked',false);
    
    for(let p=0;p<10;p++){
       if(tipo==1){vresp[p]='*';}
     contestadas[p]='~';
     $('#v'+p+'a').html('a)');
     $('#v'+p+'b').html('b)');
     $('#v'+p+'c').html('c)');
     $('#v'+p+'d').html('d)');
    }
    $('#calificacion').css({visibility:'hidden'});
}
//*******************************************************

/*********************************************************/

function NuevoTest(datos){
    // alert('Estoy en NuevoTest '+datos);
Limpiar(1);

let limite=datos.length;

// codigo solo de comprobacion ***************
//alert('el limite de preguntas es '+limite)     ;
/*
for(let j=0;j<datos.length;j++){
 console.log(datos[j].id_p+' '+datos[j].pregunta+' -> r: '+datos[j].respuesta);

}
*/
//alert('mira la consola');

//**************************************************** */



let bolas=new Array(10);
let p=0;contador=0;
let Extraccion;
let existe=false;
do{
  //instrucciones del sorteo 
Extraccion=Math.floor((Math.random()*limite)+0);
     existe=false;
     for(contador=0; contador<p;contador++){
      if(bolas[contador]==Extraccion){existe=true;}//extraccion no válida
     }
     if(!existe){
        bolas[p]=Extraccion;
        p++;
     }

}while(p<10);
p=0;
for(p=0;p<10;p++){
$('#p'+p).html(datos[bolas[p]].pregunta);
$('#p'+p+'a').html(datos[bolas[p]].opciones['a']);
$('#p'+p+'b').html(datos[bolas[p]].opciones['b']);
$('#p'+p+'c').html(datos[bolas[p]].opciones['c']);
$('#p'+p+'d').html(datos[bolas[p]].opciones['d']);
vresp[p]=datos[bolas[p]].respuesta;
}//fin del for

}//fin de la funcion

/****************************************************************************** */




