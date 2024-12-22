const video_list =
    [
        {
            src: "../images/video_images/1_1.jpg",
            title: "中国U19男足不敌吉尔吉斯斯坦",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        },
        {
            src: "../images/video_images/1_2.jpg",
            title: "林良铭破门定位球防守出现问题 世预赛国足负日本",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        },
        {
            src: "../images/video_images/1_3.jpg",
            title: "[排球]北京女排新星涌现 年轻副攻“挑大梁”",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        },
        {
            src: "../images/video_images/1_4.jpg",
            title: "[羽毛球]“百搭”贾一凡 搭档来点赞",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        },
        {
            src: "../images/video_images/1_5.jpg",
            title: "[棋牌]党毅飞、丁浩晋级三星杯世界围棋大师赛决赛",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        },
        {
            src: "../images/video_images/r_1.jpg",
            title: "总书记“公开课”｜忘记历史就意味着背叛",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        },
        {
            src: "../images/video_images/r_2.jpg",
            title: "八项规定何以深刻改变中国？",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        },
        {
            src: "../images/video_images/r_3.jpg",
            title: "“国家好，民族好，大家才会好”",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        },
        {
            src: "../images/video_images/r_4.jpg",
            title: "踏雪行",
            ar: "CCTV",
            play_msg: "19万次观看·1个月前"
        }

    ]
function randomIndex() {
    return Math.floor(Math.random() * video_list.length)
}
export const getMuiscList = () => {
    const list = Array(5).fill(null).map(() => {
        return video_list[randomIndex()]
    })
    return list.map(item => {
        return `
            <li>
                <img src="${item.src}" alt="" onClick="location.reload()"/>
                <div class="msg">
                    <div class="title">
                        ${item.title}
                    </div>
                    <div class="ar">${item.ar}</div>
                    <div class="play_msg">${item.play_msg}</div>
                </div>
            </li>
            `
    }).join("")
}

export default `
        <main>
            <div class="left">
                <video src="../data/videoplayback.mp4" controls width="100%"></video>
                <div class="title">
                    <h1>
                        庆祝中华人民共和国成立75周年 天安门广场举行国庆升国旗仪式 | CCTV
                    </h1>
                </div>
                <div class="owner">
                    <div class="author">
                        <img src="../images/cctv.jpg" alt="" draggable="false">
                        <div class="msg">
                            <div class="name">
                                <span>CCTV</span>
                            </div>
                            <div class="des">
                                <span>中国中央电视台</span>
                            </div>
                        </div>
                    </div>
                    <div class="sub">关注</div>
                </div>
                <div class="describe">
                    <span class="txt" id="des_txt">
                        <span class="title_txt">19万次观看 1个月前 #CCTV #国庆节<br></span>
<pre class="main_txt" >
【欢迎订阅CCTV中国中央电视台频道】：https://bit.ly/3tjXkBJ

#CCTV #国庆节

■□其他CCTV精彩内容■□
《焦点访谈》播放列表：https://bit.ly/3EXVQBF
《面对面》播放列表：https://bit.ly/3kzg2S6
《等着我》播放列表：https://bit.ly/2We5Epy
《山水间的家》播放列表：https://bit.ly/3AOJZWl
《正大综艺》播放列表：https://bit.ly/398xHg1
《典籍里的中国》播放列表：https://bit.ly/3kEYHHv
《经典咏流传》播放列表：https://bit.ly/3kIXCOZ
《国家宝藏 第四季》官方高清播放列表：https://t.ly/IrhUA
《诗画中国 江河万古流》播放列表：https://bit.ly/3TSRXaX

■□更多精彩视频，请关注我们■□
CCTV中文： / @cctvch
CCTV春晚：https://bit.ly/CCTVGala
CCTV科教：https://bit.ly/CCTVScienceAndEducation
CCTV百家讲坛官方频道：https://bit.ly/Chinahistorytalks
CCTV电视剧：https://bit.ly/CCTVDRAMA
CCTV热播剧场：https://bit.ly/CCTVHitdrama
CCTV今日说法官方频道：https://bit.ly/CCTVLegalreport

■□关注CCTV系列帐号 Like us on Facebook■□
Facebook（中文）: / cctv.ch
Facebook（英文）: / cctvcom

■□更多精彩内容欢迎关注CCTV Global：https://global.cctv.com/
</pre>
                    </span>
                    <div class="open-jiantou">
                        <i class="open_btn" onclick="openDescribe()">展开</i>
                        <i hidden class="hide_btn"  onclick="hideDescribe()">收起</i>
                    </div>
                </div>
                <form action="" class="comment_form">
                    <div class="person_pic">
                        <img src="../images/_user.jpg" alt="用户图标">
                    </div>
                    <textarea placeholder="请发表您的评论" class="comment_input"></textarea>
                    <input type="button" name="" value="评 论" class="comment_sub">
                </form>
                <div class="comment_count">
                    1条评论
                </div>
                <div class="comment_list_con">
                    <div class="comment_list" >
                        <div class="person_pic fl">
                            <img src="../images/_user.jpg" alt="用户图标">
                        </div>    
                        <div class="user_name fl">123</div>
                        <div class="comment_text fl">
                           十分好
                        </div>
                        <div class="comment_time fl">2024/11/20 16:16:27</div>
                        <a href="javascript:;" class="comment_up fr"> 赞</a>
                        <a href="javascript:;" class="comment_reply fr">回复</a>
                        <from class="reply_form fl" >
                            <input type="submit" name="" value="回复" class="reply_sub fr">
                            <input type="reset" name="" value="取消" class="reply_cancel fr">
                        </from>            
                    </div>
                </div>
    
            </div>
            <div class="right">
                <ul id="vedio_list">
                ${(() => {
        return video_list.map(item => {
            return `
                        <li>
                            <img src="${item.src}" alt="" onClick="location.reload()"/>
                            <div class="msg">
                                <div class="title">
                                    ${item.title}
                                </div>
                                <div class="ar">${item.ar}</div>
                                <div class="play_msg">${item.play_msg}</div>
                            </div>
                        </li>
                        `
        }).join("")
    })()}
                </ul>
            </div>
        </main>
`