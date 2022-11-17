var myCanvas = document.getElementById("myCanvas");
var context = myCanvas.getContext("2d");

nhanvat = {
    x: 100 , y: 500 
}
nhanvat2 = {
    x: 200 , y: 500
}
setInterval(start,5);

function start(){
    context.clearRect(0,0,300,600);
    context.fillStyle = 'black';
    context.fillRect(nhanvat.x,nhanvat.y,25,25);
    context.fillRect(nhanvat2.x,nhanvat2.y,25,25);
    if(nhanvat.x <= 0 || nhanvat.x + 25 >= 300){
        console.log("thua");
    }
    if(nhanvat2.x <= 0 || nhanvat2.x + 25 >= 300){
        console.log("thua");
    }  
}
document.addEventListener("keydown", key => {
    switch(key.keyCode) {

        case 37:
           if(nhanvat.x >0)
           nhanvat.x -=5;
           break;
        case 38:
            if(nhanvat.y >0)
            nhanvat.y -=5;
            break;
        case 39:
            if(nhanvat.x + 25 < 300)
            nhanvat.x +=5;
            break;
        case 40:
            if(nhanvat.y + 25 < 600)
            nhanvat.y +=5;
            break;

    }
});
document.addEventListener("keydown", key=> {
    switch(key.keyCode){
        
        case 65: 
            if(nhanvat2.x >0 )
            nhanvat2.x -=5;
            break;
        case 87:
            if(nhanvat2.y >0)
            nhanvat2.y -=5;
            break;
        case 68:
            if(nhanvat2.x + 25 <300)
            nhanvat2.x +=5;
            break; 
        case 83: 
            if(nhanvat2.y + 25 < 600)
            nhanvat2.y +=5;
            break;
    }
})