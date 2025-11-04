document.addEventListener("DOMContentLoaded", function() {
const password = document.getElementById("password");
const power = document.getElementById("power-point");
const strengthText = document.getElementById("strength-text");

password.addEventListener("input", function () {
    let point = 0;
    const value = password.value;
    const widthPower = ["1%", "25%", "50%", "75%", "100%"];
    const colorPower = ["red", "orange", "yellow", "blue", "green"];
    const textPower = ["Very Weak", "Weak", "Moderate", "Strong", "Very Strong"];

    if (value.length >= 8) {
        const tests = [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/];
        tests.forEach((regex) => {
            if (regex.test(value)) point++;
        });
    } else if (value.length > 0) {
        point = 1; // weak for short passwords
    }

    power.style.width = widthPower[point];
    power.style.backgroundColor = colorPower[point];
    strengthText.textContent = textPower[point];
});
});
