// Understanding Promises in JavaScript

const stat = true;

console.log('task 1')

//  Defining a promise
const promise = new Promise((resolve, reject) => {

    setTimeout(() => {
        if (stat)
            resolve('task 2') // resolve function requires an value to be passed which is task 2,

        else
            reject('task failed') // reject function requires an error message to be passed which is task failed
    }, 2000);
});

// Executing or calling a promise

promise
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })

console.log('task 3')