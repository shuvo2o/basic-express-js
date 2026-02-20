const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/about', (req, res) => {
    res.send('This is about page')
})
app.get('/contact', (req, res) => {
    res.send('This is contact page')
})

app.put('/edit-post/:id', (req, res) => {
    console.log("Editing Put request");
    res.send("Editing Post Successful")
})
app.patch('/edit-post/:id', (req, res) => {
    console.log("Editing Patch request");
    res.send("Editing Patch Successful")
})
app.delete('/post/:id', (req, res) => {
    const postId= req.params.id;
    console.log("Delete request");
    console.log(postId);
    res.send("Deleting Successful")
})

app.listen(port, () => {
    console.log(`Example app listening port ${port}`)
})