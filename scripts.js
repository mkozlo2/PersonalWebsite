// JavaScript to handle tab navigation
function openTab(tabId) {
    // Hide all sections
    var sections = document.querySelectorAll('.tab-content');
    sections.forEach(function(section) {
        section.classList.remove('active');
    });

    // Show the selected section
    var activeSection = document.getElementById(tabId);
    activeSection.classList.add('active');
}

// Default to opening the About tab when the page loads
document.addEventListener('DOMContentLoaded', function() {
    openTab('about');
});