// // Create Obj which is capable of making an API Call
// const request = new XMLHttpRequest();

// // Open the connect to the API with HTTP method & URL
// request.open("GET", "https://restcountries.com/v3.1/all", true);

// // Send the Request to the Server 
// request.send(null);

// // Parse the Text Passed on from the server
// request.onload = function () {
//   var response = JSON.parse(request.responseText);
//   console.log(response);
// }

// request.onerror = function () {
//   console.log("I have some error");
// }

fetch('https://restcountries.com/v3.1/all')
  .then((response) => {
    console.log(response);
    return response.json(); // returns a promise .json() method of response
  })
  .then((resopnseJson) => {
    console.log(resopnseJson);
    resopnseJson.slice(0,5).forEach(country => {
      const [lat, lon] = country.latlng;
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=5b2e7abcace088ef05fea9afddc76b8c`).then((response) => {
        return response.json();
      }).then((weatherJSON) => {
        console.log(weatherJSON);
      })
    });
  }).catch((error) => {
    console.log(error);
  });



