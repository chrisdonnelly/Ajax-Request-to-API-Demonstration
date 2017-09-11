var app = function(){

    var roverName = null;
    var date = null;
    
    var roverSelect = document.getElementById('rover-drop-down');
    
    roverSelect.addEventListener('change', function() {
        roverName = this.value;      
    })
  
    var dateBox = document.getElementById('date');
    
    dateBox.addEventListener('change', function() {
        date = this.value;
    })

    var getDataButton = document.getElementById('get-data-button');
    
    getDataButton.addEventListener('click', function() {
        var url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/'+roverName+'/photos?earth_date='+date+'&api_key='+NASA_TOKEN
        var nasaData = new NasaData(url);
        nasaData.getData();
        setTimeout(function()
        {
           
            var pictureView = new PictureView (nasaData);
            pictureView.populate();
    
        
        }, 900);
     
     
    })

}

window.addEventListener('load', app);