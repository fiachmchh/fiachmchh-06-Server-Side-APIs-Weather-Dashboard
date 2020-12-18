var button = document.querySelector('.button');
var inputValue = document.querySelector('.inputValue');
var name = document.querySelector('.name');
var date = document.querySelector('.date');
var icon = document.querySelector('.icon');


button.addEventListener('click', function(){
    fetch('http://api.openweathermap.org/data/2.5/forecast?q='+inputValue.value+'&appid=781431958b474e0ff56bb530277f295b')
.then(response => response.json())
.then(data => {
    console.log(data)
    var nameValue = data.city.name
    var dateValue = data['list']['0']['dt_txt'];
    var iconValue = data['list']['0']['weather']['0'];
    var iconcode = iconValue.icon

    var iconurl = "http://openweathermap.org/img/w/" + iconcode + ".png";
    console.log(iconurl)
    console.log(dateValue)

    // name.innerHTML = nameValue;
    // date.innerHTML = dateValue;
    // icon.innerHTML = iconValue;

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


//.catch(err => alert("wrong city name"))
})
