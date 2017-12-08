<template>
  <transition name="md-router" appear>
    <router-view></router-view>
  </transition>
</template>
<style lang="scss">
  @import 'stylesheets/variables.scss';
  body {
    margin: 0;
    padding: 0;
    background-color: rgba(0,0,0,.5);
  }
  body:before {
    background: url('/static/img/background.jpeg') no-repeat center center fixed;
    background-size: cover;
    content: "";
    display: block;
    height: 100%;
    opacity: .6;
    position: absolute;
    width: 100%;
    filter: url("data:image/svg+xml,%3C%3Fxml%20version%3D%221.0%22%20encoding%3D%22UTF-8%22%3F%3E%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20version%3D%221.1%22%3E%3Cdefs%3E%3Cfilter%20id%3D%22blur%22%3E%3CfeGaussianBlur%20stdDeviation%3D%2215%22%2F%3E%3CfeComponentTransfer%3E%3CfeFuncR%20type%3D%22linear%22%20slope%3D%220.3%22%2F%3E%3CfeFuncG%20type%3D%22linear%22%20slope%3D%220.3%22%2F%3E%3CfeFuncB%20type%3D%22linear%22%20slope%3D%220.3%22%2F%3E%3C%2FfeComponentTransfer%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E#blur");
    -webkit-filter: blur(5px) brightness(.7);
    z-index: -1;
  }
</style>
<script>
  import Vue from 'vue'
  
  export default {
    name: 'users',
    created() {
      this.$store.dispatch("fetchUser").then(() => {
        console.log("store--->",this.$store.state.users)       
       })
    },
    data () {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
      }
    },
    computed: {
      //  filterUsers() {
      //   console.log("Users form store--->",this.$store.state.users)       
      //   console.log("Users  form user--->",this.$user.state.users)       
      // }
    },
    methods: {
     filterUsers () {
        console.log("Users form store--->",this.$store.state.users)
      }
    },
    mounted () {
    }
  }

</script>