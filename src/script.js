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
// const carousel1 = document.getElementById("carousel1");
// const carousel2 = document.getElementById("carousel2");


function getDate() {
    document.getElementById('date').innerHTML = new Date().toDateString();
}

getDate();

async function getWeather() {
    const res = await fetch("https://api.openweathermap.org/data/3.0/onecall?lat=19&lon=34&appid=493539b698dd287f1855cd6f2c7976c7");
    var data = await res.json();

    console.log(data);
    // Populate card with data
    //   document.getElementById("temperature").innerText = data.main.temp;
    document.getElementById("temp").innerText = current.temp + '°C';
    document.getElementById("location").innerText = current.name;
    document.getElementById("humidity").innerText = current.humidity;
}

getWeather();

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

if ('mediaDevices' in navigator && 'getUserMedia' in navigator.mediaDevices) {
    console.log("Let's get this party started")
}
navigator.mediaDevices.getUserMedia({ video: true });

async function getDevices() {
    const devices = await navigator.mediaDevices.enumerateDevices();
}

let streamStarted = false;
const videoElement = document.querySelector('video');

const constraints = {
    video: {
        facingMode: 'user',
        height: {
            min: 1, ideal: window.innerHeight, max: window.innerHeight,
        },
        width: {
            min: 1, ideal: window.innerWidth, max: window.innerWidth,
        }
    }
};

const getCameraSelection = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoDevices = devices.filter(device => device.kind === 'videoinput');
    startStream(constraints);
};


const startStream = async (constraints) => {
    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    handleStream(stream);
};

const handleStream = (stream) => {
    videoElement.srcObject = stream;
    // play.classList.add('d-none');
    // pause.classList.remove('d-none');
    // screenshot.classList.remove('d-none');
    streamStarted = true;
};

getCameraSelection();

function drawSimilarColors() {
    var topCanvas = document.getElementById('top-canvas');
    var bottomCanvas = document.getElementById('bottom-canvas');
    var ctxTop = topCanvas.getContext('2d');
    var ctxBottom = bottomCanvas.getContext('2d');
    var windowHeight = window.innerHeight;
    var windowWidth = window.innerWidth;
    
    topCanvas.width = windowWidth;
    topCanvas.height = windowHeight / 2;
    bottomCanvas.width = windowWidth;
    bottomCanvas.height = windowHeight / 2;

    // Draw similar colors on the top canvas
    ctxTop.fillStyle = "#f0f0f0"; // Adjust color as needed
    ctxTop.fillRect(0, 0, windowWidth, windowHeight / 2);

    // Draw similar colors on the bottom canvas
    ctxBottom.fillStyle = "#f0f0f0"; // Adjust color as needed
    ctxBottom.fillRect(0, 0, windowWidth, windowHeight / 2);
}