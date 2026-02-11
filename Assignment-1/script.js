let events = [];

function addEvent() {
    let title = document.getElementById("title").value;
    let date = document.getElementById("date").value;
    let category = document.getElementById("category").value;
    let desc = document.getElementById("desc").value;

    if (title !== "" && date !== "") {
        let newEntry = { title, date, category, desc };
        events.push(newEntry);
        renderEvents();
        
        
        document.getElementById("title").value = "";
        document.getElementById("date").value = "";
        document.getElementById("desc").value = "";
    } else {
        alert("Please enter a Title and Date!");
    }
}

function addSampleEvents() {
    let samples = [
        { title: "Emifest", date: "2026-01-14", category: "Social", desc: "lorem ipsum" }
    ];
    events = [...events, ...samples];
    renderEvents();
}

function renderEvents() {
    let list = document.getElementById("eventList");
    list.innerHTML = "";

    events.forEach((item, index) => {
        list.innerHTML += `
        <div class="event-card">
            <button class="delete" onclick="deleteEvent(${index})">×</button>
            <h3>${item.title}</h3>
            <div class="date">📅 ${item.date}</div>
            <span class="badge">${item.category}</span>
            <p>${item.desc}</p>
        </div>
        `;
    });
}

function deleteEvent(index) {
    events.splice(index, 1);
    renderEvents();
}

function clearEvents() {
    events = [];
    renderEvents();
}


document.addEventListener('keydown', function(event) {
    let keyDisplay = document.querySelector("#key-display span");
    if (keyDisplay) {
        keyDisplay.innerText = event.key;
    }
});

console.log("Dashboard Active");