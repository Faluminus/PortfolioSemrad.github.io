function Datum(){
  setInterval(() => {
    const dtd =  new Date();
    const dateString = "<span style='color: red;'>DATE: </span> " + dtd.getDate() + "<span style='color: red;'> / </span>" + (dtd.getMonth()+1) + "<span style='color: red;'> / </span>" + dtd.getFullYear() + "<span style='color: red;'> ||||| </span>" + dtd.getHours() + " : " + dtd.getMinutes() + " : " + dtd.getSeconds();
    document.getElementById("date").innerHTML = dateString;
  }, 1000);
}
function Btc(){
  setInterval(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
      const bitcoinPrice = "<span style='color: red;'>BTC: </span> "+ data.bitcoin.usd +"$";
      document.getElementById("btc").innerHTML = bitcoinPrice;
    })
    .catch(error => {
      console.error('Error fetching Bitcoin price:', error);
    });
  }, 10000);
}
function Eth(){
  setInterval(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
    .then(response => response.json())
    .then(data => {
      const ethereumPrice = "<span style='color: red;'>ETH: </span> " +data.ethereum.usd+"$";
      document.getElementById("eth").innerHTML = ethereumPrice;
    })
    .catch(error => {
      console.error('Error fetching Ethereum price:', error);
    });
  }, 10000);
}
function Doge(){
  setInterval(() =>{
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=dogecoin&vs_currencies=usd')
    .then(response => response.json())
    .then(data =>{
      const dogePrice = "<span style='color: red;'>DOGE: </span> " + data.doge.usd+"$";
      document.getElementById("doge").innerHTML = dogePrice;
    })
    .catch(error => {
      console.error('Error fetching DogeCoin price:',error);
    })
  },10000)
}
function Va{
  let a = 
}
Doge();
Eth();
Btc();
Datum();




