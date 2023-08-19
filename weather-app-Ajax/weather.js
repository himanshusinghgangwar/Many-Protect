$(document).ready(function () {
    const apikey = `5a1e5e4bb8d74a0c9a245407231808`;
    const baseUrl = `http://api.weatherapi.com/v1/`;

    $('#weather__search').click(function () {
        //get value from input field
        var city = $("#city__search").val();
        //check not empty
        if (city != '') {
            const url = `${baseUrl}current.json?key=${apikey}&q=${city}`;
            $.ajax({
                url: url,
                method: 'GET',
                success: function (data) {
                    console.log(data);
                    displayWeather(data);
                },
                error: function () {
                    $('#show').html('<p>Error fetching weather data.</p>');
                }
            });
        }
    });
    function displayWeather(data) {
        // declaration data
        const cityName = data.location.name;
        const region = data.location.region;
        const temperature = data.current.temp_c;
        // which type of format show the data style
        const weatherShow = `
        <h3>City Name :${cityName}</h3>
        <h4>State :${region}</h4>
        <h4>Temperature celcis:${temperature}</h4>
        `;
        // show the data 
        $('#show').html(weatherShow);
    }
});