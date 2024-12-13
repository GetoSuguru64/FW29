// 獲取所有圖片元素
const images = document.querySelectorAll('.delayed-image');
const blackLine = document.querySelector('h2');

// 監聽滾動事件
window.addEventListener('scroll', () => {
    images.forEach((image) => {
        const imagePosition = image.getBoundingClientRect().top; // 圖片相對於視窗的距離
        const blackLinePosition = blackLine.getBoundingClientRect().top; // 黑線的位置

        // 當圖片即將進入視窗範圍，並且在黑線範圍內時顯示圖片
        if (imagePosition <= blackLinePosition && imagePosition >= 0) {
            image.classList.add('show');
            image.classList.add('sticky'); // 當圖片達到黑線時，將圖片設為 sticky
        } else {
            image.classList.remove('show');
            image.classList.remove('sticky'); // 當圖片不再顯示時，去除 sticky
        }
    });
});
