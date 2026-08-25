(function () {
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.getElementById('close-booking');
    const openTriggers = document.querySelectorAll('[data-open-booking]');

    function openModal() {
        modal.hidden = false;
        document.body.classList.add('modal-open');
        const firstField = modal.querySelector('input:not([type="hidden"]):not([tabindex="-1"])');
        if (firstField) firstField.focus();
    }

    function closeModal() {
        modal.hidden = true;
        document.body.classList.remove('modal-open');
    }

    openTriggers.forEach(function (btn) {
        btn.addEventListener('click', openModal);
    });

    closeBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function (e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && !modal.hidden) closeModal();
    });
})();
