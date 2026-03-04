(function () {
    if (typeof document === 'undefined') {
        // Allows this file to be executed in Node-based CI checks without DOM globals.
        return;
    }

    document.addEventListener('DOMContentLoaded', function () {
        const faqItems = document.querySelectorAll('.faq-item');

        faqItems.forEach((item) => {
            const question = item.querySelector('.faq-question');
            if (!question) return;

            question.addEventListener('click', () => {
                // Close all other FAQ items
                faqItems.forEach((otherItem) => {
                    if (otherItem !== item && otherItem.classList.contains('active')) {
                        otherItem.classList.remove('active');
                    }
                });

                // Toggle the clicked FAQ item
                item.classList.toggle('active');
            });
        });
    });
})();
