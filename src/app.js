const express= require("express")
const app=express()
const aiRoutes=require("./routes/ai.routes")
const cors=require("cors")
const allowedOrigins = [
    'https://myaicodereviewer.netlify.app/'
];
app.use(express.json())
app.use(cors({
    origin: allowedOrigins
}))

app.use("/ai",aiRoutes)

module.exports=app