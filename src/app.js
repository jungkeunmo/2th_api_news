import express from "express";
import morgan from "morgan";
import axios from "axios";

const PORT = 3000;
const app = express();

app.set("view engine", "pug");
app.use(morgan(`dev`));

app.get("/", async (req, res) => {
    // https://4leaf-crawling.pe.kr/searchGoogle
    //axios = 요청 
    const apiData = await axios.get("https://4leaf-crawling.pe.kr/searchGoogle");
    console.log(apiData.data);

    const newData = apiData.data.filter((data) => data.type !== "정치")

    res.render("home", { dataList: newData });
});

app.listen(PORT, () => {
    console.log(`${PORT} SERVER START🥕`);
});