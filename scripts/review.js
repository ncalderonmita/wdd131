document.addEventListener('DOMContentLoaded', function () {
    const products = [
        { id: 'fc-1888', name: "flux capacitor", avg_rating: 4.5 },
        { id: 'fc-2050', name: "power laces", avg_rating: 4.7 },
        { id: 'fs-1987', name: "time circuits", avg_rating: 3.5 },
        { id: 'ac-2000', name: "low voltage reactor", avg_rating: 3.9 },
        { id: 'jj-1969', name: "warp equalizer", avg_rating: 5.0 }
    ];

    const selectElement = document.getElementById('product-name');
    if (selectElement) {
        products.forEach(product => {
            const option = document.createElement('option');
            
            option.value = product.id; 
            option.textContent = product.name;
            selectElement.appendChild(option);
        });
    }

    
    const year = document.querySelector("#currentyear");
    const today = new Date();
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    document.getElementById("lastModified").textContent = document.lastModified;
});