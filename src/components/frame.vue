<template>
  <div class="short">
    <div class="svg-wrapper">
	<simple-svg 
	:src="require('@/assets/img/gg.svg')"
	/>
    </div>
  </div>
</template>

<script>
export default {
    name: "frame",
}
</script>

<style>
.svg-wrapper {
	height: auto;
}

.short {
	height: 100vh;
}

</style>