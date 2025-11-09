// 🌸 MomAi Calendar - Planner.js
// This script powers the interactive calendar on the Planner page using FullCalendar.js


    // 🌸 MomAi Calendar - Planner.js
    // Planner Task Add/Edit/Delete
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('planner-task');
  const addBtn = document.getElementById('add-task');
  const taskList = document.getElementById('planner-task-list');

  addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
      ${text}
      <span>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      </span>
    `;

    taskList.appendChild(li);
    input.value = '';

    // DELETE FUNCTION
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });

    // EDIT FUNCTION
    li.querySelector('.edit-btn').addEventListener('click', () => {
      const newText = prompt('Update your plan:', text);
      if (newText) {
        li.childNodes[0].textContent = newText;
      }
    });
  });
});







document.addEventListener('DOMContentLoaded', function () {
  const containerEl = document.getElementById('external-events');
  const calendarEl = document.getElementById('calendar');

  // Make external tasks draggable
  new FullCalendar.Draggable(containerEl, {
    itemSelector: '.fc-event',
    eventData: function (eventEl) {
      return {
        title: eventEl.innerText.trim(),
        classNames: ['custom-event']
      };
    }
  });

  // Create the calendar
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    height: 600,
    droppable: true, // ✅ This enables drag-and-drop
    editable: true,  // ✅ Allows you to move events inside calendar

    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,listWeek'
    },

    drop: function (info) {
      console.log(`Dropped on ${info.dateStr}`);
    },

    dateClick: function (info) {
      const title = prompt('✨ What would you like to add to ' + info.dateStr + '?');
      if (title) {
        calendar.addEvent({
          title: '✅ ' + title,
          start: info.dateStr,
          allDay: true,
          classNames: ['custom-event']
        });
      }
    },

    eventClick: function (info) {
      alert('You clicked on: ' + info.event.title);
    },

    events: [
      {
        title: '💖 Self-Care Day',
        start: '2025-11-10',
        display: 'block',
        className: 'custom-event'
      },
      {
        title: '📚 Homework Due',
        start: '2025-11-13',
        className: 'custom-event'
      },
      {
        title: '✅ Dentist Appt',
        start: '2025-11-17',
        className: 'custom-event'
      }
    ]
  });

  calendar.render();
});



    events: [
      {
        title: '💖 Self-Care Day',
        start: '2025-11-10',
        display: 'block',
        className: 'custom-event'
      },
      {
        title: '📚 Homework Due',
        start: '2025-11-13',
        className: 'custom-event'
      },
      {
        title: '✅ Dentist Appt',
        start: '2025-11-17',
        className: 'custom-event'
      }
    ]
  ;

    calendar.render();  





    // 🌸 MomAi Calendar - Planner.js
    // Planner Task Add/Edit/Delete
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('planner-task');
  const addBtn = document.getElementById('add-task');
  const taskList = document.getElementById('planner-task-list');

  addBtn.addEventListener('click', () => {
    const text = input.value.trim();
    if (text === '') return;

    const li = document.createElement('li');
    li.innerHTML = `
      ${text}
      <span>
        <button class="edit-btn">✏️</button>
        <button class="delete-btn">🗑️</button>
      </span>
    `;

    taskList.appendChild(li);
    input.value = '';

    // DELETE FUNCTION
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });

    // EDIT FUNCTION
    li.querySelector('.edit-btn').addEventListener('click', () => {
      const newText = prompt('Update your plan:', text);
      if (newText) {
        li.childNodes[0].textContent = newText;
      }
    });
  });
});