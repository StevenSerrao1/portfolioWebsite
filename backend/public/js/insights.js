let currentIndex = 0;
const blogPosts = [
    {
        title: 'More about my technical journey',
        content: 'Here, I discuss my main motivation for getting into software development, my self-taught development journey, the technologies that I use, and finally, my professional goals moving forward...',
        link: 'https://www.youtube.com',
    },
    {
        title: '25 Greatest Films of All Time',
        content: 'In this (totally objective) list of cinema\'s most profound feats, I look at 25 indispensable silver-screen hits and what makes each of them so excellent.',
        link: './blog/25-greatest-films',
    }
];

function updateBlogPost() {
    const titleElement = document.getElementById('blog-title');
    const contentElement = document.getElementById('blog-content');
    const linkElement = document.getElementById('blog-link');

    titleElement.textContent = blogPosts[currentIndex].title;
    contentElement.textContent = blogPosts[currentIndex].content;
    linkElement.href = blogPosts[currentIndex].link;
}

function prevPost() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : blogPosts.length - 1;
    updateBlogPost();
}

function nextPost() {
    currentIndex = (currentIndex < blogPosts.length - 1) ? currentIndex + 1 : 0;
    updateBlogPost();
}

// Initialize with the first blog post
document.addEventListener('DOMContentLoaded', updateBlogPost);
