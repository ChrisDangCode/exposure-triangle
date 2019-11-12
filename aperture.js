var image = document.getElementById("a");

var answer = '';
var expo_compensation = 0;

// var e1 = document.getElementById("aperture-label-option1");
// var e2 = document.getElementById("aperture-label-option2");
// var e3 = document.getElementById("aperture-label-option3");
// var e4 = document.getElementById("aperture-label-option4");
// var e5 = document.getElementById("aperture-label-option5");
// var e6 = document.getElementById("aperture-label-option6");
// var e7 = document.getElementById("aperture-label-option7");

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




function simulate_exposure_aperture() {




    $('#Group .active').each(function () {
        answer = $(this).attr('id');
    });




    switch (answer) {
        case "aperture-label-option1":
            expo_compensation = 0.4;
            break;

        case "aperture-label-option2":
            expo_compensation = 0.2;
            break;

        case "aperture-label-option3":
            expo_compensation = 0.1;
            break;

        case "aperture-label-option4":
            expo_compensation = -0.2;
            break;

        case "aperture-label-option5":
            expo_compensation = -0.4;
            break;

        case "aperture-label-option6":
            expo_compensation = -0.6;
            break;

        case "aperture-label-option7":
            expo_compensation = -0.8;
            break;
    }




    if ($('button.btn.btn-lg.btn-secondary.simulate').hasClass('active')) {
        image.style.filter = "brightness(1)";
    }
    else {
        image.style.filter = "brightness(" + Number(1 + expo_compensation) +  ")";
    }


    console.log("Expo updated");

}


function change_value(){

    if ($('button.btn.btn-lg.btn-secondary.simulate').hasClass('active')) {
        console.log("Button IS active");

        simulate_exposure_aperture();
        // image.style.filter = "brightness(1)";
    }
    else {
        console.log("Button not active");
        null;
    }


}