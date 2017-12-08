<template>
  <div class="container">
    <div class="">
      <md-toolbar>
        <div class="md-toolbar-container">
          <md-button class="md-icon-button">
            <md-icon>menu</md-icon>
          </md-button>
          <span style="flex: 1"></span>
          <md-button class="md-icon-button"  @click="$refs.rightSidenav.toggle()">
            <md-icon>view_module</md-icon>
          </md-button>
        </div>
      </md-toolbar>
      <div class="main-content">
        <md-layout class="left-menu">
          <md-menu md-size="4">
            <md-list class="md-transparent">
              <md-list-item md-menu-trigger>
                <div class="md-list-text-container">
                  <span>Paris</span>
                  <span>Claim Handling</span>
                </div>
                <md-button class="md-icon-button">
                  <md-icon>arrow_drop_down</md-icon>
                </md-button>
              </md-list-item>
            </md-list>
            <md-menu-content>
              <md-menu-item>Claim Handling</md-menu-item>
              <md-menu-item>Offer</md-menu-item>
              <md-menu-item>Management</md-menu-item>
            </md-menu-content>
          </md-menu>
          <div class="main-sidebar-links">
            <md-list class="md-dense">
              <md-list-item>
                <router-link exact to="/"><md-icon md-icon-morph>dashboard</md-icon> Dashboard</router-link>
              </md-list-item>

              <md-list-item>
                <router-link exact to="/claims"><md-icon md-icon-morph>edit</md-icon> Claims</router-link>
              </md-list-item>
            </md-list>
          </div>
        </md-layout>
        <md-layout md-gutter>
          <md-layout md-column md-gutter class="main-container">
            <transition name="md-router" appear>
              <router-view></router-view>
            </transition>
          </md-layout>
          <md-layout md-column md-gutter md-flex="20">
            right
          </md-layout>
        </md-layout>
      </div>
      <md-sidenav class="md-right" ref="rightSidenav">
        <md-sidenav class="md-right" ref="rightSidenav">
          <md-toolbar class="md-account-header">
            <md-list class="md-transparent">
              <md-list-item class="md-avatar-list">
                <md-avatar class="md-large">
                  <img src="https://placeimg.com/64/64/people/8" alt="People">
                </md-avatar>
                <div class="md-list-text-container">
                  <br/>
                  <span>Dau Den</span>
                  <span>anh.nguyen@noria.no</span>
                </div>
              </md-list-item>
            </md-list>
          </md-toolbar>
          <md-list>
            <md-list-item @click="filterUsers()">
              <md-icon>person</md-icon><span>My profile</span>
            </md-list-item>
            <md-list-item>
              <md-icon>apps</md-icon><span>Themes  Color</span>
              <div class="md-list-text-container">
                <md-icon class="md-primary">border_clear</md-icon>
                <md-icon class="md-warn">border_clear</md-icon>
                <md-icon class="md-accent">border_clear</md-icon>
              </div>
            </md-list-item>
            <md-list-item>
              <md-icon>exit_to_app</md-icon><span>Logout</span>
            </md-list-item>
          </md-list>
        </md-sidenav>
      </md-sidenav>
    </div>
  </div>
</template>

<style lang="scss">
  @import 'stylesheets/variables.scss';

  $sizebar-size: 240px;

  html,
  body {
    height: 100%;
    overflow: hidden;
  }

  body {
    display: flex;
  }

  .container {
    min-height: 100%;
    display: flex;
    flex-flow: column nowrap;
    flex: 1;
    transition: $swift-ease-out;
    @media (min-width: 1281px) {
      padding-left: $sizebar-size;
    }
  }
  .left-menu {
    position: fixed;
    top: -64px;
    left: -240px;
    width: 240px;
    height: 100vh;
    display: inline-block;
    background-color: #ccc;
    .md-menu {
      width: 100%;
      height: 64px;  
    }
    .main-sidebar-links {
      width: 100%;
      .md-list-item a.router-link-active {
        background-color: #e53935;
        color: #ffffff !important;
        i {
          color: #ffffff !important;
        }
      }
    }
  }

  .main-content {
    padding: 16px;
    flex: 1;
    background-color: #fff;
    transform: translate3D(0, 0, 0);
    transition: $swift-ease-out;
    transition-delay: .2s;
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