// function convert(a, b) {
//     let result = a * b;
//     if (result == 20) {
//         console.log('correct');
//     } else {
//         console.log('wrong');
//     }
// }
// convert(10, 2);


//image slide show

//start point where
var i = 0;
var images = [];
var time = 3000;

// image list

images[0] = 'image1.jpg';
images[1] = 'image2.jpg';
images[2] = 'image3.jpg';
images[3] = 'image4.jpg';
images[4] = 'image5.jpg';
images[5] = 'image6.jpg';
images[6] = 'image7.jpg';
images[7] = 'image8.jpg';


//change image list
function changeImg() {
    document.slide.src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
    setTimeout("changeImg()", time);
}

window.onload = changeImg;