const express = require("express");
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())


app.get("/", (req, res) => {
    res.send("Server working 🔥");
});

app.get("/verificationCode/:code", (req, res) => {
    const verificationCode = req.params.code;

    if (Number(verificationCode.slice(-1)) === 7 && verificationCode.length === 6) {
        return res.json({ message: 'Successfully verified', status: 200 });
    }

    return res.status(400).json({ message: 'Please enter correct code', status: 400 });
});

const port = process.env.PORT || 8081;

app.listen(port, () => `Server running on port port 🔥`);