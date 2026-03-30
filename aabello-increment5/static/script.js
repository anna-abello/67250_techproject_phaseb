// var x = 5
// var y = 5
// var z = x + y
// // console.log(z)

// // function sumPrint(x1, x2) {
// //     console.log(x1 + x2)
// // }

// var C = "hello"
// if (C.length > z) {
//     console.log('in')
//     console.log(C.length)
// }
// else if (C.length == y) {
//     console.log('Equal')
// }
// L1 = ['water', 'pine', 'pear', 'banana']

// function findBanana(arr) {
//     for(var i = 0; i < L1.length; i++) {
//         if (arr[i] === 'banana') {
//             alert('yo')
//         }
//     }
// }

// findBanana(L1)
// L1.forEach(findBanana, 'banana')


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
        else if (12 <= hour < 18) {
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

// // When the Buy Tickets button is clicked, show the form
// $("#ticketButton").click(function(){
//     $("#checkoutForm").show();  // Show the checkout form
//   });
// Show form when the ticket button is clicked
// const buyButtons = document.querySelectorAll(".buyNow");
// // const checkoutForm = document.getElementById("checkoutForm");
// buyButtons.forEach(function(button)) {
//     button.
// }
$(".buyNow").click(function() {
    $("#checkoutForm").show(); // Shows the form
});

// When the "Submit" button is clicked
$("#submitTicket").click(function(){
    alert("Redirecting to payment system")
  });

  function toggleMenu() {
    const nav = document.querySelector(".nav_bar");
    nav.classList.toggle("responsive");
  }



  //--------

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
    }) ;



