<template>
<div class="container">
  <div class="login_box">
    <div class="avatar_box">
      <img src="../assets/logo.png">
    </div>
    <div class="form-item">
      <el-form ref="loginForm" :rules="rules" :model="loginForm">
        <el-form-item  prop="username">
          <el-input v-model="loginForm.username" prefix-icon="el-icon-user-solid"></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="loginForm.password" prefix-icon="el-icon-message-solid" prop="password"></el-input>
        </el-form-item>
        <el-form-item class="login_sub_btn">
          <el-button type="primary" @click="login">登陆</el-button>
          <el-button type="info" @click   ="resetLoginForm">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 5, max: 16, message: '长度在 5 到 16 个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    resetLoginForm () {
      this.$refs.loginForm.resetFields()
    },
    login () {
      this.$refs.loginForm.validate(async (res) => {
        if (!res) {
          this.$message.warning('请按照表单提示进行填写正确')
          return false
        } else {
          const { data } = await this.$http.post('login', this.loginForm)
          if (data.meta.status === 200) {
            window.sessionStorage.setItem('token', data.data.token)
            this.$message.success('登陆成功')
            this.$router.push('/home')
          } else {
            this.$message.error('用户名或密码错误')
          }
        }
      })
    }
  }
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
        .login_sub_btn{
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
