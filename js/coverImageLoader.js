// Randomly select a number between 1 and 34
var imageNumber = Math.floor(Math.random() * 34) + 1;
var imageAddress = '/images/cover_images/blue' + imageNumber + '.jpg';
document.getElementById('coverImage').innerHTML = '<div class="hero" style="background-image: url(' + imageAddress + ');"><h1 class="display_title">Doug Duhaime</h1></div>';