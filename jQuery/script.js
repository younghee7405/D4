$(function(){
// 메뉴

$(".main>li").mouseover(function() {
    $(".sub").stop().show();
})//
$(".main>li").mouseout(function(){
    $(".sub").stop().hide();
})//



// fade 이미지 슬라이드
$(".fade li").eq(0).siblings().hide();

var n = 0;  // 0 1 2

setInterval(function(){

    if(n == 2 ){
        n=0;
    }else{
        n++;
    }//
    $(".fade li").eq(n).siblings().fadeOut();
    $(".fade li").eq(n).fadeIn();

    // $(".fade li").eq(n).fadeOut();
    // if(n == 2 ){
    //     n=0;
    // }else{
    //     n++;
    // }//
    // $(".fade li").eq(n).fadeIn();
}, 2500)

// 팝업
$(".pop").hide();

$(".pop_click").click(function(){

    $(".pop").show()
})//
$(".close").click(function(){
    $(".pop").hide()
})//


    
})//jquery