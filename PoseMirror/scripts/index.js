
document.querySelector('button').onclick = function(){
    window.location = "main.html"
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'intro.jpg') {
      myImage.setAttribute('src', 'images/intro2.jpg');
    } else {
      myImage.setAttribute('src', 'images/intro.jpg');
    }
}