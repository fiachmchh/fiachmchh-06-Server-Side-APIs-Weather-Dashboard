var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');


$(".button").on("click", function() {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=781431958b474e0ff56bb530277f295b';
    
    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(data) {
        var nameValue = data.city.name

    var containerDiv = $('<div>');

    var text =$('<p>')
        text.text(nameValue);
    
    containerDiv.append(text)
    $('.places').append(containerDiv)
        
    })
})

$(".button").on("click", function() {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=781431958b474e0ff56bb530277f295b';

    console.log(queryURL)

    $.ajax({
        url: queryURL,
        method: "GET"
    })

   
    .then(function (data) {

        for (let i = 8; i <= 32 ; i += 8) {
            var nameValue = data.city.name
         var dateValue = data.list[i].dt_txt;
            var iconValue = data.list[i].weather[0];
            var iconcode = iconValue.icon;
            var tempValue = data.list[i].main.temp;
            var humValue = data.list[i].main.humidity;

            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

            var img = $('<img>')
    
        img.attr('src', iconurl);
    
        var containerDiv = $('<div>');

        var text =$('<p>')
        text.text(nameValue);
        
        var temp =$('<p>')
        temp.text(tempValue +' degrees Celsius');
        
        var date =$('<p>')
        date.text(dateValue);
    
        var humi =$('<p>')
        humi.text('humidity : ' + humValue);
            
        
        containerDiv.append(text, img, temp, date, humi)
        containerDiv.attr('class', 'card-img-top col-md-3')

        console.log(i)
        console.log(dateValue = data.list[i].dt_txt)
        console.log(iconValue = data.list[i].weather[0])
        console.log(tempValue = data.list[i].main.temp)
        console.log(humValue = data.list[i].main.humidity)

        $('.current').empty(containerDiv);
        $('.current').append(containerDiv);
        
        
            
        };
 });
})




$(".5daybutton").on("click", function fiveDay () {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=781431958b474e0ff56bb530277f295b';

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function (data) {

        for (let i = 8; i <= 32 ; i += 8) {
            var nameValue = data.city.name
         var dateValue = data.list[i].dt_txt;
            var iconValue = data.list[i].weather[0];
            var iconcode = iconValue.icon;
            var tempValue = data.list[i].main.temp;
            var humValue = data.list[i].main.humidity;

            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

            var img = $('<img>')
    
        img.attr('src', iconurl);
    
        var containerDiv = $('<div>');

        var text =$('<p>')
        text.text(nameValue);
        
        var temp =$('<p>')
        temp.text(tempValue +' degrees Celsius');
        
        var date =$('<p>')
        date.text(dateValue);
    
        var humi =$('<p>')
        humi.text('humidity : ' + humValue);
            
        
        containerDiv.append(text, img, temp, date, humi)
        containerDiv.attr('class', 'card-img-top col-md-3')

        console.log(i)
        console.log(dateValue = data.list[i].dt_txt)
        console.log(iconValue = data.list[i].weather[0])
        console.log(tempValue = data.list[i].main.temp)
        console.log(humValue = data.list[i].main.humidity)

        
        $('.future').append(containerDiv);
        
        
            
        };
 });
});


