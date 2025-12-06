// Lets understand the use of callback functions in asynchronous JavaScript with example

// Suppose you are willing to do a course on a platform like Udemy or Coursera.
// You visit the website and select a course to enroll in.
// After selecting the course, you need to make the payment. and wait for the payment to be processed.
// Once the payment is successful, you will successfully enroll in the course.
// When you complete the course, you will receive a certificate of completion.

// Here everything is connected or dependent to each other, 
// like make payment -> enrolled -> complete course -> get certificate.

// there are main functions that are enrolling in the course when paid , progressing through the course  
// and getting the certificate after completing the course.

const paymentSuccess = true
const marks = 80

function enroll(callback) {

    console.log("Course enrollment is in progress...")

    setTimeout(() => {
        if (paymentSuccess) {
            console.log("Course enrollment is successful")
            callback()
        }
        else
            console.log("Payment failed, enrollment unsuccessful.")

    }, 2000);

}

function progress(callback) {
    console.log("Course on progress...")

    setTimeout(() => {
        if (marks >= 80) {
            console.log("Course completed successfully")
            callback()
        }
        else {
            console.log("You don't have enough marks get the certificate");
        }
    }, 3000);
}

function getCertificate() {
    console.log('Your certificate is getting ready!');
    setTimeout(() => {
        console.log("Congrats! You have received your course completion certificate.");
    }, 4000)
}

enroll(() => {
    progress(getCertificate)
})