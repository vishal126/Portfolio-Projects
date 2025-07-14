function toggleSkill(header) {
    const singleOpen = document.getElementById("single-toggle").checked;
    const current = header.nextElementSibling;

    if (singleOpen) {
        document.querySelectorAll('.subtopics').forEach(section => {
            if (section !== current) section.classList.remove('active');
        });
    }

    current.classList.toggle('active');
}

// Handle checkbox activation logic on first tick
document.getElementById("single-toggle").addEventListener("change", function () {
    if (this.checked) {
        // Only keep the first open, close others
        const all = Array.from(document.querySelectorAll('.subtopics'));
        const open = all.find(section => section.classList.contains("active"));
        all.forEach((section, i) => {
            if (section !== open && open !== undefined) {
                section.classList.remove("active");
            }
        });
    }
});