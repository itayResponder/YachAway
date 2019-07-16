<template>
	<section>
	<!-- Yacht Details -->
	  <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="yacht.imgs[0]" alt="Placeholder image" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">Name: {{yacht.name}}</p>
            <p class="subtitle is-6">Facilities: {{yacht.facilities}}</p>
          </div>
        </div>

        <div class="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Phasellus nec iaculis mauris.
          <a>@bulmaio</a>.
          <a href="#">#css</a>
          <a href="#">#responsive</a>
          <br />
          <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
        </div>
        <div class="buttons">
          <b-button type="is-info">Details</b-button>
          <b-button type="is-success">Edit</b-button>
          <b-button type="is-danger">Delete</b-button>
        </div>
      </div>
    </div>



	<!-- Booking Example -->
	<div class="content">
		<a target="_blank" href="https://demo07.gethomey.io/listing/large-and-modern-bedroom/">

			<img src="@/assets/img/temp/details-yacht-pics.jpg" />
		</a>
		<a target="_blank" href="https://demo03.gethomey.io/listing/large-and-modern-bedroom/">
			<img src="@/assets/img/temp/details-top-bnb.jpg" />
		</a>

		<img v-show="toggleDesc" @click="toggleDesc=!toggleDesc" src="@/assets/img/temp/details-descreption-bnb.jpg" />
		<img v-show="!toggleDesc" @click="toggleDesc=!toggleDesc" src="@/assets/img/temp/details-descreption.jpg" />

		<img v-show="toggleFacility" @click="toggleFacility=!toggleFacility" src="@/assets/img/temp/details-popular-facility-bnb.jpg" />
		<img v-show="!toggleFacility" @click="toggleFacility=!toggleFacility" src="@/assets/img/temp/details-popular-facility.jpg" />
		<datePicker />
		<showFreeDates />

		<previewReview />
		<img src="@/assets/img/temp/details-reviews.jpg" />
	</div>
</section>
</template>

<script>
import datePicker from "@/components/general/DatePicker";
import showFreeDates from "@/components/general/CalendarShow";
import previewReview from "@/components/yacht/PreviewReview";
export default {
	data() {
		return {
			//FOR DEMONSTARATION PERPUSES
			toggleDesc: true,
			toggleFacility: true,
			yacht: {}
		};
	},
	async created() {
		const yachtId = this.$route.params.id
		try{
			this.yacht = await this.$store.dispatch({type: 'loadYacht', yachtId})
			console.log('front yachtDetail: yacht:',this.yacht)
		} catch (err){
			console.log("Couldnt get yacht err:", err)
		}
	},
	methods: {
		goBack() {
			this.$router.push("/yachts")
		}
	},
	components: {
		datePicker,
		showFreeDates,
		previewReview
	}
};
</script>

<style>
</style>
