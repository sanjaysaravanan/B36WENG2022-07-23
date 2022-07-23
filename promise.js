// Promsie All
const FloorWork = new Promise((resolve,reject) => {
  setTimeout(() => {
    resolve({ code: 1, msg: "Floor work is Done" })
    // reject({ code: 0, errorMsg: "Floor work is Due for completion" });
  }, 3000);
});

// const InnerPainting = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve({ code: 1, msg: "Inner Paiting is Done" })
//   }, 2000)
// })

const FurnitureWork = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ code: 1, msg: "Furniture is Done" })
  }, 2000)
});


const OuterPainting = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({ code: 1, msg: "Outer Painting is Done" })
    reject({ code: 0, errorMsg: "Outer painting is Due for completion" });
  }, 5000);
});


Promise.all([FloorWork, FurnitureWork, OuterPainting]).then((values) => {
  console.log(values);
}).catch(error => console.log(error));
