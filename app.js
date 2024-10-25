
function onoff() {
    var bulbImageoff = document.getElementById('offbulb');
    var  bulbimageon = document.getElementById('onBulb')

    if(bulbImageoff.style.display === 'none'){
        bulbImageoff.style.display = 'block';
        bulbimageon.style.display = 'none'; 
    }
else{
    bulbImageoff.style.display = 'none';  
        bulbimageon.style.display = 'block'; 
}
  
 
}
