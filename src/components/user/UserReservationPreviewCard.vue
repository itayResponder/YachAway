<template>
<section>    
<div class="card-image">
                <figure class="image is-1by4">
                  <p class="title is-4">{{reservation.yacht.name}}</p>
                  <img
                    :src="reservation.yacht.img"
                    style="max-width:50vw; max-height:300px; object-fit: contain;"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image is-128x128">
                      <img :src="reservation.yacht.owner.img" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-4">Owner name: {{reservation.yacht.owner.name}}</p>
                    <a class="subtitle is-6">Owner email: {{reservation.yacht.owner.email}}</a>
                    <p>From: {{reservation.fromDate}}</p>
                    <p>To: {{reservation.toDate}}</p>
                    <p>Number Of Guests: {{reservation.numOfGuest}}</p>
                    <p>Price Per Night: {{reservation.yacht.pricePerNight}}$</p>
                  </div>
                </div>

                <div class="content">
                  <br />
                  <span>
                    <b>Created: {{+reservation.createdAt | moment("dddd, MMMM Do YYYY")}}  </b>
                    <b>Before: {{+reservation.createdAt | moment("from","now")}}</b>
                  </span>
                </div>
              </div>
</section>    
</template>

<script>
export default {
props:['reservation']
}
</script>

<style>

</style>
