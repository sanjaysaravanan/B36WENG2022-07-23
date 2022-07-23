// console.log("Line 1");


// setTimeout(function timout() {
//   console.log("Line 5")
// }, 3000)


// console.log("Line 9");
async function Func2() {
  consolef.log("Line 17");
}


// const Func1 = async () => {
//   try {
//     const response = await fetch('https://do.ceo/api/breeds/image/random');
//     const responseJson = await response.json();
//     console.log(responseJson);
//     console.log("Line 35");
//   } catch (error) {
//     console.log("Error", error);
//   }
// };



// console.log('Line 41');

// Func1();

// console.log("Line 45");


async function Func1() {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const responseJson = await response.json();
    return responseJson;
  } catch (error) {
    console.log("Error", error);
  }
};

// const result = Func1().then();
console.log(Func1());

// Return Type of an async keyword function: Promise Object
