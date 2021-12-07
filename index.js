const PORT = 4200;
const axios = require("axios");
const cheerio = require("cheerio");
const { response } = require("express");
const express = require("express");
const { Server } = require("http");
const app = express();
const url = "https://www.theguardian.com/us";
axios(url).then((response) => {
  const html = response.data;
  const $ = cheerio.load(html);
  const comments = [];
  $(".fc-item__title", html).each(function () {
    const title = $(this).text();
    const url = $(this).find("a").attr("href");
    comments.push({
      title,
      url,
    });
  });
  console.log(comments);
});

app.listen(PORT, () => console.log(`server running on PORT${PORT}`));
