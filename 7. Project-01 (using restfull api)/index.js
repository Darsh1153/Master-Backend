// const express = require("express");
// const users = require("./MOCK_DATA.json");
// const app = express();

// const port = 5000;


// // fetches data based on json
// app.get('/api/users', (req, res) => {
//     return res.json(users);
// })

// // fetches data based on html
// // app.get("/users", (req, res) => {
// //     const html = `
// //     <ul>
// //         ${users.map((user) => `<li>user.first_name</li>`)}
// //     <ul/>
// //     `
// //     res.send(html);
// // })


// // fetches with dynamic id
// // app.get("/api/users/:id", (req, res) => {
// //     const id = Number(req.params.id);
// //     const userId = users.find((user) => user.id === id);
// //     return res.json(userId);
// // })


// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.json(user);
// })


// // post
// app.post("/api/users/", (req, res) => {
//     // TODO : Create new user
//     return res.json({status: "pending"})
// })


// // patch
// app.patch("/api/users/:id", (req, res) => {
//     // TODO : Edit existing user
//     return res.json({status: "pending"})
// })


// // delete
// app.delete("/api/users/:id", (req, res) => {
//     // TODO : delete existing user
//     return res.json({status: "pending"})
// })

// app.listen(port, () => console.log("Server has started!"));





const express = require("express");
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log("sample");
    // return res.json({status:"success"});
    next();
})

app.get("/api/users", (req, res) => {
    res.setHeader("myname", "darsh");
    return res.json(users);
})

app
.route("/api/users/:id")
.get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
})
.patch((req, res) => {
    return res.json({status:"pending"});
})
.delete((req, res) => {
    return res.json({status:"pending"});
})

app.post("/api/users", (req, res) => {
    const body = req.body;
    if(!body || !body.first_name || !body.last_name || !body.email || !body.gender || !body.job_title){
        res.status(400).json({status:"success"});
    }
    users.push({id: users.length+1, ...body});
    fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
        return res.json({status:"pending"});
    })
})

app.listen(7000, () => console.log("server begins"));