<template>
  <main class="my-yachts">
    <!-- <div class="tabs is-nav is-taller scroll-h has-side-space"> -->

    <!-- <div class="b-tabs"> -->

    <!--TABS-->
    <nav class="tabs is-medium is-taller has-side-space">
      <ul>
        <li>
          <router-link to="./manage" class>manage</router-link>
        </li>
        <li>
          <router-link to="./hosting">hosting</router-link>
        </li>
        <!-- <li :class="{'is-active' : !showUpcoming}">
          <a>
            <span @click="showUpcoming=false">History</span>
          </a>
        </li>-->
      </ul>
    </nav>

    <section class="width-limit has-space-h is-fullwidth-when-narrow">
      <div class="box all-bookings is-light is-paddingless is-collapsed-when-narrow has-fade">
        <transition
          name="inner-router-anime"
          enter-active-class="routateIn"
          leave-active-class="routateOut"
        >
          <router-view />
        </transition>
      </div>
    </section>
  </main>
</template>


<script>
export default {};
</script>


<style>
/*

HERE FOR TEMP : 
  <!--TAB 1-->
    <section class="tab-content">
      <div class="tab-item" style>
        <!---->

        <div
          v-show="showUpcoming"
          class="has-space empty-bookings has-text-centered text-lighter t4 text-unresponsive"
        >
          <!-- HAVE RESERVATION -->
          <div v-if="reservations[0]">
            <div v-for="reservation in reservations" :key=  "reservation._id" class="card">
              <user-reservation-preview-card :reservation="reservation" />
            </div>

            <!--  END HAVE RESERVATION  -->
          </div>

          <!-- NO RESERVATION -->
          <div v-if="!reservations[0]">
            <empty-data-case :info="noUpcomingBooking"></empty-data-case>
          </div>
          <!-- NO RESERVATION END -->
        </div>
        <div class="margin-top-sm"></div>
      </div>

        <!--TAB 2-->
      <div class="tab-item" v-show="!showUpcoming">
        <!-- NO PAST RESERVATION -->
        <div class="empty-bookings has-text-centered text-lighter t4 text-unresponsive">
          <empty-data-case :info="noPastBooking"></empty-data-case>
        </div>
        <!-- NO PAST RESERVATION END -->
        <div class="margin-top-sm"></div>
      </div>
    </section>
  </div>
*/
</style>
