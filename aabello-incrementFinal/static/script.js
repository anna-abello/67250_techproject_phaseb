var now = new Date()
var hour = now.getHours()
var year = now.getFullYear()

function greeting(x) {
    var msg = document.getElementById('greeting')
    if (msg) {

        if ( (20 <= hour && hour < 24) || hour < 5) {
            msg.innerHTML ='Good Night! Welcome to the Musuem of Art and Innovative Technology'
        }
        else if (hour < 12) {
            msg.innerHTML ='Good Morning! Welcome to the Musuem of Art and Innovative Technology'
        }
        else if (12 <= hour && hour < 18) {
            msg.innerHTML ='Good Afternoon! Welcome to the Musuem of Art and Innovative Technology'
        }
        else {
            msg.innerHTML ='Good Evening! Welcome to the Musuem of Art and Innovative Technology'
        }

    }
   
}
greeting(hour)


function addYear() {
    
    var msg = document.getElementById('copyYear')
    msg.innerHTML = year
}


/* Sets the 'active' class on the navigation link that matches the current page URL.*/
function ActiveNav() {
    // Get all navigation links
    const navLinks = document.querySelectorAll('nav a');

    // Iterate over each link
    navLinks.forEach(link => {
    // Check if the link's href matches the current window location
        if (window.location.href === link.href) {
            // Add the 'active' class to highlight the current page
            link.classList.add("active");
        }
    });
}

// Execute the function to set the active navigation link on page load
ActiveNav();

// When the "Read Less" button is clicked
$("#readLess").click(function(){ 
    $("#longIntro").hide(); // Hide the long introduction text
    $("#readLess").hide();  // Hide the "Read Less" button itself
    $("#readMore").show();
    $("#shortIntro").show()  // Show the "Read More" button  

  });
  
// When the "Read More" button is clicked
  $("#readMore").click(function(){
    $("#shortIntro").hide();
    $("#longIntro").show();  // Show the long introduction text
    $("#readLess").show();   // Show the "Read Less" button
    $("#readMore").hide();   // Hide the "Read More" button  
  });


// when buyNow button clicked, checkout form shown
$(".buyNow").click(function() {
    $("#checkoutForm").show(); // Shows the form
});
// when buyNow clicked, date also updates
function TicketButton() {
    // Get all buy now buttons
    const buyNowButtons = document.querySelectorAll('.buyNow');

    // Iterate over each button
    buyNowButtons.forEach(button => {
        // add click event 
        button.addEventListener('click', function() {
            // get specific row 
            const row = button.closest("tr");
            // get date  from that row
            const rowDate = row.cells[0].innerText;

            // update date in checkout
            document.getElementById("selectedDate").innerText = rowDate;
            });
        });
}


TicketButton();

// Calculate Total Price
function CalculateTotal() {
    const quantity = document.getElementById('ticketQ');
    const price = document.getElementById('totalPrice')

    if (quantity) {
        quantity.addEventListener('input', function() {
            const total = quantity.value * 18;
            price.innerText = total;
        });
    }

};

CalculateTotal();


function toggleMenu() {
    const nav = document.querySelector(".nav_bar");
    nav.classList.toggle("responsive");
}


function HandleFormSubmit() {
    const form = document.getElementById('checkoutForm');

    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const totalPrice = document.getElementById('totalPrice').innerText;
            
    
            alert("Redirecting to payment system");
            alert("Your order is confirmed! Total: $" + totalPrice);
            
        });
    }

}
HandleFormSubmit();



function loadLeafletMap() {
    const mapElement = document.getElementById ("map");
    if (!mapElement) return;

    if (typeof L === "undefined") {
        console.log("Leaflet did not load."); 
        return;
    }

    if (mapElement._leaflet_id) return;
    
    const museumLat = 40.4443;
    const museumLng = -79.9436;
    
    const map = L.map("map").setView( [museumLat, museumLng], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker( [museumLat, museumLng])
        .addTo(map)
        .bindPopup("Museum Location")
        .openPopup();
    }

document.addEventListener ("DOMContentLoaded", function () {
        loadLeafletMap() ;
    });


    let slideIndex = 1;
    showSlides(slideIndex);
    
    // Next/previous controls
    function plusSlides(n) {
      showSlides(slideIndex += n);
    }
    
    // Thumbnail image controls
    function currentSlide(n) {
      showSlides(slideIndex = n);
    }
    
    function showSlides(n) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
    }