//What will the below code log to console? Assume new Date will start at 1000

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log((new Date).getSeconds(), i);
  }, 1000);
}

console.log((new Date).getSeconds(), i);

//seconds starts at 1

//1000 5
//2000 5
//2000 5
//2000 5
//2000 5
//2000 5

//Now change the above code to log
// 1000 0
// 2000 1
// 3000 2
// 4000 3
// 5000 4

// for (var i = 0; i < 5; i++) {
//   let x = i;
//   setTimeout(function () {
//     console.log((new Date).getSeconds(), x);
//   }, (1000 + i * 1000));
// }

var i = 0;
while (i < 5) {
  setTimeout(function () {
    console.log((new Date).getSeconds(), i);
  }, 1000);
  i++;
}


// var date = 1000
// for (let i = 0; i < 5; i++) {
//   // let x = i;

//   setTimeout(function () {
//     console.log((new Date).getSeconds(), i);
//   }, date);
//   date += 1000
// }