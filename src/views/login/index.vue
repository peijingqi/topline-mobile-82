<template>
  <div class="login">
    <!-- 导航栏 -->
    <van-nav-bar title="登录" />
    <!-- /导航栏 -->

    <!-- 登录表单 -->
    <van-cell-group>
      <van-field
        v-model="user.mobile"
        required
        clearable
        label="手机号"
        placeholder="请输入手机号"
      />

      <van-field
        v-model="user.code"
        type="password"
        label="验证码"
        placeholder="请输入验证码"
        required
      />
    </van-cell-group>
    <!-- /登录表单 -->
    <!-- 登录按钮 -->
    <div class="login-wrap">
      <van-button type="info" @click="onLogin">登录</van-button>
    </div>
  </div>
</template>

<script>
import request from '@/utils/request'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '',
        code: ''
      }
    }
  },

  methods: {
    async onLogin () {
      // 获取表单数据
      // 发送请求
      const { data } = await request({
        method: 'POST',
        url: '/app/v1_0/authorizations',
        data: this.user
      })

      console.log(data)
      // 根据结果进行后续处理
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  .login-wrap {
    padding: 20px;
    .van-button {
      width: 100%;
    }
  }
}
</style>
