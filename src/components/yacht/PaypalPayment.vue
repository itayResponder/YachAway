<template>
  <div>
    <div v-if="!paidFor">
      <slot name="before">
          <!-- ${{ product.price }} -->
     </slot>
      <!-- <p>{{ product.description }}</p> -->
    </div>

    <div v-if="paidFor">
      <slot name="after">
        <span>Your purchase has been accepted!</span>
      </slot>
    </div>

    <div ref="paypal"></div>
  </div>
</template>

<script>
// import image from "../assets/lamp.png"
export default {
  name: "paypal-payment",
  props: ["product"],
  data: function() {
    return {
      loaded: false,
      paidFor: false,
      // TODO
      // GET THE SNADBOX API HERE
    };
  },
  mounted: function() {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AZ6xr8gYUAQmdYCyypx0nLIov3aFmkZdZTJ2__Bu44IkvvRTtvuIwTx3--3f1V0OON87SKK5tg7yxIaF";
    script.addEventListener("load", this.setLoaded);
    document.body.appendChild(script);
  },
  methods: {
    setLoaded: function() {
      this.loaded = true;
      window.paypal
        .Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  description: this.product.description,
                  amount: {
                    currency_code: "USD",
                    value: this.product.price
                  }
                }
              ]
            });
          },
          onApprove: async (data, actions) => {
            const order = await actions.order.capture();
            this.paidFor = true;
            console.log(order);
          },
          onError: err => {
            console.log(err);
          }
        })
        .render(this.$refs.paypal);
    }
  }
};
</script>