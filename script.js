// Service Worker Registration and Update Logic
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(registration => {
            // Check for updates on every page load
            registration.update();

            registration.onupdatefound = () => {
                const installingWorker = registration.installing;
                installingWorker.onstatechange = () => {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // New update found! Show a message to the user.
                            showUpdateToast();
                        }
                    }
                };
            };
        });
    });
}

function showUpdateToast() {
    const updateDiv = document.createElement("div");
    updateDiv.innerHTML = `
        <div id="update-toast" style="position: fixed; bottom: 20px; left: 50%; transform: translateX(-50%); 
             background: #333; color: #fff; padding: 15px 25px; border-radius: 50px; 
             z-index: 9999; display: flex; gap: 15px; align-items: center; box-shadow: 0 4px 15px rgba(0,0,0,0.3);">
            <span>New version available!</span>
            <button onclick="window.location.reload()" style="background: #1e88e5; border: none; 
                    color: white; padding: 5px 15px; border-radius: 20px; cursor: pointer; font-weight: bold;">
                RELOAD
            </button>
        </div>
    `;
    document.body.appendChild(updateDiv);
}

// 1. Keep your original data as the default
const defaultTimetable = {
    Monday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym", notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "09:45 - 11:00", Work: "PH1201", notify: true, location: "CLH-LT103" },
        { time: "11:00 - 12:00", Work: "CE1201", notify: true, location: "CLH-LT103" },
        { time: "12:00 - 12:40", Work: "Lunch", notify: false, location: "Mess" },
        { time: "12:40 - 13:40", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "13:40 - 17:00", Work: "EE1201", notify: true, location: "LAB" },
        { time: "17:00 - 18:00", Work: "CS1201", notify: true, location: "CLH-LT003" },
        { time: "18:00 - 19:30", Work: "IK6201", notify: true, location: "CLH-LT003/LT103" },
        { time: "19:30 - 20:30", Work: "Dinner", notify: false, location: "Mess" },
        { time: "20:30 - 22:00", Work: "Class Revision", notify: false, location: "CVR-210" },
        { time: "22:00 - 23:30", Work: "NCERT Reading", notify: false, location: "CVR-210" }
    ],
    Tuesday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym", notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "09:45 - 11:00", Work: "MA1201", notify: true, location: "CLH-LT003" },
        { time: "11:00 - 12:00", Work: "CS1201", notify: true, location: "CLH-LT003" },
        { time: "12:00 - 13:00", Work: "EE1201", notify: true, location: "CLH-LT103" },
        { time: "13:00 - 13:40", Work: "Lunch", notify: false, location: "Mess" },
        { time: "13:40 - 17:00", Work: "CE1201", notify: true, location: "CLH-LT103" },
        { time: "17:00 - 18:00", Work: "Italian", notify: false, location: "CVR-210" },
        { time: "18:00 - 19:30", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "19:30 - 21:00", Work: "Class Revision", notify: false, location: "CVR-210" },
        { time: "21:00 - 22:00", Work: "Dinner", notify: false, location: "Mess" },
        { time: "22:00 - 23:30", Work: "NCERT Reading", notify: false, location: "CVR-210" }
    ],
    Wednesday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:00", Work: "Exercise", notify: false, location: "CVR-210" },
        { time: "07:00 - 08:00", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:00 - 09:00", Work: "MA1201 Tut", notify: false, location: "R303" },
        { time: "09:00 - 10:00", Work: "News Reading", notify: true, location: "" },
        { time: "10:00 - 11:00", Work: "PH1201", notify: true, location: "CLH-LT103" },
        { time: "11:00 - 12:00", Work: "EE1201", notify: true, location: "CLH-LT103" },
        { time: "12:00 - 13:00", Work: "MA1201", notify: false, location: "CLH-LT003" },
        { time: "13:00 - 14:00", Work: "Lunch", notify: false, location: "Mess" },
        { time: "14:00 - 17:00", Work: "CS1201", notify: true, location: "LAB SLOT" },
        { time: "17:00 - 17:55", Work: "Class Revision", notify: false, location: "" },
        { time: "17:55 - 19:30", Work: "IK1201", notify: false, location: "CLH-LT003/LT103" },
        { time: "19:30 - 20:30", Work: "Dinner", notify: false, location: "Mess" },
        { time: "20:30 - 21:30", Work: "Class Revision", notify: false, location: "CVR-210" },
        { time: "21:30 - 23:30", Work: "NCERT Reading", notify: false, location: "CVR-210" }
    ],
    Thursday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:00", Work: "Exercise", notify: false, location: "CVR-210" },
        { time: "07:00 - 08:00", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:00 - 09:00", Work: "PH1201 Tut", notify: false, location: "R303" },
        { time: "09:00 - 12:00", Work: "PH1201", notify: true, location: "LAB SLOT" },
        { time: "12:00 - 13:00", Work: "EE1201", notify: true, location: "CLH-LT003" },
        { time: "13:00 - 14:00", Work: "Lunch", notify: false, location: "Mess" },
        { time: "14:00 - 15:30", Work: "Class Revision", notify: true, location: "CVR-210" },
        { time: "15:30 - 16:00", Work: "---------", notify: true, location: "CVR-210" },
        { time: "16:00 - 17:45", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "17:45 - 19:30", Work: "IK1201", notify: false, location: "CLH-LT003/LT103" },
        { time: "19:30 - 21:30", Work: "Italian", notify: false, location: "CVR-210" },
        { time: "21:30 - 22:00", Work: "Dinner", notify: false, location: "Mess" },
        { time: "22:00 - 23:00", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "23:00 - 23:30", Work: "NCERT Reading", notify: false, location: "CVR-210" }
    ],
    Friday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym", notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "09:45 - 11:00", Work: "PH1201", notify: true, location: "CLH-LT103" },
        { time: "11:00 - 11:35", Work: "Class Revision", notify: true, location: "CVR-210" },
        { time: "11:35 - 13:00", Work: "NCERT Reading", notify: true, location: "CVR-210" },
        { time: "13:00 - 14:00", Work: "Lunch", notify: false, location: "Mess" },
        { time: "14:00 - 14:45", Work: "Italian", notify: true, location: "CVR-210" },
        { time: "14:45 - 16:00", Work: "CS1201", notify: false, location: "CLH-LT003" },
        { time: "16:00 - 17:00", Work: "MA1201", notify: false, location: "CLH-LT003" },
        { time: "17:00 - 18:00", Work: "-------", notify: true, location: "" },
        { time: "18:00 - 19:30", Work: "IK6201", notify: true, location: "CLH-LT003/LT103" },
        { time: "19:30 - 20:30", Work: "Dinner", notify: false, location: "Mess" },
        { time: "20:30 - 21:30", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "21:30 - 22:30", Work: "Class Revision", notify: false, location: "CVR-210" }
    ],
    Saturday: [
        { time: "06:00 - 06:30", Work: "", notify: false, location: "" },
    ],
    Sunday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym", notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "09:45 - 12:45", Work: "WEB Dev", notify: true, location: "CVR-210" },
        { time: "12:45 - 13:35", Work: "Lunch", notify: true, location: "Mess" },
        { time: "13:35 - 15:45", Work: "NCERT Reading", notify: true, location: "CVR-210" },
        { time: "15:45 - 16:35", Work: "Italian", notify: false, location: "CVR-210" }
    ]
};

