// Question 1. -------------------------------------------------
//   function fruits() {
//     console.log(name);
//     console.log(price);

//     var name = "Apple";
//     let price = 20;
//   }
// fruits();


// Question 2. ------------------------------------------------[hint: global scope]
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i), 1;
//   })
// }




// Question 3. ------------------------------------------------[hint: block scope]
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i), 1;
//   })
// }




// Question 4. ------------------------------------------------

//   console.warn(+false)
// console.warn(typeof +false);;



// Question 5. ------------------------------------------------

//   console.warn(!"anil");
// console.warn(typeof ("anil"));



// Question 6. ------------------------------------------------

//   let data = "size";
// const bird = {
//   size: "small",
// };

// console.warn(bird[data]);
// console.warn(bird["size"]);
// console.warn(bird.size);
// console.warn(bird.data);



// Question 7. ------------------------------------------------[hint: memroy reference]


// let c = {
//   name: "satyam"
// }

// let d;
// d = c;
// c.name = "tomar";
// console.log(d.name);




// Question 8. ------------------------------------------------

// var x;
// var x = 10;
// console.warn(x);




// Question 9. ------------------------------------------------

// var x;
// let x = 10;
// console.warn(x);



// Question 10. ------------------------------------------------

// let a = 3;
// let b = new Number(3)
// console.log(a == b);
// console.log(a === b);

