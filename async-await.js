// fetch('https://restcountries.com/v3.1/all')
//   .then((res) => {
//     return res.json();
//   })
//   .then((resJson) => {
//     console.log(resJson)
//   })
//   .catch((error) => {
//     console.log("### Error ###");
//     console.log(error);
//   });


async function fetchCountries() {

  try {
    const response = await fetch('https://restcountries.com/v3.1/all');
    const resJson = await response.json();  
    console.log(resJson);
  } catch (error) {
    console.log(error);
  }
}

// const getCountries = async () => {

// }

fetchCountries();