import header from './header.js'
import footer from './footer.js'

export default (...args)=>{
    return `
    <div id="header" class="header_con">${(()=>header)()}</div>
    <div class="conter_con">${args.join("")}</div> 
    <div id="footer" class="footer">${(()=>footer)()}</div>
`
}