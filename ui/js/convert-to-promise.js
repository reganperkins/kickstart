/* eslint-disable func-names */
/*
const asyncMultiply = (a,b, callback){
  if (!a || !b){
    return callback(new Error('Bad input'));
  }
  return callback(null, a*b);
}

asyncMultiply(3,5, (err, result) {
  if (err){
    console.log('ERROR ');
  } else{
    console.log('Multiplication Result ', result); // 15
  }
})

const asyncMultiplyPromise = ikPromisify(asyncMultiply);

asyncMultiplyPromise(3,5).then((result)=>{
  console.log('Multiplication Result ', result); // 15
}).catch((err)=>{
  console.log('ERROR ');
})
*/


const asyncMultiply = (a, b, callback) => {
  if (!a || !b) {
    return callback(new Error('Bad input'));
  }
  return callback(null, a * b);
};

asyncMultiply(3, 5, (err, result) => {
  if (err) {
    console.log('ERROR ');
  } else {
    console.log('Multiplication Result ', result); // 15
  }
});


const ikPromisify = function (fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      const customCallback = (err, ...results) => {
        if (err) {
          return reject(err);
        }
        return resolve(results);
      };
      fn(...args, customCallback);
    });
  };
};


const asyncMultiplyPromise = ikPromisify(asyncMultiply);

asyncMultiplyPromise(3, 5).then((result) => {
  console.log('Multiplication Result ', result); // 15
}).catch((err) => {
  console.log('ERROR', err);
});
