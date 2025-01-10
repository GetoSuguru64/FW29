document.querySelectorAll(".images img").forEach(img => {
    img.addEventListener("click", () => {
        alert(`您點擊了：${img.alt}`);
    });
});
