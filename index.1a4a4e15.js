(()=>{
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]")
    };
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

//# sourceMappingURL=index.1a4a4e15.js.map
