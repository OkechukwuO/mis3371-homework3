// Display current date in the banner section

function showDate() {
    document.getElementById("today").innerHTML =
        "Today is: " + new Date().toDateString();
}

window.onload = showDate;

// Slider function
function updateSlider() {
    document.getElementById("sliderValue").innerHTML =
        document.getElementById("health").value;
}

// Review button function

function reviewForm() {

    // Basic Info
    var firstName = document.getElementById("fname").value;
    var middleInitial = document.getElementById("mi").value;
    var lastName = document.getElementById("lname").value;
    var dob = document.getElementById("dob").value;
    var ssn = document.getElementById("ssn").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var userId = document.getElementById("userid").value;
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    // Checkboxes
    var fever = document.getElementById("fever").checked;
    var headache = document.getElementById("headache").checked;
    var cough = document.getElementById("cough").checked;
    var fatigue = document.getElementById("fatigue").checked;
    var nausea = document.getElementById("nausea").checked;

    fever = fever ? "YES" : "NO";
    headache = headache ? "YES" : "NO";
    cough = cough ? "YES" : "NO";
    fatigue = fatigue ? "YES" : "NO";
    nausea = nausea ? "YES" : "NO";

    // Radio buttons

    var gender = document.querySelector('input[name="gender"]:checked');
    var insurance = document.querySelector('input[name="insurance"]:checked');
    var vaccinated = document.querySelector('input[name="vaccinated"]:checked');

    gender = gender ? gender.value : "Not selected";
    insurance = insurance ? insurance.value : "Not selected";
    vaccinated = vaccinated ? vaccinated.value : "Not selected";

    // Slider

    var health = document.getElementById("health").value;

    var passwordError = "";

    // length check
    if (password1.length < 8 || password1.length > 30) {
        passwordError = "Password must be 8–30 characters.";
    }
    
    // uppercase check
    else if (!/[A-Z]/.test(password1)) {
        passwordError = "Password must contain 1 uppercase letter.";
    }
    
    // lowercase check
    else if (!/[a-z]/.test(password1)) {
        passwordError = "Password must contain 1 lowercase letter.";
    }
    
    // number check
    else if (!/[0-9]/.test(password1)) {
        passwordError = "Password must contain 1 number.";
    }
    
    // special character check
    else if (!/[!@#%^&*()_\-+=<>.,]/.test(password1)) {
        passwordError = "Password must contain 1 special character.";
    }
    
    // cannot match user ID
    else if (password1.toLowerCase() === userId.toLowerCase()) {
        passwordError = "Password cannot match User ID.";
    }
    
    // must match each other
    else if (password1 !== password2) {
        passwordError = "Passwords do not match.";
    }

    
    document.getElementById("reviewSection").innerHTML =
        "<h2>PLEASE REVIEW THIS INFORMATION</h2>" +
        "<p>Name: " +
        firstName + " " +
        middleInitial + " " +
        lastName +
        "</p>" +

        "<p>Date of Birth: " + dob + "</p>" +
        "<p>Social Security Number: " + ssn + "</p>" +
        "<p>Email: " + email + "</p>" +
        "<p>Phone Number: " + phone + "</p>" +
        "<p>Address: " + address + "</p>" +
        "<p>City: " + city + "</p>" +
        "<p>State: " + state + "</p>" +
        "<p>Zip Code: " + zip + "</p>" +

        "<hr>" +
        "<h3>REQUESTED INFO</h3>" +

        "<p>Fever: " + fever + "</p>" +
        "<p>Headache: " + headache + "</p>" +
        "<p>Cough: " + cough + "</p>" +
        "<p>Fatigue: " + fatigue + "</p>" +
        "<p>Nausea: " + nausea + "</p>" +

        "<p>Gender: " + gender + "</p>" +
        "<p>Insurance: " + insurance + "</p>" +
        "<p>Vaccinated: " + vaccinated + "</p>" +

        "<p>Health Rating: " + health + "</p>" +

        "<p>User ID: " + userId + "</p>" +
        "<p>Password Status: " + (passwordError === "" ? "PASS" : passwordError) + "</p>";
}

function validateFirstName() {

    var firstName = document.getElementById("fname").value;
    var error = document.getElementById("fnameError");

    if (firstName == "") {
        error.innerHTML = "First name is required.";
    }
    else if (!/^[A-Za-z'-]+$/.test(firstName)) {
        error.innerHTML = "Letters only.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateMI() {

    var mi = document.getElementById("mi").value;
    var error = document.getElementById("miError");

    if (mi == "") {
        error.innerHTML = "";
    }
    else if (!/^[A-Za-z]$/.test(mi)) {
        error.innerHTML = "Enter one letter only.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateLastName() {

    var lastName = document.getElementById("lname").value;
    var error = document.getElementById("lnameError");

    if (lastName == "") {
        error.innerHTML = "Last name is required.";
    }
    else if (!/^[A-Za-z'-]+$/.test(lastName)) {
        error.innerHTML = "Letters, apostrophes and dashes only.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateCity() {

    var city = document.getElementById("city").value;
    var error = document.getElementById("cityError");

    if (city == "") {
        error.innerHTML = "City is required.";
    }
    else if (!/^[A-Za-z ]+$/.test(city)) {
        error.innerHTML = "Letters only.";
    }
    else {
        error.innerHTML = "";
    }

}

function validatePhone() {

    var phone = document.getElementById("phone").value;
    var error = document.getElementById("phoneError");

    if (phone == "") {
        error.innerHTML = "Phone number is required.";
    }
    else if (!/^\d{3}-\d{3}-\d{4}$/.test(phone)) {
        error.innerHTML = "Use format 000-000-0000.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateEmail() {

    var email = document.getElementById("email").value.toLowerCase();
    document.getElementById("email").value = email;

    var error = document.getElementById("emailError");

    if (email == "") {
        error.innerHTML = "Email is required.";
    }
    else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(email)) {
        error.innerHTML = "Enter a valid email address.";
    }
    else {
        error.innerHTML = "";
    }

}

function validateZip() {

    var zip = document.getElementById("zip").value;
    var error = document.getElementById("zipError");

    if (zip == "") {
        error.innerHTML = "ZIP Code is required.";
    }
    else if (!/^\d{5}$/.test(zip)) {
        error.innerHTML = "Enter a 5-digit ZIP Code.";
    }
    else {
        error.innerHTML = "";
    }

}
