<template>
  <div key="default" class="svg-wrapper">
	<simple-svg
	key="default"
	custom_id="default"
	custom-class-name="default-class"
	height="auto"
	:src="require('@/assets/img/'+index+'.svg')"
	@load="svgLoaded()"
	/>
  </div>
</template>

<script>
export default {
    name: "imageLoading",
    props: ['index'],
    methods: {
        svgLoaded () {
            // console.log('index', this.index)
        }
    }

}
</script>

<style>
</style>