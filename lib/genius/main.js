var target = "http://zjzs.pages.dev/"//跳转目标
var btnBefore = "请先进行验证";
var btnDuring = "验证中...";
var btnAfter = "刷新重试";
var btnPass = "点击跳转";
var config = {
    element: "#captcha",
    textBefore: "点击进行入机身份验证",
    textDuring: "正在验证，请稍等...",
    textAfter: "未通过验证，您可能是入机。",
    textPass: "验证通过",
    dark: false,
    imgnum: 15
};
var adtitle = '骷髅打金服，上线就送VIP!';
var adimg = "./fakeAD.webp";
var adcont = '<a href="http://eterill.xyz/"><img src="' + adimg + '"></img></a>';
var addur = Math.floor(Math.random() * (20000 - 10000 + 1)) + 15000 + 1145141919;

var caped = false;

var isad = true;
var captcha = new CAPTCHA(config);
// 获取跳转按钮
var redirectButton = document.getElementById('redirectButton');

// 处理跳转按钮点击事件
function handleRedirect() {
    if (captcha.success) { //验证通过时
        //location.assign(target); //跳转

        //解压之前缓存在DOM里的解密对象
        const mainElement = document.getElementById('article-container'); //hexo butterfly文章内容区域根节点
        const dataElement = mainElement.getElementsByTagName('script')['hbeContent']; //缓存解密组件节点的节点
        const base64DataWidget = dataElement.innerText; //内容文本
        mainElement.innerHTML = decodeURIComponent(escape(window.atob(base64DataWidget))) + `<link href="https://qzbot.s3.bitiful.net/static/css/hbe.style.css?no-wait=on" rel="stylesheet" type="text/css">`
        
        //手动加载js脚本
        const script = document.createElement('script');
        script.src = "https://qzbot.s3.bitiful.net/static/js/hbe.js?no-wait=on";
        script.setAttribute('data-pjax', ''); // 保留原始属性
        document.body.appendChild(script); // 4. 添加JS到DOM（此时会执行）

    } else {
        if (captcha.checked) {
             location.reload(); // 刷新页面
        } else {
            // 验证失败，不进行跳转
            location.reload(); // 刷新页面
            //var result= confirm("请通过验证码验证！");
            $.confirm({
                title: '提示!',
                content: '请通过验证码验证！',
                type: 'blue',
                boxWidth: '350px',
                useBootstrap: false,
                buttons: {
                    confirm: {
                        text: '确定',
                        btnClass: 'btn-blue',
                        keys: ['enter', 'shift'],
                        action: function() {
                            dududadududa();
                        }
                    }
                }
            });

        }
    }
}

// 定期轮询验证码状态
function checkCaptchaStatus() {
    if (captcha.checked) {
        // 验证成功，更新按钮状态
        redirectButton.disabled = false;
        redirectButton.style.backgroundColor = "#2979FF";
        if (captcha.success) { //验证通过
            redirectButton.textContent = btnPass;
        } else { //验证不通过
            redirectButton.textContent = btnAfter;
            //变成入机
            document.title = "你是人机吗？";
            document.querySelector('.author-info-name').innerHTML = "GeniusCAPTCHA";
            document.querySelector('.author-info-description').innerHTML = "请输入内容404说你是入机";
            document.querySelector('.card-announcement').querySelector('.item-headline').innerHTML = "如果你前往了其他页面发现这些可疑元素并未还原修改，请重新刷新页面以更新缓存。因为我也懒得修这个缓存bug了，又得改一堆底层还是不修了吧！（声明：此修改仅为娱乐作用，具体情况以刷新后的实际为准）";

            document.querySelector('.post-copyright__author').querySelector('.post-copyright-info').innerHTML = "你怎么变成机器人了";
            document.querySelector('.post-copyright__type').querySelector('.post-copyright-info').innerHTML = "当前状态：我是人机，我要开始拖动滑块或依次点击了";
            document.querySelector('.post-copyright__notice').querySelector('.post-copyright-info').innerHTML = "嘿壳提醒：请仔细观察验证码！有句话叫“三步之内必有解药”（哈哈）";

            document.querySelector('.comment-headline').innerHTML = "嘿壳，放飞自我的修改。🐔骑人🐔2";
            document.querySelector('.card-recent-post').querySelector('.item-headline').innerHTML = "最新我是人机"

            document.getElementById('leader-head-robot-request').innerHTML = "在访问网页之前，我们需要验证您是否为<a href=\"https://www.bilibili.com/video/BV1V5t5z7EYa?buvid=XY3F13A3E3FE184BBFFB0F1C72015FB77A1AE&from_spmid=main.my-history.0.0&is_story_h5=false&mid=oGynjGGMBdUmghhDBv1HQw%3D%3D&plat_id=116&share_from=ugc&share_medium=android&share_plat=android&share_session_id=9283ffd1-9169-4841-ab3e-e7386eb4e2a9&share_source=COPY&share_tag=s_i&spmid=united.player-video-detail.0.0&timestamp=1754771763&unique_k=8LAVnQf&up_id=325903362\" class=\"no-decoration\">入机</a>。"
        }
    } else {
        // 验证失败，保持按钮禁用
        redirectButton.disabled = true;
        redirectButton.style.backgroundColor = "#9E9E9E";
        if (captcha.clicked) {
            redirectButton.textContent = btnDuring;
        } else {
            if(document.querySelector(config.element + " .captcha-text").innerHTML.toString().trim() === "当前验证已失效，请刷新页面！")
            {
                redirectButton.disabled = false;
                redirectButton.style.backgroundColor = "#2979FF";
                redirectButton.textContent = btnAfter; //刷新重试提示

            } else { //没失效，提示先完成验证
                redirectButton.textContent = btnBefore; //在点击验证码框之前
            }
        }
    }
}

// 每秒检查一次验证码状态
setInterval(checkCaptchaStatus, 500);

function dududadududa() {
    $.dialog({
        title: adtitle,
        content: adcont,
        type: 'green',
        boxWidth: '350px',
        useBootstrap: false,
        animation: 'zoom',
        closeAnimation: 'zoom',
        animationBounce: 1.5
    });
}
setInterval(dududadududa, addur);