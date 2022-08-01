var circ = document.querySelectorAll('#sunglasses');
var newq;
let h,w,nh,nw,s; 

function newPosition(){   
  h = parent.innerHeight;
  w = window.innerWidth;
  nh = Math.floor(Math.random() * h) - 50;
  nw = Math.floor(Math.random() * w) - 100;
  s = Math.floor(Math.random()*1000) + 1000;
  return [nh,nw,s];       
}

circ.forEach(
  function circ(myclass) {
  var newq = newPosition();
  $(myclass).addClass("rotate")   
  $(myclass).animate({ 
    top: newq[0], left: newq[1]
    },
    newq[2],   
    function(){
        circ(myclass);            
    });

  $(myclass).animate()
});
