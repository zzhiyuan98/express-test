const express = require("express");
const app = express();

app.get("/", async (req, res) => {
  const data = await getData();
  if (data) {
    res.status(200).json({
      q: data.setup,
      a: data.punchline,
    });
  } else {
    res.send('no data');
  }
});

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

async function getData() {
  try {
    const res = await fetch("https://official-joke-api.appspot.com/random_joke");
    return await res.json();
  } catch (error) {
    return null;
  }
}
