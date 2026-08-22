yazzButton = document.getElementById('yazz-button');

yazzButton.addEventListener('click', () => {
    yazzButton.textContent = 'YAZZ ACTIVATED';
    console.log('the yazz has been activated. hail chromelord');
});

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });

    const date = now.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    document.querySelector("#current-time").textContent = time;
    document.querySelector("#current-date").textContent = date.toUpperCase();
}

updateClock();

setInterval(updateClock, 1000);