<template>
  <div class="container">
    <div class="main-container">
      <header>
        <h1>Nguyen Ngoc Tuan Anh</h1>  
        <span>Dau Den / BlackBean</span>
      </header>
      <article>
        <div class="photos">
          <div class="photo">
            <img src="/static/img/me.jpg">
            <img src="/static/img/me2.jpg">
          </div>
          <div class="photo">
            <img src="/static/img/me1.jpg">
          </div>
        </div>
        <div class="more">
          <div class="md-display-3 line">Full Stack Engineer</div>
          <md-button class="md-raised md-primary" @click="goToProfile()">Profile</md-button>
          <md-button class="md-raised md-primary" @click="goToTerminal()">Terminal</md-button>
        </div>
      </article>
    </div>
  </div>
</template>
<style scoped>
  .container{
    padding-top: 50px;
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: auto auto;
  }
  .main-container{
    margin: 60px 15% 0 10%;
    color: #fff;
  }
  header{
    border-bottom: 1px solid #ccc;
  }
  header h1{
    margin-bottom: 7px;
    text-transform: uppercase;
  }
  header span{
    font-weight: 600;
    font-style: oblique;
    color: #2196f3 !important;
  }
  article {
    display: flex;
  }
  article .photos{
    display: flex;
    flex-direction: row;
    border: 2px solid #fff;
    border-spacing: 2px;
    padding: 2px;
    margin-top: 30px;
    background-color: #2196f3;
  }
  article .photo {
    flex-direction: column;
    display: flex;
  }
  article .photo img {
    width: 220px;
    height: 150px;
    border: 2px solid #ccc;
    border-spacing: 10px;
    border-radius: 5px;
    margin: 1px;
  }
  article .photo:last-child img {
    height: 300px;
  }
  article .more {
    padding-top: 50px;
    flex: 1;
    text-align: center;
  }
  article .more .line {
    position: relative;
    margin-bottom: 50px;
  }
  article .more .line:before {
    content: "";
    width: 100px;
    height: 1px;
    border: 1px solid red;
    position: absolute;
    top: 50%;
    left: 100px;
  }
  article .more .line:after {
    content: "";
    width: 100px;
    height: 1px;
    border: 1px solid red;
    position: absolute;
    top: 50%;
    right: 100px;
  }
</style>

<script>
export default {
  methods: {
    goToProfile() {
      this.$router.push('profile') 
    },
    goToTerminal() {
      this.$router.push('terminal') 
    }
  }
}
</script>
