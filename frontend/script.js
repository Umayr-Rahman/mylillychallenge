// Function to fetch medicines and display them
async function fetchMedicines() {
    try {
        // Fetch data from the backend
        const response = await fetch('http://127.0.0.1:8000/medicines');
        const medicines = await response.json();
    
        // Get the container element to display medicines
        const medicinesContainer = document.getElementById('medicines-list');

        // Clear the container
        medicinesContainer.innerHTML = '';

        // Loop through medicines and create list items
        medicines.medicines.forEach(medicine => {
            if (!medicine.name || medicine.price === null) return; // Skip medicines with null price or missing name
            const listItem = document.createElement('li');
            listItem.textContent = `${medicine.name} - £${medicine.price.toFixed(2)}`;
            medicinesContainer.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching medicines:', error);
    }
}


// Fetch medicines on page load
document.addEventListener('DOMContentLoaded', fetchMedicines);

