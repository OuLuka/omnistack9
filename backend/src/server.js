const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const path = require("path");

const routes = require("./routes");

const app = express();

mongoose.connect(
  "mongodb+srv://ouluka:970318@cluster0-8ywt0.mongodb.net/omnistack9?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);
