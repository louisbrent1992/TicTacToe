const express = require("express");
const path = require("path");
const http = require("http");
const { exec } = require("child_process");

const port = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use("/images", express.static(path.join(__dirname, "images")));

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.set("port", port);
const server = http.createServer(app);

server.listen(port, () => {
	console.log(`*** Server is up and running on port ${port} ***`);
	exec(`open http://localhost:${port}`);
});
