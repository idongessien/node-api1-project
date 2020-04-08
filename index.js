const express = require("express");

const server = express();

server.use(express.json());

let users = [
    {
        id: 1.0,
        name: "Idong Essien",
        bio: "Struggling Freelance #WebDesigner 👨🏾‍💻 😅 , #SoftwareDeveloper Intern 👨🏾‍🎓and Doggo Dad . I drive stick 🕹 ."
    },
    {
        id: 1.1,
        name: "Uduak Ekwere",
        bio: "Eyen eka ke Eka Idong ."
    },
    {
        id: 1.2,
        name: "Otu Abasi",
        bio: "Friend ke Idong ."
    },
    {
        id: 1.3,
        name: "Abasi Ekong",
        bio: "Also a struggling Freelance #WebDesigner 👨🏾‍💻 ."
    },
];

server.get("/", (req, res) => {
    res.json({ api: "running ..." });
});

server.post("/api/users", (req, res) => {
    const userInfo = req.body;

    users.push(userInfo);

    res.status(201).json(users);
})

server.get("/api/users", (req, res) => {
    res.json(users);
});

server.get("/api/users/:id", (req, res) => {
    const id = req.params.id

    const user = users.find((user) => user.id == id);

    if(user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" })
    }
});

const port = 6000;
server.listen(port, () => console.log(`\n=== API listening on port ${port}. ===\n`));