function preLoad() {
    a1 = new Image; a1.src = './images/shutter_speed/shutter-speed-1.jpg';
    a2 = new Image; a2.src = './images/shutter_speed/shutter-speed-2.jpg';
    a3 = new Image; a3.src = './images/shutter_speed/shutter-speed-3.jpg';
    a4 = new Image; a4.src = './images/shutter_speed/shutter-speed-4.jpg';
    a5 = new Image; a5.src = './images/shutter_speed/shutter-speed-5.jpg';
    a6 = new Image; a6.src = './images/shutter_speed/shutter-speed-6.jpg';
    a7 = new Image; a7.src = './images/shutter_speed/shutter-speed-7.jpg';
    a8 = new Image; a8.src = './images/shutter_speed/shutter-speed-8.jpg';
    a9 = new Image; a9.src = './images/shutter_speed/shutter-speed-9.jpg';
}

function im_load(image) {
    document.getElementById(image[0]).src = eval(image + ".src")
    
}