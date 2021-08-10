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
        console.log(data.iexClose);
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

var getCall = function (call) {
  //Sample ticker for proof of concept
  // var ticker = `amzn`;
  // var apiUrl = `https://www.quandl.com/api/v3/datasets/${call}?start_date=2021-07-29&end_date=2021-07-29&api_key=3sfizins6VRG4tN1qVpz`;
  // var apiUrl = `https://www.quandl.com/api/v3/datasets/CHRIS/ASX_WM1?start_date=2021-06-29&end_date=2021-06-29&api_key=3sfizins6VRG4tN1qVpz';
  var apiUrl = `https://www.quandl.com/api/v3/datasets/${call}?start_date=2021-06-25&end_date=2021-06-29&api_key=3sfizins6VRG4tN1qVpz`;
  console.log(apiUrl);
  fetch(apiUrl).then(function (response) {
    //request was successful
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);
        console.log(data.dataset.data[0][1]);
        //do something here....
        return (data.dataset.data[0][1]);
      });
    } else {
      alert("Error: Quandl quote is not found");
    }
  })
    .catch(function (error) {
      //notice this catch getting changed out to the end of the .then()
      alert("Unable to connect to Quandl");
    });
};


//Create a modal to prompt the user to input a stock ticker. Give recommendations

// Linking modals and buttons to HTML elements
var tickerModal = document.getElementById("tickerModal");
var materialModal = document.getElementById("materialModal");
var openTickerModal = document.getElementById("openTickerModal");
var openMaterialModal = document.getElementById("openMaterialModal");

// Open modals when clicked
openTickerModal.onclick = function() {
  console.log("Open the Ticker Modal");
  tickerModal.style.display = "block";
}

openMaterialModal.onclick = function() {
  console.log("Open the Material Modal");
  materialModal.style.display = "block";
}

// Initialize all user input variables
var selectedTicker = '';
var selectedMaterialQuantity = 1;
var selectedUnit = '';
var selectedMaterial = '';
var resultSelectedMaterial = '';

// Stores and logs stock ticker input
function submitTicker() {
    selectedTicker = document.querySelector("#stockTicker").value;
    //run the stock fetch
    getQuote(selectedTicker);
    console.log("selectedTicker: " + selectedTicker);

    tickerModal.insertAdjacentHTML("afterend", selectedTicker);
}

// Stores and logs quantity, unit, and material input
function submitMaterials() {
  selectedMaterialQuantity = document.querySelector("#selectedMaterialQuantity").value;
  selectedUnit = document.querySelector("#selectedUnit").value;
  selectedMaterial = document.querySelector("#selectedMaterial").value;
  //cut down on 
  console.log("selectedMaterialQuantity: " + selectedMaterialQuantity);
  console.log("selectedUnit: " + selectedUnit);
  console.log("selectedMaterial: " + selectedMaterial);
  resultSelectedMaterial= getCall((selectedMaterial));

  materialModal.insertAdjacentHTML("afterend", selectedMaterial);
  // materialModal.insertAdjacentHTML("afterend", " of ");
  // materialModal.insertAdjacentHTML("afterend", selectedUnit);
  // materialModal.insertAdjacentHTML("afterend", " ");
  // materialModal.insertAdjacentHTML("afterend", selectedMaterialQuantity);
  materialModal.insertAdjacentHTML("afterend", resultSelectedMaterial);

}

// When the user clicks anywhere outside of the modal, close it
tickerModal.onclick = function(event) {
  if (event.target == tickerModal) {
    tickerModal.style.display = "none";
  }
}

materialModal.onclick = function(event) {
  if (event.target == materialModal) {
    materialModal.style.display = "none";
  }
}

// Close the modals if 'X' clicked
function closeTickerButton() {
  tickerModal.style.display = "none";
}

function closeMaterialButton() {
  materialModal.style.display = "none";
}

//Create a model to display the stock in terms of the raw material

// getCall('CHRIS/CME_461');

// getQuote('amzn');
