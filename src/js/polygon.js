const TICKER = "AMZN";

const stock = document.querySelector("#stock");
const newTicker = document.createElement("span");
const url = `https://api.polygon.io/v2/aggs/ticker/${TICKER}/range/1/day/2022-03-31/2022-03-31?apiKey=${API_KEY}`;

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    handleStocks(data);
  });

function handleStocks(data) {
  stock.innerText = `${data.ticker}`;
  console.log(data);
}
