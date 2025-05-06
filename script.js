// List of available chefs and their corresponding profile pages
const chefsData = {
    "JP Nagar": "chef-priya.html",
    "Indiranagar": "chef-rohan.html",
    "Jayanagar": "chef-neha.html",
    "HSR Layout": "chef-manoj.html"
};

// Search function for redirecting to the specific chef profile or browse-chefs page
function searchChefs() {
    const locationInput = document.getElementById("location-input").value.trim().toLowerCase(); // Added .toLowerCase()

    if (locationInput) {
        const chefProfile = chefsData[locationInput];

        if (chefProfile) {
            // Redirect directly to the chef's profile page
            window.location.href = chefProfile;
        } else {
            // Redirect to browse-chefs.html with a location parameter if no exact match
            window.location.href = "browse-chefs.html?location=" + encodeURIComponent(locationInput);
        }
    } else {
        alert("Please enter a location.");
    }
}

// Function to fetch user's current location and auto-fill search
function getUserLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                // Reverse geocoding API to get location name
                console.log(`Fetching location from https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`)
                    .then(response => {
                        console.log("Response received:", response);
                        return response.json();
                    })
                    .then(data => {
                        if (data.address) {
                            let locationName = data.address.suburb || data.address.city || data.address.state;
                            document.getElementById("location-input").value = locationName;
                        }
                    })
                    .catch(error => console.error("Error fetching location:", error));
            },
            (error) => {
                alert("Unable to retrieve location. Please enter manually.");
            }
        );
    } else {
        alert("Geolocation is not supported by your browser.");
    }
}