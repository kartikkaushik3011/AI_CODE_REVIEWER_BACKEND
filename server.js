const app=require("./src/app")
require("dotenv").config()

app.listen(process.env.PORT)