<template>
<div class="login">
  <div class="form-wrapper">
    <div class="header">
      login
    </div>
    <div class="input-wrapper">
      <div class="border-wrapper">
        <input type="text" name="username" placeholder="username" class="border-item">
      </div>
      <div class="border-wrapper">
        <input type="password" name="password" placeholder="password" class="border-item">
      </div>
    </div>
    <div class="action">
      <div @click="check" class="btn">login</div>
    </div>

  </div>
</div>

</template>

<script>
export default {
name: "Login",
  data(){
    return{

    }
  },
  methods:{
    check(){
      this.$router.push({ path: "/home" });
    }
  }
}
</script>

<style scoped>
.login {
  height: 100%;
  font-family: 'JetBrains Mono Medium';
  display: flex;
  align-items: center;

  background-image: url("../assets/img/loginBG.png");
  background-repeat:no-repeat;
  background-size:100% 100%;
  -moz-background-size:100% 100%;
}

.form-wrapper {
  width: 300px;
margin-left: 1100px;
  background-color: rgba(41, 45, 62,.8);
  border-radius: 10px;
  color: #fff;

  padding: 50px;
}

.form-wrapper .header {
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  line-height: 100px;
}

.form-wrapper .input-wrapper input {
  background-color: rgb(41, 45, 62);
  border: 0;
  width: 100%;
  text-align: center;
  font-size: 15px;
  color: #fff;
  outline: none;
}
.form-wrapper .input-wrapper input::placeholder {
  text-transform: uppercase;
}

.form-wrapper .input-wrapper .border-wrapper {
  background-image: linear-gradient(to right,#16dcb8,#0eb4dd);
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form-wrapper .input-wrapper .border-wrapper .border-item {
  height: calc(100% - 4px);
  width: calc(100% - 4px);
  border-radius: 30px;
}
.form-wrapper .action {
  display: flex;
  justify-content: center;
}
.form-wrapper .action .btn {
  width: 60%;
  text-transform: uppercase;
  border: 2px solid #0e92b3;
  text-align: center;
  line-height: 50px;
  border-radius: 30px;
  cursor: pointer;
  transition: .2s;
}

.form-wrapper .action .btn:hover{
  background-color: #0e92b3;
}





</style>