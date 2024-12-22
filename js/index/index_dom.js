import news from "../../data/news.json" with { type: "json" };
import finance from "../../data/news.json" with { type: "json" };
import edu from "../../data/news.json" with { type: "json" };
const list = [...edu, ...finance, ...news]
const category = ['最新','新闻','财经','教育']
let categoryMap = {
    '最新': 'index',
    '新闻': 'news',
    '财经': 'finance',
    '教育': 'edu',
}
const randomList = [
                    list[Math.floor(Math.random()*list.length)],
                    news[Math.floor(Math.random()*news.length)],
                    finance[Math.floor(Math.random()*finance.length)],
                    edu[Math.floor(Math.random()*edu.length)]
                ]

const randomBottomList = Array.from({length:6}).map(()=>{
    return list[Math.floor(Math.random()*list.length)]
})

export const getMainRandomMsg = ()=>{
    const oneBigMsg = list[Math.floor(Math.random()*list.length)]
    return `
        <img src="${oneBigMsg.image}" alt="Featured news" class="featured-image">
        <a class="featured-link" href="/html/news_detail.html?id=${oneBigMsg.id}">查看</a>
        <h1 class="featured-title">${oneBigMsg.title}</h1>
        <p class="featured-description">${oneBigMsg.brief}</p>
    `
}

console.log(randomBottomList);
console.log(randomList);


export default `
    <main class="container main-content">
        <section class="featured">
            <div class="featured-top">
                <div class="featured-main">
                   ${getMainRandomMsg()}
                </div>
                <div class="featured-side">
                    ${(()=>{
                        return randomList?.map((item,index)=>{
                            return `
                            <article class="side-news-item">
                                <a class="side-news-title" href="/html/news_detail.html?id=${item.id}">${item.title}</a>
                                <p class="side-news-brief">${item.brief}</p>
                                <div class="side-news-meta">
                                    <span class="timestamp">${item.focus_date}</span>
                                    <span class="category"  onClick="location.href='/html/home.html#${categoryMap[category[index]]}'">${category[index]}</span>
                                </div>
                            </article>`
                        }).join("")
                    })()}
                </div>
            </div>
            <div class="thumbnail-grid">
                ${(()=>{
                    return randomBottomList.map((item,idnex)=>{
                        if(!item)return``
                        return `
                            <article class="thumbnail-item" onClick="location.href='/html/news_detail.html?id=${item.id}'">
                                <img src="${item.image}" alt="News thumbnail" class="thumbnail-image">
                                <div class="thumbnail-content">
                                    <h3 class="thumbnail-title">${item.title}"</h3>
                                    <span class="timestamp">${item.focus_date}</span>
                                </div>
                            </article>
                        `
                    }).join("")
                })()}
            </div>
        </section>
    </main>




`