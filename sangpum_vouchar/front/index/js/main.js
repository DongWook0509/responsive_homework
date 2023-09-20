const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
  });

    $(".tab-button").click(function() {
        // 모든 탭 버튼과 탭 콘텐츠 비활성화
        $(".tab-button").removeClass("active");
        $(".tab-content").hide();

        // 클릭한 탭 버튼 활성화
        $(this).addClass("active");

        // 클릭한 탭 콘텐츠 표시
        var tabId = $(this).data("tab");
        $("#" + tabId).show();
    });
    
    $(".tab-button").eq(0).trigger('click');


    $(".custom-tab-button").click(function() {
      // 모든 탭 버튼과 탭 콘텐츠 비활성화
      $(".custom-tab-button").removeClass("active");
      $(".custom-tab-content").hide();

      // 클릭한 탭 버튼 활성화
      $(this).addClass("active");

      // 클릭한 탭 콘텐츠 표시
      var tabId = $(this).data("tab");
      $("#" + tabId).show();
    });
  
    $(".custom-tab-button").eq(0).trigger('click');