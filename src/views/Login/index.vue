<template>
  <a-row type="flex" align="middle" class="login">
    <a-col :xs="18" class="right">
      <h1>
        中台
      </h1>
    </a-col>
    <a-col :xs="6">
      <a-form
        ref="form"
        :model="form"
        :rules="rules"
        class="login-form"
        >
        <a-form-item
          required
          name="username"
        >
          <a-input
            placeholder="用户名"
            v-model:value="form.username"
            ref="username"
            autocomplete="off"
          >
            <template #prefix>
              <user-outlined></user-outlined>
            </template>
            <template #suffix>
              <a-tooltip title="注意大小写">
                <info-circle-outlined style="color: rgba(0,0,0,.45)" />
              </a-tooltip>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item
          required
          name="password"
        >
          <a-input-password
            placeholder="密码"
            v-model:value="form.password"
            ref="password"
            autocomplete="off"
          >
            <template #prefix>
              <lock-outlined></lock-outlined>
            </template>
          </a-input-password>
        </a-form-item>
        <a-form-item>
          <a-button type="primary" @click="handleSubmit">登录</a-button>
        </a-form-item>
      </a-form>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { UserOutlined, LockOutlined, InfoCircleOutlined } from '@ant-design/icons-vue';

import { loginByUsername } from './service';

interface LoginForm {
  [username: string]: string;
  password: string;
}
export default defineComponent({
  name: 'Login',
  components: {
    UserOutlined,
    LockOutlined,
    InfoCircleOutlined,
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      } as LoginForm,
      rules: {
        username: [
          { required: true, message: '用户名不为空', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '密码不为空', trigger: 'blur' },
          { min: 6, message: '密码不少于6位', trigger: 'change' },
        ],
      },
    };
  },
  methods: {
    handleSubmit() {
      loginByUsername(this.form).then((response) => {
        console.log(response);
      });
    },
  },
});
</script>

<style lang="scss">
.login {
  height: 100%;
}
.right{
  background-color: #D3411D;
  height: 100%;
  text-align: center;
  h1 {
    color: #FFFFFF;
    line-height: 100vh;
  }
}
.login-form {
  width: fit-content;
  margin: 0 auto;
  text-align: center;
}
</style>
