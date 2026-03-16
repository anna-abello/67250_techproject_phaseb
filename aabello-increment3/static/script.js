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
