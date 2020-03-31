function contagios() {
    
    let valor=document.getElementById('dia').value;
    var cotagio;   
    dia=parseInt(valor, 10);
    if(dia>=6 && dia<=28 ){
        if(dia>=6&&dia<=8){
            contagio=1;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" persona contagiada por el COVID-19 en Colombia";
        }
        if(dia==9||dia==10){
            contagio=3;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }
        if(dia==11){
            contagio=9;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }
        if(dia==12){
            contagio=13;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }
        if(dia==13){
            contagio=16;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }
        if(dia==14){
            contagio=24;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }
        if(dia==15){
            contagio=45;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }
        if(dia==16){
            contagio=57;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }
        if(dia==17){
            contagio=75;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }
        if(dia==18){
            contagio=102;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }   
        if(dia==19){
            contagio=128;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        } 
        if(dia==20){
            contagio=175;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }    
        if(dia==21){
            contagio=210;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }     
        if(dia==22){
            contagio=240;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }  
        if(dia==23){
            contagio=306;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        } 
        if(dia==24){
            contagio=419;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }      
        if(dia==25){
            contagio=481;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }    
        if(dia==26){
            contagio=491;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        }  
        if(dia==27){
            contagio=539;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        } 
        if(dia==28){
            contagio=608;
            return "Hasta el dia "+dia+" de marzo del 2020 hay "+contagio+" personas contagiadas por el COVID-19 en Colombia";
        } 
        
        
        
    }
    else{
        return "Ingrese una dia entre el 6 de marzo y 28 de marzo del 2020";        
    }       
     
   
}