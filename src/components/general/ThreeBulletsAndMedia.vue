<template>
  <div class="columns margin-top-2rem">
    <div class="column is-half text-start margin-2rem">
      <h2 class="is-title is-capitalized is-size-2">
        <slot name="title">Explore your nature, see seas, With Confidence</slot>
      </h2>
      <ul>
        <!-- 1 -->
        <li  class="margin-top-1rem">
            <b class="is-size-5 is-capitalized">
              <slot name="bullet-1">Lowest Rates, Guaranteed</slot>
            </b>
          <p>
            <span>
              <slot
                name="bullet-2-text"
              >Found the same yacht and services for lower rate we will evan that rate.</slot>
            </span>
          </p>
        </li >
        <!-- 2 -->
        <li class="margin-top-1rem">
            <b class="is-size-5 is-capitalized">
              <slot name="bullet-2">Know The Price Upfront</slot>
            </b>
          <p>
            <span>
              <slot
                name="bullet-2-text"
              >Find any service within minutes and know exactly what you’ll pay. No hidden fees, no hidden passengers :).</slot>
            </span>
          </p>
        </li>

        <!-- 3 -->
        <li  class="margin-top-1rem">
            <b class="is-size-5 is-capitalized">
              <slot name="bullet-3">We’re Here For You 24/7</slot>
            </b>
          <p>
            <span class>
              <slot
                name="bullet-3-text"
              >Fiverr is here for you, anything from answering any questions to resolving any issues, at any time.</slot>
            </span>
          </p>
        </li>
      </ul>
    </div>
    <div class="column">
      <figure class="image margin-top-2rem is-4by3">
        <!-- <slot name="image"></slot> -->
        <img src="https://res.cloudinary.com/nivb/image/upload/v1563056057/yact/5_peyknj.jpg" alt />
      </figure>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>
