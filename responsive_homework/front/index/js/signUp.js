var toggleContent = $(".mobile_yiyong_content");
var toggleButton = $("#start_button");
var personalContent = $(".mobile_personal_content");
var personalButton = $("#personal_button");

$(document).ready(function() {
    toggleButton.click(function() {
        if (toggleContent.is(":visible")) {
            toggleContent.hide();
            toggleButton.data("state", "closed");
            toggleButton.find("img").attr("src", "../../common/image/icon_arrow_next_gray.png");
            toggleButton.find("span").text("내용열기");
        } else {
            toggleContent.show();
            toggleButton.data("state", "open");
            toggleButton.find("img").attr("src", "../../common/image/icon_arrow_next_upgray.png");
            toggleButton.find("span").text("내용닫기");
        }
    });

    personalButton.click(function() {
        if (personalContent.is(":visible")) {
            personalContent.hide();
            personalButton.data("state", "closed");
            personalButton.find("img").attr("src", "../../common/image/icon_arrow_next_gray.png");
            personalButton.find("span").text("내용열기");
        } else {
            personalContent.show();
            personalButton.data("state", "open");
            personalButton.find("img").attr("src", "../../common/image/icon_arrow_next_upgray.png");
            personalButton.find("span").text("내용닫기");
        }
    });
});