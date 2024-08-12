// Function to create a new blog post element
function createBlogPost(title, description, date) {
    // Create elements
    const postDiv = document.createElement('div');
    postDiv.className = 'blog-post';
    
    const postTitle = document.createElement('h3');
    postTitle.textContent = title;
    
    const postDate = document.createElement('p');
    postDate.textContent = `Published on: ${date}`;
    postDate.className = 'post-date';
    
    const postDescription = document.createElement('p');
    postDescription.textContent = description;

    // Append elements to the postDiv
    postDiv.appendChild(postTitle);
    postDiv.appendChild(postDate);
    postDiv.appendChild(postDescription);

    // Append the postDiv to the blog-posts section
    document.getElementById('blog-posts').appendChild(postDiv);
}

// Initialize with example blog posts
function initializeBlogPosts() {
    const examplePosts = [
        {
            title: 'Blog on Daily Unhealthy Routine',
            description: 'From eating junk food, skipping workouts, sleeping too little or too much, dealing with stress improperly, and engaging in toxic social activities - there are many harmful routines that need to be broken if we want better physical and mental health.',
            date: 'August 08, 2024'
        },
        {
            title: 'Blog on Education System Of India',
            description: 'In India, the formal education system consists of five years of primary schooling, followed by three years of middle school and two years of high school. After the completion of high school, students can pursue higher education at a university or college.',
            date: 'August 09, 2024'
        },
        {
            title: 'Blog on Travelling',
            description: 'India is a large market for travel and tourism. It offers a diverse portfolio of niche tourism products - cruises, adventure, medical, wellness, sports, MICE, eco-tourism, film, rural and religious tourism. India has been recognized as a destination for spiritual tourism for domestic and international tourists.',
            date: 'August 10, 2024'
        }
    ];

    examplePosts.forEach(post => {
        createBlogPost(post.title, post.description, post.date);
    });
}

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the form from reloading the page

    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    
    // Get current date
    const date = new Date().toLocaleDateString();

    // Create a new blog post
    createBlogPost(title, description, date);

    // Clear form fields
    document.getElementById('title').value = '';
    document.getElementById('description').value = '';
}

// Attach event listener to the form
document.getElementById('post-form').addEventListener('submit', handleFormSubmit);

// Initialize the blog with example posts
initializeBlogPosts();
