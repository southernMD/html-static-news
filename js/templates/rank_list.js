import { listData } from '../home/menu_list_dom.js'

const six_data = listData.sort((a, b) => b.clicks - a.clicks).filter((_, index) => index < 6);
const classNamefix = (value) => {
    if(value==0)return "first"
    else if(value == 1)return "second"
    else if(value == 2)return "third"
    else return null
}
export default  `
    <div class="rank_con">
        <div class="rank_title">
            <h3>点击排行</h3>
            <h3><a href="/html/ranks.html" class="rank_list_top">查看排行</a></h3>
        </div>
        <ul class="rank_list">
        ${(()=>{
            return six_data.map((news,$index)=>{
                return `<li><span class='${classNamefix($index) ?? $index}'>${$index + 1}</span><a href="/html/news_detail.html?id=${news.id}">${news.title}</a></li>`
            })
        })().join("")}
        </ul>
    </div>
`