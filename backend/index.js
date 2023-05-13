const express = require("express");
const app = express();
const connection = require("./db");
const userRouter = require("./routes/users.router");
require("dotenv").config();
app.use(express.json());


app.use("/api/users", userRouter);
app.listen(3000, async () => {
	try {
		await connection;
		console.log("mongodb connected...");
	} catch (error) {
		console.log("Error connecting to database");
	}
	console.log("Server running on port 3000");
});