function addNum(){
  var N1 = parseInt(document.getElementById("N1").value);
  var N2 = parseInt(document.getElementById("N2").value);
  if((!isNaN(N1)) && (!isNaN(N2))){
document.getElementById("Output").innerHTML = N1 + N2; 
  };
};
function splitNum(){
  var Na1 = parseInt(document.getElementById("Na1").value);
  if (Na1 % 2 == 0) {
    document.getElementById("odEv").innerHTML = "Even";
  } else {
    document.getElementById("odEv").innerHTML = "Odd";
  }
}
function doAverage(){    
    var aveArray = document.getElementById("arrayNum").value;  
    var xforms = Array.from(aveArray.split(/[\s,]+/), Number);
  xforms.sort(function(a, b){return b - a});
 xform = xforms.filter(function(number) {
  return number > 0 ;
});
  var xformAv = 0;
  for ( i = 0; i < xform.length; i++) {
   xformAv += xform[i];
    if (xform[i] == 0)
    {
      xform.splice(i,1);      
    }
  };
 var xformOut = xformAv/xform.length;
 document.getElementById("avOut").innerHTML = "The precise Mean is: " + xformOut + "<br>The rounded Mean is: " +  + Math.floor(xformOut);
 document.getElementById("avOut2").innerHTML = "The Smallest Number is: " + xform[xform.length -1]  +"<br>The Largest Number is :"+ xform[0];