// 2. State variables
let currentDay = "Monday";
let isEditMode = false;
let timetable = JSON.parse(localStorage.getItem("userTimetable")) || defaultTimetable;
let userName = localStorage.getItem("userName") || "Arush Gaur";

window.onload = () => {
    document.getElementById("userName").innerText = userName;
    setCurrentDay();
};

function setupEditButton() {
    const container = document.querySelector(".container");
    const editBtn = document.createElement("button");
    editBtn.id = "editBtn";
    editBtn.innerText = "✏️";
    editBtn.style = "position: fixed; top: 10px; right: 10px; z-index: 1001; padding: 8px 15px; border-radius: 20px; border: none; background: #1e88e5; color: white; font-weight: bold; box-shadow: 0 2px 5px rgba(0,0,0,0.2); cursor: pointer;";
    editBtn.onclick = toggleEditMode;
    document.body.appendChild(editBtn);
}

function toggleEditMode() {
    isEditMode = !isEditMode;
    const btn = document.getElementById("editBtn");
    const nameHeader = document.getElementById("userName");
    
    if (isEditMode) {
        btn.innerText = "✅";
        btn.style.background = "#2e7d32";
        // Turn the name into an input field
        nameHeader.innerHTML = `<input type="text" id="nameInput" value="${userName}" style="color:black; font-size: 1.2rem; text-align: center; border-radius: 5px; border: none; padding: 5px;">`;
    } else {
        btn.innerText = "✏️";
        btn.style.background = "#1e88e5";
        
        // Save the new name
        const nameInput = document.getElementById("nameInput");
        if (nameInput) {
            userName = nameInput.value;
            localStorage.setItem("userName", userName);
            nameHeader.innerText = userName;
        }
        
        // Save the timetable
        localStorage.setItem("userTimetable", JSON.stringify(timetable));
    }
    renderTable();
}

function updateValue(day, index, field, value) {
    timetable[day][index][field] = value;
}

function changeDay(day, btn) {
    currentDay = day;
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTable();
}

