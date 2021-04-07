function evaluar()
 {
                    var i ,correcto="true";
                    var rutt = document.getElementById('rut').value;
                    var num= document.getElementById('telefono').value;
                    var descr= document.getElementById('desc').value; 
                    var nomb=document.getElementById('nombre').value;
                    var apelli=document.getElementById('apellido').value;


                    if(nomb.length==0){
                        alert("Escriba el nombre");
                        correcto='false';
                    }

                    if(apelli.length==0){
                        alert("Escriba el apellido");
                        correcto='false';
                    }

                    for(i=0 ;i<rutt.length;i++)
                    {
                        if(rutt[i]=='.')
                        {
                            alert("Eliminar los puntos en el rut");
                            correcto='false';
                            break;
                        }     
                     }

                    if(num.length!=9)
                    {
                        alert("Numero de telefono invalido"); 
                        correcto='false';
                     }


                  

                   for(i=1;i<7;i++)
                   {
                       var aux='ch'+i;
                       if(document.getElementById(aux).checked)
                       {
                           break;
                       }
                       
                       if(i==6)
                       {
                           alert('Elige algun lenguaje de programacion');
                           correcto='false';
                       }
                       
                   }

                   if(descr.length>300||descr.length==0)
                   {
                       if(descr.length>300){
                       alert("Descripcion muy larga"); 
                       }
                       else{
                           alert("Descripcion vacia"); 
                       }

                       correcto='false';
                   }

                
                    if(correcto=='true'){
                        var form=document.getElementById('Formulario');
                            form.style.display='none';
                            document.getElementById("mensaje").innerHTML='<a>"Hemos recibido sus datos, pronto nos estaremos comunicando con usted ."</a>';
                            document.getElementById("mensaje").classList.add("letra");
                            document.getElementById("mensaje").style.color="red";
                            
                    }
                        
}

