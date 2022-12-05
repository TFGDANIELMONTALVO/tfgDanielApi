import app from "./app.js";
import {connectDB} from "./database.js";

app.set("port", 9000);
app.listen(app.get("port"), () => {
  console.log(`Server on port ${app.get("port")}`);
  connectDB();
});