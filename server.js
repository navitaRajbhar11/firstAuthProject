const express = require("express");
const app = express();
const PORT = 5000;

const UserRouter = require("./routes/user");
const connectMongoDb = require("./connection");
const { logReqRes } = require("./middleware");

//middleware - plugin
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // ⬅️ Important for form POST

// Set EJS as the view engine
app.set("view engine", "ejs");

// Connect to MongoDB
connectMongoDb();

app.use(logReqRes("log.txt"));

// Routes
app.use("/user", UserRouter);
// Start server
app.listen(PORT, () => console.log(`server started in port ${PORT}`));
