const items = document.querySelectorAll('.img-item');

for (let i = 0; i < items.length; i++){
    const keyframes ={
        opacity:[0,1],
        rotate:['x 90deg','0'],
    };

const opations = {
    duration: 600,
    deley:i * 300,
    fill: 'forwards',
}

items[i].animate(keyframes,opations);
}