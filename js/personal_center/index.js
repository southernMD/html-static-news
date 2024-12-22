const reads = new FileReader();
function changepic(){
    const file = document.getElementById('upload_file').files[0];
    reads.readAsDataURL(file);
    reads.onload = function(e) {
        document.getElementById('now_user_pic').src = reads.result;
    };
};
function saveInfo(){
    const form = document.getElementById("base_info_form")
    const nick_name = form.querySelector("#nick_name").value
    const signature = form.querySelector('#signature').value
    const avatar = reads.result
    const user = JSON.parse(localStorage.getItem("user"))
    user.signature = signature
    user.username = nick_name
    user.avatar = avatar? avatar : user.avatar
    localStorage.setItem("user", JSON.stringify(user))
    location.reload()
}

function changePassword(){
    const form = document.getElementById("change_password_form")
    const old_password = form.querySelector(".old_password").value
    const new_password = form.querySelector(".new_password").value
    const new_password2 = form.querySelector(".new_password2").value
    const user = JSON.parse(localStorage.getItem("user"))
    if(old_password.length == 0){
        alert("请输入旧密码")
        return
    }
    if (old_password == new_password) {
        alert("新密码不能与旧密码相同")
        return
    }
    if (new_password != new_password2) {
        alert("两次密码不一致")
        return
    }
    if(old_password != user.password){
        alert("旧密码不正确，若已忘记旧密码，请联系管理员")
        return
    }
    user.password = new_password
    localStorage.setItem("user", JSON.stringify(user))
    alert("密码修改成功")
    location.reload()
}