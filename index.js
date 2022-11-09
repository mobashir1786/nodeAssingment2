const express=require('express');
const app=express();

app.get('/', (req, res) => {
    res.send(`
    <h1>Express</h1>
    <h3>Express is most popular Node.js FrameWprk.</h3>
    <h3> it require mimimum setup to start an application</h3>
    <h3>it is use to built single page, multi page and mobile app</h3>
    <h3>it help to flow of data into a website</h3>
    <h3>it can create route to perform particular client request</h3>
    `);
})

app.get('/api', (req, res) => {
    res.send("welcome to api page");
})

app.get('/main', (req, res) => {
    res.send("welcome to main page");
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
});