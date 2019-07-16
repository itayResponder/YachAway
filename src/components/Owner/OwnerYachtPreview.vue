<template>
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
</template>
<script>
export default {
  props: ["yacht"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.card {
  width: 30%;
}
.card:hover {
      box-shadow: 0 0 15px 2px black;
      transition: 0.3s;
}
</style>
