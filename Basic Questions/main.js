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

// let data = "size";
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




// Question 11. ------------------------------------------------


// let name;
// nmae = {} //Typ!
// console.log(name);




// Question 12. ------------------------------------------------

// function fruits() {
//   console.log("Yss");
// }
// fruits.name = "Apple"

// fruits();




// Question 13. ------------------------------------------------

// function sum(a, b) {
//   return a + b
// }

// console.log(sum(1, "2"));




// Question 14. This que has three variations  ------------------------------------------------

// let num = 0;
// console.log(num++);
// console.log(++num);
// console.log(num);

//------------------------------------------------

// let num = 0;
// console.log(num++);
// console.log(num++);
// console.log(num);

//------------------------------------------------

// let num = 0;
// console.log(num++);
// console.log(num--);
// console.log(num);




// Question 15. ------------------------------------------------

// function getAge(...agrs) {
//   console.log(typeof agrs);

// }

// getAge(21)




// Question 16. ------------------------------------------------

// function getAge() {
//   'use strict'
//   age = 21
//   console.log(age);
// }

// getAge();




// Question 17. ------------------------------------------------

// const sum = eval('10*10+5')
// console.warn(sum);

//------------------------------------------------

// const sum = eval('10+10+5')
// console.warn(sum);





// Question 18. ------------------------------------------------
// **How long is yes  accessible ? [Theoretical  Que]
// sessionStorage.setItem('yes', 123)





// Question 19. ------------------------------------------------

// const obj = { 1: "a", 2: "b", 3: "c" }

// console.log(obj.hasOwnProperty("1"));
// console.log(obj.hasOwnProperty(1));





// Question 20. ------------------------------------------------

// const obj = { a: "one", b: "two", a: "again" }
// console.log(obj);
