var aperture = document.getElementById("aperture");
var shutter_speed = document.getElementById("shutter-speed");
var iso = document.getElementById("iso");
var exposure = document.getElementById("exposure");
var clouds = document.getElementById("cover-image");
var expo_val = 0;

expo_val = Number(aperture.value) + Number(shutter_speed.value) + Number(iso.value);
exposure.innerHTML = expo_val;


aperture.oninput = function(){
    expo_val = Number(this.value) + Number(shutter_speed.value) + Number(iso.value);
    exposure.innerHTML = expo_val;
    clouds.style.filter = "brightness("+ Number(expo_val/10) + ")";
}

shutter_speed.oninput = function(){
    expo_val = Number(this.value) + Number(iso.value) + Number(aperture.value);
    exposure.innerHTML = expo_val;
    clouds.style.filter = "brightness("+ Number(expo_val/10) + ")";
}

iso.oninput = function(){
    expo_val =  Number(this.value) + Number(shutter_speed.value) + Number(aperture.value);
    exposure.innerHTML = expo_val;
    clouds.style.filter = "brightness("+ Number(expo_val/10) + ")";
}






















