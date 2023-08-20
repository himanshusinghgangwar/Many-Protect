// $(document).ready(function () {
//     const apikey = `5a1e5e4bb8d74a0c9a245407231808`;
//     const baseUrl = `https://fakestoreapi.com/products/`;

//     $('#weather__search').click(function () {
//             $.ajax({
//                 url: 'https://fakestoreapi.com/products/',
//                 method: 'GET',
//                 success: function (data) {
//                     console.log(data);
//                     displayWeather(data);
//                 },
//                 error: function () {
//                     $('#show').html('<p>Error fetching weather data.</p>');
//                 }
//             });
//     });
//     function displayWeather(data) {
//         const id = data.id;
//         console.log(id);
//         const weatherShow = `
//         <h3>Id :${id}</h3>
//         `;
//         $('#show').html(weatherShow);
//     }
// });
fetch("https://fakestoreapi.com/products/").then(
  res => {
    res.json().then(
      data => {
        console.log(data);
        if (data.length > 0) {

          var temp = "";
          data.forEach((itemData) => {
            temp += "<tr>";
            temp += "<td>" + itemData.id + "</td>";
            temp += "<td>" + itemData.title + "</td>";
            temp += "<td>" + itemData.description + "</td>";
            temp += "<td>" + itemData.category + "</td>";
            temp += "<td> <img src=" + itemData.image + " width=100 height=100 /></td>";
            // <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600"></img>
            temp += "<td>" + itemData.rating.count +"</td>" + "<td>" + itemData.rating.rate +"</td>";
          });
          document.getElementById('data').innerHTML = temp;
        }
      }
    )
  }
)