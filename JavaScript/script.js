/**
 * Created by Liss on 09.09.2016.
 */
window.onload=function(){
    var r=255;
    var g=38;
    var b=58;
    var result=true;

    setInterval(function(){ //анимация "Мигание заголовка"
        document.getElementById("MainName").style.color="rgb("+r+","+g+","+b+")";
        if(g<=38 && g<=28){
            result=true;
        }
        else if(g>=255 && b>=255){
            result=false;
        }
        if(result){ //Увеличение цветовой гаммы
            g++;
            b++;
        }
        else{   //Уменьшение цветовой гаммы
            g--;
            b--;
        }
    },1);




    var animation=document.getElementById("animation");
    var interval;

    function CreateEl(){

        var newDiv=document.createElement("div");
            newDiv.classList.add("newDiv");

        animation.appendChild(newDiv);
        newDiv.style.left=75+"%";
        newDiv.style.top=57+"%";

        interval=setInterval(function forInterval(){


            var x=Math.floor(Math.random()*(75-29)+29);
            var y=Math.floor(Math.random()*(57-42)+42);
            newDiv.style.left=x+"%";
            newDiv.style.top=y+"%";
        },200);
        newDiv.onmouseover=function(){
           newDiv.style.backgroundColor="white";
            newDiv.style.width=10+"px";
            newDiv.style.height=10+"px";

        };
        newDiv.onmouseout=function(){
            newDiv.style.backgroundColor="black";
            newDiv.style.width=3+"px";
            newDiv.style.height=3+"px";

        }

    }


        for(var i=0; i<300; i++){
        CreateEl();

        }




};

