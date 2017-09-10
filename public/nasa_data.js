var NasaData = function(url) {
    this.url = url;
    this.album = [];
}

NasaData.prototype.getData = function() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', this.url);
    xhr.addEventListener('load', function() {
        if(xhr.status !== 200) return;
        var jsonString = xhr.responseText;
        this.album = JSON.parse(jsonString);
    }.bind(this));
    xhr.send();
}