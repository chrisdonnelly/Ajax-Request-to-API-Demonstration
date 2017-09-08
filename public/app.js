var app = function(){
    var nasaData = new NasaData('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2017-9-7&api_key=Nc2AZ36zbiEtPSs2iwQxCspjOElS6DAXyicAJgDH');
    nasaData.getData();

    var select = document.querySelector('#rover-drop-down');
    var roverSelectView = new RoverSelectView(select, nasaData);
    var detailsElement = document.querySelector('#rover-details');
    var roverDetails = new RoverDetailsView();

    roverSelectView.onChange = function(Country) {
        roverDetailsView.render();
    }

}

window.addEventListener('load', app);