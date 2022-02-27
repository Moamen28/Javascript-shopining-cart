var z ,c;
        window.onload=function(){
            z=1;
            c=1;
        }
        function move(){
            var x = Math.floor((Math.random()*6)+1);
            console.log(x);
            var list = document.querySelectorAll(".col-2")
            for (var i = 0; i < list.length; i++) {
                    list[i].style.visibility = 'hidden'; 
            };
            var before = z;
            z+=x;
            var sum = z;
            document.querySelector(".YourNum").innerHTML="You -> "+z;
            if (z==3) z=22;
            else if (z==5) z=8;
            else if (z==11) z=26;
            else if (z==20) z=29;
            else if (z==27) z=1;
            else if (z==21) z=9;
            else if (z==17) z=4;
            else if (z==19) z=7;
            if(sum!=z&&z<=30){
                document.querySelector(".YourNum").innerHTML+=" To ->"+z;
            }
            if(z<=30)
            {
                document.getElementById(`${c}`).style.visibility = 'visible'
                document.getElementById(`${z}`).style.backgroundColor="gray"
                document.getElementById(`${z}`).style.visibility = 'visible'
                document.querySelector('.btn1').style.visibility='hidden'
                document.querySelector('.message').innerHTML="wait for computer playing..."
                setTimeout(comp,2000)
            }

            if(z==30)
            {
                alert("your are win....");
                z=0;
                c=0;
            }
            if(z>30)
            {
                z=before;
                document.querySelector('.btn1').style.visibility='hidden'
                document.querySelector('.message').innerHTML="wait for computer playing..."
                setTimeout(comp,2000)
            }
            
        }
        function comp(){
            
            var x = Math.floor((Math.random()*6)+1);
            var list = document.querySelectorAll(".col-2")
            for (var i = 0; i < list.length; i++) {
                    list[i].style.visibility = 'hidden'; 
            };
            var before = c;
            c+=x;
            var sum = c;
            document.querySelector(".ComputerNum").innerHTML="computer -> "+c;
            if (c==3) c=22;
            else if (c==5) c=8;
            else if (c==11) c=26;
            else if (c==20) c=29;
            else if (c==27) c=1;
            else if (c==21) c=9;
            else if (c==17) c=4;
            else if (c==19) c=7;
            if(sum!=c && c<=30){
                document.querySelector(".ComputerNum").innerHTML+=" To ->"+c;
            }
            if(c<=30)
            {
                document.getElementById(`${z}`).style.visibility = 'visible'
                document.getElementById(`${c}`).style.backgroundColor="red"
                document.getElementById(`${c}`).style.visibility = 'visible'
                document.querySelector('.btn1').style.visibility='visible'
                document.querySelector('.message').innerHTML="you can playing now..."
            }
            
            if(c==30)
            {
                alert("computer win....");
                z=0;
                c=0;
            }
            
        }