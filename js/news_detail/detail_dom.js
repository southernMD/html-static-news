import news from "../../data/news.json" with { type: "json" };
import finance from "../../data/finance.json" with { type: "json" };
import edu from "../../data/edu.json" with { type: "json" };
const list = [...edu, ...finance, ...news]

//获取?参数id
const id = new URL(location.href).searchParams.get('id');
const new_detail = list.find(item => item.id == id)

export default `
<div class="detail_con fl">
    <h3>${new_detail.title}</h3>
    <div class="detail_about clearfix">
        <span class="time_souce fl">${new_detail.focus_date} ${new_detail.keywords.replaceAll(","," ")}</span>
        <span class="comment fr">${new_detail.clicks}</span>
    </div>

    <p class="summary">
        ${new_detail.brief}
    </p>

    ${new_detail.content}   
    <a href="javascript:;" class="collection block-center" data-newid="${new_detail.id}" style="display:'block'}}">收藏</a>

</div>

` 
