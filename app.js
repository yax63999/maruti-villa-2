const express = require("express");
const path = require("path");

const app = express();

// EJS for HTML
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


// Static files (CSS, Images)
app.use(express.static(path.join(__dirname, "public")));

// Home page route
app.get("/", (req, res) => {
  res.render("home", {
    companyName: "Maruti Villa Valsad",
    tagline: "Building Dreams with Trust",
    location: "Valsad, Gujarat",
    about: "We are a trusted construction company delivering quality projects."
  });
});


// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});