$(function() {
    var messages = [
        "厘米狗注视着你的idea",
        "厘米狗审阅过往的项目",
        "厘米狗在计算价值",
        "厘米狗算懵逼了",
        "厘米狗在专注地望天",
        "厘米狗摇头晃脑甩尾巴",
        "厘米狗去捡几个球",
        "厘米狗在看中国队球赛",
        "厘米狗饿了",
        "厘米狗溜一圈主人"
    ];
    var $button1 = $('#button1');
    var $audio = $('#audio');
    var audio = $audio[0];
    var page3div1 = $('.page3div1')[0];
    var $page3 = $('.page3');
    var $share = $('.share');
    var starttime;
    var endtime;
    var timer;

    $button1[0].addEventListener("touchstart", function() {    
        starttime = new Date();
        starttime = starttime.getTime();
        timer = setTimeout(function() {
            $('.page1div').addClass('fadeOut');
            $button1[0].innerHTML = "";
            $('.page2div').removeClass('hidden').addClass('fadeIn');
        }, 1100);
    }, false);

    $button1[0].addEventListener("touchend", function() {
        endtime = new Date();
        endtime = endtime.getTime();
        if (endtime - starttime <= 1000) {
            clearTimeout(timer);
            timer = null;
            setTimeout(function() {
                alert('请长按');
            }, 0);
        } else {
            showPage3();
        }
    }, false);
    // $button1.click(function() {
    //    return false;
    // });

    $('.page4button1').click(function() {
        audio.play();
        setTimeout(function() {
            $('.page4button').removeClass('hidden').addClass('fadeIn');
        }, 3000);
    });

    audio.onended = function() {
        // $('.page4button').removeClass('hidden').addClass('fadeIn');
    }

    function showPage3() {
        $('.page1').addClass('hidden');
        $page3.addClass('show');

        changePage3Message();
        setTimeout(function() {
            changePage3Message();

            setTimeout(function() {
                changePage3Message();

                setTimeout(function() {
                    $page3.removeClass('show').addClass('hidden');
                    $('.page4').removeClass('hidden');
                }, 2000);
            }, 2000);
        }, 2000);
    }

    function changePage3Message() {
        var index = Math.floor(Math.random() * messages.length);
        page3div1.innerHTML = messages[index]; 
        messages.splice(index, 1);
    }

    $share.click(function() {
        $share.removeClass('fadeIn').addClass('fadeOut');
    });

    $('.page4button2').click(function() {
        $share.removeClass('hidden').addClass('fadeIn');
    });
    $('.page4button3').click(function() {
        window.location.href = 'http://www.limijiaoyin.com';
    });
    

    configWechat({
        title: "惊呆了！人工智能商业化应用出炉，大数据报价算法等你来体验，让阿法狗无地自容！",
        image: "/img/shareWechat.png",
        desc: "口述想法就能报价！国内科技公司年度最高成就，拥有海量项目报价数据，通过机器深度学习、语音识别、卷积神经网络计算、声音合成等技术，研发成一套价格快速预估系统。人工智能就在你我身边。"
    }, function(e) {
        if (e) {
            alert(e);
        }
    });
});
