// Here we learn about JavaScript's async/await syntax for handling asynchronous operations.

// Await is a better approach from calling Promises using .then() and .catch() methods. But we still 
// need to use Promises to work with async/await.

// When we use async keyword before a function, it means that function will always return a Promise.

const paymentSuccess = true
const marks = 90

function enroll() {

    console.log("Course enrollment is in progress...")
    // Using Promise

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (paymentSuccess) {
                console.log("Course enrollment is successful")
                resolve()
            }
            else
                reject("Payment failed, enrollment unsuccessful.")

        }, 2000);
    })

    return promise; // returning promise object because we wrote promise inside enroll function and 
    // we want to use that promise object outside the enroll function.
}

function progress(callback) {
    console.log("Course on progress...")

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (marks >= 80) {
                console.log("Course completed successfully")
                resolve()
            }
            else {
                reject("You don't have enough marks get the certificate");
            }
        }, 3000);
    })
    return promise;
}

function getCertificate() {
    console.log('Your certificate is getting ready!');

    const promise = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Congrats! You have received your course completion certificate.");
        }, 4000)
    })

    return promise;
}


async function course() {

    try {
        await enroll();
        await progress()
        const message = await getCertificate();
        console.log(message);
    }
    catch (err) {
        console.log(err);
    }
}

course();
// enroll()
//     .then(progress)
//     .then(getCertificate)
//     .then((res) => {
//         console.log(res);
//     })

//     .catch((err) => {
//         console.log(err);
//     })

