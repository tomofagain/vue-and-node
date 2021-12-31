<template>
  <div class="contain animate__animated animate__pulse">
    <p>admin</p>
    <el-form
      ref="ruleFormRef"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="0"
      class="loginForm"
    >
      <el-form-item label="" prop="username">
        <el-input
          size="small"
          v-model="ruleForm.username"
          autocomplete="off"
          placeholder="account"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="password">
        <el-input
          size="small"
          v-model="ruleForm.password"
          type="password"
          autocomplete="off"
          placeholder="password"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="code">
        <el-input
          size="small"
          placeholder="verification code"
          v-model.number="ruleForm.code"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          size="small"
          class="submit"
          type="primary"
          @click="submitForm(ruleFormRef)"
          >LOGIN</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import { resetForm, submitForm } from "@/utils/reset-and-submit";
import type { ElForm } from "element-plus";

const ruleFormRef = ref<InstanceType<typeof ElForm>>();
const checkAge = (rule: any, value: any, callback: any) => {
  if (!value) {
    return callback(new Error("请输入验证码"));
  } else {
    callback();
  }
};

const validateUser = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入用户名"));
  } else {
    callback();
  }
};
const validatePass = (rule: any, value: any, callback: any) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    callback();
  }
};

const ruleForm = reactive({
  password: "",
  username: "",
  code: "",
});

const rules = reactive({
  username: [{ validator: validateUser, trigger: "blur" }],
  password: [{ validator: validatePass, trigger: "blur" }],
  code: [{ validator: checkAge, trigger: "blur" }],
});
</script>
<style scoped lang="scss">
@import "../css/panel.scss";
</style>
