<template>
  <section>
    <input type="text" v-model="filterBy.txt" @input="emitFilter" />
	<br>
   <select v-model="filterBy.minPeople" @change="emitFilter">
            <option value="">By people</option>
            <option value="1">1-10</option>
            <option value="11">11-20</option>
            <option value="21">21-30</option>
          
       </select>
	<h1 class="title">faclities</h1>
	<b-checkbox v-model="filterBy.facilities" native-value="wifi" type="is-info"  @input="emitFilter" >Wifi</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="tv" type="is-info"  @input="emitFilter">Tv</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="towels" type="is-info" @input="emitFilter">Towels</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="safe" type="is-info" @input="emitFilter">Safe</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="AC" type="is-info" @input="emitFilter">AC</b-checkbox>
        <br />
        <b-checkbox v-model="filterBy.facilities" native-value="golf court" type="is-info" @input="emitFilter">Golf Court</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="pool" type="is-info" @input="emitFilter">Pool</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="shnorkel" type="is-info" @input="emitFilter">Shnorkel</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="kitchen" type="is-info" @input="emitFilter">Kitchen</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="fridge" type="is-info" @input="emitFilter">Fridge</b-checkbox>
        <b-checkbox v-model="filterBy.facilities" native-value="nothing" type="is-info" @input="emitFilter">nothing</b-checkbox>
	
	<p>{{filterBy.facilities}}</p>

   <select v-model="filterBy.sort" @change="emitFilter">
            <option value="">Sort By</option>
            <option value="name">Name</option>
            <option value="price">Price</option>
          
       </select>
    <!-- <select v-model="filterBy.type" @change="emitFilter">
      <option value>by type</option>
      <option value="Adult">Adult</option>
      <option value="Funny">Funny</option>
      <option value="Educational">Educational</option>
    </select> -->
    <p class="title">Filter Side column</p>
    <p class="subtitle">With filter content</p>
    <div class="content">
      <img src="@/assets/img/temp/filter-top.jpg" />
			<img src="@/assets/img/temp/filer-checkbox-1.jpg" />
      <img src="@/assets/img/temp/filer-checkbox-2.jpg" />
    </div>
  </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: "yacht-filter",

  data() {
    return {
      filterBy: {
    minPeople:'',
		txt:'',
    facilities:[],
    sort:''
   
      }
    };
  },
  created() {},
  methods: {
   emitFilter() {
	   var filter = {...this.filterBy}
	//    console.log('filter is = ',filter)
            this.$emit('set-filter', filter);
        }
  },

  computed: {},
  components: {}
};
</script>
