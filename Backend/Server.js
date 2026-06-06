require("dotenv").config();

const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Weather API is running 🚀");
});

app.get("/weather/:city",(req, res) => {
    try {
        const city = req.params.city;

        const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`
        );

        res.json(response.data);

    } catch (error) {
        res.status(500).json({
            message: "City not found"
        });
    }
});

app.listen(process.env.PORT, () => {
    console.log("Server running");
});