const timetable = {
    Monday: [
        { time: "06:00 - 06:30", Work: "Ready",            notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym",              notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading",     notify: false, location: "CVR-210" },
        { time: "09:45 - 11:00", Work: "PH1201",           notify: true,  location: "CLH-LT103" },
        { time: "11:00 - 12:00", Work: "CE1201",           notify: true,  location: "CLH-LT103" },
        { time: "12:00 - 12:40", Work: "Lunch",            notify: false, location: "Mess" },
        { time: "12:40 - 13:40", Work: "NCERT Reading",    notify: false, location: "CVR-210" },
        { time: "13:40 - 17:00", Work: "EE1201",           notify: true,  location: "LAB" },
        { time: "17:00 - 18:00", Work: "CS1201",           notify: true,  location: "CLH-LT003" },
        { time: "18:00 - 19:30", Work: "IK6201",           notify: true,  location: "CLH-LT003/LT103" },
        { time: "19:30 - 20:30", Work: "Dinner",           notify: false, location: "Mess" },
        { time: "20:30 - 22:00", Work: "Class Revision",   notify: false, location: "CVR-210" },
        { time: "22:00 - 23:30", Work: "NCERT Reading",    notify: false, location: "CVR-210" }
    ],
    Tuesday: [
        { time: "06:00 - 06:30", Work: "Ready",            notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym",              notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading",     notify: false, location: "CVR-210" },
        { time: "09:45 - 11:00", Work: "MA1201",           notify: true,  location: "CLH-LT003" },
        { time: "11:00 - 12:00", Work: "CS1201",           notify: true,  location: "CLH-LT003" },
        { time: "12:00 - 13:00", Work: "EE1201",           notify: true,  location: "CLH-LT103" },
        { time: "13:00 - 13:40", Work: "Lunch",            notify: false, location: "Mess" },
        { time: "13:40 - 17:00", Work: "CE1201",           notify: true,  location: "CLH-LT103" },
        { time: "17:00 - 18:00", Work: "Italian",          notify: false, location: "CVR-210" },
        { time: "18:00 - 19:30", Work: "NCERT Reading",    notify: false, location: "CVR-210" },
        { time: "19:30 - 21:00", Work: "Class Revision",   notify: false, location: "CVR-210" },
        { time: "21:00 - 22:00", Work: "Dinner",           notify: false, location: "Mess" },
        { time: "22:00 - 23:30", Work: "NCERT Reading",    notify: false, location: "CVR-210" }
    ],
    Wednesday: [
        { time: "06:00 - 06:30", Work: "Ready",            notify: false, location: "CVR-210" },
        { time: "06:30 - 07:00", Work: "Exercise",         notify: false, location: "CVR-210" },
        { time: "07:00 - 08:00", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:00 - 09:00", Work: "MA1201 Tut",       notify: false, location: "R303" },
        { time: "09:00 - 10:00", Work: "News Reading",     notify: true,  location: "" },
        { time: "10:00 - 11:00", Work: "PH1201",           notify: true,  location: "CLH-LT103" },
        { time: "11:00 - 12:00", Work: "EE1201",           notify: true,  location: "CLH-LT103" },
        { time: "12:00 - 13:00", Work: "MA1201",           notify: false, location: "CLH-LT003" },
        { time: "13:00 - 14:00", Work: "Lunch",            notify: false, location: "Mess" },       
        { time: "14:00 - 17:00", Work: "CS1201",           notify: true,  location: "LAB SLOT" },
        { time: "17:00 - 17:55", Work: "Class Revision",   notify: false, location: "" },
        { time: "17:55 - 19:30", Work: "IK1201",           notify: false, location: "CLH-LT003/LT103" },
        { time: "19:30 - 20:30", Work: "Dinner",           notify: false, location: "Mess" },
        { time: "20:30 - 21:30", Work: "Class Revision",   notify: false, location: "CVR-210" },
        { time: "21:30 - 23:30", Work: "NCERT Reading",    notify: false, location: "CVR-210" }
    ],
    Thursday: [
        { time: "06:00 - 06:30", Work: "Ready",            notify: false, location: "CVR-210" },
        { time: "06:30 - 07:00", Work: "Exercise",         notify: false, location: "CVR-210" },
        { time: "07:00 - 08:00", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:00 - 09:00", Work: "PH1201 Tut",       notify: false, location: "R303" },
        { time: "09:00 - 12:00", Work: "PH1201",           notify: true,  location: "LAB SLOT" },
        { time: "12:00 - 13:00", Work: "EE1201",           notify: true,  location: "CLH-LT003" },
        { time: "13:00 - 14:00", Work: "Lunch",            notify: false, location: "Mess" },
        { time: "14:00 - 15:30", Work: "Class Revision",   notify: true,  location: "CVR-210" },
        { time: "15:30 - 16:00", Work: "---------",        notify: true,  location: "CVR-210" },
        { time: "16:00 - 17:45", Work: "NCERT Reading",    notify: false, location: "CVR-210" },
        { time: "17:45 - 19:30", Work: "IK1201",           notify: false, location: "CLH-LT003/LT103" },
        { time: "19:30 - 21:30", Work: "Italian",          notify: false, location: "CVR-210" },
        { time: "21:30 - 22:00", Work: "Dinner",           notify: false, location: "Mess" },
        { time: "22:00 - 23:00", Work: "News Reading",     notify: false, location: "CVR-210" },
        { time: "23:00 - 23:30", Work: "NCERT Reading",    notify: false, location: "CVR-210" }
    ],
    Friday: [
        { time: "06:00 - 06:30", Work: "Ready",            notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym",              notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading",     notify: false, location: "CVR-210" },
        { time: "09:45 - 11:00", Work: "PH1201",           notify: true,  location: "CLH-LT103" },
        { time: "11:00 - 11:35", Work: "Class Revision",   notify: true,  location: "CVR-210" },
        { time: "11:35 - 13:00", Work: "NCERT Reading",    notify: true,  location: "CVR-210" },
        { time: "13:00 - 14:00", Work: "Lunch",            notify: false, location: "Mess" },
        { time: "14:00 - 14:45", Work: "Italian",          notify: true,  location: "CVR-210" },
        { time: "14:45 - 16:00", Work: "CS1201",           notify: false, location: "CLH-LT003" },
        { time: "16:00 - 17:00", Work: "MA1201",           notify: false, location: "CLH-LT003" },
        { time: "17:00 - 18:00", Work: "-------",          notify: true, location: "" },
        { time: "18:00 - 19:30", Work: "IK6201",           notify: true, location: "CLH-LT003/LT103" },
        { time: "19:30 - 20:30", Work: "Dinner",           notify: false, location: "Mess" },
        { time: "20:30 - 21:30", Work: "NCERT Reading",    notify: false, location: "CVR-210" },
        { time: "21:30 - 22:30", Work: "Class Revision",   notify: false, location: "CVR-210" }
    ],
    Saturday: [
        { time: "06:00 - 06:30", Work: "Ready",            notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym",              notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:00", Work: "Breakfast",        notify: false, location: "CVR-210" },
        { time: "08:00 - 08:45", Work: "News Reading",     notify: false, location: "CVR-210" },
        { time: "08:45 - 12:00", Work: "NCC Traning",      notify: false, location: "" },
        { time: "12:00 - 13:00", Work: "Bath",             notify: true,  location: "Hostel" },
        { time: "13:00 - 13:40", Work: "Lunch",            notify: true,  location: "Mess" },
        { time: "13:40 - 15:40", Work: "NCERT Reading",    notify: true,  location: "CVR-210" },
        { time: "16:00 - 19:00", Work: "WEB Dev",          notify: false, location: "CVR-210" },
        { time: "19:00 - 19:30", Work: "------",           notify: true,  location: "" },
        { time: "19:30 - 20:30", Work: "Assignment",       notify: false, location: "CVR-210" },
        { time: "20:30 - 21:00", Work: "Dinner",           notify: false, location: "Mess" },
        { time: "21:00 - 22:00", Work: "NCERT Reading",    notify: false, location: "CVR-210" },
        { time: "22:00 - 23:00", Work: "Italian",          notify: false, location: "CVR-210" }
    ],
    Sunday: [
        { time: "06:00 - 06:30", Work: "Ready",            notify: false, location: "CVR-210" },
        { time: "06:30 - 07:30", Work: "Gym",              notify: false, location: "Gymkhana" },
        { time: "07:30 - 08:30", Work: "Bath & Breakfast", notify: false, location: "CVR-210" },
        { time: "08:30 - 09:45", Work: "News Reading",     notify: false, location: "CVR-210" },
        { time: "09:45 - 12:45", Work: "WEB Dev",          notify: true,  location: "CVR-210" },
        { time: "12:45 - 13:35", Work: "Lunch",            notify: true,  location: "Mess" },
        { time: "13:35 - 15:45", Work: "NCERT Reading",    notify: true,  location: "CVR-210" },
        { time: "15:45 - 16:35", Work: "Italian",          notify: false, location: "CVR-210" },
        // { time: "14:00 - 17:00", Work: "CE1201",           notify: true,  location: "CLH-LT103" },
        // { time: "17:20 - 18:00", Work: "Italian",          notify: false, location: "CVR-210" },
        // { time: "18:00 - 19:30", Work: "NCERT Reading",    notify: false, location: "CVR-210" },
        // { time: "19:30 - 21:00", Work: "Class Revision",   notify: false, location: "CVR-210" },
        // { time: "21:00 - 21:30", Work: "Dinner",           notify: false, location: "Mess" },
        // { time: "22:00 - 23:30", Work: "NCERT Reading",    notify: false, location: "CVR-210" }
    ]
};
window.onload = () => {
    setCurrentDay();
};

function changeDay(day, btn) {
    currentDay = day;
    document.querySelectorAll(".tabs button").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderTable();
}

function renderTable() {
    const body = document.getElementById("timetableBody");
    body.innerHTML = "";

    if (timetable[currentDay].length === 0) {
        body.innerHTML = `<tr><td colspan="3">No classes</td></tr>`;
        return;
    }

    timetable[currentDay].forEach(cls => {
        body.innerHTML += `
            <tr>
                <td>${cls.time}</td>
                <td>${cls.Work}</td>
                <td>${cls.location}</td>
            </tr>
        `;
    });
    updateClassStates();
    updateStickyCurrentClass();
    enableNotifications();

}

setInterval(() => {
    updateClassStates();
    updateStickyCurrentClass();
}, 60000);

function setCurrentDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date().getDay();
    const todayName = days[today];

    // Find matching tab button
    const buttons = document.querySelectorAll(".tabs button");

    buttons.forEach(button => {
        if (button.innerText === todayName) {
            button.click(); // auto select today
        }
    });
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(":").map(Number);
    return hours * 60 + minutes;
}

function updateClassStates() {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const rows = document.querySelectorAll("#timetableBody tr");

    rows.forEach(row => {
        row.classList.remove("current-class", "past-class");

        const timeCell = row.querySelector("td");
        if (!timeCell) return;

        const [start, end] = timeCell.innerText.split(" - ");
        const startMin = timeToMinutes(start);
        const endMin = timeToMinutes(end);

        if (currentMinutes > endMin) {
            // past class
            row.classList.add("past-class");
        }
        else if (currentMinutes + 60 >= startMin && currentMinutes + 60 <= endMin) {
            // current class
            row.classList.add("current-class");
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
        if (!timeCell) return;

        const [start, end] = timeCell.innerText.split(" - ");
        const startMin = timeToMinutes(start);
        const endMin = timeToMinutes(end);

        if (currentMinutes >= startMin && currentMinutes <= endMin) {
            const cells = row.querySelectorAll("td");
            const time = cells[0].innerText;
            const course = cells[1].innerText;
            const location = cells[2]?.innerText || "";

            text.innerText = `${time} • ${course} • ${location}`;
            bar.classList.remove("hidden");
            found = true;
        }
    });

    if (!found) {
        bar.classList.add("hidden");
    }
}

