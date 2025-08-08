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

        const mainElement = document.getElementById('article-container'); //hexo butterfly文章内容区域根节点
        const dataElement = mainElement.getElementsByTagName('script')['hbeContent']; //缓存解密组件节点的节点
        const base64DataWidget = dataElement.innerText; //内容文本


        mainElement.innerHTML = decodeURIComponent(escape(window.atob(base64DataWidget))) + `<link href="https://qzbot.s3.bitiful.net/static/css/hbe.style.css?no-wait=on" rel="stylesheet" type="text/css">`
        const script = document.createElement('script');
        script.src = "https://qzbot.s3.bitiful.net/static/js/hbe.js?no-wait=on";
        script.setAttribute('data-pjax', ''); // 保留原始属性
        // 4. 添加JS到DOM（此时会执行）
        document.body.appendChild(script);

    } else {
        if (captcha.checked) {
             location.reload(); // 刷新页面
        } else {
            // 验证失败，不进行跳转
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
        } else {
            redirectButton.textContent = btnAfter;
        }
    } else {
        // 验证失败，保持按钮禁用
        redirectButton.disabled = true;
        redirectButton.style.backgroundColor = "#9E9E9E";
        if (captcha.clicked) {
            redirectButton.textContent = btnDuring;
        } else {
            redirectButton.textContent = btnBefore; //在点击验证码框之前
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