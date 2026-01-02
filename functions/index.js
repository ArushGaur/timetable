const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// const USER_TOKEN = "BFwdISVN_aToxSkv3WZyKFW4gT78VdawEJNqstcu1y4UhchPTwsJqjVO7X4jOFMOsvZd_905bsMzcoQNXPjQrrY";

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

function toMin(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

exports.classReminder = functions.pubsub
  .schedule("* * * * *")
  .timeZone("Asia/Kolkata")
  .onRun(async () => {
    const now = new Date();
    const day = now.toLocaleString("en-US", { weekday: "long" });
    const mins = now.getHours() * 60 + now.getMinutes();

    for (const cls of timetable[day] || []) {
      if (!cls.notify) continue;

      const start = toMin(cls.time.split(" - ")[0]);
      if (mins === start - cls.notifyBefore) {
        await admin.messaging().send({
          token: USER_TOKEN,
          notification: {
            title: "Upcoming Class 📚",
            body: `${cls.Work} in 60 minutes\n📍 ${cls.location}`
          }
        });
      }
    }
    return null;
  });
