let form = document.querySelector(' #input')
form.onsubmit = (e) => {
    e.preventDefault()
    let city = form.city.value

    getData(city)
    form.city.value = ''
}
let getData = async (city) => {
    let image = document.querySelector('#image')

    let preData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=527b6c3687687bb1de65dd88d9808cfa`)
    let data = await preData.json()
    console.log(data);
    let feelLike = data.weather[0].main
    document.querySelector('.main').innerHTML = feelLike
    let temp = Math.ceil(Number(data.main.temp) - 273)

    document.querySelector('.temp').innerHTML = temp + '°C'

    document.querySelector('.city').innerHTML = data.name
    if (feelLike == 'Rain') {
        image.src = 'https://img.icons8.com/ios/50/000000/rainy-weather.png'
    }
    if (feelLike == 'Clouds') {
        image.src = 'https://img.icons8.com/wired/64/000000/clouds.png'
    }
    if (feelLike == 'Sunny') {
        image.src = 'https://img.icons8.com/wired/64/000000/sun.png'
    }
    if (feelLike == 'Mist') {
        image.src = 'image/fog.png'
    }
    if (feelLike == 'Clear') {
        image.src = 'image/cloudy.png'
    }

}