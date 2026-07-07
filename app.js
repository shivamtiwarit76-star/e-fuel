// =========================
// E.FUEL APP.JS PART 1
// =========================

const splashScreen = document.getElementById("splashScreen");
const loginScreen = document.getElementById("loginScreen");
const otpScreen = document.getElementById("otpScreen");
const profileScreen = document.getElementById("profileScreen");
const locationScreen = document.getElementById("locationScreen");

const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const saveProfileBtn = document.getElementById("saveProfileBtn");

window.onload = () => {

setTimeout(()=>{

splashScreen.classList.remove("active");
loginScreen.classList.add("active");

},2000);

};

// LOGIN

sendOtpBtn.addEventListener("click",()=>{

const phone=document.getElementById("phone").value.trim();

if(phone.length!==10){

alert("Enter valid 10 digit mobile number");
return;

}

alert("Demo OTP : 123456");

loginScreen.classList.remove("active");
otpScreen.classList.add("active");

});

// OTP

verifyOtpBtn.addEventListener("click",()=>{

const otp=document.getElementById("otp").value.trim();

if(otp!=="123456"){

alert("Wrong OTP");
return;

}

otpScreen.classList.remove("active");
profileScreen.classList.add("active");

});

// PROFILE

saveProfileBtn.addEventListener("click",()=>{

const fullName=document.getElementById("fullName").value.trim();
const email=document.getElementById("email").value.trim();
const vehicle=document.getElementById("vehicleType").value;
const vehicleNumber=document.getElementById("vehicleNumber").value.trim();

if(fullName===""){

alert("Enter Full Name");
return;

}

if(email===""){

alert("Enter Email");
return;

}

if(vehicle===""){

alert("Select Vehicle");
return;

}

if(vehicleNumber===""){

alert("Enter Vehicle Number");
return;

}

profileScreen.classList.remove("active");
locationScreen.classList.add("active");

});
// =========================
// LOCATION + DASHBOARD
// =========================

const allowLocationBtn = document.getElementById("allowLocationBtn");
const manualLocationBtn = document.getElementById("manualLocationBtn");
const locationStatus = document.getElementById("locationStatus");

const dashboardScreen = document.getElementById("dashboardScreen");

const petrolBtn = document.getElementById("petrolBtn");
const dieselBtn = document.getElementById("dieselBtn");

const currentLocation = document.getElementById("currentLocation");
const selectedFuel = document.getElementById("selectedFuel");
const fuelSlider = document.getElementById("fuelSlider");
const litreText = document.getElementById("litreText");
const totalPrice = document.getElementById("totalPrice");

let fuelRate = 150;

// REAL GPS

allowLocationBtn.addEventListener("click",()=>{

if(!navigator.geolocation){

alert("GPS Not Supported");
return;

}

locationStatus.innerHTML="Getting Live Location...";

navigator.geolocation.getCurrentPosition(

(position)=>{

const lat=position.coords.latitude;
const lng=position.coords.longitude;

currentLocation.innerHTML=
"📍 "+lat.toFixed(5)+", "+lng.toFixed(5);

locationScreen.classList.remove("active");
dashboardScreen.classList.add("active");

},

()=>{

alert("Location Permission Denied");

}

);

});

// MANUAL LOCATION

manualLocationBtn.addEventListener("click",()=>{

const area=prompt("Enter Your Area");

if(!area) return;

currentLocation.innerHTML="📍 "+area;

locationScreen.classList.remove("active");
dashboardScreen.classList.add("active");

});

// PETROL

petrolBtn.addEventListener("click",()=>{

fuelRate=150;
selectedFuel.innerHTML="Selected : Petrol";

updatePrice();

});

// DIESEL

dieselBtn.addEventListener("click",()=>{

fuelRate=120;
selectedFuel.innerHTML="Selected : Diesel";

updatePrice();

});

// PRICE

fuelSlider.addEventListener("input",updatePrice);

function updatePrice(){

const litre=Number(fuelSlider.value);

litreText.innerHTML=litre+" Litres";

totalPrice.innerHTML="₹"+(litre*fuelRate);

}

updatePrice();
