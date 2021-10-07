
function viewMore() {
    var k = document.getElementById("view-more");
    var z = document.getElementById("ronaldo");
    var y = document.getElementsByClassName("second-row-of-city-cards")[0];
    //var x = document.getElementsByClassName("messi")[0];
    k.addEventListener('click', ()=> {
    //     y.classList.toggle("messi");
    //     //document.getElementsByClassName("messi")[0].style.display="block";
    if (y.style.display === "none") {
        y.style.display = "block";
        z.innerText="View Less";
      } else {
        y.style.display = "none";
        z.innerText="View More";
      }
   });

  
}
viewMore();








