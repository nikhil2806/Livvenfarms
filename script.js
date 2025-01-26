import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth', // Default view
        events: [
            {
                title: 'Booked', // Example event
                start: '2023-10-05',
                end: '2023-10-10'
            },
            {
                title: 'Available', // Example event
                start: '2023-10-12',
                end: '2023-10-15'
            }
        ]
    });
    calendar.render(); // Render the calendar
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle the clicked FAQ item
            item.classList.toggle('active');
        });
    });
});