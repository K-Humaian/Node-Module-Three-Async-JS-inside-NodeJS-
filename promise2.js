// Solving callback hell using Promises.

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



enroll()
    .then(progress)
    .then(getCertificate)
    .then((res) => {
        console.log(res);
    })

    .catch((err) => {
        console.log(err);
    })

// by using catch at the end we can handle or show all the errors in one place.