<template>
  <section>
   <carousel :items=3  >
    <img style="width:400px;height:400px;border-radius:7px;" src="@/assets/img/yacht/1.jpg">
    <img style="width:400px;height:400px;border-radius:7px;" src="@/assets/img/yacht/2.jpg">
    <img style="width:400px;height:400px;border-radius:7px;" src="@/assets/img/yacht/3.jpg">
    <img style="width:400px;height:400px;border-radius:7px;" src="@/assets/img/yacht/4.jpg">
    <img style="width:400px;height:400px;border-radius:7px;" src="@/assets/img/yacht/5.jpg">
    <img style="width:400px;height:400px;border-radius:7px; " src="@/assets/img/yacht/6.jpg">

</carousel>
<div class = "details">
    <h1 class="title  is-1">Yacht Name</h1>
    <p class="white">Name: yacht.name </p>
    <p class="white">Owner: yacht.owner.userFirstName </p>
    <p class="white">Owner: yacht.owner.userFirstName </p>
    <p class="white">Price: yacht.pricePerNight </p>
    <p class="white">Type: Lauxery </p>
    <p class="white">Number of people : yacht.maxPeopleOnBoard </p>
</div>
<h1 class="title  is-1">Availability</h1>
     <datepicker :format="customFormatter" name="uniquename" placeholder="Select Date">
       <p>here is the date picked </p>
     </datepicker>

<br>
<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
   a molestias! Ea tempore corporis voluptas, perferendis molestias ut!
    Nam neque doloribus possimus dicta repellat architecto excepturi,
     libero rerum vero minus.
     </p>
     <br>
     <br>
     <br>
  </section>
  
</template>

<script>
import Swal from "sweetalert2";
import carousel from 'vue-owl-carousel';
import Datepicker from 'vuejs-datepicker'
const moment = require('moment')

export default {
  name:"yacht-details",
  data() {
    return {
      // state : {
      //   date: new Date(2016, 9,  16)},

      id: "",
        date:'',
      yacht: {
        name: "",
        pricePerNight: "",
        description: "",
        type: "",
        maxPeopleOnBoard: '',
        facilities: "",
        owner: {
          userFirstName: ""
        },
        location: {
          country: "",
          city: ""
        },
        imgs: {
          imgUrl: ""
        }
      },
    // events: [
    //   new Date(2017, thisMonth, 2),
    //                 new Date(2017, thisMonth, 6),
    //                 {
    //                   date: new Date(2019, thisMonth, 7),
    //                     type: 'is-info'
    //                 }
    // ]
    };
    
  },
  // async created() {
  //   this.id = this.$route.params.id;
  //   if (this.id) {
  //     try {
  //       var yacht = await this.$store.dispatch({ type: "getYachtById", yachtId: this.id})
  //       this.yacht._id = yacht._id;
  //       this.yacht = JSON.parse(JSON.stringify(yacht));
  //     } catch {
  //       console.log("AdminEdit Could not find yacht");
  //     }
  //   }
  // },
  
  methods: {
    // backToAdminPage() {
    //   this.$router.push('/admin')
    // },
    customFormatter(date) {
      return moment(date).format('MM DD YYYY');
    }
  },
  computed:{

  },
  components: { carousel,
  Datepicker }
};
</script>
<style>
.details{
  background-color: whitesmoke;
  height: 500px;
  width:100%;
}
.white{
  background-color: white;
  font-size:2rem;
}
</style>

