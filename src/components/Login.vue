<template>
<div class="container">
  <div class="login_box">
    <div class="avatar_box">
      <img src="../assets/logo.png">
    </div>
    <div class="form-item">
      <el-input placeholder="请输入账号" prefix-icon="el-icon-user-solid" class="username_margin"></el-input>
      <el-input placeholder="请输入密码" prefix-icon="el-icon-message-solid" show-password></el-input>
      <div class="login-btn">
        <el-button type="primary">登陆</el-button>
        <el-button type="info">重置</el-button>
      </div>

    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style scoped lang="scss">
  .container{
    background-color: #ddd;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .login_box{
      width: 550px;
      height: 400px;
      background-color: #ffffff;
      position: relative;
      .form-item{
        position: absolute;
        bottom: 20%;
        width: 100%;
        padding: 0 40px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        .username_margin{
          margin-bottom: 20px;
        }
        .login-btn{
          margin-top: 50px;
          display: flex;
          justify-content: flex-end;
        }
      }
      .avatar_box{
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 150px;
        height: 150px;
        background-color: lightblue;
        box-shadow: 0 3px 5px rgba(0,0,0,.3);
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
          height: 100%;
        }
      }
    }
  }
</style>
