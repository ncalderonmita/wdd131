document.addEventListener('DOMContentLoaded', () => {
    
    let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
    
    
    reviewCount++;
    
    
    localStorage.setItem('reviewCount', reviewCount);
    
    
    const counterDisplay = document.getElementById('counter-display');
    if (counterDisplay) {
        counterDisplay.textContent = `Total Reviews Submitted: ${reviewCount}`;
    }

    const year = document.querySelector("#currentyear");
    const today = new Date();
    year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

    document.getElementById("lastModified").textContent = document.lastModified;
});