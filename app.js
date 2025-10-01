const express = require("express");
const path = require("path");

const app = express();

// Static files (CSS, Images)
app.use(express.static(path.join(__dirname, "public")));

// EJS for HTML
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));




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
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});