var RoverSelectView = function(selectElement, nasaData) {
    this.selectElement = selectElement;
    this.nasaData = nasaData;
    this.onChange = null;

    this.nasaData.onUpdate = this.populate.bind(this);
    this.selectElement.addEventListener('change', function(event) {
        this.onChange(this.nasaData.rovers[event.target.value]);
    });
}

RoverSelectView.prototype.populate = function() {
    console.log(this.nasaData);
    var rovers = this.nasaData.rovers;
    rovers.forEach(function(rover, index) {
        var option = document.createElement('option');
        option.innerText = rover.name;
        option.value = index;
        this.selectElement.appenChild(option);
    }.bind(this));
}