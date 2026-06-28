// =========================
// E.FUEL PHASE 1 - PART 3A
// =========================

const splashScreen = document.getElementById("splashScreen");
const loginScreen = document.getElementById("loginScreen");
const otpScreen = document.getElementById("otpScreen");
const profileScreen = document.getElementById("profileScreen");
const locationScreen = document.getElementById("locationScreen");

const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const saveProfileBtn = document.getElementById("saveProfileBtn");

// Splash

window.onload = function(){

setTimeout(function(){

splashScreen.classList.remove("active");
loginScreen.classList.add("active");

},2000);

};

// Send OTP

sendOtpBtn.onclick = function(){

let phone = document.getElementById("phone").value.trim();

if(phone.length != 10){

alert("Enter valid 10 digit mobile number");
return;

}

alert("Demo OTP : 123456");

loginScreen.classList.remove("active");
otpScreen.classList.add("active");

};

// Verify OTP

verifyOtpBtn.onclick = function(){

let otp = document.getElementById("otp").value.trim();

if(otp != "123456"){

alert("Wrong OTP");
return;

}

otpScreen.classList.remove("active");
profileScreen.classList.add("active");

};

// Save Profile

saveProfileBtn.onclick = function(){

let name = document.getElementById("fullName").value.trim();
let email = document.getElementById("email").value.trim();
let vehicle = document.getElementById("vehicleType").value;
let number = document.getElementById("vehicleNumber").value.trim();

if(name==""){

alert("Enter Full Name");
return;

}

if(email==""){

alert("Enter Email");
return;

}

if(vehicle==""){

alert("Select Vehicle");
return;

}

if(number==""){

alert("Enter Vehicle Number");
return;

}

profileScreen.classList.remove("active");
locationScreen.classList.add("active");

};
// =========================
// REAL LOCATION
// =========================

const allowLocationBtn = document.getElementById("allowLocationBtn");
const manualLocationBtn = document.getElementById("manualLocationBtn");
const locationStatus = document.getElementById("locationStatus");

allowLocationBtn.onclick = function(){

if(!navigator.geolocation){

alert("Your browser does not support GPS.");
return;

}

locationStatus.innerHTML = "Getting your live location...";

navigator.geolocation.getCurrentPosition(

function(position){

let lat = position.coords.latitude;
let lng = position.coords.longitude;

locationStatus.innerHTML =
"✅ Location Connected<br><br>Latitude : "
+ lat +
"<br>Longitude : " +
lng;

},

function(){

locationStatus.innerHTML =
"❌ Location Permission Denied";

}

);

};

manualLocationBtn.onclick = function(){

let area = prompt("Enter Your Area");

if(area){

locationStatus.innerHTML =
"📍 " + area;

}

};
// =========================
// DASHBOARD
// =========================

const dashboardScreen = document.getElementById("dashboardScreen");

const petrolBtn = document.getElementById("petrolBtn");
const dieselBtn = document.getElementById("dieselBtn");

const selectedFuel = document.getElementById("selectedFuel");

const fuelSlider = document.getElementById("fuelSlider");
const litreText = document.getElementById("litreText");
const totalPrice = document.getElementById("totalPrice");
const currentLocation = document.getElementById("currentLocation");

let fuelRate = 150;

// Location milne ke baad Dashboard kholo
allowLocationBtn.onclick = function(){

if(!navigator.geolocation){

alert("GPS Not Supported");
return;

}

locationStatus.innerHTML="Getting Live Location...";

navigator.geolocation.getCurrentPosition(

function(position){

let lat = position.coords.latitude;
let lng = position.coords.longitude;

currentLocation.innerHTML =
"📍 " + lat.toFixed(5) + ", " + lng.toFixed(5);

locationScreen.classList.remove("active");
dashboardScreen.classList.add("active");

},

function(){

alert("Location Permission Denied");

}

);

};

// Petrol

petrolBtn.onclick = function(){

fuelRate = 150;

selectedFuel.innerHTML =
"Selected : Petrol";

updatePrice();

};

// Diesel

dieselBtn.onclick = function(){

fuelRate = 120;

selectedFuel.innerHTML =
"Selected : Diesel";

updatePrice();

};

// Slider

fuelSlider.oninput = updatePrice;

function updatePrice(){

let litre = fuelSlider.value;

litreText.innerHTML =
litre + " Litres";

totalPrice.innerHTML =
"₹" + (litre * fuelRate);

}

updatePrice();
