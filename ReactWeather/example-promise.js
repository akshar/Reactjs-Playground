// function getTempCallback(location, callback) {
//   callback(undefined, 78);
//   callback('city not found');
// }
//
//   getTempCallback('Bangalore', function(err,temp) {
//   if(err) {
//     console.log("error",err);
//   }else{
//     console.log("success",temp);
//   }
// });

//op : error city not found and success 78.


// function getTempPromise (location) {
//   return new Promise(function(resolve,reject) {
//     setTimeout(function(){
//       resolve(79);
//       reject('city not found');
//     },1000);
//   });
// }

//first is the resolve promise function
// getTempPromise('Bangalore').then(function (temp) {
//   console.log("resolved promise, temp is", temp);
// },function (err) {
//   console.log("err",err);
// });

// op resolved promise, temp is 79

// Challenge


function addPromise(a, b) {
  return new Promise((resolve,reject) => {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }else {
      reject("Invalid input");
    }
  });
}



addPromise(0,8).then(sum => {
  console.log("addition of two numbers is ", sum);
}, err => {
  console.log(err);
})
