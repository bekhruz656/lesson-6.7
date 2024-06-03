
        async function fetchComments() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/comments');
                if (!response.ok) {
                    throw new Error('Network response was not ok ');
                }
                const comments = await response.json();
                return comments.slice(0, 20); 
            } catch (error) {
                console.error('Fetch error: ', error);
            }
        }

        function displayComments(comments) {
            const container = document.getElementById('comments-card');
            comments.forEach(comment => {
                const commentElement = document.createElement('div');
                commentElement.classList.add('comment');

                const nameElement = document.createElement('h3');
                nameElement.textContent = comment.name;

                const emailElement = document.createElement('p');
                emailElement.textContent = `Email: ${comment.email}`;

                const bodyElement = document.createElement('p');
                bodyElement.textContent = comment.body;

                commentElement.appendChild(nameElement);
                commentElement.appendChild(emailElement);
                commentElement.appendChild(bodyElement);

                container.appendChild(commentElement);
            });
        }

        async function init() {
            const comments = await fetchComments();
            displayComments(comments);
        }

        init();