var PictureView = function(nasaData) {
    this.nasaData = nasaData;
}

PictureView.prototype.populate = function() {
    var galleryContainer = document.getElementById('gallery-container');
    while(galleryContainer.firstChild) {
        galleryContainer.removeChild(galleryContainer.firstChild);
      }
    var pictures = this.nasaData.album.photos;
    pictures.forEach(function(picture, index) {
        
        var responsiveDiv = document.createElement('div');
        galleryContainer.appendChild(responsiveDiv);
        responsiveDiv.setAttribute('class', 'responsive');
        
        var galleryDiv = document.createElement('div');
        responsiveDiv.appendChild(galleryDiv);
        galleryDiv.setAttribute('class', 'gallery');
        galleryDiv.setAttribute('id', 'rover-gallery');
        
        var link = document.createElement('a');
        galleryDiv.appendChild(link);
        link.setAttribute('target', '_blank');
        link.setAttribute('href', picture.img_src);
        
        var img = document.createElement('IMG');
        img.setAttribute('src', picture.img_src);
        img.setAttribute('class', 'mars-image')     
        link.appendChild(img);

        var description = document.createElement('div');
        galleryDiv.appendChild(description);
        description.setAttribute('class', 'desc');
        description.innerText = picture.camera.full_name + ' Sol: '+ picture.sol;
    });
}