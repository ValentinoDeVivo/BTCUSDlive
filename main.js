document.addEventListener("DOMContentLoaded", () => {
  const api_url = "https://api.binance.com";
  var query = "/api/v1/ticker/24hr";
  query += "?symbol=BTCUSDT";
  var url = api_url + query;

  async function getBTC() {
    const response = await fetch(url);
    const data = await response.json();
    const { priceChangePercent, weightedAvgPrice } = data;
    document.getElementById("percent").textContent = priceChangePercent + "%";
    document.getElementById("price").textContent = "$" + weightedAvgPrice;
    console.log(weightedAvgPrice);
    console.log(priceChangePercent);
    if (priceChangePercent < 0) {
      document.getElementById("btcusdt").style.color = "#ff9100";
      document.getElementById("percent").style.color = "#ff9100";
      document.getElementById("price").style.color = "#ff9100";
    } else {
      document.getElementById("btcusdt").style.color = "#85bb65";
      document.getElementById("percent").style.color = "#85bb65";
      document.getElementById("price").style.color = "#85bb65";
    }
  }

  getBTC();

  setInterval(getBTC, 3000);
});
