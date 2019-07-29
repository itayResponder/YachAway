<template>
  <section class=" is-2 is-hidden-mobile">
    <nav class="panel">
        <h3 class="title is-3">Filter By</h3>


      <!-- <div class="panel-heading">
        <div class="field">
          <b-switch v-model="showStars">Pros Only</b-switch>
          <br /><small>verified owners and professionals skippers.</small>
        </div>
      </div> -->

      <!-- FILTERS -->

      <label class="panel-block"> 
        <p class="control">
          <select
            class="input is-fullwidth is-medium"
            v-model="filterBy.minPeople"
            @change="emitFilter"
          >
            <option value disabled selected>
                  How Many Guests              
              </option>
            <option value="10">Adults 1-10</option>
            <option value="16">Adults 10-15</option>
            <option value="20">Adults 15-20</option>
            <option value="25">Adults 20-25</option>
            <option value="30">Adults 25-30</option>
          </select>
        </p>
      </label>

      <!-- sort by -->
      <label class="panel-block">
        <p class="control">
          <select class="input is-fullwidth is-medium" v-model="filterBy.sort" @change="emitFilter">
            <option value>Sort By</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </p>
      </label>

      <!-- SEARCH BY TEXT -->
      <label class="panel-block">
        <p class="control">
          <input
            class="input is-fullwidth is-medium"
            placeholder="Insert city/country"
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
      <!-- <b-tabs v-model="activeTab" class="b-tabs" > -->
        <div v-show="showStars">
          <h4 class="subtitle">Stars</h4>
          <label class="panel-block">
            <b-checkbox native-value="4" type="is-primary" @input="emitFilter">4 +</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox native-value="5" type="is-primary" @input="emitFilter">5</b-checkbox>
          </label>
        </div>
        <br />
        <!-- ####################### -->
        <!-- room faclities -->
        <!-- <b-tab-item  label="room faclities"> -->
          <h4 class="subtitle">Room Faclities</h4>
        <!-- <hr /> -->
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="wifi"
              type="is-primary"
              @input="emitFilter"
            >Wifi</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="TV"
              type="is-primary"
              @input="emitFilter"
            >Tv</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="towels"
              type="is-primary"
              @input="emitFilter"
            >Towels</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="safe"
              type="is-primary"
              @input="emitFilter"
            >Safe</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="AC"
              type="is-primary"
              @input="emitFilter"
            >AC</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="kitchen"
              type="is-primary"
              @input="emitFilter"
            >Kitchen</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="fridge"
              type="is-primary"
              @input="emitFilter"
            >Fridge</b-checkbox>
          </label>
        <!-- </b-tab-item> -->

        <br />
        <!-- ####################### -->
        <!-- yacht faclities -->
          <h4 class="subtitle">Yacht Faclities</h4>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="golf court"
              type="is-primary"
              @input="emitFilter"
            >
              <b-tooltip type="is-success" label="for extra price">Golf Court</b-tooltip>
            </b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="pool"
              type="is-primary"
              @input="emitFilter"
            >Pool</b-checkbox>
          </label>
          <label class="panel-block">
            <b-checkbox
              v-model="filterBy.facilities"
              native-value="snorkel"
              type="is-primary"
              @input="emitFilter"
            >Snorkel</b-checkbox>
          </label>

                  
         <!-- <b-tab-item label="yacht faclities"> -->
        <!-- </b-tab-item> -->
      <!-- </b-tabs> -->
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
        txt: this.$route.params.city,
        facilities: [],
        sort: "",
        owner: null
      }
    };
  },
  created() {
    this.$emit("set-filter",this.filterBy)
  },
  methods: {
    emitFilter() {
      var filter = { ...this.filterBy };
      this.$emit("set-filter", filter);
    }
  },
  mounted() {
    // HIDE SCROLL OF TABS:
    // const elTabs = document.querySelector('.tabs')
    // elTabs.style.overflow = "hidden"
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
