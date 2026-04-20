// Set the date for Unity Cup 2026 (Example: May 1, 2026)
const countdownDate = new Date("May 1, 2026 00:00:00").getTime();

const timer = setInterval(function() {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the results in the elements with id="days", etc.
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // If the countdown is over
    if (distance < 0) {
        clearInterval(timer);
        document.getElementById("timer").innerHTML = "EVENT STARTED";
    }
}, 1000);

// Simple Form Alert (Since we don't have a backend server yet)
document.getElementById('partnerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Thank you for your message! Zantiri Africa will contact you shortly.");
    this.reset();
});
