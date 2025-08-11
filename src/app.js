const express = require("express");
const cors = require("cors");

const app = express();
const aiRoutes = require("./routes/ai.routes");

const allowedOrigins = [
    "https://myaicodereviewer.netlify.app",
    "http://localhost:5173"
];

app.use(express.json());
app.use(cors({
    origin: function (origin, callback) {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            return callback(null, true);
        } else {
            return callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use("/ai", aiRoutes);

module.exports = app;
