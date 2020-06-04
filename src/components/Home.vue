<template>
  <el-container class="container">
    <el-header>
      <div>
        <img src="../assets/logo.png">
        <span>商城后台管理系统</span>
      </div>
      <el-button type="info" @click="logout">退出</el-button>
    </el-header>
    <el-container>
      <el-aside width="17%">
        <el-menu router :collapse-transition="false" unique-opened background-color="#eee"  :default-openeds="['1']">
          <el-submenu :index="item.id + ''" v-for="item in menus" :key="item.id">
            <template slot="title"><i class="el-icon-message"></i>{{item.authName}}</template>
              <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id"><template slot="title"><i class="el-icon-s-tools"></i>{{subItem.authName}}</template></el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <RouterView></RouterView>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      menus: []
    }
  },
  async created () {
    const { data } = await this.$http.get('menus')
    this.menus = data.data
    console.log(data.data)
  },
  methods: {
    logout () {
      window.sessionStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped lang="scss">
  .container{
    background-color: #eee;
    height: 100%;
    .el-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 0 8px rgba(0,0,0, .6);
      font-size: 30px;
      padding: 10px 100px 10px 60px;
      margin-bottom: 5px;
      div{
        height: 100%;
        display: flex;
        align-items: center;
        img{
          height: 100%;
          margin-right: 20px;
        }
      }
    }
    .el-aside{
      .toggle_aside{
        background: #bbb;
        letter-spacing: .3em;
        cursor: pointer;
        line-height: 30px;
        text-align: center;
        font-size: 1.5em;
      }
      border-right: solid 4px #ddd;
      .el-menu{
        background-color: #eeeeee;
      }
    }
  }
</style>
