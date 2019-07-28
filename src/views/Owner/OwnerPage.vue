<template>
  <main class="my-yachts">
    <!-- <div class="tabs is-nav is-taller scroll-h has-side-space"> -->

    <!-- <div class="b-tabs"> -->

    <!--TABS-->
    <nav class="tabs is-medium is-taller has-side-space">
      <ul>
        <li>
          <router-link to="/profile/my-yachts/manage" class="is-capitalized">manage</router-link>
        </li>
        <li>
          <router-link to="/profile/my-yachts/hosting" class="is-capitalized" >hosting</router-link>
        </li>
        <!-- <li :class="{'is-active' : !showUpcoming}">
          <a>
            <span @click="showUpcoming=false">History</span>
          </a>
        </li>-->
      </ul>
    </nav>

    <section class="width-limit has-space-h is-fullwidth-when-narrow">
      <!-- <div class="box all-bookings is-light is-paddingless is-collapsed-when-narrow has-fade"> -->
        <transition
          name="inner-router-anime"
          enter-active-class="routateIn"
          leave-active-class="routateOut"
        >
          <router-view />
        </transition>
      <!-- </div> -->
    </section>
  </main>
</template>


<script>
export default {};
</script>


<style>


</style>
