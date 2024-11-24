// Function to fetch medicines and display them
async function fetchMedicines() {
    try {
        // Fetch data with HTTP request from the backend
        const response = await fetch('http://127.0.0.1:8000/medicines');
        const medicines = await response.json(); // parses json response to javascript
    
        // Get the container element to display medicines in referenced html container
        const medicinesContainer = document.getElementById('medicines-list');

        // Clear the container
        medicinesContainer.innerHTML = '';

        // Loop through medicines and create list items
        medicines.medicines.forEach(medicine => {
            if (!medicine.name || medicine.price === null) return; // Skip medicines with null price or missing name
            const listItem = document.createElement('li'); //new list for every medicine
            listItem.textContent = `${medicine.name} - £${medicine.price.toFixed(2)}`; //formatting text content
            medicinesContainer.appendChild(listItem); // append list
        });
    } catch (error) {
        console.error('Error fetching medicines:', error); // logs errors
    }
}


// Fetch medicines on page load
document.addEventListener('DOMContentLoaded', fetchMedicines);

