import {listData} from "../home/menu_list_dom.js"
import { formatDate } from "../utils/formatDate.js";
function randomIndex(){
   return Math.floor(Math.random()*listData.length)
}

export const setList = ()=>{
    const list = Array(5).fill(null).map(()=>{
        return listData[randomIndex()]
    })
    return list.map(item=>{
        return `<li><a target="_blank" href="/html/news_detail.html?id=${item.id}">${item.title}</a><span>${formatDate(item.focus_date)}</span></li>`
    }).join("")
}


export default `
    <div class="my_collect">
        <h3>我的收藏</h3>
        <ul class="article_list" id="start_article_list">
            ${setList()}
        </ul>
        <div class="pagination" id="pagination">
            <a class="prev">上一页</a>
            <a class="next">下一页</a>
        </div>
    </div>
`