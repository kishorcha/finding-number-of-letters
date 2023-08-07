import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
// Add this line after app is initialized
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs")
});

app.post("/submit", (req, res) => {
  const number=req.body["fName"].length + req.body["lName"].length
  res.render("index.ejs",{numofl:number})
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
