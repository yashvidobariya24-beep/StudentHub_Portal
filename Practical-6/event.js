// ===============================
// EVENTS DATA
// ===============================

let events = [];
let filteredEvents = [];

let currentPage = 1;
const eventsPerPage = 6;


// ===============================
// DOM ELEMENTS
// ===============================

const eventContainer = document.getElementById("eventContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortSelect = document.getElementById("sortSelect");
const pagination = document.getElementById("pagination");


// ===============================
// FETCH JSON DATA
// ===============================

async function loadEvents() {

    try {

        // Show loading message
        eventContainer.innerHTML = "<p>Loading events...</p>";

        const response = await fetch("event.json");

        // Check whether request was successful
        if (!response.ok) {
            throw new Error("Failed to load event data");
        }

        // Convert JSON into JavaScript array
        events = await response.json();

        // Initially show all events
        filteredEvents = events;

        // Create category options
        createCategoryFilter();

        // Display events
        displayEvents();

    } 
    catch (error) {

        console.error(error);

        eventContainer.innerHTML =
            "<p>❌ Error loading events. Please try again.</p>";
    }
}


// ===============================
// CREATE CATEGORY FILTER
// ===============================

function createCategoryFilter() {

    const categories = [...new Set(
        events.map(event => event.category)
    )];

    categories.forEach(category => {

        const option = document.createElement("option");

        option.value = category;
        option.textContent = category;

        categoryFilter.appendChild(option);
    });
}


// ===============================
// DISPLAY EVENTS
// ===============================

function displayEvents() {

    eventContainer.innerHTML = "";

    // Calculate pagination
    const startIndex =
        (currentPage - 1) * eventsPerPage;

    const endIndex =
        startIndex + eventsPerPage;

    const pageEvents =
        filteredEvents.slice(startIndex, endIndex);


    // If no events found
    if (pageEvents.length === 0) {

        eventContainer.innerHTML =
            "<p>No events found.</p>";

        pagination.innerHTML = "";

        return;
    }


    // Create event cards
    pageEvents.forEach(event => {

        const card = document.createElement("div");

        card.classList.add("event-card");

        card.innerHTML = `
            <h3>${event.title}</h3>

            <p>
                <strong>Category:</strong>
                ${event.category}
            </p>

            <p>
                <strong>Date:</strong>
                ${event.date}
            </p>

            <p>
                <strong>Location:</strong>
                ${event.location}
            </p>
        `;

        eventContainer.appendChild(card);
    });


    createPagination();
}


// ===============================
// SEARCH
// ===============================

function searchEvents() {

    const searchText =
        searchInput.value.toLowerCase().trim();

    filteredEvents = events.filter(event =>

        event.title.toLowerCase().includes(searchText) ||

        event.category.toLowerCase().includes(searchText) ||

        event.location.toLowerCase().includes(searchText)
    );

    currentPage = 1;

    displayEvents();
}


// ===============================
// FILTER
// ===============================

function filterEvents() {

    const selectedCategory =
        categoryFilter.value;

    if (selectedCategory === "all") {

        filteredEvents = events;

    } else {

        filteredEvents = events.filter(event =>
            event.category === selectedCategory
        );
    }

    currentPage = 1;

    displayEvents();
}


// ===============================
// SORT
// ===============================

function sortEvents() {

    const sortValue = sortSelect.value;

    if (sortValue === "dateAsc") {

        filteredEvents.sort((a, b) =>
            new Date(a.date) - new Date(b.date)
        );

    }

    else if (sortValue === "dateDesc") {

        filteredEvents.sort((a, b) =>
            new Date(b.date) - new Date(a.date)
        );

    }

    else if (sortValue === "titleAsc") {

        filteredEvents.sort((a, b) =>
            a.title.localeCompare(b.title)
        );

    }

    else if (sortValue === "titleDesc") {

        filteredEvents.sort((a, b) =>
            b.title.localeCompare(a.title)
        );
    }

    currentPage = 1;

    displayEvents();
}


// ===============================
// PAGINATION
// ===============================

function createPagination() {

    pagination.innerHTML = "";

    const totalPages =
        Math.ceil(filteredEvents.length / eventsPerPage);


    // Previous button
    const previousButton =
        document.createElement("button");

    previousButton.textContent = "Previous";

    previousButton.disabled =
        currentPage === 1;

    previousButton.onclick = () => {

        if (currentPage > 1) {

            currentPage--;

            displayEvents();
        }
    };

    pagination.appendChild(previousButton);


    // Page numbers
    for (let i = 1; i <= totalPages; i++) {

        const pageButton =
            document.createElement("button");

        pageButton.textContent = i;

        if (i === currentPage) {
            pageButton.classList.add("active");
        }

        pageButton.onclick = () => {

            currentPage = i;

            displayEvents();
        };

        pagination.appendChild(pageButton);
    }


    // Next button
    const nextButton =
        document.createElement("button");

    nextButton.textContent = "Next";

    nextButton.disabled =
        currentPage === totalPages;

    nextButton.onclick = () => {

        if (currentPage < totalPages) {

            currentPage++;

            displayEvents();
        }
    };

    pagination.appendChild(nextButton);
}


// ===============================
// EVENT LISTENERS
// ===============================

searchInput.addEventListener(
    "input",
    searchEvents
);

categoryFilter.addEventListener(
    "change",
    filterEvents
);

sortSelect.addEventListener(
    "change",
    sortEvents
);


// ===============================
// START APPLICATION
// ===============================

loadEvents();