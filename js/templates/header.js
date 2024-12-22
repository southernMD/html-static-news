let user;
const urlParams = new URLSearchParams(window.location.search);

// 获取表单提交的数据
const referrer = document.referrer;
const username = urlParams.get('username');
const password = urlParams.get('password'); 
if(username && password && ( referrer.includes('login.html') || referrer.includes('register.html'))){
    user = {username, password,avatar:null,signature:""};
    localStorage.setItem('user', JSON.stringify(user));
}

if(!user){
    localStorage.getItem('user')?user = JSON.parse(localStorage.getItem('user')):null;
}
if(user){
    const script = document.createElement('script');
    script.textContent = `
        function logout(){
            localStorage.removeItem('user');
            window.location.href='index.html';
        }
    `;
    document.documentElement.appendChild(script);
}

const category = ['首页','最新','新闻','财经','教育','视频']
let html = ``;
//#号后参数
const param = location.hash.slice(1) ?? "home"

let categoryMap = {
    '首页': 'home',
    '最新': 'index',
    '新闻': 'news',
    '财经': 'finance',
    '教育': 'edu',
    '视频': 'video'
}
window.addEventListener('hashchange', (event) => {
    if(location.pathname.includes("personalCenter.html"))return
    const _params = location.hash.slice(1)
    const menu = document.querySelector('.menu')
    for(let i = 0; i < menu.children.length; i++){
        menu.children[i].classList.remove('active')
    }
    (menu.querySelector(`a[href="/html/home.html#${_params}"]`) ?? menu.firstElementChild.querySelector("a")).parentNode.classList.add('active')
});
function activeMenu(_params) {
    if(location.pathname.includes("personalCenter.html")){
        return ""
    }else{
        return category.map((name,$index)=>{
            return `
                <li data-cid=${$index + 1} class=${
                    categoryMap[name] === _params 
                    || !_params && $index == 0 && !location.pathname.includes("video.html") && !location.pathname.includes("video_detail.html")
                    || location.pathname.includes("video.html") && name == "视频"
                    || location.pathname.includes("video_detail.html") && name == "视频"
                    && name == "视频" ?"active":""}><a href="${
                    // name != "视频"?`/html/home.html#${categoryMap[name]}`:`/html/video.html`
                        (()=>{
                            if(name == "视频"){
                                return `/html/video.html`
                            }else if(name == "首页"){
                                return `/html/index.html`
                            }else
                            {
                                return `/html/home.html#${categoryMap[name]}`
                            }
                        })()
                    }">${name}</a></li>
            `
        }).join('')
    }
}
//以下是移动端操作
const phoneEnum = ()=>{
    const menu = document.querySelector(".header")
    menu.classList.add("header-menu-active")
    function closeMenu(event){
        const clickX = event.clientX
        if(clickX / window.innerWidth > 0.5 ){
            menu.classList.remove("header-menu-active")
        }
    }
    window.addEventListener("click",closeMenu)
}
const phoneEnumHandle = ()=>{
    const details = document.querySelector(".header .details")
    if(window.innerWidth <= 800){
        details.addEventListener("click",phoneEnum)
    }else{
        const menu = document.querySelector(".header")
        menu.classList.remove("header-menu-active")
        details.removeEventListener("click",phoneEnum)
    }
}
window.addEventListener("load",()=>{
    phoneEnumHandle()
})

window.addEventListener("resize",()=>{
    phoneEnumHandle()
})
window.addEventListener("hashchange",()=>{
    const menu = document.querySelector(".header")
    menu.classList.remove("header-menu-active")
    details.removeEventListener(phoneEnum)
})

if (!user) {
    html = `
        <div class="header">
            <div class="details">三</div>
            <a href="/" class="logo fl"><img src="../images/logo.png" alt="logo"></a>
            <ul class="menu fl">
                ${activeMenu(param)}
            </ul>
            <div class="user_btns fr">
                <a href="/html/login.html" class="login_btn">登录</a> / <a href="/html/register.html" class="register_btn">注册</a>
            </div>
        </div>
    `
}else{
    html = `
        <div class="header">
            <div class="details">三</div>
            <a href="/" class="logo fl"><img src="../images/logo.png" alt="logo"></a>
            <ul class="menu fl">
                ${activeMenu(param)}
            </ul>
            <div class="user_login fr">
                <img src="${user.avatar ?? "../../images/_user.jpg"}" class="lgin_pic">
                <a href="/html/personalCenter.html" id="nick_name">${user.username}</a>
                <a href="javascript:;" onclick="logout()">退出</a>
            </div>
        </div>
    `
}
export default html