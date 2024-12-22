import {setList} from "./view_dom_3.js";
const init = () => {
    const paginationItems = document.querySelectorAll(".pagination a");
    let clickTarget = null;
    for(let i = 0; i < paginationItems.length; i++){
        
        paginationItems[i].addEventListener("click",(e)=>{
            const t1 = [...paginationItems[1].classList]
            const t2 = [...paginationItems[paginationItems.length - 2].classList]
            if(!(t1.length >0 && t1?.includes("active") && paginationItems[1]?.innerHTML == 1 ||
            t2.length >0 && t2?.includes("active")  && paginationItems[paginationItems.length - 2].innerHTML == 20 ||
            clickTarget == e.target && (e.target.innerHTML != "上一页" && e.target.innerHTML != "下一页")
            )
            ){
                document.querySelector("#start_article_list").innerHTML = setList()
                clickTarget = e.target
            }
        })
    }
}


init()
window.addEventListener("hashchange",init)