document.addEventListener('DOMContentLoaded', function() {
    const postsSection = document.querySelector('.posts');

    const blogPosts = [
        { title: 'First Post', content: 'This is my first blog post.' },
        { title: 'Second Post', content: 'This is my second blog post.' },
        { title: 'third Post', content: 'This is my third blog post.' }
    ];

    // Populate blog posts
    blogPosts.forEach(post => {
        const article = document.createElement('article');
        article.innerHTML = `
            <img src="/image1.jpg.jpg" alt="Image 1">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <a href="#">Read More</a>
        `;
        postsSection.appendChild(article);
    });
});
