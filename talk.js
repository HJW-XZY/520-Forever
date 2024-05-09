// $(function() {
//     $('#yes').click(function(event) {
//         modal('我就知道你也喜歡我哦！(^_^)', function() {
//             $('.page_one').addClass('hide');
//             $('.page_two').removeClass('hide');
//             // typeWrite();
//             fireworks();

//         });
//     });
//     $('#no').click(function(event) {
//         modal('點錯啦，重來！', A);
//     });
// });

// function A() {
//     modal('我喜歡你！', B);
// }

// function B() {
//     modal('薛紫玥同學', C);
// }

// function C() {
//     modal('或許以後我們會更換稱謂 從戀人變成家人', D);
// }

// function D() {
//     modal('但請相信', E);
// }

// function E() {
//     modal('我會一直像如今熱戀時一樣喜歡你', F);
// }

// function F() {
//     modal('把你當做我的唯一', G);
// }

// function G() {
//     modal('相信我們兩個人互相支持', H);
// }

// function H() {
//     modal('會比之前的我們更強大~', I);
// }

// function I() {
//     modal('也謝謝你喜歡我', J)
// }

// function J() {
//     modal('遇見你 是我今年最幸運的事 相信也會是今生最幸運的事~', function() {
//         fireworks();
//     });
// }

// function fireworks() {
//     $('.page_one').addClass('hide');
//     initAnimate();
// }

// function modal(content, callback) {
//     var tpl = '<div class="container">'+
//         '<div class="mask"></div>'+
//         '<div class="modal">'+
//         '<p>'+ content +'</p>'+
//         '<button type="button" id="confirm" class="confirm">确定</button>'+
//         '</div>'+
//         '</div>';
//     $('body').append(tpl);
//     $(document).on('click', '.confirm', function() {
//         $('.container').remove();
//         callback();
//     });
// }

$(function() {
    $('#yes').click(function(event) {
        modal('我就知道小姐姐您一定会愿意的。(^_^)', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('明人不说暗话！', A);
    });
});

function A() {
    modal('我喜欢你！', B);
}

function B() {
    modal('我知道你在等我这一句话', C);
}

function C() {
    modal('请您不要拒绝我', D);
}

function D() {
    modal('拒绝我，不存在的', E);
}

function E() {
    modal('这辈子都不可能让你离开我', F);
}

function F() {
    modal('跟我走吧', G);
}

function G() {
    modal('房产证上写你名', H);
}

function H() {
    modal('我会做饭', I);
}

function I() {
    modal('爱你。么么哒！', J)
}

function J() {
    modal('行，我们去民政局登记吧', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">确定</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}