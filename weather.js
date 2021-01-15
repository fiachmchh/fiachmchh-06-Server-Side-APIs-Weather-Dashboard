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
    
   
    // dressthem how u want

    // 3 punch stick on page
    
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
        var nameValue = data.city.name
        var dateValue = data.list[0].dt_txt;
        var iconValue = data.list[0].weather[0];
        var iconcode = iconValue.icon
        var tempValue = data.list[0].main.temp
        var humValue = data.list[0].main.humidity
        var windValue = data.list[0].wind.speed
        // var uviValue = data.list[0].
    
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
    var wind =$('<p>')
    wind.text('windspeed : ' + windValue + ' mph');
   
    
    $('.current').empty();
    $('.day2').empty();
    $('.day3').empty();
    $('.day4').empty();
    $('.day5').empty();
    containerDiv.append(img, text, temp, date, humi, wind)
    $('.current').append(containerDiv)
        
    })
})




$(".5daybutton").on("click", function () {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=781431958b474e0ff56bb530277f295b';

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function (data) {

        for (let i = 8; i <= 32 ; i += 8) {
         var dateValue = data.list[i].dt_txt;
            var iconValue = data.list[i].weather[0];
            var iconcode = iconValue.icon;
            var tempValue = data.list[i].main.temp;
            var humValue = data.list[i].main.humidity;

            var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

            var img = $('<img>')
    
        img.attr('src', iconurl);
    
        var containerDiv = $('<div>');
        
        var temp =$('<p>')
        temp.text(tempValue +' degrees Celsius');
        
        var date =$('<p>')
        date.text(dateValue);
    
        var humi =$('<p>')
        humi.text('humidity : ' + humValue);
            
        
        containerDiv.append(img, temp, date, humi)

        console.log(i)
        console.log(dateValue = data.list[i].dt_txt)
        console.log(iconValue = data.list[i].weather[0])
        console.log(tempValue = data.list[i].main.temp)
        console.log(humValue = data.list[i].main.humidity)

        // $('.day2').append(containerDiv);
        $('.day3').append(containerDiv);
        // $('.day4').append(containerDiv);
        // $('.day5').append(containerDiv);
            
        };
 });
});

// $(".5daybutton").on("click", function() {

//     var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=metric&appid=781431958b474e0ff56bb530277f295b';

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })

//     .then(function(data) {
//         var dateValue = data.list[16].dt_txt;
//         var iconValue = data.list[16].weather[0];
//         var iconcode = iconValue.icon
//         var tempValue = data.list[16].main.temp
//         var humValue = data.list[16].main.humidity
        
//         var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

//         var img = $('<img>')

//     img.attr('src', iconurl);

//     var containerDiv = $('<div>');
    
//     var temp =$('<p>')
//     temp.text(tempValue +' degrees Celsius');
    
//     var date =$('<p>')
//     date.text(dateValue);

//     var humi =$('<p>')
//     humi.text('humidity : ' + humValue);
    
//     containerDiv.append(img, temp, date, humi)
    
//     $('.day3').append(containerDiv)
        
//     })
// })
