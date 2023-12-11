const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const image4 = document.getElementById('image4');
const image5 = document.getElementById('image5');
const image6 = document.getElementById('image6');
const image7 = document.getElementById('image7');
const image8 = document.getElementById('image8');
const image9 = document.getElementById('image9');

var zoom1 =  false
var zoom2 =  false
var zoom3 =  false
var zoom4 =  false
var zoom5 =  false
var zoom6 =  false
var zoom7 =  false
var zoom8 =  false
var zoom9 =  false

image1.addEventListener('click', (e)=>{
    zoom1 = !zoom1;
    if(zoom1){
        image1.classList.add('zoom');
    }else{
        image1.classList.remove('zoom');
    }
})

image2.addEventListener('click', (e)=>{
    zoom2 = !zoom2;
    if(zoom2){
        image2.classList.add('zoom');
    }else{
        image2.classList.remove('zoom')
    }
})

image3.addEventListener('click', (e)=>{
    zoom3 = !zoom3;
    if(zoom3){
        image3.classList.add('zoom')
    }else{
        image3.classList.remove('zoom')
    }
})

image4.addEventListener('click', (e)=>{
    zoom4 = !zoom4;
    if(zoom4){
        image4.classList.add('zoom')
    }else{
        image4.classList.remove('zoom')
    }
})

image5.addEventListener('click', (e)=>{
    zoom5 = !zoom5;
    if(zoom5){
        image5.classList.add('zoom')
    }else{
        image5.classList.remove('zoom')
    }
});

image6.addEventListener('click', (e)=>{
    zoom6 = !zoom6;
    if(zoom6){
        image6.classList.add('zoom')
    }else{
        image6.classList.remove('zoom')
    }
});

image7.addEventListener('click', (e)=>{
    zoom7 = !zoom7;
    if(zoom7){
        image7.classList.add('zoom')
    }else{
        image7.classList.remove('zoom')
    }
});

image8.addEventListener('click', (e)=>{
    zoom8 = !zoom8;
    if(zoom8){
        image8.classList.add('zoom')
    }else{
        image8.classList.remove('zoom')
    }
});

image9.addEventListener('click', (e)=>{
    zoom9 = !zoom9;
    if(zoom9){
        image9.classList.add('zoom')
    }else{
        image9.classList.remove('zoom')
    }
});