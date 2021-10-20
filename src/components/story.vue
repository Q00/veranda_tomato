<template>
  <div class="ts">
	<p :style="style" v-html="texts[index-1]"></p>
  </div>
</template>

<script>
export default {
    name: "tSection",
    props: {
        color: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            require: true
        }

    },
    computed:{
        style() {
            return 'color: '+this.color;
        }
    },
    data() {
        return{
            texts : [
                `<h2>공상 여행을 떠나시겠습니까?</h2>
심리테스트 형식의 예술 프로젝트
	`,
                `여기 회색인간이 있습니다.
현실에 지쳐
본인의 색깔을 잃어버린 존재죠.`,
                `어느 날,
바닥을 보며 터벅터벅 걷던 회색 인간은
바닥에 떨어진 무언가를 발견합니다.`,

            ]
        }
    }
}
</script>

<style>
.ts {

}


</style>