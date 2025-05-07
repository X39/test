document.addEventListener('DOMContentLoaded', () => {
    const eventForm = document.getElementById('event-form');
    const eventList = document.getElementById('event-list');
    const adminLink = document.getElementById('admin-link');

    // Handle event creation form submission
    eventForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const eventName = document.getElementById('event-name').value;
        const eventDate = document.getElementById('event-date').value;
        const eventDescription = document.getElementById('event-description').value;

        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <h3>${eventName}</h3>
            <p>${eventDate}</p>
            <p>${eventDescription}</p>
        `;

        eventList.appendChild(eventItem);

        eventForm.reset();
    });

    // Handle navigation to the admin area
    adminLink.addEventListener('click', () => {
        window.location.href = 'admin.html';
    });

    // Add animations and playful interactions
    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    header.style.animation = 'fadeIn 1s ease-in-out';
    footer.style.animation = 'fadeIn 1s ease-in-out';

    eventList.addEventListener('mouseover', (e) => {
        if (e.target.classList.contains('event-item')) {
            e.target.style.transform = 'scale(1.05)';
        }
    });

    eventList.addEventListener('mouseout', (e) => {
        if (e.target.classList.contains('event-item')) {
            e.target.style.transform = 'scale(1)';
        }
    });
});
