<template>
  <div class="main-container">
    <md-layout md-gutter>
    <md-layout md-column md-gutter>
      <md-card md-with-hover>
        <form novalidate @submit.stop.prevent="open">
          <md-card-header>
            <div class="md-title"><md-icon>search</md-icon> Search Claims</div>
          </md-card-header>
          <md-card-content>
            <md-input-container>
              <label>Claim Id</label>
              <md-input type="text"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Original Insured</label>
              <md-input type="text"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Object</label>
              <md-input type="text"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Claim Handler</label>
              <md-input type="text"></md-input>
            </md-input-container>
            <md-input-container>
              <label>Status</label>
              <md-input type="text"></md-input>
            </md-input-container>
          </md-card-content>
          <md-card-actions>
            <md-button type="submit" class="md-raised md-primary">
              <md-icon>search</md-icon> SEARCH CLAIMS
            </md-button>
          </md-card-actions>
          </form>
        </md-card>
      <md-layout>
        <md-card class="card-example">
          <md-card-area md-inset>
            <md-card-header>
              <h2 class="md-title">Coffee House</h2>
              <div class="md-subhead">
                <md-icon>location_on</md-icon>
                <span>2 miles</span>
              </div>
            </md-card-header>

            <md-card-content>
              Illy Coffee served with a complimentary Leonidas Belgian Chocolate with all beverages.
            </md-card-content>
          </md-card-area>

          <md-card-content>
            <h3 class="md-subheading">Today's activities</h3>
            <div class="card-reservation">
              <md-icon>access_time</md-icon>
              <md-button-toggle md-single class="md-button-group">
                <md-button>5:30PM</md-button>
                <md-button>7:30PM</md-button>
                <md-button>9:00PM</md-button>
              </md-button-toggle>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button class="md-raised md-accent" id="fab" @click="openDialog('dialog2')"><md-icon>add</md-icon> Create activity</md-button>
          </md-card-actions>
        </md-card>
      </md-layout>
    </md-layout>

    <md-layout md-column md-gutter>
      <md-layout>
        <md-table-card>
          <md-toolbar>
            <h1 class="md-title"><md-icon>library_books</md-icon> Recent Claims</h1>
            <md-button class="md-icon-button">
              <md-icon>loop</md-icon>
            </md-button>
          </md-toolbar>

          <md-table md-sort="originalInsured" md-sort-type="desc">
            <md-table-header>
              <md-table-row>
                <md-table-head md-sort-by="originalInsured">ORIGINAL INSURED</md-table-head>
                <md-table-head>STATUS</md-table-head>
              </md-table-row>
            </md-table-header>
            <md-table-body>
              <md-table-row v-for="(row, rowIndex) in nutrition" :key="rowIndex" :md-item="row" md-auto-select md-selection>
                <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex" :md-numeric="columnIndex !== 'originalInsured' && columnIndex !== 'originalInsured'" v-if="columnIndex !== 'type'">
                  <span v-if="columnIndex !== 'status'">{{ column }}</span>
                  <md-button class="md-icon-button" v-if="columnIndex === 'status'">
                    <md-icon>edit</md-icon>
                  </md-button>
                </md-table-cell>
              </md-table-row>
            </md-table-body>
          </md-table>

          <md-table-pagination
            md-size="5"
            md-total="10"
            md-page="1"
            md-label="Rows"
            md-separator="of"
            :md-page-options="[5, 10, 25, 50]"></md-table-pagination>
        </md-table-card>
      </md-layout>
      <md-layout></md-layout>
    </md-layout>
  </md-layout>
  <md-snackbar :md-position="snackbarConfig.vertical + ' ' + snackbarConfig.horizontal" ref="snackbar" :md-duration="snackbarConfig.duration">
    <span>Connection timeout. Showing limited messages.</span>
    <md-button class="md-accent" md-theme="light-blue" @click="$refs.snackbar.close()">Retry</md-button>
  </md-snackbar>
  <md-dialog md-open-from="#fab" md-close-to="#fab" ref="dialog2">
    <md-dialog-title>Create new note</md-dialog-title>

    <md-dialog-content>
      <form>
        <md-input-container>
          <label>Note</label>
          <md-textarea></md-textarea>
        </md-input-container>
      </form>
    </md-dialog-content>

    <md-dialog-actions>
      <md-button class="md-raised md-primary" @click="closeDialog('dialog2')">Create</md-button>
    </md-dialog-actions>
  </md-dialog>
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
