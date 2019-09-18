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
      <van-button type="info" :loading="isLoginLoading" @click="onLogin">登录</van-button>
    </div>
    <!-- /登录按钮 -->
  </div>
</template>

<script>
import { login } from '@/api/user'

export default {
  name: 'LoginIndex',
  data () {
    return {
      user: {
        mobile: '15201230123',
        code: '246810'
      },
      isLoginLoading: false // 控制登录按钮的 loading 状态
    }
  },

  methods: {
    async onLogin () {
      this.isLoginLoading = true
      // 获取表单数据
      // 发送请求
      try {
        const { data } = await login(this.user)

        console.log(data)
        this.$toast.success('登录成功')
      } catch (err) {
        if (err.response && err.response.status === 400) {
          this.$toast.fail('手机号或验证码错误')
        }
      }

      // 无论登录成功与否，都停止 loading
      this.isLoginLoading = false
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
