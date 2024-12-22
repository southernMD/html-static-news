import { formatDate } from "../utils/formatDate.js";
import news from "../../data/news.json" with { type: "json" };
import finance from "../../data/finance.json" with { type: "json" };
import edu from "../../data/edu.json" with { type: "json" };


const clicksData = [...edu, ...finance, ...news].sort((a, b) => b.clicks - a.clicks).filter((_, index) => index < 10);
const startsData = [...edu, ...finance, ...news].sort((a, b) => b.starts - a.starts).filter((_, index) => index < 10);
const titleName = ['点击量排行','收藏量排行']

const tableHTMLDom = `
${(()=>{
    return titleName.map((title,title_index)=>{
        return `        
        <div class="loopblk">
            <div class="title">
                <h2>${title}</h2>
            </div>
            <div class="Cons" id="Con11" style="display: block;">
                <table cellspacing="0">
                    <tbody>
                        <tr>
                            <th width="55">序号</th>
                            <th>新闻标题</th>
                            <th width="162">关键词</th>
                            <th width="55">${title.slice(0,3)}</th>
                            <th width="109">时间</th>
                        </tr>
                        ${(()=>{
                            let tArr = [];
                            if(title_index ==0)tArr = clicksData
                            else tArr = startsData
                            return tArr.map((item,index)=>{
                                return  `
                                <tr>
                                    <td>${index}</td>
                                    <td class="ConsTi"><a href="/html/news_detail.html?id=${item.id}"
                                            target="_blank">${item.title}</a></td>
                                    <td>${item.keywords}</td>
                                    <td>${title_index == 0?item.clicks:item.starts}</td>
                                    <td>${formatDate(item.focus_date)}</td>
                                </tr>
                                `
                            }).join('')
                        })()}
                    </tbody>
                </table>
            </div>
        </div>
        `
    }).join("")
    
})()}`

export default `
<img src="../../images/ranks.jpg" width="100%" alt="">
${tableHTMLDom}
<div class="bottom">
    本页面为时事新闻排行榜，点击量排行显示从当前时间起24小时内各频道新闻浏览量最高的排行情况，每小时更新一次；<br>
    收藏数排行显示从当前时间起24小时内各频道新闻评论数量最高的排行情况，每小时更新一次。
</div>
`