export default`
    <form class="pass_info" id="change_password_form">
        <h3>密码修改</h3>
        <div class="form-group">
            <label>当前密码：</label>
            <input type="password" name="old_password" class="input_txt old_password" value>
        </div>
        <div class="form-group">
            <label>新密码：</label>
            <input type="password" name="new_password" class="input_txt new_password" value>
        </div>
        <div class="form-group">
            <label>确认密码：</label>
            <input type="password" name="new_password2" class="input_txt new_password2" value>
        </div>
        <div class="form-group">
            <input type="button" value="保 存" class="input_sub" onclick="changePassword()">
        </div>
    </form>
`