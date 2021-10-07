
    modalLoginBtn.addEventListener('click', ()=> {
        if(getUname.value==checker1 && getPass.value==checker2) {
            document.getElementById("Pay").disabled = false;
            document.getElementById("Pay").addEventListener('click', ()=> {
              alert("Booking Sucessful!");
            });
        }
        });

        var noOfAdultsInUrl = window.location.href.split("?adult=")[1];;
        let decodeAdultsInUrl  = noOfAdultsInUrl.split("&")[0];
        //console.log(decodeAdultsInUrl);

        var nameInUrl = window.location.href.split("&name=")[1];;
        let decodeNameInUrl  = nameInUrl.split("&")[0];
        //console.log(decodeNameInUrl);

        var fromDateInUrl = window.location.href.split("&fromDate=")[1];;
        let decodeFromDateInUrl  = fromDateInUrl.split("&")[0];
        //console.log(decodeFromDateInUrl);

        var toDateInUrl = window.location.href.split("&toDate=")[1];;
        let decodeToDateInUrl  = toDateInUrl.split("&")[0];
        //console.log(decodetoDateInUrl);

        var rupeesInUrl = window.location.href.split("&price=Rs+-+")[1];;
        let decodeRupeesInUrl  = rupeesInUrl.split("&")[0];
        //console.log(decodeRupeesInUrl);

        var noOfNightsInUrl = window.location.href.split("&passNights=")[1];;
        let decodenoOfNightsInUrl  = noOfNightsInUrl.split("&")[0];

        var passedIdInUrl = window.location.href.split("&PassId")[1];;
        let decodepassedIdInUrl  = passedIdInUrl.split("&")[0];
        //alert(decodepassedIdInUrl);
        document.getElementById("embed-payment-details").innerHTML = document.getElementById("embed-payment-details").innerHTML  + ` <div id="customer-details">
        <p><strong class="heading">Name:</strong> ${decodeNameInUrl}</p>
        <p><strong class="heading">Number of Adults:</strong> ${decodeAdultsInUrl}</p>
        <p><strong class="heading">Check-in Date:</strong> ${decodeFromDateInUrl}</p>
        <p><strong class="heading">Check-out Date:</strong> ${decodeToDateInUrl}</p>
    </div>
    <div id="payment-details">
     <p><strong class="heading">Tariff Breakdown:</strong> Rs.1000 x ${decodeAdultsInUrl} Adults x ${decodenoOfNightsInUrl} Nights</p>
        <p><strong class="heading">Total Amount:</strong> Rs.${decodeRupeesInUrl}</p>
    </div>`;




const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = false;
xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
   
      var responseParser = JSON.parse(this.responseText).data[0];
        console.log(responseParser);
      var hotelLoc = responseParser.location_string;
      var hotelName = responseParser.name;
      var hotelRanking = responseParser.ranking;
      var hotelImageUrl = responseParser.photo.images.original.url;
      document.getElementById("hotel-details").innerHTML = document.getElementById("hotel-details").innerHTML + `
      <img src="${hotelImageUrl}" class="hotel-image">
      <div class="hotel-name-rating">
          <h2>${hotelName}</h2>
          <p>${hotelRanking}</p>
          <p>${hotelLoc}</p>
      </div>
`;
		

	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?lang=en_US&location_id${decodepassedIdInUrl}`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "67353789b2msh105275630124ae7p168c81jsn6a0d316ae338");

xhr.send();