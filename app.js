// =====================================
// E.FUEL V2 - APP.JS (PART 1)
// =====================================

// Screens
const splashScreen = document.getElementById("splashScreen");
const loginScreen = document.getElementById("loginScreen");
const otpScreen = document.getElementById("otpScreen");
const profileScreen = document.getElementById("profileScreen");

// Buttons
const sendOtpBtn = document.getElementById("sendOtpBtn");
const verifyOtpBtn = document.getElementById("verifyOtpBtn");
const saveProfileBtn = document.getElementById("saveProfileBtn");

// Regex
const mobileRegex = /^[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const vehicleRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

// Splash Screen
window.addEventListener("load", () => {
    setTimeout(() => {
        splashScreen.classList.remove("active");
        loginScreen.classList.add("active");
    }, 2000);
});

// Send OTP
sendOtpBtn.addEventListener("click", () => {

    const phone = document.getElementById("phone").value.trim();

    if (!mobileRegex.test(phone)) {
        alert("Please enter a valid Indian mobile number.");
        return;
    }

    alert("Demo OTP : 123456");

    loginScreen.classList.remove("active");
    otpScreen.classList.add("active");

});

// Verify OTP
verifyOtpBtn.addEventListener("click", () => {

    const otp = document.getElementById("otp").value.trim();

    if (otp !== "123456") {
        alert("Invalid OTP");
        return;
    }

    otpScreen.classList.remove("active");
    profileScreen.classList.add("active");

});

// Save Profile
saveProfileBtn.addEventListener("click", () => {

    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const vehicleType = document.getElementById("vehicleType").value;
    const vehicleNumber = document.getElementById("vehicleNumber").value.trim().toUpperCase();

    if (fullName.length < 3) {
        alert("Enter your full name.");
        return;
    }

    if (!emailRegex.test(email)) {
        alert("Enter a valid email.");
        return;
    }

    if (vehicleType === "") {
        alert("Select vehicle type.");
        return;
    }

    if (!vehicleRegex.test(vehicleNumber)) {
        alert("Enter valid vehicle number (Example: BR01AB1234)");
        return;
    }

    alert("Profile Verified Successfully ✅");

    // Next screen hum Part 2 me open karenge

});
// =====================================
// LOCATION
// =====================================

const locationScreen = document.getElementById("locationScreen");

const allowLocationBtn = document.getElementById("allowLocationBtn");
const manualLocationBtn = document.getElementById("manualLocationBtn");
const locationStatus = document.getElementById("locationStatus");

allowLocationBtn.addEventListener("click", () => {

    if (!navigator.geolocation) {

        alert("Geolocation is not supported.");
        return;

    }

    locationStatus.innerHTML = "Getting your location...";

    navigator.geolocation.getCurrentPosition(

        (position) => {

            const lat = position.coords.latitude;
            const lng = position.coords.longitude;

            localStorage.setItem("latitude", lat);
            localStorage.setItem("longitude", lng);

            locationStatus.innerHTML = "✅ Location Connected";

            setTimeout(() => {

                locationScreen.classList.remove("active");
                dashboardScreen.classList.add("active");

            }, 1000);

        },

        () => {

            alert("Location Permission Denied");

        }

    );

});

manualLocationBtn.addEventListener("click", () => {

    const address = prompt("Enter your address");

    if (address) {

        localStorage.setItem("manualAddress", address);

        locationScreen.classList.remove("active");
        dashboardScreen.classList.add("active");

    }

});
