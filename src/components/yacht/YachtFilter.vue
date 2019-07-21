<template>
  <section class="yacht-list-preview-margin">
    <nav class="panel">
      <div class="panel-heading">
        <div class="field">
          <b-switch v-model="showStars">Pro Only</b-switch>
          <br /><small>verified owners and professionals skippers.</small>
        </div>
      </div>
      <!-- FILTERS -->

      <label class="panel-block">
        <p class="control has-icons-left">
          <select
            class="input is-medium is-fullwidth"
            v-model="filterBy.minPeople"
            @change="emitFilter"
          >
            <option value disabled selected>How Many Adults</option>
            <option value="1">1-10</option>
            <option value="11">11-20</option>
            <option value="21">21-30</option>
          </select>
        </p>
      </label>

      <!-- sort by -->
      <label class="panel-block">
        <p class="control has-icons-left">
          <select class="input is-small is-fullwidth" v-model="filterBy.sort" @change="emitFilter">
            <option value>Sort By</option>
            <option value="price">Sort By Price</option>
            <!-- <option value="name">Name</option> -->
          </select>
        </p>
      </label>

      <!-- SEARCH BY TEXT -->
      <label class="panel-block">
        <p class="control has-icons-left">
          <input
            class="input is-small is-fullwidth"
            placeholder="search by name"
            type="text"
            v-model="filterBy.txt"
            @input="emitFilter"
          />
          <span class="icon is-small is-left">
            <i class="fas fa-search" aria-hidden="true"></i>
          </span>
        </p>
      </label>

      <!-- TABS -->
      <b-tabs v-model="activeTab" >
        <hr />
        <h3 class="title is-3">Filter By</h3>
        <div v-show="showStars">
          <h4 class="subtitle">Stars</h4>
          <label class="panel-block">
            <b-checkbox native-value="4" type="is-info" @input="emitFilter">4</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox native-value="5" type="is-info" @input="emitFilter">5</b-checkbox>
          </label>
        </div>
        <br />
        <!-- ####################### -->
        <!-- room faclities -->
        <b-tab-item label="room faclities">
          <h4 class="subtitle">room faclities</h4>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="wifi"
              type="is-info"
              @input="emitFilter"
            >Wifi</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="tv"
              type="is-info"
              @input="emitFilter"
            >Tv</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="towels"
              type="is-info"
              @input="emitFilter"
            >Towels</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="safe"
              type="is-info"
              @input="emitFilter"
            >Safe</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="AC"
              type="is-info"
              @input="emitFilter"
            >AC</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="kitchen"
              type="is-info"
              @input="emitFilter"
            >Kitchen</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="fridge"
              type="is-info"
              @input="emitFilter"
            >Fridge</b-checkbox>
          </label>
        </b-tab-item>

        <br />
        <!-- ####################### -->
        <!-- yacht faclities -->
        <b-tab-item label="yacht faclities">
          <h4 class="subtitle">yacht faclities</h4>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="golf court"
              type="is-info"
              @input="emitFilter"
            >
              <b-tooltip type="is-success" label="for extra price">Golf Court</b-tooltip>
            </b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="pool"
              type="is-info"
              @input="emitFilter"
            >Pool</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="shnorkel"
              type="is-info"
              @input="emitFilter"
            >Shnorkel</b-checkbox>
          </label>

          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="nothing"
              type="is-info"
              @input="emitFilter"
            >nothing</b-checkbox>
          </label>
        </b-tab-item>
      </b-tabs>
    </nav>
  </section>
</template>

<script>
export default {
  name: "yacht-filter",

  data() {
    return {
      activeTab: 0,
      showStars: false,
      filterBy: {
        minPeople: "",
        txt: "",
        facilities: [],
        sort: ""
      }
    };
  },
  created() {},
  methods: {
    emitFilter() {
      var filter = { ...this.filterBy };
      this.$emit("set-filter", filter);
    }
  },

  computed: {},
  components: {}
};
</script>
<style scoped>
.facilities {
  display: flex;
}
</style>
