<template>
  <p class="pureWhite" v-html="texts[index]"></p>
</template>

<script>
export default {
    name: 'tarea',
    props:{
        index: {
            type: Number,
            require: true
        }

    },
    data:function() {
        return {
            texts: {
                30: `“오늘도 많이 수고하셨어요<br/>
<br/>
  이곳에서는 당신이 상상한 무엇이든<br/>
 만날 수도 또 그려낼 수도 있답니다.<br/>
 이곳에서 마음껏 쉬다가세요.”<br/>
<br/>
베란다토마토의 환영인사를 듣자<br/>
 마음이 따스해지고 평온해집니다.<br/>
<br/>
 회색인간의 우울했던 얼굴에도 <br/>
미소가 살짝 보이는 것 같습니다.<br/>`,
                42: `“공상세계의 기억과 이곳에서<br/>
 느꼈던 행복은 <br/>
언제까지나<br/>
 당신의 마음 속에 있을 거랍니다.<br/>
<br/>
휴식이 필요하다면 <br/>
언제든 또<br/>
다시 놀러오세요<br/>
언제든 환영이랍니다”<br/>
<br/>
-베란다토마토-`,
                44: `“정말 고마워.<br/>
 오랜만에 아무 걱정없이<br/> 
행복하고 즐거웠어.<br/>
오늘을 영원히 기억할게<br/>”
<br/>
-회색인간-`,
                46:`작별인사를 나눈 후, <br/>
당신은 <br/>
떠나는 회색인간의 뒷모습을<br/>
 바라봅니다.`,
                47:`그때,<br/>
 회색인간의 <br/>
색깔이 <br/>
서서히<br/>
 변하기 시작합니다!`
        
            }
        }
    }
}
</script>

<style>

</style>