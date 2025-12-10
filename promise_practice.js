// Lets take an example:
// Suppose you want to buy a book from rokomari.com
// First you have to login to the website
// Then you have to search for the book
// Then you have to make payment
// Finally you will get the order confirmation.

const pass = "humaian#2020"
const bookAvailable = true;
const paymentDone = true;

// Defining promises.
function login() {

    console.log("Login in progress...")

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pass === "humaian#2020") {
                console.log("Login successful")
                resolve()
            }
            else {
                reject("Login failed!!!!")
            }
        }, 2000);
    })
    return promise;
}


function searchBook() {
    console.log("Searching for the book...")

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {

            if (bookAvailable) {
                console.log("Book is available")
                resolve()
            }
            else
                reject("Book is not available")

        }, 3000);
    })

    return promise;
}


function makePayment() {
    console.log("Payment is being processed...")

    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {

            if (paymentDone) {
                console.log("Payment successful")
                resolve()
            }
            else
                reject("Payment failed!!!")

        }, 4000);
    })

    return promise;

}

function confirmation() {
    const promise = new Promise((resolve) => {

        setTimeout(() => {

            resolve("Your order is confirmed. You will receive the book soon!!!")

        }, 1000);
    })
    return promise;

    // We can also wrrite this function like this (if thre is no reject case):
    // ...........................
    // const promise = Promise.resolve("Your order is confirmed. You will receive the book soon!!!") ......
}

// Calling or executing the promises

login()
    .then(searchBook)
    .then(makePayment)
    .then(confirmation)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    })