var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
// var name = document.querySelector('.name');
// var date = document.querySelector('.date');
// var icon = document.querySelector('.icon');

$(".button").on("click", function() {

    var queryURL = 'http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=781431958b474e0ff56bb530277f295b';

    $.ajax({
        url: queryURL,
        method: "GET"
    })

    .then(function(data) {
        var nameValue = data.city.name
        var dateValue = data['list']['0']['dt_txt'];
        var iconValue = data['list']['0']['weather']['0'];
        var iconcode = iconValue.icon

        console.log(nameValue)
        console.log(dateValue)

        var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";

        var img = $('<img>')

    img.attr('src', iconurl);

    console.log('are we good ???',nameValue, dateValue, iconValue)


    var containerDiv = $('<div>');
    var text =$('<p>')
        text.text(nameValue + ' ' + dateValue);
        
    // dressthem how u want

    // 3 punch stick on page
    console.log('ABOUT OT STICK ON PAGE')
    containerDiv.append(text, img)
    $('.future').append(containerDiv)
        
    })
})



