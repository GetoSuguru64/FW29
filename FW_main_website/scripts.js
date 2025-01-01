// 選取所有視差圖片
const parallaxImages = document.querySelectorAll('.parallax-image');

// 添加滾動事件監聽
window.addEventListener('scroll', () => {
    parallaxImages.forEach(image => {
        const rect = image.getBoundingClientRect(); // 獲取圖片位置
        const scrollEffect = rect.top / 5; // 控制滾動效果強度
        image.style.transform = `translateY(${scrollEffect}px)`; // 設置視差位移
    });
    // 選取圖片區塊與容器
const imageSection = document.querySelector('.image-section2');
const container = imageSection.querySelector('.container');
const image = container.querySelector('.parallax-image');

// 添加滑鼠滾入事件
imageSection.addEventListener('mouseenter', () => {
    container.style.opacity = '1'; // 提前顯示圖片
    container.style.transform = 'translateY(10px)'; // 縮短復位距離
    image.style.transform = 'scale(5.08)'; // 輕微放大，保持視差效果
});

// 添加滑鼠移出事件
imageSection.addEventListener('mouseleave', () => {
    container.style.opacity = '0'; // 提早隱藏圖片
    container.style.transform = 'translateY(30px)'; // 縮小隱藏位移距離
    image.style.transform = 'scale(1)'; // 還原圖片大小
});
// 選取所有卡片元素
const parallaxCards = document.querySelectorAll('.parallax-card');

// 建立 IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // 當元素進入視窗時，添加 "visible" 類別
            entry.target.classList.add('visible');
            entry.target.classList.remove('hidden');
        } else {
            // 當元素離開視窗時，添加 "hidden" 類別
            entry.target.classList.remove('visible');
            entry.target.classList.add('hidden');
        }
    });
}, {
    threshold: 0.5, // 元素出現在視窗中至少 50% 時觸發
});

// 將每個卡片加入觀察列表
parallaxCards.forEach((card) => {
    observer.observe(card);
});

});


