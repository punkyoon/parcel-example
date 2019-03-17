const imageList = [require('./imgs/munchlax.png'), require('./imgs/snorlax.png')]

var imageToggleState = false

window.onClickButton = function () {
    const element = document.getElementById('image');
    element.src = imageList[~~(imageToggleState = !imageToggleState)];
}
