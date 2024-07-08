document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('show');
        if (menu.classList.contains('show')) {
            menu.classList.remove('hide');
        } else {
            menu.classList.add('hide');
        }
    });

    const upcomingEvents = document.querySelectorAll('#upcoming-events .event-box');
    const pastEvents = document.querySelectorAll('#past-events .event-box');
    const showMoreUpcomingBtn = document.getElementById('show-more-upcoming');
    const showLessUpcomingBtn = document.getElementById('show-less-upcoming');
    const showMorePastBtn = document.getElementById('show-more-past');
    const showLessPastBtn = document.getElementById('show-less-past');

    const showEvents = (events, start, end) => {
        events.forEach((event, index) => {
            if (index >= start && index < end) {
                event.style.display = 'flex';
            } else {
                event.style.display = 'none';
            }
        });
    };

    const toggleButtons = (events, showMoreBtn, showLessBtn, numToShow) => {
        const totalEvents = events.length;
        let currentlyShown = 0;
        for (let i = 0; i < totalEvents; i++) {
            if (events[i].style.display !== 'none') currentlyShown++;
        }
        if (currentlyShown >= totalEvents) {
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'block';
        } else {
            showMoreBtn.style.display = 'block';
            showLessBtn.style.display = 'none';
        }
    };

    const setupEventSection = (events, showMoreBtn, showLessBtn, numToShow) => {
        if (events.length <= numToShow) {
            showMoreBtn.style.display = 'none';
            showLessBtn.style.display = 'none';
        } else {
            showEvents(events, 0, numToShow);
            toggleButtons(events, showMoreBtn, showLessBtn, numToShow);

            showMoreBtn.addEventListener('click', () => {
                let currentlyShown = 0;
                for (let i = 0; i < events.length; i++) {
                    if (events[i].style.display !== 'none') currentlyShown++;
                }
                showEvents(events, 0, currentlyShown + numToShow);
                toggleButtons(events, showMoreBtn, showLessBtn, numToShow);
            });

            showLessBtn.addEventListener('click', () => {
                showEvents(events, 0, numToShow);
                toggleButtons(events, showMoreBtn, showLessBtn, numToShow);
            });
        }
    };

    setupEventSection(upcomingEvents, showMoreUpcomingBtn, showLessUpcomingBtn, 3);
    setupEventSection(pastEvents, showMorePastBtn, showLessPastBtn, 3);
});
