const imageData = [
    {
      src: 'image1.jpg',
      title: 'cgv',
      description: 'This is the first image',
      category: 'pet'
    },
    {
      src: 'image2.jpg',
      title: 'Image 2',
      description: 'This is the second image',
      category: 'landscape'
    },
    {
      src: 'image3.jpg',
      title: 'WingStop Mukbang',
      description: 'This is the moment when i ordered 20 chicken wings',
      category: 'food'
    },
    {
        src: 'image4.jpg',
        title: 'My Cat',
        description: 'This is my cat moly',
        category: 'pet'
      },
      {
        src: 'image5.jpg',
        title: 'Blue Sky',
        description: 'This photo was taken on my uni parking lot on a hot day',
        category: 'scenery'
      },
      {
        src: 'image6.jpg',
        title: 'Joshua & Pool',
        description: 'My friend joshua posing on the side of the pool',
        category: 'portrait'
      },
  ];
  
  const gallery = document.querySelector('.gallery');
  
  function filterGallery() {
    const categorySelect = document.getElementById('category');
    const selectedCategory = categorySelect.value;
  
    const filteredImages = imageData.filter(function(image) {
      return selectedCategory === 'all' || image.category === selectedCategory;
    });
  
    displayImages(filteredImages);
  }
  
  function searchGallery() {
    const searchInput = document.getElementById('search');
    const searchTerm = searchInput.value.toLowerCase();
  
    const filteredImages = imageData.filter(function(image) {
      const { title, description } = image;
      return title.toLowerCase().includes(searchTerm) || description.toLowerCase().includes(searchTerm);
    });
  
    displayImages(filteredImages);
  }
  
  function displayImages(images) {
    gallery.innerHTML = '';
  
    images.forEach(function(image) {
      const { src, title, description, category } = image;
  
      const galleryItem = document.createElement('div');
      galleryItem.classList.add('gallery-item');
  
      const img = document.createElement('img');
      img.src = src;
      img.alt = title;
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = title;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = description;
  
      const categoryElement = document.createElement('span');
      categoryElement.classList.add('category');
      categoryElement.textContent = category;
  
      galleryItem.appendChild(img);
      galleryItem.appendChild(titleElement);
      galleryItem.appendChild(descriptionElement);
      galleryItem.appendChild(categoryElement);
  
      gallery.appendChild(galleryItem);
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    filterGallery();
  });
  