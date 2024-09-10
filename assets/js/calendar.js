const date = new Date(2024, 7, 5);
let selectedDate = { day: 5, month: 7, year: 2024 };
const boldDates = ["1", "3", "4"];

function renderCalendar() {
  const month = date.getMonth();
  const year = date.getFullYear();
  const today = new Date(2024, 7, 5);

  const currentMonth = document.querySelector(".current-month");
  const calendarDays = document.querySelector(".calendar-days");

  currentMonth.innerHTML = `<span class="month-number">${month + 1}</span><span class="month-text ms-1">月</span>`;
  calendarDays.innerHTML = "";

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInLastRow = (firstDayOfMonth + daysInMonth) % 7;
  const totalDaysInCalendar = 42;

  const lastMonthDays = new Date(year, month, 0).getDate();
  const lastMonthDaysInFirstRow = firstDayOfMonth === 0 ? 0 : firstDayOfMonth;
  const startDayOfLastMonth = lastMonthDays - lastMonthDaysInFirstRow + 1;

  for (let i = startDayOfLastMonth; i <= lastMonthDays; i++) {
    calendarDays.innerHTML += `<div class="day prev-month">${i}</div>`;
  }

  for (let i = 1; i <= daysInMonth; i++) {
    const isToday =
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();
    const isSelected =
      i === selectedDate.day &&
      month === selectedDate.month &&
      year === selectedDate.year;
    const isBold = boldDates.includes(i.toString()) && month === 7;

    calendarDays.innerHTML += `
      <div class="day ${isSelected ? "active selected" : ""} ${isBold ? "fw-bolder" : ""}" data-day="${i}"> ${i}
      </div>`;
  }

  const remainingDays = totalDaysInCalendar - (lastMonthDaysInFirstRow + daysInMonth);
  for (let i = 1; i <= remainingDays; i++) {
    calendarDays.innerHTML += `<div class="day next-month">${i}</div>`;
  }

  document.querySelectorAll('.day').forEach(day => {
    day.classList.remove('active');
  });

  document.querySelectorAll(".day").forEach((day) => {
    day.addEventListener("click", (e) => {
      const dayNumber = parseInt(e.target.getAttribute("data-day"));
      if (!isNaN(dayNumber)) {
        selectDate(dayNumber, month, year);
      }
    });
  });
}

function selectDate(day, month, year) {
  selectedDate = { day, month, year };
  renderCalendar();
}

document.getElementById("prev-month").addEventListener("click", () => {
  date.setMonth(date.getMonth() - 1);
  renderCalendar();
});

document.getElementById("next-month").addEventListener("click", () => {
  date.setMonth(date.getMonth() + 1);
  renderCalendar();
});

renderCalendar();
