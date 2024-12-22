const user = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null
if (!user) window.location.href = "/html/login.html"
export default `
<form class="base_info" id="base_info_form">
    <h3>基本资料</h3>
    <div class="form-group">
        <label>用户昵称：</label>
        <input id="nick_name" type="text" name="" class="input_txt" value="${user.username}">
    </div>
    <div class="form-group">
        <label>个性签名：</label>
        <input id="signature" type="text" name="signature" class="input_txt" value="${user.signature}">
    </div>
    <div class="form-group">
        <label class="label01">当前图像：</label>
        <img src='${user.avatar ?? "../../images/_user.jpg"}' alt="用户图片" class="now_user_pic" id="now_user_pic">
    </div>
    <div class="form-group">
        <label>上传图像：</label>
        <input type="file" name="avatar" class="input_file"  id="upload_file" onchange="changepic(this)">
    </div>
    <div class="form-group">
        <input type="button" value="保 存" class="input_sub" onclick="saveInfo()">
    </div>
</form>
`