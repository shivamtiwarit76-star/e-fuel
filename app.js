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
