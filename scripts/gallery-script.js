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
    
    document.querySelectorAll('.load-more').forEach(function(button) {
        button.addEventListener('click', function() {
            const event = button.closest('.event');
            const hiddenPhotos = event.querySelectorAll('.photo.hidden');
            const photosToShow = Array.from(hiddenPhotos).slice(0, 3);

            photosToShow.forEach(function(photo) {
                photo.classList.remove('hidden');
            });

            if (hiddenPhotos.length <= 3) {
                button.style.display = 'none';
                event.querySelector('.show-less').style.display = 'block';
            }
        });
    });

    document.querySelectorAll('.show-less').forEach(function(button) {
        button.addEventListener('click', function() {
            const event = button.closest('.event');
            const allPhotos = event.querySelectorAll('.photo');

            Array.from(allPhotos).slice(3).forEach(function(photo) {
                photo.classList.add('hidden');
            });

            button.style.display = 'none';
            event.querySelector('.load-more').style.display = 'block';
        });
    });

    // Modal functionality
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.photo').forEach(photo => {
        photo.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            captionText.innerHTML = this.alt;
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });
});
