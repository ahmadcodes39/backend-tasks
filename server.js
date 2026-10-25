import app, { port } from "./app.js";

app.listen(port,()=>{
    console.log("App running on port:",port)
})