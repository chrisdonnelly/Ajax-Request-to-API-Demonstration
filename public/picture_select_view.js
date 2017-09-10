var PictureView = function(nasaData) {
    this.nasaData = nasaData;
    console.log(nasaData)
}

PictureView.prototype.populate = function() {
    var div = document.getElementById('rover-gallery');
    console.log(this.nasaData);
    console.log(this.nasaData.album);
    console.log(this.nasaData.album.photos);
    var pictures = this.nasaData.album.photos;
    pictures.forEach(function(picture, index) {
        var img = document.createElement('IMG');
        img.setAttribute('src', picture.img_src)
        div.appendChild(img);   
    });
}