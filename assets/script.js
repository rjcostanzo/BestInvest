
//Token for Api
var token = ""
var ticker = ""


var getQuote = function (ticker) {
  //Sample ticker for proof of concept
  // var ticker = `amzn`;
  var apiUrl = `https://sandbox.iexapis.com/stable/stock/${ticker}/quote/2?token=Tpk_96456627b77642ab978010ddff25e36e`;
  // var apiUrl = `https://sandbox.iexapis.com/stable/tops?token=${token}&symbols=${ticker}`;
  console.log(apiUrl);
  fetch(apiUrl).then(function (response) {
    //request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        console.log(data[0].bidPrice);
        //do something here....
      });
    } else {
      alert("Error: IEX quote is not found");
    }
  })
    .catch(function (error) {
      //notice this catch getting changed out to the end of the .then()
      alert("Unable to connect to IEX");
    });
};

//Create a modal to prompt the user to input a stock ticker. Give recommendations




//Create a modal to prompt the user to input a raw material and a quantity





//Create a model to display the stock in terms of the raw material



getQuote('amzn');