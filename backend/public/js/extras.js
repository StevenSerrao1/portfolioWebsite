document.addEventListener("DOMContentLoaded", function() {
    let activeSection = null;

    const toggleSection = (sectionId) => {
        activeSection = activeSection === sectionId ? null : sectionId;
        document.querySelectorAll('.extra-section').forEach(section => {
            section.classList.toggle('active', section.id === sectionId && activeSection === sectionId);
        });
    };

    const setupScrollListener = (headingId, sectionId) => {
        const heading = document.getElementById(headingId);
        const handleScroll = () => {
            const section = document.getElementById(sectionId);
            const offset = -105;
            const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset + offset;
            
            window.scrollTo({
                top: sectionPosition,
                behavior: 'smooth'
            });
        };

        heading.addEventListener("click", handleScroll);

        return () => {
            heading.removeEventListener("click", handleScroll);
        };
    };

    const miniQuizzesCleanup = setupScrollListener("mini-quizzes-heading", "mini-quizzes-section");
    const miniDWCleanup = setupScrollListener("mini-dw-heading", "mini-dw-section");

    document.getElementById("mini-quizzes-heading").addEventListener("click", () => toggleSection("mini-quizzes-section"));
    document.getElementById("mini-dw-heading").addEventListener("click", () => toggleSection("mini-dw-section"));

    window.addEventListener("unload", () => {
        miniQuizzesCleanup();
        miniDWCleanup();
    });
});
