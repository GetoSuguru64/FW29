const parallaxImages = document.querySelectorAll('.parallax-image');

window.addEventListener('scroll', () => {
    parallaxImages.forEach(image => {
        const rect = image.getBoundingClientRect(); // 獲取圖片位置
        const scrollEffect = rect.top / 3; // 控制滾動效果強度
        image.style.transform = `translateY(${scrollEffect}px)`; // 設置視差位移
    });

const imageSection = document.querySelector('.image-section2');
const container = imageSection.querySelector('.container');
const image = container.querySelector('.parallax-image');

imageSection.addEventListener('mouseenter', () => {
    container.style.opacity = '1'; // 提前顯示圖片
    container.style.transform = 'translateY(10px)'; // 縮短復位距離
    image.style.transform = 'scale(5.08)'; // 輕微放大，保持視差效果
});

imageSection.addEventListener('mouseleave', () => {
    container.style.opacity = '0'; // 提早隱藏圖片
    container.style.transform = 'translateY(30px)'; // 縮小隱藏位移距離
    image.style.transform = 'scale(1)'; // 還原圖片大小
});

const parallaxCards = document.querySelectorAll('.parallax-card');


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
    threshold: 0.3, // 元素出現在視窗中至少 50% 時觸發
});

// 將每個卡片加入觀察列表
parallaxCards.forEach((card) => {
    observer.observe(card);
});

});
const { createApp, ref } = Vue;

var vueProfolio = createApp({
    data() {
        return {
            Portfolio: []
        };
    },
    mounted() {
        $.ajax({
            url: "/profolio",
            method: "get",
            dataType: "json",
            success: (results) => {
                this.Portfolio = results; // 更新 Portfolio 資料
            },
            error: (err) => {
                console.error("Error fetching portfolio data:", err);
            }
        });
    }
});

vueProfolio.mount("#portfolio");

// $.ajax({
//     url:"/profolio",
//     method: "get",
//     dataType: "json",
//     success: results=>{
//         vueProfolio.Portfolio = results;
//     }

// })


// Contact Form Scripts
// $(function() {
//     $("#contactForm input,#contactForm textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         submitError: function($form, event, errors) {
//             // 額外錯誤訊息或事件
//         },
//         submitSuccess: function($form, event) {
//             event.preventDefault(); // 停止表單的預設行為
//             // 取得表單欄位值
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var message = $("textarea#message").val();
//             var firstName = name.split(' ')[0]; // 成功/失敗訊息的名字部分

//             $.ajax({
//                 url: "/contact_me",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     email: email,
//                     message: message // 僅保留必要的欄位
//                 },
//                 cache: false,
//                 success: function() {
//                     // 成功訊息
//                     $('#success').html("<div class='alert alert-success'>")
//                         .find('.alert-success')
//                         .html("<strong>已成功傳送訊息！</strong>")
//                         .append('</div>');
//                     // 清空表單
//                     $('#contactForm').trigger("reset");
//                 },
//                 error: function() {
//                     // 失敗訊息
//                     $('#success').html("<div class='alert alert-danger'>")
//                         .find('.alert-danger')
//                         .html("<strong>抱歉 " + firstName + "，系統暫時無法回應，請稍後再試！</strong>")
//                         .append('</div>');
//                     // 清空表單
//                     $('#contactForm').trigger("reset");
//                 }
//             });
//         },
//         filter: function() {
//             return $(this).is(":visible");
//         }
//     });

//     $("a[data-toggle=\"tab\"]").click(function(e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// /*當點擊輸入框時隱藏提示框*/
// $('#name').focus(function() {
//     $('#success').html('');
// });

    

