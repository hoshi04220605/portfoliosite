
$(document).ready(function() {
    let logoImages = ["img/logo1.png", "img/logo2.png"]; 
    let currentIndex = 0;
    let interval;

    // 1.5秒で切り替える
    function startAutoSwitch() {
        interval = setInterval(function() {
            currentIndex = (currentIndex + 1) % logoImages.length; 
            $("#logo").attr("src", logoImages[currentIndex]);
        }, 1500); 
    }

    // 切り替えを停止する
    function stopAutoSwitch() {
        clearInterval(interval);
    }

    // 切り替えを開始
    startAutoSwitch();

    // ホバー時の停止
    $("#logo").hover(
        function() { 
            stopAutoSwitch(); 
            $(this).attr("src", logoImages[1]);
        },
        function() { 
            startAutoSwitch(); // 自動切り替えを再開
        }
    );
});