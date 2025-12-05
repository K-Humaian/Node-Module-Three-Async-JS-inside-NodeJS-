// The main thread (GEC = Global Execution Context) of JavaScript execution is single-threaded or synchronous.
// This means that long-running tasks can block the execution of other code.
// But  Js offloads certain tasks to the browser or Node.js APIs or Api runtime,
// which can handle them asynchronously, allowing the main thread to continue executing other code.
// For example , setTimeout is an asynchronous function that offloads the task of waiting to the browser or Node.js APIs.
// After the specified time has elapsed, the callback function is added to the event queue,
// and will be executed when the main thread is free.
// More like ... axios , fetch , file reading , DOM events , etc.

// Note : Event loop is shared between  main thread and browser / Node.js APIs or Api runtime.

const fs = require('fs')

fs.readFile('file.txt', 'utf-8', (err, data) => {
    if (err)
        console.log("Error reading file:", err)
    console.log("File content:", data)
})

setTimeout(() => {
    console.log("One waiting")
}, 1000)

for (let i = 0; i < 100; i++)
    console.log("Iteration:", i)
