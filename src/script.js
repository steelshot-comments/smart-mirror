// var lat, long;

// if (navigator.geolocation) {
//     // console.log("l");
//     navigator.geolocation.getCurrentPosition(function (position) {
//         lat = position.coords.latitude; 
//         long = position.coords.longitude;
//         console.log(`Latitude: ${position}, Longitude: ${long}`);
//     });
// } else {
//     console.log("Geolocation is not supported by this browser.");
// }
const carousel1 = document.getElementById("carousel1");
const carousel2 = document.getElementById("carousel2");


function getDate() {
    document.getElementById('date').innerHTML = new Date().toDateString();
}

getDate();

function checkTime(i) {
    if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
    return i;
}

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('hrs').innerHTML = h;
    document.getElementById('min').innerHTML = m;
    document.getElementById('sec').innerHTML = s;
    setTimeout(startTime, 1000);
}

startTime();

// fetch('api.openweathermap.org/data/2.5/forecast?lat=19.1066081&lon=72.9221924&appid=493539b698dd287f1855cd6f2c7976c7&units=metric')
//   .then(response => response.json())
//   .then(data => {
//     // Populate card with data
//     // document.getElementById("temperature").innerText = data.main.temp;
//     document.getElementById("card").innerText = data.list[0].main.temp;
//     // Add other data as needed
//   })
//   .catch(error => console.error("Error fetching data: ", error));