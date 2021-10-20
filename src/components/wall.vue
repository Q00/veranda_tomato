<template>
  <div :style="`opacity:${opacity}`" class="blackOpacity">
  </div>
</template>

<script>
export default {
    name: "wall",
    props:{
        opacity:{
            type: Number,
            require: true
        }
    }
}
</script>

<style>
  .blackOpacity {
      background-color: black;
  }
</style>