import view_dom_1 from './view_dom_1.js'
import view_dom_2 from './view_dom_2.js'
import view_dom_3 from './view_dom_3.js'

const param = location.hash.slice(1).length == 0?"base_info": location.hash.slice(1)
const user = JSON.parse(localStorage.getItem("user"))

window.addEventListener('hashchange', (event) => {
    const _params = location.hash.slice(1)
    if(!["base_info","pass_info","collections"].includes(_params)){
        location.hash = "base_info"
        return
    }
    const menu = document.querySelector('.option_list')
    for (let i = 0; i < menu.children.length; i++) {
        menu.children[i].classList.remove('active')
    }
    (menu.querySelector(`a[href="#${_params}"]`) ?? menu.firstElementChild.querySelector("a")).parentNode.classList.add('active')
    document.querySelector("#personal_center_view").innerHTML = (()=>{
        switch (_params) {
            case "base_info":
                return view_dom_1
            case "pass_info":
                return view_dom_2
            case "collections":
                return view_dom_3
        }
    })()
});

export default `
    <div class="user_menu_con">
        <div class="user_center_pic">
            <img src='${user.avatar ?? "../../images/_user.jpg"}' alt="用户图片">
        </div>
        <div class="user_center_name">${user.username}</div>
        <ul class="option_list">
            ${(()=>{
                const l = ['基本资料','密码修改','我的收藏']
                const l_href = ['base_info','pass_info','collections']
                const _list = l.map((item,index)=>{
                    return `<li class="${l_href[index] == param?'active':''}"><a href="#${l_href[index]}">${item}</a></li>`
                })
                return _list.join("")
            })()}
        </ul>
    </div>
    <div class="user_con" id="personal_center_view">${(()=>{
        switch (param) {
            case "base_info":
                return view_dom_1
            case "pass_info":
                return view_dom_2
            case "collections":
                return view_dom_3
            default:
                return view_dom_1
        }
    })()}</div>
`