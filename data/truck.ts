// ═══════════════════════════════════════════════════════════
// 🚚 EDIT THIS FILE WEEKLY — the site reads everything from here
// ═══════════════════════════════════════════════════════════

export type DaySchedule = {
  day: "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT" | "SUN";
  location: string;
  address: string;
  hours: string;
  openHour: number;  // 24-hour format, e.g. 11 = 11am
  closeHour: number; // e.g. 15 = 3pm
  closed?: boolean;
};

// 🟢 TODAY — just update this one line when you move
export const TODAY: DaySchedule = {
  day: "SAT",
  location: "Downtown Plaza",
  address: "19578 Sun Cir, Downtown",
  hours: "11am – 3pm",
  openHour: 11,
  closeHour: 15,
};

// 🟢 THIS WEEK — update as you know your schedule
export const WEEK: DaySchedule[] = [
  { day: "MON", location: "Downtown Plaza", address: "19578 Sun Cir", hours: "11am – 3pm", openHour: 11, closeHour: 15 },
  { day: "TUE", location: "Riverside Park", address: "Riverside Park, East Lot", hours: "12pm – 8pm", openHour: 12, closeHour: 20 },
  { day: "WED", location: "Tech Campus", address: "Tech Campus Lot B", hours: "11am – 2pm", openHour: 11, closeHour: 14 },
  { day: "THU", location: "Farmers Market", address: "Farmers Market, Main St", hours: "9am – 4pm", openHour: 9, closeHour: 16 },
  { day: "FRI", location: "Brewery District", address: "Brewery District, Lot 3", hours: "5pm – 11pm", openHour: 17, closeHour: 23 },
  { day: "SAT", location: "Downtown Plaza", address: "19578 Sun Cir, Downtown", hours: "11am – 3pm", openHour: 11, closeHour: 15 },
  { day: "SUN", location: "Rest day", address: "", hours: "—", openHour: 0, closeHour: 0, closed: true },
];

// 🟢 NEXT STOP — where you'll be next
export const NEXT_STOP = {
  day: "Tomorrow",
  location: "Riverside Park",
  hours: "12pm – 8pm",
};

// 🟢 CONTACT INFO
export const CONTACT = {
  instagram: "kiks",
  phone: "(000) 000-0000",
  email: "hello@kiks.com",
};