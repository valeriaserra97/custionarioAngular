<?php
//===========================*/
$dbHostMySQL ='localhost';
$dbNameMySQL = 'examen';
$dbUserMySQL = 'root';//'cursoCore';
$dbPassMySQL = '';//'Core@2.023';
//===========================*/


define('HOST',$dbHostMySQL);
define('USUARIO',$dbUserMySQL);
define('LLAVE',$dbPassMySQL);
define('BDNAME',$dbNameMySQL);
//FIN DE LA CONEXIÓN A MySQL
	


function abrir_bbdd()
	{
 	    $conexion=@mysqli_connect(HOST,USUARIO,LLAVE,BDNAME); 
		if(!$conexion){die("Error fatal: No se ha podido efectuar la conexion a ".BDNAME.'  Error tipo: '.mysqli_connect_error());}else{
		return $conexion;
		}//fin de if
    }

//..............................................................	  
//***********************************************************************************************************************?>