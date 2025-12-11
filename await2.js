// // Lets take an example:
// Suppose you want to buy a book from rokomari.com
// First you have to login to the website
// Then you have to search for the book
// Then you have to make payment
// Finally you will get the order confirmation.

const password = "humaian#2020";
const bookAvailable = true;
const paymentDone = true;
function Login() {

    console.log("Login in progress...")

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            if (password == "humaian#2020") {
                console.log("Login successful")
                resolve()
            }
            else
                reject("Login failed!!!!")
        }, 2000);
    })
    return promise;
}

function booksearch() {
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
    console.log("Order confirmation in progress...")

    const promise = new Promise((resolve) => {

        setTimeout(() => {

            resolve("Your order has been confirmed! Thank you for shopping with us.");

        }, 3000);
    })
    return promise;
}

async function orderbook() {

    try {
        await Login();
        await booksearch();
        await makePayment();

        const message = await confirmation();
        console.log(message);
    }

    catch (err) {
        console.log(err);
    }

}

orderbook();