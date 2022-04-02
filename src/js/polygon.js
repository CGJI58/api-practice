const stock = document.querySelector("#stock");
const watchList = document.querySelector("#watch-list");
const getTicker = document.querySelector("#get-new-ticker");

function handleGetTickerSubmit(item) {
  item.preventDefault();
  const newTicker = getTicker.querySelector("#new-ticker").value.toUpperCase();
  // console.log(newTicker);
  handleUrl(newTicker);
}

function handleUrl(newTicker) {
  const url = `https://api.polygon.io/v2/aggs/ticker/${newTicker}/range/1/day/2022-03-31/2022-03-31?apiKey=${API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      handlewatchList(data);
    });
}

function handlewatchList(data) {
  const holding = document.createElement("span");
  holding.innerText = `${data.ticker}`;
  console.log(data);
  watchList.appendChild(holding);
}

getTicker.addEventListener("submit", handleGetTickerSubmit);
