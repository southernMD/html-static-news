const fs = require("fs")
const edu = JSON.parse(fs.readFileSync("./finance.json"))

const l = edu.map((element,index) => {
    return {
        ...element,
        starts:Math.floor(Math.random()*2000)
    }
});

fs.writeFileSync("./finance.json",JSON.stringify(l,null,2))
