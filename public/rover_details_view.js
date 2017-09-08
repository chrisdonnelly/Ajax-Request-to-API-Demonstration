var RoverDetailsView = function(detailsElement) {
    this.detailsElement = detailsElement;
}

RoverDetailsView.prototype.render = function(rover) {
    var pTag = document.createElement('p');
    p.innerText = "<h2>" + rover.name + " <h2>";
    this.detailsElement.appendChild(pTag);
}