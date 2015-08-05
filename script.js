// window.onload = addListeners();
// var offX;
// var offY;


// function addListeners(){
//     document.getElementById('circle').addEventListener('mousedown', mouseDown, false);
//     window.addEventListener('mouseup', mouseUp, false);

// }

// function mouseUp()
// {
//     window.removeEventListener('mousemove', divMove, true);
// }

// function mouseDown(e){
//   var div = document.getElementById('circle');
//   offY= e.clientY-parseInt(div.offsetTop);
//   offX= e.clientX-parseInt(div.offsetLeft);
//  window.addEventListener('mousemove', divMove, true);
// }

// function divMove(e){
//     var div = document.getElementById('circle');
//   div.style.position = 'absolute';
//   div.style.top = (e.clientY-offY) + 'px';
//   div.style.left = (e.clientX-offX) + 'px';
// }

$(document).ready(function() {
    
    $(document).on('click', function(){
        var x = event.clientX;
        var y = event.clientY;
        var coords = x+"x "+y+"y";
        document.getElementById("coordinates").innerHTML = coords;

        $(this).offset({top:y.top, left:x.left});
        
    });
        
});
