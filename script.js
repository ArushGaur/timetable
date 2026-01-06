if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js').then(reg => {
            // Check for updates every time the page is opened
            reg.update();
        });
    });
}
// 1. Keep your original data as the default
const defaultTimetable = {
    Monday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "07:30 - 08:00", Work: "Breakfast", notify: false, location: "Mess" },
        { time: "08:00 - 09:00", Work: "PH1201 tut", notify: true, location: "R303" },
        { time: "10:00 - 11:00", Work: "PH1201", notify: true, location: "CLH-LT103" },
        { time: "11:00 - 12:00", Work: "CE1201", notify: true, location: "CLH-LT103" },
        { time: "12:00 - 12:40", Work: "Lunch", notify: false, location: "Mess" },
        { time: "12:40 - 13:40", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "13:40 - 17:00", Work: "EE1201", notify: true, location: "LAB" },
        { time: "17:00 - 18:00", Work: "CS1201", notify: true, location: "CLH-LT003" },
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
        { time: "08:00 - 09:00", Work: "IK1201", notify: true, location: "CLH-LT003/LT103" },
        { time: "09:00 - 10:00", Work: "News Reading", notify: false, location: "" },
        { time: "10:00 - 11:00", Work: "PH1201", notify: true, location: "CLH-LT103" },
        { time: "11:00 - 12:00", Work: "EE1201", notify: true, location: "CLH-LT103" },
        { time: "12:00 - 13:00", Work: "MA1201", notify: true, location: "CLH-LT003" },
        { time: "13:00 - 14:00", Work: "Lunch", notify: false, location: "Mess" },
        { time: "14:00 - 17:00", Work: "CS1201", notify: true, location: "LAB SLOT" },
        { time: "17:00 - 17:55", Work: "Class Revision", notify: false, location: "" },
        { time: "19:30 - 20:30", Work: "Dinner", notify: false, location: "Mess" },
        { time: "20:30 - 21:30", Work: "Class Revision", notify: false, location: "CVR-210" },
        { time: "21:30 - 23:30", Work: "NCERT Reading", notify: false, location: "CVR-210" }
    ],
    Thursday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:00", Work: "Exercise", notify: false, location: "CVR-210" },
        { time: "07:00 - 08:00", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:00 - 09:00", Work: "IK1201", notify: true, location: "CLH-LT003/LT103" },
        { time: "09:00 - 12:00", Work: "PH1201", notify: true, location: "LAB SLOT" },
        { time: "12:00 - 13:00", Work: "EE1201", notify: true, location: "CLH-LT003" },
        { time: "13:00 - 14:00", Work: "Lunch", notify: false, location: "Mess" },
        { time: "14:00 - 15:30", Work: "Class Revision", notify: false, location: "CVR-210" },
        { time: "15:30 - 16:00", Work: "---------", notify: false, location: "CVR-210" },
        { time: "16:00 - 17:45", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "19:30 - 21:30", Work: "Italian", notify: false, location: "CVR-210" },
        { time: "21:30 - 22:00", Work: "Dinner", notify: false, location: "Mess" },
        { time: "22:00 - 23:00", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "23:00 - 23:30", Work: "NCERT Reading", notify: false, location: "CVR-210" }
    ],
    Friday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym", notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:00 - 09:00", Work: "MA1201 Tut", notify: true, location: "R303" },
        { time: "09:45 - 11:00", Work: "PH1201", notify: true, location: "CLH-LT103" },
        { time: "11:00 - 11:35", Work: "Class Revision", notify: false, location: "CVR-210" },
        { time: "11:35 - 13:00", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "13:00 - 14:00", Work: "Lunch", notify: false, location: "Mess" },
        { time: "14:00 - 14:45", Work: "Italian", notify: false, location: "CVR-210" },
        { time: "14:45 - 16:00", Work: "CS1201", notify: true, location: "CLH-LT003" },
        { time: "16:00 - 17:00", Work: "MA1201", notify: true, location: "CLH-LT003" },
        { time: "17:00 - 18:00", Work: "-------", notify: false, location: "" },
        { time: "19:30 - 20:30", Work: "Dinner", notify: false, location: "Mess" },
        { time: "20:30 - 21:30", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "21:30 - 22:30", Work: "Class Revision", notify: false, location: "CVR-210" }
    ],
    Saturday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym", notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:00", Work: "Breakfast", notify: false, location: "CVR-210" },
        { time: "08:00 - 08:45", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "08:45 - 12:00", Work: "NCC Traning", notify: false, location: "" },
        { time: "12:00 - 13:00", Work: "Bath", notify: false, location: "Hostel" },
        { time: "13:00 - 13:40", Work: "Lunch", notify: false, location: "Mess" },
        { time: "13:40 - 15:40", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "16:00 - 19:00", Work: "WEB Dev", notify: false, location: "CVR-210" },
        { time: "19:00 - 19:30", Work: "------", notify: false, location: "" },
        { time: "19:30 - 20:30", Work: "Assignment", notify: false, location: "CVR-210" },
        { time: "20:30 - 21:00", Work: "Dinner", notify: false, location: "Mess" },
        { time: "21:00 - 22:00", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "22:00 - 23:00", Work: "Italian", notify: false, location: "CVR-210" }
    ],
    Sunday: [
        { time: "06:00 - 06:30", Work: "Ready", notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym", notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading", notify: false, location: "CVR-210" },
        { time: "09:45 - 12:45", Work: "WEB Dev", notify: false, location: "CVR-210" },
        { time: "12:45 - 13:35", Work: "Lunch", notify: false, location: "Mess" },
        { time: "13:35 - 15:45", Work: "NCERT Reading", notify: false, location: "CVR-210" },
        { time: "15:45 - 16:35", Work: "Italian", notify: false, location: "CVR-210" }
    ]
};
// 2. State variables
let currentDay = "Monday";
let isSorted = false;
let isEditMode = false;
let timetable = JSON.parse(localStorage.getItem("userTimetable")) || defaultTimetable;
let userName = localStorage.getItem("userName") || "Arush Gaur";