function renderTable() {
    const body = document.getElementById("timetableBody");
    body.innerHTML = "";

    timetable[currentDay].forEach((cls, index) => {
        const [start, end] = cls.time.split(" - ");

        if (isEditMode) {
            // Editable Row with Delete Button
            body.innerHTML += `
                <tr class="class-row">
                    <td><input type="text" value="${cls.time}" oninput="updateValue('${currentDay}', ${index}, 'time', this.value)"></td>
                    <td><input type="text" value="${cls.Work}" oninput="updateValue('${currentDay}', ${index}, 'Work', this.value)"></td>
                    <td><input type="text" value="${cls.location}" oninput="updateValue('${currentDay}', ${index}, 'location', this.value)"></td>
                    <td>
                        <button onclick="deleteRow(${index})" style="background:none; border:none; color:red; cursor:pointer; font-size:1.2rem;">🗑️</button>
                    </td>
                </tr>
            `;
        } else {
            // Normal View
            body.innerHTML += `
                <tr class="class-row" data-start="${start}" data-end="${end}">
                    <td>${cls.time}</td>
                    <td>${cls.Work}</td>
                    <td>${cls.location}</td>
                </tr>
            `;
        }
    });

    // Add "+" button row at the bottom if in edit mode
    if (isEditMode) {
        body.innerHTML += `
            <tr>
                <td colspan="4">
                    <button onclick="addRow()" style="width:100%; padding:10px; background:#e8f0fe; border:2px dashed #1e88e5; color:#1e88e5; font-weight:bold; cursor:pointer; border-radius:8px;">
                        + Add New Row
                    </button>
                </td>
            </tr>
        `;
    }

    if (!isEditMode) {
        updateClassStates();
        updateStickyCurrentClass();
    }
}

// Function to add a blank row to the current day
function addRow() {
    const newEntry = { time: "00:00 - 00:00", Work: "New Task", notify: false, location: "Room" };
    timetable[currentDay].push(newEntry);
    renderTable(); // Refresh the table to show the new row
}

// Function to delete a specific row
function deleteRow(index) {
    if (confirm("Are you sure you want to delete this task?")) {
        timetable[currentDay].splice(index, 1);
        renderTable(); // Refresh the table
    }
}

// Keep all your original logic below exactly as it was
setInterval(() => {
    if (!isEditMode) {
        updateClassStates();
        updateStickyCurrentClass();
    }
}, 60000);

function setCurrentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const todayName = days[today];
    const buttons = document.querySelectorAll(".tabs button");
    buttons.forEach(button => {
        if (button.innerText === todayName) {
            button.click();
        }
    });
}

function timeToMinutes(time) {
    if (!time) return 0;
    const [hours, minutes] = time.trim().split(":").map(Number);
    return hours * 60 + minutes;
}

function updateClassStates() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    let nextClassMarked = false;

    document.querySelectorAll(".class-row").forEach(row => {
        row.classList.remove("past", "current", "next");
        const start = timeToMinutes(row.dataset.start);
        const end = timeToMinutes(row.dataset.end);

        if (currentMinutes >= end) {
            row.classList.add("past");
        } else if (currentMinutes >= start && currentMinutes <= end) {
            row.classList.add("current");
        } else if (!nextClassMarked && currentMinutes < start) {
            row.classList.add("next");
            nextClassMarked = true;
        }
    });
}

function updateStickyCurrentClass() {
    const bar = document.getElementById("currentClassBar");
    const text = document.getElementById("currentClassText");
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();
    const rows = document.querySelectorAll("#timetableBody tr");
    let found = false;

    rows.forEach(row => {
        const timeCell = row.querySelector("td");
        if (!timeCell || isEditMode) return;

        const [start, end] = timeCell.innerText.split(" - ");
        const startMin = timeToMinutes(start);
        const endMin = timeToMinutes(end);

        if (currentMinutes >= startMin && currentMinutes <= endMin) {
            const cells = row.querySelectorAll("td");
            text.innerText = `${cells[0].innerText} • ${cells[1].innerText} • ${cells[2]?.innerText || ""}`;
            bar.classList.remove("hidden");
            found = true;
        }
    });

    if (!found) bar.classList.add("hidden");
}

window.addEventListener("load", () => {
    const overlay = document.getElementById("quoteOverlay");
    const typedEl = document.getElementById("quoteText");

    const quotes = ["Designed for Focus"];
    const quote = quotes[0];
    let index = 0;

    // 1. Function to trigger the fade out
    const dismissOverlay = () => {
        overlay.classList.add("fade-out");
        // Optional: Remove from DOM after animation so it doesn't interfere
        setTimeout(() => {
            overlay.style.display = "none";
        }, 500); 
    };

    // 2. Add Click/Tap listener to vanish on click
    overlay.addEventListener("click", dismissOverlay);

    // 3. Typing logic
    function typeQuote() {
        if (typedEl && index < quote.length) {
            typedEl.textContent += quote.charAt(index);
            index++;
            setTimeout(typeQuote, 45);
        }
    }

    typedEl.textContent = ""; 
    setTimeout(typeQuote, 600);

    // 4. Keep the auto-vanish as a fallback (after 3 seconds)
    setTimeout(dismissOverlay, 1750); 
});



