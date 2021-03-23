<template>
  <div id="page_login">
      <div class="login-box">
        <a-card >

          <h2>Login</h2>
          <p>Tips: 
        <ul>
          <li>run `npm run json-server`  to set up the mock server first</li>
          <li>username: admin,password: admin</li>
        </ul>
      </p>

          <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
    <a-form-item>
      <a-input
        v-decorator="[
          'username',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="Username"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="Password"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      
     
      <a-button type="primary" html-type="submit" class="login-form-button">
        {{$t("message.login")}}
      </a-button>
     
    </a-form-item>
  </a-form>
         
     
        
        </a-card>
       
     
      </div>
     
  </div>
</template>

<script>
import { mapActions } from "vuex";
import "./Login.scss";
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },

  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "normal_login" });
  },

  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.login(values)
            .then(() => {
              this.$message.success("login successfully");
              this.$router.push("/");
            })
            .catch((error) =>this.$message.error(error));
        }
      });
    },
    ...mapActions(["login"])
  
  },
};
</script>



