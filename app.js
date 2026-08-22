const yazzButton = document.querySelector("#yazz-button");

function updateClock() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit"
    });

    const date = now.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "2-digit"
    });

    document.querySelector("#current-time").textContent = time;
    document.querySelector("#current-date").textContent = date.toUpperCase();
}

function activateYazz() {
    const activated = yazzButton.dataset.active === "true";

    if (!activated) {
        yazzButton.dataset.active = "true";

        yazzButton.textContent = "YAZZ ACTIVE";

        document.querySelector("#status-message").textContent =
            "SMOOTH YAZZ CONDITIONS HAVE BEEN ACTIVATED";

        console.log("The Yazz has been entered.");
    } else {
        yazzButton.dataset.active = "false";

        yazzButton.textContent = "ENTER THE YAZZ";

        document.querySelector("#status-message").textContent =
            "SMOOTH CONDITIONS CONTINUE ACROSS THE AREA";
    }
}

yazzButton.addEventListener("click", activateYazz);

updateClock();

setInterval(updateClock, 30000);