var a= document.getElementById('adi');
var counter = 0;
var myimages=["photo.JPG","bnp.jpg","git.png","hacker.png","r.jpeg"];
setInterval(function next()
{
     
      counter++;
      
      if(counter > 4){
        counter = 1;
        
        a.className="fadeinimg";
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
        
      }
      else{
        
        a.className="fadeinimg";
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
      }
      
}, 5000);
function next()
{

      counter++;
      
      if(counter > 4){
        counter = 0;
        a.className="fadeinimg";
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
      }
      else{
        a.className="fadeinimg";
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
      }
}
function before()
{

      counter--;
      
      if(counter > 4){
        counter = 0;
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
      }
      else if(counter<0){
        counter = 4;
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
      }
      else{
        a.src=myimages[counter];
        var b="ADITYA KUMAR ";
        b.className += "tex";
        document.getElementsByClassName('text2').innerHTML=b;
      }
}

