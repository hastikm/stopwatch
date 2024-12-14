let showtimer = document.querySelector('.timerDisplay');
let start = document.querySelector('#start');
let stop = document.querySelector('#stop');
let reset = document.querySelector('#reset');

let totaltime = 0; // Total time in milliseconds
let timer;

function calculateTime(totaltime) {
    // Convert total time to milliseconds, seconds, minutes, and hours
    let milliseconds = totaltime % 100; // Milliseconds range from 0 to 99
    let seconds = Math.floor((totaltime / 100) % 60);
    let minutes = Math.floor((totaltime / (100 * 60)) % 60); // 100ms * 60
    let hours = Math.floor(totaltime / (100 * 60 * 60)); // 100ms * 60 * 60

    // Add leading zeros for consistent display
    if (milliseconds < 10) milliseconds = '0' + milliseconds;
    if (seconds < 10) seconds = '0' + seconds;
    if (minutes < 10) minutes = '0' + minutes;
    if (hours < 10) hours = '0' + hours;

    return `${hours} : ${minutes} : ${seconds} . <span>${milliseconds}<span/>`;
}

// Start button
start.addEventListener('click', () => {
    timer = setInterval(() => {
        totaltime++; // Increment by 10ms
        showtimer.innerHTML = calculateTime(totaltime);
    }, 10); // Update every 10 milliseconds
    start.disabled = true; // Disable the start button while running
});

// Stop button
stop.addEventListener('click', () => {
    clearInterval(timer); // Stop the timer
    start.disabled = false; // Enable the start button
});

// Reset button
reset.addEventListener('click', () => {
    clearInterval(timer); // Stop the timer
    totaltime = 0; // Reset total time
    showtimer.innerHTML = '00 : 00 : 00.00'; // Reset display
    start.disabled = false; // Enable the start button
});
