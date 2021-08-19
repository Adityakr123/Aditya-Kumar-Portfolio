var a= document.getElementById('adi');
var counter = 0;
var myimages=["photo.JPG","git.jpg","bnp.jpg","hacker.jpg","r.jpg"];
setInterval(function next()
{
     
      counter++;
      // var a = new Array(5);
      a.className="fadeinimg";
      // a.className="container";
      if(counter > 4){
        counter = 1;
        
       
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
        
      }
      else{
        
        
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
        // a.className="container";
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
        // var myimage=["photo.JPG","git.png","bnp.jpg","hacker.png","r.jpeg"];
        // var b= document.getElementById('aditya');
        // b.className="fadeinimg";
        // b.src=myimage[counter];
        //  document.getElementById('aditya').innerHTML=myimage[counter];
      }
      else{
        a.className="fadeinimg";
        // a.className="container";
        a.src=myimages[counter];
        // document.getElementById('aditya').innerHTML="ADITYA";
        // var myimage=["photo.JPG","git.png","bnp.jpg","hacker.png","r.jpeg"];
        // var b= document.getElementById('aditya');
        // b.className="fadeinimg";
        // b.src=myimage[counter];

        // document.getElementById('aditya')
        // b.
        // document.getElementById('aditya').innerHTML=myimage[counter];
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

      }
}
