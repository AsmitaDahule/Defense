const scrollLeftButton = document.getElementById('scroll-left');
    const scrollRightButton = document.getElementById('scroll-right');
    const projectGrid = document.querySelector('.project-grid');

    // Add event listener for the right button
    scrollRightButton.addEventListener('click', () => {
      // Scroll the container to the right by 420 pixels (width of one card + gap)
      projectGrid.scrollBy({
        left: 420,
        behavior: 'smooth'
      });
    });

    // Add event listener for the left button
    scrollLeftButton.addEventListener('click', () => {
      // Scroll the container to the left by 420 pixels
      projectGrid.scrollBy({
        left: -420,
        behavior: 'smooth'
      });
    });


    document.addEventListener('DOMContentLoaded', () => {

    // ... (Your existing scripts for projects, skills, etc.) ...


    /* ====================================
       INTERNSHIPS ACCORDION SCRIPT
    ==================================== */
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // Get the parent accordion item
            const accordionItem = header.parentElement;
            
            // Toggle the 'active' class on the clicked item
            accordionItem.classList.toggle('active');

            // Find the content panel
            const accordionContent = header.nextElementSibling;
            
            // If the panel is now active, set its max-height to its scroll height
            if (accordionItem.classList.contains('active')) {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
            } else {
                // Otherwise, collapse it
                accordionContent.style.maxHeight = 0;
            }
        });
    });

});