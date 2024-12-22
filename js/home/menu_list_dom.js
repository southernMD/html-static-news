import news from "../../data/news.json" with { type: "json" };
import finance from "../../data/finance.json" with { type: "json" };
import edu from "../../data/edu.json" with { type: "json" };


export const listData = [...edu, ...finance, news];
listData.sort((a, b) => new Date(b.focus_date).getTime() - new Date(a.focus_date).getTime());
export const getIndexList = (times, name) => {
  //times为几就返回从(times - 1)*5开始的下5条数据
  const start = (times - 1) * 5;
  const end = start + 5;
  let list;
  switch (name) {
    case 'news':
      list = news.sort((a, b) => new Date(b.focus_date).getTime() - new Date(a.focus_date).getTime());
      break;
    case 'edu':
      list = edu.sort((a, b) => new Date(b.focus_date).getTime() - new Date(a.focus_date).getTime());
      break;
    case 'finance':
      list = finance.sort((a, b) => new Date(b.focus_date).getTime() - new Date(a.focus_date).getTime());
      break;
    default:
      list = listData;
      break;
  }
  list = list.slice(start, end);
  
  return `
    ${(() => {
      return list.map((news,index) => {
        return `
     <li>
      <a href="/html/news_detail.html?id=${news.id}" class="news_pic fl">
        <img src="${news.image}">
      </a>
      <div class="news_msg">
        <a href="/html/news_detail.html?id=${news.id}${location.hash}" class="news_title fl">${news.title}</a>
        <a href="/html/news_detail.html?id=${news.id}${location.hash}" class="news_detail fl">${news.brief}</a>
        <div class="author_info fl">
          <div class="source fl">${news.keywords.replaceAll(",", " ")}</div>
          <div class="time fl">${news.focus_date}</div>
        </div>
      </div>
    </li>
    `
      }).join('')
    })()}
  `
}
export const getFirstIndexlist = (times,name) => {
  return `
  <ul class="list_con" id="news_list">
    ${ getIndexList(times,name)}
  </ul>
  `
}