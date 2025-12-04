// The main thread of JavaScript execution is single-threaded or synchronous.
// This means that long-running tasks can block the execution of other code.


setTimeout(() => {
    console.log("One waiting")
}, 1000)

for (let i = 0; i < 100; i++)
    console.log("Iteration:", i)
