function throttle(func, limit) {
    let inThrottle;
    return function () {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
window.onload = function () {
    const slideshow = document.querySelector(".slideshow")
    const left_btn = document.querySelector("#left_btn")
    const right_btn = document.querySelector("#right_btn")
    const slideshow_list = document.querySelector("#slideshow_list")
    const potion_list = document.querySelector("#potion_list")
    const msg = ["中国共产党第二十次全国代表大会开幕", "中华人民共和国万岁", "北京天坛", "第十一届全国人民代表大会三次会议召开"]
    const mesage = slideshow.querySelector(".txt")
    let index = 0;
    mesage.innerHTML = msg[index]
    const handleLeftClick = () => {
        if (index == 0) {
            slideshow_list.setAttribute("style", "transform:translateX(" + (index * 100) + "%);transition: transform 1s ease;")
            index = 3;
            setTimeout(() => {
                slideshow_list.setAttribute("style", `transform:translateX(-${4 * 100}%);`)
            }, 1000)
        } else {
            index--;
            slideshow_list.setAttribute("style", "transform:translateX(" + (-(index + 1) * 100) + "%);transition: transform 1s ease;")
        }
        [...potion_list.children].forEach(item => item.classList.remove("active"))
        potion_list.children[index].classList.add("active")
        mesage.innerHTML = msg[index]
    }
    const handleRightClick = () => {
        if (index == 3) {
            slideshow_list.setAttribute("style", "transform:translateX(" + (-(index + 2) * 100) + "%);transition: transform 1s ease;")
            index = 0;
            setTimeout(() => {
                slideshow_list.setAttribute("style", "transform:translateX(-100%);")
            }, 1000)
        } else {
            index++;
            slideshow_list.setAttribute("style", "transform:translateX(" + (-(index + 1) * 100) + "%);transition: transform 1s ease;")
        }
        [...potion_list.children].forEach(item => item.classList.remove("active"))
        potion_list.children[index].classList.add("active")
        mesage.innerHTML = msg[index]
    }
    left_btn.addEventListener("click", throttle(handleLeftClick, 1200))
    right_btn.addEventListener("click", throttle(handleRightClick, 1200))
    slideshow.addEventListener("mouseenter", () => {
        clearInterval(auto_play)
    })
    slideshow.addEventListener("mouseleave", () => {
        auto_play = setInterval(handleRightClick, 3000)
    })
    let auto_play = setInterval(() => {
        handleRightClick()
    }, 3000)

    const link_obj =  [...document.querySelectorAll("img")]
    link_obj.forEach((item)=>{
        item.addEventListener("click",toVideoDetailPage)
    })
    const banner = document.querySelector("#slideshow_list").children
    for(let i =0 ;i<banner.length;i++){
        banner[i].addEventListener("click",toVideoDetailPage)
    }
}
function toVideoDetailPage (){
    window.location.href = "/html/video_detail.html"
}
export default `
        <div class="top">
            <div class="slideshow">
                <div class="list" id="slideshow_list" style="transform:translateX(-100%);">
                    <div class="picture_4" ></div>
                    <div class="picture_1" ></div>
                    <div class="picture_2" ></div>
                    <div class="picture_3" ></div>
                    <div class="picture_4" ></div>
                    <div class="picture_1" ></div>
                </div>
                <i class="left" id="left_btn">&lt;</i>
                <i class="right" id="right_btn">&gt;</i>
                <div class="potions" id="potion_list">
                    <div class="active"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div class="txt"></div>
            </div>
            <div class="view_list">
                <div class="small_block">
                    <img src="../images/video_images/r_1.jpg">
                    <span class="tl">总书记“公开课”｜忘记历史就意味着背叛</span>
                </div>
                <div class="small_block">
                    <img
                        src="../images/video_images/r_2.jpg">
                    <span class="tl">八项规定何以深刻改变中国？</span>
                </div>
                <div class="small_block">
                    <img
                        src="../images/video_images/r_3.jpg">
                    <span class="tl">“国家好，民族好，大家才会好”</span>
                </div>
                <div class="small_block">
                    <img
                        src="../images/video_images/r_4.jpg">
                    <span class="tl">踏雪行</span>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="title">
                体育新闻
            </div>
            <div class="content">
                <div class="VM_1">
                    <img
                        src="../images/video_images/1_1.jpg">
                    <span class="tl">中国U19男足不敌吉尔吉斯斯坦</span>
                </div>
                <div class="view_list">
                    <div class="small_block">
                        <img 
                        src="../images/video_images/1_2.jpg">
                        <span class="tl">林良铭破门定位球防守出现问题 世预赛国足负日本</span>
                    </div>
                    <div class="small_block">
                        <img
                            src="../images/video_images/1_3.jpg">
                        <span class="tl">[排球]北京女排新星涌现 年轻副攻“挑大梁”</span>
                    </div>
                    <div class="small_block">
                        <img
                            src="../images/video_images/1_4.jpg">
                        <span class="tl">[羽毛球]“百搭”贾一凡 搭档来点赞</span>
                    </div>
                    <div class="small_block">
                        <img
                            src="../images/video_images/1_5.jpg">
                        <span class="tl">[棋牌]党毅飞、丁浩晋级三星杯世界围棋大师赛决赛</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="main">
            <div class="title">
                财经新闻
            </div>
            <div class="content">
                <div class="VM_1">
                    <img
                        src="../images/video_images/1.jpg">
                    <span class="tl">内地与香港资本市场互联互通十年间 沪深港通总成交额约177万亿人民币</span>
                </div>
                <div class="view_list">
                    <div class="small_block">
                        <img src="../images/video_images/2.jpg">
                        <span class="tl">仿造币 臆造币 如何提防假冒纪念币陷阱？ 凭空想象的臆造币 迷惑收藏者</span>
                    </div>
                    <div class="small_block">
                        <img
                            src="../images/video_images/3.jpg">
                        <span class="tl">黄金价格震荡下行 北京：金价持续下探 部分投资者获利离场</span>
                    </div>
                    <div class="small_block">
                        <img
                            src="../images/video_images/4.jpg">
                        <span class="tl">股票回购增持再贷款政策实施满月 已有近150家上市公司参与</span>
                    </div>
                    <div class="small_block">
                        <img
                            src="../images/video_images/5.jpg">
                        <span class="tl">房地产交易全面降税 北京：契税增值税降低 90至140平米住宅及非普住宅交易最受益</span>
                    </div>
                </div>
            </div>
        </div>
`