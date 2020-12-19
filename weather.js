var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
// var name = document.querySelector('.name');
// var date = document.querySelector('.date');
// var icon = document.querySelector('.icon');

$(".button").on("click", function() {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=metric&appid=781431958b474e0ff56bb530277f295b';

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(data) {
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

    // console.log('are we good ???',nameValue, dateValue, iconValue, tempValue)

    var containerDiv = $('<div>');
    var text =$('<p>')
        text.text(nameValue);
    var temp =$('<p>')
    temp.text(tempValue);
    var date =$('<p>')
    date.text(dateValue);
    var humi =$('<p>')
    humi.text(humValue);
    var wind =$('<p>')
    wind.text(windValue);
   
    // dressthem how u want

    // 3 punch stick on page
    // console.log('ABOUT OT STICK ON PAGE')
    containerDiv.append(img, text, temp, date, humi, wind)
    
    $('.current').append(containerDiv)
        
    })
})

$(".5daybutton").on("click", function() {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=metric&appid=781431958b474e0ff56bb530277f295b';

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(data) {
        var dateValue = data.list[1].dt_txt;
        var iconValue = data.list[1].weather[0];
        var iconcode = iconValue.icon
        var tempValue = data.list[1].main.temp
        var humValue = data.list[1].main.humidity
        
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        var img = $('<img>')

    img.attr('src', iconurl);

    // console.log('are we good ???',nameValue, dateValue, iconValue, tempValue)


    var containerDiv = $('<div>');
    
    var temp =$('<p>')
    temp.text(tempValue);
    
    var date =$('<p>')
    date.text(dateValue);

    var humi =$('<p>')
    humi.text(humValue);
        
    // dressthem how u want

    // 3 punch stick on page
    console.log('ABOUT OT STICK ON PAGE')
    containerDiv.append(img, temp, date, humi)
    
    $('.day2').append(containerDiv)
        
    })
})

$(".5daybutton").on("click", function() {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=metric&appid=781431958b474e0ff56bb530277f295b';

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(data) {
        var dateValue = data.list[2].dt_txt;
        var iconValue = data.list[2].weather[0];
        var iconcode = iconValue.icon
        var tempValue = data.list[2].main.temp
        var humValue = data.list[2].main.humidity
        
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        var img = $('<img>')

    img.attr('src', iconurl);

    // console.log('are we good ???',nameValue, dateValue, iconValue, tempValue)


    var containerDiv = $('<div>');
    
    var temp =$('<p>')
    temp.text(tempValue);
    
    var date =$('<p>')
    date.text(dateValue);

    var humi =$('<p>')
    humi.text(humValue);
        
    // dressthem how u want

    // 3 punch stick on page
    console.log('ABOUT OT STICK ON PAGE')
    containerDiv.append(img, temp, date, humi)
    
    $('.day3').append(containerDiv)
        
    })
})

$(".5daybutton").on("click", function() {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=metric&appid=781431958b474e0ff56bb530277f295b';

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(data) {
        var dateValue = data.list[3].dt_txt;
        var iconValue = data.list[3].weather[0];
        var iconcode = iconValue.icon
        var tempValue = data.list[3].main.temp
        var humValue = data.list[3].main.humidity
        
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        var img = $('<img>')

    img.attr('src', iconurl);

    // console.log('are we good ???',nameValue, dateValue, iconValue, tempValue)


    var containerDiv = $('<div>');
    
    var temp =$('<p>')
    temp.text(tempValue);
    
    var date =$('<p>')
    date.text(dateValue);

    var humi =$('<p>')
    humi.text(humValue);
        
    // dressthem how u want

    // 3 punch stick on page
    console.log('ABOUT OT STICK ON PAGE')
    containerDiv.append(img, temp, date, humi)
    
    $('.day4').append(containerDiv)
        
    })
})

$(".5daybutton").on("click", function() {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&units=metric&appid=781431958b474e0ff56bb530277f295b';

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(data) {
        var dateValue = data.list[4].dt_txt;
        var iconValue = data.list[4].weather[0];
        var iconcode = iconValue.icon
        var tempValue = data.list[4].main.temp
        var humValue = data.list[4].main.humidity
        
        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        var img = $('<img>')

    img.attr('src', iconurl);

    // console.log('are we good ???',nameValue, dateValue, iconValue, tempValue)


    var containerDiv = $('<div>');
    
    var temp =$('<p>')
    temp.text(tempValue);
    
    var date =$('<p>')
    date.text(dateValue);

    var humi =$('<p>')
    humi.text(humValue);
        
    // dressthem how u want

    // 3 punch stick on page
    console.log('ABOUT OT STICK ON PAGE')
    containerDiv.append(img, temp, date, humi)
    
    $('.day5').append(containerDiv)
        
    })
})

