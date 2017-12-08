<template>
  <div class="container">
    <div class="">
      <md-toolbar>
        <div class="md-toolbar-container">
          <span style="flex: 1"></span>
          <md-button class="md-icon-button"  @click="$refs.rightSidenav.toggle()">
            <md-icon>home</md-icon>
          </md-button>
        </div>
      </md-toolbar>
      <div class="main-content">
        <md-layout md-gutter>
          <md-layout md-column md-gutter md-flex="20">
            <img src="/static/img/laptop.jpg">
            <img src="/static/img/phone.jpg">
            <aside class="description">
              <h1>Code for Life</h1>
              <hr style="background-color:red; height: 1px">
              don’t think money is everything.
            </aside>
          </md-layout>
          <md-layout md-column md-gutter class="main-container">
            <transition name="md-router" appear>
              <router-view></router-view>
            </transition>
          </md-layout>
          <md-layout md-column md-gutter md-flex="20">
            <img src="/static/img/camera.jpg">
            <img src="/static/img/drone.jpg">
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
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.main-container {
  min-height: calc(100vh - 100px);
}
.md-card {
  margin: 10px;
}
</style>

<script>
import auth from '../auth'
export default {
  data: () => ({
    nutrition: null,
    snackbarConfig: {
      vertical: 'top',
      horizontal: 'center',
      duration: 4000
    }
  }),
  created() {
    this.nutrition = this.$store.state.users.users;
  },
  methods: {
    open() {
      console.log(111);
      this.$refs.snackbar.open();
    },
    openDialog(ref) {
      this.$refs[ref].open();
    },
    closeDialog(ref) {
      this.$refs[ref].close();
    },
    onOpen() {
      console.log('Opened');
    },
    onClose(type) {
      console.log('Closed', type);
    }
  }
}
</script>
