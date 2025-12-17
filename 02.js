
// 1. Get references to the input, button, and all card elements
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    // Select all cards within the portfolio section
    const cards = document.querySelectorAll('#p .card'); 

    // 2. Define the function that performs the search/filtering
    function filterCards() {
        // Get the value from the input and convert it to lowercase for case-insensitive matching
        const searchTerm = searchInput.value.toLowerCase();

        // Loop through each card
        cards.forEach(card => {
            // Get the text content of the location span within the card's content
            // The location text is inside the 'p.duration span' element
            const locationElement = card.querySelector('.card-content .duration span');
            const locationText = locationElement ? locationElement.textContent.toLowerCase() : '';
            
            // Get the main description text inside the h3
            const descriptionElement = card.querySelector('.card-content h3');
            const descriptionText = descriptionElement ? descriptionElement.textContent.toLowerCase() : '';

            // Check if the search term is found in EITHER the location OR the description
            const isMatch = locationText.includes(searchTerm) || descriptionText.includes(searchTerm);

            // Toggle the 'hidden' class based on the match result
            if (isMatch) {
                card.classList.remove('hidden'); // Show the card
            } else {
                card.classList.add('hidden');    // Hide the card
            }
        });
    }

    // 3. Attach the event listeners
    // Attach the function to the 'click' event of the search button
    searchButton.addEventListener('click', filterCards);

    // OPTIONAL: Also attach the function to the 'keyup' event of the input for live searching
    // You can also trigger the search when the Enter key is pressed
    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            filterCards();
        } else {
            // Optional: Live search as the user types
            filterCards();
        }
    });