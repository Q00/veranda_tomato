<template>
  <div :class="tclass">
	<p v-html="texts[index-1]"></p>
  </div>
</template>

<script>
export default {
    name: "tSection",
    props: {
        index: {
            type: Number,
            require: true
        }

    },
    computed: {
        tclass() {
            if(this.index == 1 ||this.index == 14 || (this.index >=21 && this.index <= 30)){
                return "pureWhite"

            } else if (this.index == 2 || this.index == 3){
                return "gray"
            } else if(this.index <=13 || this.index <=20  ||this.index == 26){
                return "banana"

            } else if((this.index >= 31 && this.index <= 48)){

                return "pureBlack"
        
            }
            return ""
        }
    },
    data() {
        return{
            texts : [
                `<h2>공상 여행을 떠나시겠습니까?</h2>
심리테스트 형식의 예술 프로젝트
	`,
                `여기 회색인간이 있습니다.<br/>
현실에 지쳐<br/>
본인의 색깔을 잃어버린 존재죠.`,
                `어느 날,<br/>
바닥을 보며 터벅터벅 걷던 회색 인간은<br/>
바닥에 떨어진 무언가를 발견합니다.`,
                `“안녕하세요 <br/>
 베란다토마토의 공상티켓입니다”`,
                `공상을 하며 시간을 보내볼까요?<br/>
멍때리며 시간을<br/>
 흘릴 공상 티켓이 주어졌으니 말이죠`,
                `내 맘같지 않을 때`,
                `위로가 필요한 그런날`,
                `꼬여버린 끈처럼<br/>
 자꾸 뭔가 잘못되어가는것같고 `,
                `다음 날을<br/>
마주할 준비가 되지않았는데<br/>
또 다음 계절이 와버릴까 <br/>
걱정이 되는 날`,
                `그런 후회와 걱정이 늘어가는 날`,
                `그런날은<br/>
아무리  피곤해도<br/>
잠이오질 않더라구요`,
                `당신도 혹시 그런 날을 마주하고있다면<br/>
공상티켓을 들고 잠시 놀러오셔요`,
                `이곳은 언제나 당신을 환영한답니다.`,
                `그러더니 <br/>
어디선가 노랫소리가 들립니다.`,
                `틱틱타카토<br/>
멋진 유리 구두를 신고 `,
                `룰루랄라<br/>
 모두를 춤추게하는 <br/>
댄싱쥬스가 되볼까 `,
                `외계에 사는 존재를 그려보다가`,
                `저 반짝이는 달로 날아가볼까<br/>
 나는 그곳에서 반짝이는 빛에 <br/>
맞춰 노래를 부를꺼야 `,
                `그러다가<br/>
 친구를 만나게 되면 `,
                `해를 닮은<br/>
 뜨거운 미소로 인사를 보내보자 `,
                "",
                `앞내용은  이민아작가의<br/>
 베란다토마토 프로젝트 책,
 몽상티켓 에서 발췌하였습니다.`,
                ` 회색인간과 공상여행을<br/>
 떠나기 위한 기차를 탔습니다`,
                "",
                `“나는 이런 것들이 고민이야”<br/>
회색인간은 한숨을 푹 내쉽니다.`,
                "",
                `드디어 기차가 목적지에 도착했습니다`,
                ``,
                `"안녕 여러분. <br/>
베란다토마토의 공상 세계에 <br/>
오신 것을 환영합니다.",`,
                ``,
                `회색인간과 가볍게 발걸음을 옮겨 보는 당신<br/>
무언가 반짝이는 것이 보입니다.`,
                '',
                `문을 열어 회색인간과 함께<br/>
 안으로 들어가봅니다. <br/>
문 안쪽 세상은 너무나도 아름답고 <br/>
평화로워 마치 천국에 온 것 같은<br/>
 기분이 듭니다`,
                '',
                `정원은 형형색색의 반짝이는 열매로<br/>
 가득차 있습니다.`,
                '',
                `회색인간도 무기력했던 모습은<br/>
 온데간데 없이 활기차고 신나 보입니다.<br/>
 회색인간과 정원 곳곳을 뛰어다니며 놀던 중,<br/>
반짝이는 안개로 둘러싸인<br/>
 신비한 호수를 발견합니다.`,
                ''
                ,`베란다토마토가 하늘에서 움직이자 <br/>
 별빛이 우수수 내려옵니다.<br/>
그곳에서<br/>
매우 좋은 향기가 납니다.`,
                '',
                `이제 현실로<br/>
다시 돌아갈 시간이에요<br/>
하지만 너무 걱정하지 마셔요`,
                '',
                `현실세계에 도착한 회색인간과 당신. <br/>
이제 회색인간과도 작별할 시간입니다. <br/>
회색인간이 말합니다.`,
                '',
                '',
                '',
                '',
                '회색인간의 본래 색깔은..',
                `안녕하세요<br/>
이 심리테스트는 <br/>
공상의 세계로 초대하여 <br/>
지친하루를 위로하기 위한 작품들을 <br/>
제작하는 시각예술작가 이민아의<br/>
 상상으로부터 출발했습니다.<br/>
 새벽에 마시는 <br/>
따뜻한 레몬차같은<br/>
 위로가 필요하다면,<br/>
 내일은 더 바삭바삭하고 <br/>
새콤달콤한 하루를 맞이하길 원한다면 <br/>
이민아 작가의 사이트를 방문해주세요<br/>
 www.oxmlox.com<br/>
@veranda_tomato<br/>
@oxmlox`



            ],
            style: [
	
            ]
        }
    }
}
</script>

<style>
.pureWhite {
  color: white;
}

.pureBlack {
  color: black;
}

.gray {
  color: black;
  background: rgba(255, 255, 255, 0.64);
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 15px 20px 0 20px;
}

.banana {
  color: black;
  background: #F9FFD7;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 15px;
  margin: 15px 20px 0 20px;
}


</style>