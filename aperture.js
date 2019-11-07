function preLoad() {
    a1 = new Image; a1.src = './images/aperture/aperture-1.jpg';
    a2 = new Image; a2.src = './images/aperture/aperture-2.jpg';
    a3 = new Image; a3.src = './images/aperture/aperture-3.jpg';
    a4 = new Image; a4.src = './images/aperture/aperture-4.jpg';
    a5 = new Image; a5.src = './images/aperture/aperture-5.jpg';
    a6 = new Image; a6.src = './images/aperture/aperture-6.jpg';
    a7 = new Image; a7.src = './images/aperture/aperture-7.jpg';
}

function im_load(image) {
    document.getElementById(image[0]).src = eval(image + ".src")
    
}