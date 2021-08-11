var a= document.getElementById('adi');
a.className="fadeinimg";
var counter = 0;
var myimages=["photo.JPG","bnp.jpg","git.png","hacker.png","r.jpeg"];
    // setInterval(function(){
setInterval(function next()
{
      // document.getElementById('radio' + counter).checked = true;
      var a= document.getElementById('adi');
      a.className="fadeinimg";
      counter++;
      
      if(counter > 4){
        counter = 1;
       a.src=myimages[counter];

      }
      else{
        a.src=myimages[counter];
      }
}, 5000);
function next()
{
      // document.getElementById('radio' + counter).checked = true;

      counter++;
      
      if(counter > 4){
        counter = 0;
        a.src=myimages[counter];
      }
      else{
        a.src=myimages[counter];
      }
}
