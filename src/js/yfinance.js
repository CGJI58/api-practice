const stock = document.querySelector("#stock");
const watchList = document.querySelector("#watch-list");
const getTicker = document.querySelector("#get-new-ticker");

function handleGetTickerSubmit(item) {
  item.preventDefault();
  const newTicker = getTicker.querySelector("#search-ticker");
  handleUrl(newTicker.value.toUpperCase());
  newTicker.value = "";
}

function handleUrl(newTicker) {
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": `${API_KEY__YAHOOFINANCE}`,
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      useQueryString: "true",
    },
  };
  const URL = `https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data?symbol=${newTicker}&region=US`;

  fetch(URL, options)
    .then((response) => response.json())
    .then((response) => handlewatchList(response))
    .catch((err) => console.error(err));
}

function handlewatchList(data) {
  const holding = document.createElement("span");
  holding.innerText = `${Date(data.prices[0].date)}`;
  console.log(data);
  watchList.appendChild(holding);
}

getTicker.addEventListener("submit", handleGetTickerSubmit);
