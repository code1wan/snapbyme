document.addEventListener('DOMContentLoaded', function() {
    fetch('gallery.php')
        .then(response => response.json())
        .then(data => {
            const gallery = document.querySelector('.gallery');

            data.forEach(image => {
                const galleryItem = document.createElement('div');
                galleryItem.classList.add('gallery-item');
                galleryItem.dataset.title = image.title;
                galleryItem.dataset.description = image.description;
                galleryItem.dataset.category = image.category;

                const img = document.createElement('img');
                img.src = image.src;
                img.alt = image.title;

                const title = document.createElement('div');
                title.classList.add('title');
                title.textContent = image.title;

                const description = document.createElement('div');
                description.classList.add('description');
                description.textContent = image.description;

                const category = document.createElement('div');
                category.classList.add('category');
                category.textContent = image.category;

                galleryItem.appendChild(img);
                galleryItem.appendChild(title);
                galleryItem.appendChild(description);
                galleryItem.appendChild(category);

                gallery.appendChild(galleryItem);
            });
        })
        .catch(error => console.log(error));
});
