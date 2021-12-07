const PORT = 4200
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const { Server } = require("http");
const app = express();

 app.listen(PORT, () => console.log(`server running on PORT${PORT}`))