window.addEventListener("load", () => {
    document.getElementById("userName").innerText = userName;
    setCurrentDay();
    setTimeout(updateStickyCurrentClass, 0);

});

const loginScreen = document.getElementById("loginScreen");
const studentInput = document.getElementById("studentInput");
const suggestions = document.getElementById("suggestions");

window.addEventListener("load", () => {
    const profile = JSON.parse(localStorage.getItem("studentProfile"));

    if (!profile) {
        loginScreen.classList.remove("hidden");
    }
});

function toggleEditMode() {
    // if (isProfileOpen) return;
    isEditMode = !isEditMode;

    const saveBtn = document.getElementById("saveBtn");
    const drawerBtn = document.getElementById("drawerEditBtn");
    const nameHeader = document.getElementById("userName");

    if (isEditMode) {
        // ===== ENTER EDIT MODE =====
        saveBtn.style.display = "block";

        if (drawerBtn) {
            drawerBtn.innerText = "✏️ Editing...";
            drawerBtn.disabled = true;
            drawerBtn.style.opacity = "0.6";
        }

        nameHeader.innerHTML = `
            <input
                type="text"
                id="nameInput"
                value="${userName}"
                style="
                    color: black;
                    font-size: 1.2rem;
                    text-align: center;
                    border-radius: 5px;
                    border: none;
                    padding: 5px;
                "
            >
        `;
    } else {
        // ===== SAVE & EXIT =====
        saveBtn.style.display = "none";

        if (drawerBtn) {
            drawerBtn.innerText = "✏️ Edit Timetable";
            drawerBtn.disabled = false;
            drawerBtn.style.opacity = "1";
        }

        const nameInput = document.getElementById("nameInput");
        if (nameInput) {
            userName = nameInput.value;
            localStorage.setItem("userName", userName);
            nameHeader.innerText = userName;
        }

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
const originalTimetable = JSON.parse(JSON.stringify(timetable));
function renderTable() {
    const body = document.getElementById("timetableBody");
    body.innerHTML = "";

    timetable[currentDay].forEach((cls, index) => {
        const [start, end] = cls.time.split(" - ");

        if (isEditMode) {
            // Editable Row with Delete Button
            body.innerHTML += `
                <tr class="class-row">
                    <!-- TIME (clickable, opens modal) -->
                    <td
                        onclick="openTimePicker(${index}, '${cls.time}')"
                        style="cursor:pointer; font-weight:600; color:#1e88e5;"
                    >
                        ${cls.time}
                    </td>

                    <!-- WORK -->
<td
  class="editable-cell"
  onclick="openTextEditor('${currentDay}', ${index}, 'Work', '${cls.Work}')"
>
  ${cls.Work}
</td>

<!-- LOCATION -->
<td
  class="editable-cell editable-location"
  onclick="openTextEditor('${currentDay}', ${index}, 'location', '${cls.location}')"
>
  ${cls.location}
</td>
                    <!-- DELETE -->
                    <td>
                        <button
                            onclick="deleteRow(${index})"
                            style="background:none; border:none; color:red; cursor:pointer; font-size:1.2rem;"
                        >
                            🗑️
                        </button>
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
    if (found) {
        bar.classList.remove("hidden");
        document.body.classList.add("has-current-bar");
    } else {
        bar.classList.add("hidden");
        document.body.classList.remove("has-current-bar");
    }

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

let activeEditRowIndex = null;

function openTimePicker(index, time) {
    if (!isEditMode || isProfileOpen) return;

    activeEditRowIndex = index;

    const [start, end] = time.split(" - ");
    document.getElementById("startTime").value = start;
    document.getElementById("endTime").value = end;

    document.getElementById("timePickerOverlay").classList.remove("hidden");
}

function closeTimePicker() {
    document.getElementById("timePickerOverlay").classList.add("hidden");
}

function applyTime() {
    const start = document.getElementById("startTime").value;
    const end = document.getElementById("endTime").value;

    if (!start || !end) {
        alert("Please select both times");
        return;
    }

    if (end <= start) {
        alert("End time must be after start time");
        return;
    }

    timetable[currentDay][activeEditRowIndex].time = `${start} - ${end}`;
    renderTable();
    closeTimePicker();
}

function openNativePicker(wrapper) {
    const input = wrapper.querySelector("input[type='time']");
    if (!input) return;

    // Modern browsers (Chrome, Edge, Android)
    if (input.showPicker) {
        input.showPicker();
    } else {
        input.focus(); // fallback
    }
}

let activeTextEdit = {
    type: null,
    day: null,
    index: null,
    field: null
};

function openTextEditor(day, index, field, currentValue, type = "timetable") {
    if (!isEditMode || isProfileOpen) return;

    activeTextEdit = { type, day, index, field };

    const title =
        type === "name"
            ? "Edit Name"
            : field === "Work"
                ? "Edit Work"
                : "Edit Location";

    document.getElementById("textEditTitle").innerText = title;

    const input = document.getElementById("textEditInput");
    input.value = currentValue;
    input.focus();

    document.getElementById("textEditOverlay").classList.remove("hidden");
}


function applyTextEdit() {
    const value = document.getElementById("textEditInput").value.trim();
    if (!value) return;

    if (activeTextEdit.type === "name") {
        userName = value;
        localStorage.setItem("userName", userName);
        document.getElementById("userName").innerText = userName;
    } else {
        const { day, index, field } = activeTextEdit;
        timetable[day][index][field] = value;
        renderTable();
    }

    closeTextEditor();
}

function closeTextEditor() {
    const overlay = document.getElementById("textEditOverlay");
    overlay.classList.add("hidden");

    // 🔥 reset state (VERY IMPORTANT)
    activeTextEdit = {
        type: null,
        day: null,
        index: null,
        field: null
    };
}

const STUDENTS = [
    { name: "Arush Gaur", roll: "IITP23EE001", group: "G1" },
    { name: "Rahul Kumar", roll: "IITP23ME014", group: "G3" },
    { name: "Ananya Singh", roll: "IITP23CS021", group: "G7" }
];

studentInput.addEventListener("input", () => {
    const query = studentInput.value.toLowerCase().trim();
    suggestions.innerHTML = "";

    if (!query) {
        suggestions.classList.add("hidden");
        return;
    }

    const matches = STUDENTS.filter(s =>
        s.name.toLowerCase().includes(query)
    );

    if (matches.length === 0) {
        suggestions.classList.add("hidden");
        return;
    }

    matches.forEach(student => {
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${student.name}</span>
            <span class="roll">${student.roll}</span>
        `;
        li.onclick = () => selectStudent(student);
        suggestions.appendChild(li);
    });

    suggestions.classList.remove("hidden");
});

function selectStudent(student) {
    studentInput.value = student.name;
    suggestions.classList.add("hidden");

    const profile = {
        name: student.name,
        roll: student.roll,
        group: student.group
    };

    localStorage.setItem("studentProfile", JSON.stringify(profile));
    localStorage.setItem("userName", student.name);

    document.getElementById("userName").innerText = student.name;
    loginScreen.classList.add("hidden");

    startApp();
}

let isProfileOpen = false;

function openProfile() {
    const drawer = document.getElementById("profileDrawer");

    const profile = JSON.parse(localStorage.getItem("studentProfile"));
    if (!profile) return;

    document.getElementById("profileName").innerText = profile.name;
    document.getElementById("profileRoll").innerText = profile.roll || "";

    // 🔒 Disable editing when profile opens
    if (isEditMode) {
        toggleEditMode(); // auto save + exit edit mode
    }

    isProfileOpen = true;

    drawer.classList.remove("hidden");
    requestAnimationFrame(() => {
        drawer.classList.add("show");
    });
}

function closeProfile() {
    const drawer = document.getElementById("profileDrawer");

    drawer.classList.remove("show");

    setTimeout(() => {
        drawer.classList.add("hidden");
        isProfileOpen = false; // 🔓 enable interactions again
    }, 400);
}


/* Close drawer if clicked outside */
document.addEventListener("click", (e) => {
    const drawer = document.getElementById("profileDrawer");
    const btn = document.getElementById("profileBtn");

    if (
        drawer.classList.contains("show") &&
        !drawer.contains(e.target) &&
        e.target !== btn
    ) {
        closeProfile();
    }
});

/* LOGOUT */
function logoutStudent() {
    if (!confirm("Are you sure you want to logout?")) return;

    localStorage.removeItem("studentProfile");
    localStorage.removeItem("userName");
    localStorage.removeItem("personalTasks");

    location.reload();
}

function sortTimetable() {

    // TURN SORT OFF → restore original
    if (isSorted) {
        timetable = JSON.parse(JSON.stringify(originalTimetable));
        localStorage.setItem("userTimetable", JSON.stringify(timetable));
        isSorted = false;
        renderTable();
        closeProfile();
        return;
    }

    // TURN SORT ON
    Object.keys(timetable).forEach(day => {
        const entries = timetable[day];

        const getStartMinutes = (entry) => {
            const start = entry.time.split(" - ")[0];
            return timeToMinutes(start);
        };

        const instituteClasses = entries
            .filter(e => e.notify)
            .sort((a, b) => getStartMinutes(a) - getStartMinutes(b));

        const otherTasks = entries
            .filter(e => !e.notify)
            .sort((a, b) => getStartMinutes(a) - getStartMinutes(b));

        timetable[day] = [...instituteClasses, ...otherTasks];
    });

    localStorage.setItem("userTimetable", JSON.stringify(timetable));
    isSorted = true;
    renderTable();
    closeProfile();
}
