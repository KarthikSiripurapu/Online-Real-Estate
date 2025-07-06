function showdetails(name, price, location) {
    alert("Property: " + name + "\nPrice: " + price + "\nLocation: " + location);
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function openContactModal() {
    openModal('contactModal');
}

function showNewProperties() {
    document.getElementById('property-list').style.display = 'none';
    document.getElementById('new-property-list').style.display = 'block';
}

function showHomeSection() {
    document.getElementById('property-list').style.display = 'block';
    document.getElementById('new-property-list').style.display = 'none';
}

window.onclick = function(event) {
    const modals = ['contactModal', 'createAccountModal', 'loginModal', 'aboutModal'];
    modals.forEach(id => {
        const modal = document.getElementById(id);
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });
}

function filterProperties(event) {
    event.preventDefault();

    const searchText = document.getElementById('searchInput').value.toLowerCase().trim();
    const selectedType = document.getElementById('propertyTypeSelect').value;
    const selectedPrice = document.getElementById('priceRangeSelect').value;
    const properties = document.querySelectorAll('.property-card');

    properties.forEach(card => {
        const location = card.getAttribute('data-location').toLowerCase();
        const type = card.getAttribute('data-type').toLowerCase();
        const price = card.getAttribute('data-price').toLowerCase();
        const title = card.querySelector('h3').textContent.toLowerCase();
        const matchesSearch = !searchText || location.includes(searchText) || title.includes(searchText);
        const matchesType = !selectedType || selectedType === type;

        let matchesPrice = true;
        if (selectedPrice === 'low') {
            matchesPrice = price === 'low';
        } else if (selectedPrice === 'mid') {
            matchesPrice = price === 'mid';
        } else if (selectedPrice === 'high') {
            matchesPrice = price === 'high';
        }

        if (matchesSearch && matchesType && matchesPrice) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
