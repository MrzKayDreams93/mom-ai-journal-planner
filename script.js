
  document.addEventListener('DOMContentLoaded', function () {
    var calendarEl = document.getElementById('calendar');

    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      selectable: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek'
      },
      dateClick: function (info) {
        const eventTitle = prompt('Add a new task or reminder:');
        if (eventTitle) {
          calendar.addEvent({
            title: eventTitle,
            start: info.dateStr,
            allDay: true
          });
        }
      }
    });

    calendar.render();
  });
