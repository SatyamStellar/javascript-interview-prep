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





// Question 21. ------------------------------------------------

// for (let i = 1; i < 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }




// Question 22. ------------------------------------------------

// const yes1 = () => console.log("first");
// const yes2 = () => setTimeout(() => console.log("second"));
// const yes3 = () => console.log("third");

// yes2();
// yes1();
// yes3();




// ** For Question 23 Check Html file



// Question 24. ------------------------------------------------

// const person = {
//   name: 'Satyam'
// };

// function hey(age) {
//   return `${this.name} is ${age}`
// }


// console.log(hey.call(person, 21));
// console.log(hey.bind(person, 21));




// Question 25. ------------------------------------------------

// function hey() {
//   return (() => 0)();
// }

// console.log(typeof hey());


//  ------------------------------------------------

// function hey() {
//   return () => 0;
// }

// console.log(typeof hey());





// Question 26. ------------------------------------------------

// console.log(typeof typeof 1);




// Question 27. ------------------------------------------------

// const numbers = [1, 2, 3]
// numbers[9] = 11;
// console.log(numbers);





// Question 28. ------------------------------------------------

// const numbers = [1, 2, 3]
// numbers[3] = numbers;
// console.log(numbers);


// Question 29. ----------------------------------------------------

// ** Everything in JS is either a....

// *** a: primitve or object
// *** b: function of object
// *** c: olny object
// *** d: number of object

// ** Which one of this is True






// Question 30. ------------------------------------------------

// console.log(!!null);
// console.log(!!"");
// console.log(!!1);





// Question 31. ------------------------------------------------

// console.warn(setInterval(() => console.log("hi"), 1000
// ));
// console.warn(setInterval(() => console.log("hi2"), 1000
// ));
// console.warn(setInterval(() => console.log("hi3"), 1000
// ));







// Question 32. ------------------------------------------------

// console.log([..."anil"]);





// Question 33. ------------------------------------------------

// let num = 1 + 5 + "2";
// console.log(typeof num);

//  ------------------------------------------------

// console.log(typeof 1 + 2 + "2");

//  ------------------------------------------------

// console.log(typeof (1 + 2 + "2"));







// Question 34. ------------------------------------------------

// console.log([] == []);





// Question 35. ------------------------------------------------

// let data = [1, 2, 3].map(num => {
//   if (typeof num === "number") return num;
//   return num * 2;
// })

// console.log(data);


//  ------------------------------------------------


// let data = [1, 2, 3].map(num => {
//   if (typeof num === Number) return num;
//   return num * 2;
// })

// console.log(data);






// Question 36. ------------------------------------------------

// function getInfo(member) {
//   member.name = "Satyam"
// }

// const person = {
//   name: "Kapil"
// }

// getInfo(person)

// console.log(person);







// Question 37. ------------------------------------------------

// function Car() {
//   this.make = 'tata';
//   return { make: 'kia' }
// }
// const mycar = new Car();
// console.log(mycar.make);






// Question 38. ------------------------------------------------
// (() => {
//   let x = (y = 10)
// })(
// );
// console.log(typeof x, x);


//  ------------------------------------------------


// (() => {
//   let x = (y = 10)
// })(
// );
// console.log(typeof x, x);




// Question 39. ------------------------------------------------
// (() => {
//   let x = y = 10
// })();

// console.log(typeof y, y);




// Question 40. ------------------------------------------------
// console.log(!true - true);

// console.log(!true + true);
