<template>
  <main class="bookings">
    <div class="tabs is-nav is-taller scroll-h has-side-space">
      <ul class="width-limit">
        <li class>
          <router-link to="/profile/messages" class>Inbox</router-link>
        </li>
        <li class>
          <router-link to="/profile/reservation" class>My Trips</router-link>
        </li>
        <li class>
          <router-link to="/profile/my-yachts/manage" class>My Yachts</router-link>
        </li>
        <li class>
          <router-link to="#" >Settings</router-link>
        </li>
      </ul>
    </div>
    <section class="width-limit has-space-h is-fullwidth-when-narrow">
        <transition
          name="inner-router-anime"
          enter-active-class="routateIn"
          leave-active-class="routateOut"
        >
          <router-view />
        </transition>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style>
</style>
