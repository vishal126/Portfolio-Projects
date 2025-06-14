function highlightProject(id) {
    // First, remove highlight styles from all project cards
    console.log(document.querySelectorAll('.project-card'));
    document.querySelectorAll('.project-card').forEach(card => {
        console.log(card.classList);
      card.classList.remove('highlighted');
    });
    
    // Then, add highlight to the selected card
    const selected = document.getElementById(id);
    console.log(selected);
    if (selected) {
      console.log(selected.classList);
      selected.classList.add('highlighted');
      selected.scrollIntoView({ behavior: 'smooth', block: 'center' });
      console.log(selected.classList);

      // Optional: remove highlight after 3 seconds
      setTimeout(() => {
        selected.classList.remove('highlighted');
      }, 3000);
    }
  }