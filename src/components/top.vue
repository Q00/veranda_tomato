<template>
  <div class="ts">
	<p :style="style" v-html="text"></p>
  </div>
</template>

<script>
export default {
    name: "top",
    props: {
        index: {
            type: Number,
            require: true
        }

    },
    computed:{
        style() {
            if (this.index == 4 ||this.index == 14||this.index == 21||this.index == 22||this.index == 29){
                return 'color: white'
            }
            return 'color: black'
        },
        text() {
            return this.texts[this.index]
        }
    },
    data() {
        return{
            texts : {
                4: `티켓을 주어들었더니<br/>
티켓이 대뜸 말을 걸기 시작합니다.`,
                14:`베란다 토마토의 공상티켓이<br/>
반짝이기 시작합니다.`,
                21:`이야기를 들은 회색인간은 
문득 궁금해집니다`,
                22:`베란다토마토의 공상티켓 발권!<br/>
발권 완료 !`,
                29:``,
                35:`노랫소리를 쫓아가자<br/>
예쁜 정원이 눈 앞에 펼쳐집니다`,
                36:`노랫소리를 쫓아가자<br/>
예쁜 정원이 눈 앞에 펼쳐집니다`,
                37:`열매를 먹자 온몸에서<br/>
힘이 샘솟는 기분입니다.`,
                38:`열매를 먹자 온몸에서<br/>
힘이 샘솟는 기분입니다.`,
                39:`시간가는 줄 모르고 호수에서 놀고 있는데`,
                40:``,
                41:`영원히 공상세계에 머물고 싶다고<br/>
생각할 때쯤, 베란다토마토가 말합니다. `,
                42:`아쉽지만 회색인간과 함께 <br/>
현실세계로 돌아가기 위한 기차에 오릅니다.`,
                49:"<h2>회색인간의 본래 색깔은..</h2>",
            }
        }
    }
}
</script>

<style>
</style>