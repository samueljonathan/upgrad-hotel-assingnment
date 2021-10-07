
let urlParams = new URLSearchParams(window.location.search);
const API_URL = "https://travel-advisor.p.rapidapi.com/";
const travelAdvisorHost = "travel-advisor.p.rapidapi.com";
const travelAdvisorKey = "67353789b2msh105275630124ae7p168c81jsn6a0d316ae338"; 

document.getElementById("toDate").addEventListener('change', ()=> {
    var fromDate = new Date(document.getElementById("fromDate").value);
    var toDate = new Date(document.getElementById("toDate").value);
    var converter = 24*60*60*1000;
        noOfDays = Math.round(Math.abs((fromDate - toDate)/(converter)));
        document.getElementById("passNights").value = noOfDays;
        function calulateAmount() {
            var pricePerDay = 1000;
            var noOfPersons = document.getElementById("adult").value;
            var totalAmount = noOfDays*pricePerDay*noOfPersons;
            document.getElementById("price").value=`Rs - ${totalAmount}`;
        }calulateAmount();
        document.getElementById("adult").addEventListener('change', ()=> {
            calulateAmount();
        });
});

const data = null;
const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

var idInUrl = window.location.href.split("?")[1];;
let decodeidInUrl  = decodeURI(idInUrl.split("=")[1]);
//alert(decodeidInUrl);
document.getElementById("PassId").value = decodeidInUrl;

var hotelFilteredArray = [];

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
   
        var responseParser = JSON.parse(this.responseText).data[0];
       

			var hotelName = responseParser.name;
            var hotelDescription = responseParser.description;
			var hotelRating = responseParser.rating;
            var hotelImageUrl = responseParser.photo.images.original.url;
            var hotelAwardsImages = responseParser.awards[0].images.large;
            
           let amenitiesList = responseParser.amenities.map((eachAmenity) => {
               
                return `<li>${eachAmenity.name}</li>`;
            });
       
            let awardsImageList = responseParser.awards.map((eachAwardImage) => {
                //console.log(eachAmenity.name);
                 return `<div class="carousel-item">
                 <img class="slider-image" class="d-block w-100" src="${eachAwardImage.images.large}" alt="Third slide">
                 </div>`;
             });

            document.getElementById("slider-").innerHTML = document.getElementById("slider-").innerHTML +
`<div class="carousel-item active">
<img class="slider-image" class="d-block w-100" src="${hotelImageUrl}" alt="Second slide">
</div>
${awardsImageList}`;


            document.getElementById("details-").innerHTML = document.getElementById("details-").innerHTML + `
            <div id="hotel-description">
            <h2>${hotelName}</h2>
            <h5 class="heading">RATING</h5>
            <div id="rating">
                <span>${hotelRating}</span>
                <span class="fa fa-star checked" id="1"></span>
                <span class="fa fa-star checked" id="2"></span>
                <span class="fa fa-star checked" id="3"></span>
                <span class="fa fa-star checked" id="4"></span>
                <span class="fa fa-star checked" id="5"></span>
            </div>
            <h5 class="heading">AMENITIES</h5>
            <ul>${amenitiesList}</ul>
            <h5 class="heading">DESCRIPTION</h5>
            <p>
                ${hotelDescription}
            </p>
        </div>`
		

	}
});

xhr.open("GET", `https://travel-advisor.p.rapidapi.com/hotels/get-details?lang=en_US&location_id=${decodeidInUrl}`);
xhr.setRequestHeader("x-rapidapi-host", "travel-advisor.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "your tripAdvisor_key");

xhr.send();

