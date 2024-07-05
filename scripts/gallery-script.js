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
        const photosAndVideos = event.querySelectorAll('.photo, .video');
        const loadMoreButton = event.querySelector('.load-more');
        const showLessButton = event.querySelector('.show-less');

        if (photosAndVideos.length <= 3) {
            loadMoreButton.style.display = 'none';
            showLessButton.style.display = 'none';
        } else {
            Array.from(photosAndVideos).slice(3).forEach(function(media) {
                media.classList.add('hidden');
            });

            loadMoreButton.addEventListener('click', function() {
                const hiddenMedia = event.querySelectorAll('.photo.hidden, .video.hidden');
                const mediaToShow = Array.from(hiddenMedia).slice(0, 3);

                mediaToShow.forEach(function(media) {
                    media.classList.remove('hidden');
                });

                if (hiddenMedia.length <= 3) {
                    loadMoreButton.style.display = 'none';
                    showLessButton.style.display = 'block';
                }
            });

            showLessButton.addEventListener('click', function() {
                Array.from(photosAndVideos).slice(3).forEach(function(media) {
                    media.classList.add('hidden');
                });

                showLessButton.style.display = 'none';
                loadMoreButton.style.display = 'block';
            });
        }
    });

    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-img');
    const modalVideo = document.createElement('video');
    modalVideo.classList.add('modal-content');
    modalVideo.setAttribute('controls', '');
    const captionText = document.getElementById('caption');
    const closeModal = document.getElementsByClassName('close')[0];

    document.querySelectorAll('.photo, .video').forEach(media => {
        media.addEventListener('click', function() {
            modal.style.display = 'block';
            if (media.tagName === 'IMG') {
                modalImg.src = this.src;
                modalImg.style.display = 'block';
                modalVideo.style.display = 'none';
                captionText.innerHTML = '';
            } else if (media.tagName === 'VIDEO') {
                modalVideo.src = media.querySelector('source').src;
                modalImg.style.display = 'none';
                modalVideo.style.display = 'block';
                captionText.innerHTML = media.alt || '';
                modal.appendChild(modalVideo);
                modalVideo.play();
            }
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        modalVideo.pause();
    });

    modal.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
            modalVideo.pause();
        }
    });
});
