const express = require('express');

const app = express()

app.get('/awaitapi', async (req, res) => {

    let result = await fetch("https://jsonplaceholder.typicode.com/todos/1")

    // console.log(result);

    result = await result.json()
    console.log(result); // Print the result in the server console and the result will be print in json format
    res.json(result);

})

app.listen(3000, () => {
    console.log("Server is running on port 3000....");
})