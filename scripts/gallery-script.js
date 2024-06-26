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
    
    document.querySelectorAll('.event').forEach(function(event) {
        const photos = event.querySelectorAll('.photo');
        const loadMoreButton = event.querySelector('.load-more');
        const showLessButton = event.querySelector('.show-less');

        // Check if there are more than 3 photos initially
        if (photos.length <= 3) {
            loadMoreButton.style.display = 'none';
            showLessButton.style.display = 'none';
        } else {
            // Initially hide all photos after the first 3
            Array.from(photos).slice(3).forEach(function(photo) {
                photo.classList.add('hidden');
            });

            loadMoreButton.addEventListener('click', function() {
                const hiddenPhotos = event.querySelectorAll('.photo.hidden');
                const photosToShow = Array.from(hiddenPhotos).slice(0, 3);

                photosToShow.forEach(function(photo) {
                    photo.classList.remove('hidden');
                });

                if (hiddenPhotos.length <= 3) {
                    loadMoreButton.style.display = 'none';
                    showLessButton.style.display = 'block';
                }
            });

            showLessButton.addEventListener('click', function() {
                Array.from(photos).slice(3).forEach(function(photo) {
                    photo.classList.add('hidden');
                });

                showLessButton.style.display = 'none';
                loadMoreButton.style.display = 'block';
            });
        }
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
