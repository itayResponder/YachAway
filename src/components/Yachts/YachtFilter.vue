<template>
   <section class="filter">
   <h1>yacht Filter</h1>
    </section>
</template>

<script>
// @ is an alias to /src
export default {
  name: "filter-list",
 
     data() {
        return {
           filterBy: {
                txt: '',
             
            }
        }
    },
    created() {
       
    },
    methods: {
     emitFilter() {
       var filter = {...this.filterBy}
            this.$emit('set-filter', filter);
        }
    },

    computed: {
      
    },
  components: {
  
  }
};
</script>
