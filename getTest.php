<?php
//******************************************************************************
//session_start() or Die("Error UA004001: Se ha producido un error de sistema");
header("Expires: Tue, 01 Jan 1984 00:00:00 GMT");
header("Last-Modified: " . gmdate("D, d M Y H:i:s") . " GMT");     
header("Cache-Control:no-store, no-cache, must-revalidate");
header("Cache-Control:post-check=0, pre-check=0",false);
header("Pragma: no-cache");
//******************************************************************************
	

//*********************************************************
//---------------------------------------------------------------------------
require ("bbdd.php");
$conx=abrir_bbdd();
//---------------------------------------------------------------------------
//********************************************************


                     


$dat=null;
    $consulta = "SELECT * FROM preguntas  ORDER BY id_p";
	$cursor=mysqli_query($conx,$consulta);
	if(mysqli_errno($conx)!=0){//si hay error
	              
				   $dat[0]['acc']="E";
		           $dat[0]['msj']= 'num. error '.mysqli_errno($conx).'  * tipo error '.mysqli_error($conx).'  * consulta '.$consulta; 
	}else{//no hay error
	                  
					  $numreg=mysqli_num_rows($cursor);	
					  switch($numreg){
						  case 0:
						  // echo'la consulta NO devuelve registros';  
					      $dat[0]['msj']="No hay datos en la BB.DD.";
						  $dat[0]['acc']="A";
						break;
					 
					  default:	
					//  echo'la consulta devuelve varios registros';  	  
             		  $i=0;
					  while($recordset=mysqli_fetch_array($cursor,MYSQLI_BOTH)){
			                  $clv=$recordset['id_p'];
			                  $dat[$i]['id_p']=$recordset['id_p'];							 
			                 // $dat[$i]['pregunta']=utf8_encode($recordset['pregunta']);
							   $dat[$i]['pregunta']=$recordset['pregunta'];
			                  //$dat[$i]['respuesta']=utf8_encode($recordset['respuesta']);
							    $dat[$i]['respuesta']=$recordset['respuesta'];
							      /* subconsulta para obtener  las opciones*/
							           $sql="SELECT id_p,id_op,opcion FROM opciones WHERE id_p =".$recordset['id_p']." ORDER BY id_op;";
									 
									   //echo 'subcosulta: '.$sql.'<br/>';
							         
									   $pointer=mysqli_query($conx,$sql);
							           if(mysqli_errno($conx)==0 && mysqli_num_rows($pointer)!=0 ){//No hay error y hay registro
								               
								                     while ($reg=mysqli_fetch_array($pointer,MYSQLI_BOTH)){
														$letra=$reg['id_op'];
														//$dat[$i]['opciones'][$letra]=utf8_encode($reg['opcion']);
														$dat[$i]['opciones'][$letra]=$reg['opcion'];
													 }//fin de while interno

													 @mysqli_free_result($pointer);
										}//fin de 
                                  /* --------------------------------------------------*/

					          $dat[$i]['acc']="M";
					       
					  $i++;
		             }//fin de while
			          
		               break;
					  }//fin de switch
	}//fin de if-else error
	@mysqli_free_result($cursor);
     mysqli_close($conx);
//....................................................................................................................*/		    		
	echo json_encode($dat);
?>
 