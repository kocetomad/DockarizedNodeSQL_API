function setup(){
    var button = select('#submit');
    button.mousePressed(Submit);
    noCanvas();
}
function draw(){
}

function Submit() {
    var lat=select('#lat').value();
    var longt=select('#longt').value();
    console.log(lat,longt);
    loadJSON('insert/'+lat+'/'+longt);

}