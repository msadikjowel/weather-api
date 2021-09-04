const apiKey = `17b82839bf0b37b6dd8ff1f5368afeee`


const search = () => {
    const inputValue = document.getElementById('input').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
    console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => displayWeather(data))

}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayWeather = cityName => {

    // clear input value after search button clicked
    const input = document.getElementById('input')
    input.value = ''

    setInnerText('city', cityName.name);
    setInnerText('temp', cityName.main.temp);
    setInnerText('condition', cityName.weather[0].main);

    const imgURL = `http://openweathermap.org/img/wn/${cityName.weather[0].icon}@2x.png`;
    const img = document.getElementById('image');
    img.setAttribute('src', imgURL);
    /* document.getElementById('city').innerText = cityName.name;

    document.getElementById('temp').innerText = cityName.main.temp;

    document.getElementById('condition').innerText = cityName.weather[0].main;
 */

}