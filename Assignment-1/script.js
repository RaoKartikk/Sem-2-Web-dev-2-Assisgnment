let events = [];

function addEvent(){
    let eventTitle = document.getElementById("title").value;
    let eventDate = document.getElementById("date").value;
    let eventCategory = document.getElementById("category").value;
    let eventDesc = document.getElementById("desc").value;

    
    let newEntry = {
        title: eventTitle, 
        date: eventDate, 
        category: eventCategory, 
        desc: eventDesc
    };

    events.push(newEntry);
    renderEvents();

    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("desc").value = "";
}

function renderEvents(){
    let displayArea = document.getElementById("eventList");
    displayArea.innerHTML = "";

    events.forEach((item, id) => {
        displayArea.innerHTML += `
        <div class="event-card">
            <button class="delete" onclick="deleteEvent(${id})">×</button>
            <h3>${item.title}</h3>
            <div class="date">📅 ${item.date}</div>
            <span class="badge">${item.category}</span>
            <p>${item.desc}</p>
        </div>
        `;
    });
}

function deleteEvent(id){
    events.splice(id, 1);
    renderEvents();
}

function clearEvents(){
    events = []; 
    renderEvents();
}

console.log("Event Dashboard Active");
console.log(events);