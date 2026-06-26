// calendar.js
export async function loadFullCalendar() {
    const fullCalendar = await import('fullcalendar');
    return fullCalendar;
}
