<template>
  <div class="terminal" @click="focus()">
    <div class="result">
      <span>type your command...</span>
      <p>type: <strong>help</strong> to find out more about the function</p>
      <div class="view" v-html="view"></div>
    </div>
    <div class="command">
      <input autofocus type="text" ref="command" v-model="textCommand" @keyup.enter="command()">
    </div>
    <div class="help" ref="help">
      <p><strong>help</strong>:to find out more about the function.</p>
      <p><strong>back</strong> or <strong>exit</strong>:to back to home page.</p>
      <p><strong>about</strong>:to find out my <b>profile</b>.</p>
      <p><strong>skills</strong>:to find out my <b>skills</b>.</p>
      <p><strong>clean</strong>:clean screen.</p>
    </div>
    <div class="help" ref="about">
      My name is: Nguyen Ngoc Tuan Anh
    </div>
    <div class="help" ref="skills">
      Nodejs, HTML & CSS
    </div>
  </div>
</template>
<style scoped>
  .help {
    display: none;
  }
  .terminal {
    height: 100vh;
    width: 100vw;
    background: black;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
  .result {
    flex: 1;
    color: #ccc
  }
  .result strong {
    color: white;
  }
  .command {
    height: 50px;
  }
  .command input{
    display: fixed;
    width: 100vw;
    line-height: 30px;
    background: black;
    border: none;
    color: white;
    cursor: red;
    outline: none;
    padding: 10px;
  }
</style>

<script>
export default {
  name: 'terminal',
  view: '',
  data: () => ({
    textCommand: "",
    view: '',
  }),
  methods: {
    command() {
      var command = this.textCommand.toLowerCase();
      this.textCommand = '';
      switch(command){
        case 'back':
        case 'exit':
          this.$router.push('/') 
          break;
        case 'help':
          this.view += this.$refs.help.innerHTML;
          break;
        case 'about':
          this.view += this.$refs.about.innerHTML;
          break;
        case 'skills':
          this.view += this.$refs.skills.innerHTML;
          break;
        case 'clean':
          this.view = "";
          break;
        default:
          this.view += "";
          break;
      }
    },
    focus() {
      this.$refs.command.focus();
    }
  }
}
</script>
