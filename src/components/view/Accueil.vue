<template>
  <div class="demo-image__lazy" style="height: 100%">
    <el-image src="https://img.zcool.cn/community/01936a58be7362a801219c77fe8358.jpg@2o.jpg" fit="contain" />
  </div>
  <div style="width: 230px;margin-top: -500px;margin-left: 600px">
    <el-form ref="ruleFormRef" :model="userForm" status-icon :rules="rules" class="demo-ruleForm">
      <el-form-item  prop="email">
        <el-input v-model="userForm.email" autocomplete="off" placeholder="请输入你的用户邮箱" prefix-icon="Message" />
      </el-form-item>
      <el-form-item  prop="password">
        <el-input v-model="userForm.password" type="password" autocomplete="off" placeholder="请输入你的用户密码"
                  prefix-icon="NoSmoking" />
      </el-form-item>
      <el-form-item style="margin-top: 50px">
        <el-button type="primary" @click="btnLogin">用户登录</el-button>
        <el-button @click="resetForm(ruleFormRef)" style="margin-left: 80px">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      userForm: {
        email: '',
        password: '',
      },
      rules: {
        email: [
          { required: true, message: '请输入正确的电子邮箱', trigger: 'blur' },
          { type: 'email', message: '电子邮箱格式错误', trigger: 'blur' },
        ],
        password: [
          { required: true, message: '请输入正确的用户密码(8-16)', trigger: 'blur' },
          { min: 8, message: '输入字符不宜少于8个', trigger: 'blur' },
          { max: 16, message: '输入字符不宜多于16个', trigger: 'blur' },
        ]
      }
    }
  },
    methods: {
        btnLogin() {
            const that = this
            that.$router.push('/showindex')
        },
}
});
</script>
<style scoped>
.demo-image__lazy {
  height: 600px;
  overflow-y: auto;
}
.demo-image__lazy .el-image {
  display: block;
  min-height: 200px;
  margin-bottom: 10px;
}
.demo-image__lazy .el-image:last-child {
  margin-bottom: 0;
}

</style>
