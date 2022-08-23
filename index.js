let homeCounter = 0
let guestCounter = 0

let homeCounterEl = document.getElementById("home-scoreboard")
let guestCounterEl = document.getElementById("guest-scoreboard")

function incrementHome1() {
    homeCounter += 1
    homeCounterEl.textContent = homeCounter
}

function incrementGuest1() {
    guestCounter += 1
    guestCounterEl.textContent = guestCounter
}

function incrementHome2() {
    homeCounter += 2
    homeCounterEl.textContent = homeCounter
}

function incrementGuest2() {
    guestCounter += 2
    guestCounterEl.textContent = guestCounter
}

function incrementHome3() {
    homeCounter += 3
    homeCounterEl.textContent = homeCounter
}

function incrementGuest3() {
    guestCounter += 3
    guestCounterEl.textContent = guestCounter
}