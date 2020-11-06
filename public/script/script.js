var myImages = [
    "https://i.pinimg.com/originals/9d/40/b7/9d40b75e453033c39529b5dc39d7a857.jpg",
    "https://richardtech.net/wp-content/uploads/2015/07/img0_3840x2160-scaled.jpg",
    "https://cdn.wccftech.com/wp-content/uploads/2017/03/windows-10-wallpaper.jpg",
    "https://cdn.wallpaperhub.app/cloudcache/e/2/2/0/a/f/e220afa01289be47cc5aba6af8e3689d4b5b3c3b.jpg"]; 
var imgShown = document.body.style.backgroundImage;
var newImgNumber =Math.floor(Math.random()*myImages.length);
document.body.style.backgroundImage = 'url('+myImages[newImgNumber]+')';