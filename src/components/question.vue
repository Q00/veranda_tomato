<template>
  <div class="select">
	<p class="banana qt" v-html="texts[index].q"></p>
    <div v-for="t in this.texts[this.index].qlist" :key="index + t.color">
        <button class="banana qp" @click="addValue(t.color)"><p class="qp" v-html="t.v"></p></button>
    </div>
  </div>
</template>

<script>

export default {
    name: "question",
    props: {
        index: {
            type: Number,
            require: true
        },
        vlist: {
            type: Array,
            require: true
        }

    },
    computed:{
        style() {
            return 'color: '+this.color;
        },
    },
    created(){
        this.randomize(this.index)
    },
    methods:{
        shuffleVueArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                const temp = array[i];
                this.$set(array, i, array[j]);
                this.$set(array, j, temp);
            }
        },
        randomize(index){
            this.shuffleVueArray(this.texts[index].qlist)

        },
        addValue(color){
            switch (color) {
            case 'r':
                this.$set(this.vlist, 0, this.vlist[0]+1)
                break;
            case 'y':
                this.$set(this.vlist, 1, this.vlist[1]+1)
                break;
            case 'g':
                this.$set(this.vlist, 2, this.vlist[2]+1)
                break;
            case 'b':
                this.$set(this.vlist, 3, this.vlist[3]+1)
                break;
            default:
                this.$set(this.vlist, 4, this.vlist[4]+1)
                break;
            }
        }
    },
    data() {
        return{
            texts : {               
                24:{
                    q: `Q1. 고민이 많아 보이는 회색인간.<br/> 그는 어떤 고민을 하고 있을까요?`,
                    qlist:[{color:'r', v: '사랑에 대한 고민'},{color:'y', v: '꿈과 진로에 대한 고민'},{color:'g', v: '가족, 친구등 관계에 대한 고민'},{color:'b', v: '경제적 상황에 대한 고민'},{color:'p', v: '삶과 죽음에 대한 고민'},],
                },
                26:{
                    q: `Q2. 회색인간에게 위로의 말을<br/> 
건네고 싶은 당신. <br/>
어떤 위로의 말을 해주면 좋을까요?`,
                    qlist:[{color:'r', v: `힘내! 다 잘될거야! <br/>
긍정적으로 생각해보자!`},{color:'y', v: `시간이 지나면 <br/>
 괜찮아질거야`},{color:'g', v: `울고 싶으면 내 어깨에 <br/>
기대어 울어도 좋아`},{color:'b', v: `숨을 깊게 들이마시면 <br/>
기분이 좋아진대. <br/>
같이 해보지 않을래?`},{color:'p', v: `당신이 힘들때<br/>
 위로가 되었던 시 구절을 <br/>
찾아 읽어준다`},],
                },
                28:{
                    q: `Q3. 회색인간과 기차에서 내린 당신.<br/>
 눈 앞에 어떠한 풍경이<br/>
 펼쳐져 있을까요?`,
                    qlist:[{color:'r', v:`살랑이는 바람에 풀들이 춤추는 초원`},{color:'y', v:  `광활하게 펼쳐진 하늘과 바다`},{color:'g', v:`별빛 가득한 은하수`},{color:'b', v: `깎아지른 듯 높이 솟아오른 산 `},{color:'p', v: `노을지는 하늘을 배경으로 한 구름 위`},],
                },
                32:{
                    q: `Q4. 조금 걷다보니<br/>
 어스름한 안개 너머로 문 하나가<br/>
 눈 앞에 들어옵니다. <br/>
문은 어떤 모습일까요??`,
                    qlist:[{color:'r', v:`화려한 곡선이 눈에 띄는 <br/>
세련된 문양의 문`},{color:'y', v:  `둥근 지붕이 귀여운 느낌을 주는 <br/>
아늑한 느낌의 문`},{color:'g', v:`널찍한 크기를 자랑하는<br/>
 시원한 느낌의 문`},{color:'b', v: `담쟁이덩굴과 꽃으로 <br/>
뒤덮인 유서 깊은 문`},{color:'p', v: `숨겨진 비밀이 있을 것만<br/>
 같은 높고 뾰족한 문`},],
                },
                34:{
                    q: `Q5.  그때, 노랫소리가 들려옵니다. <br/>
어떤 노래일까요?`,
                    qlist:[{color:'r', v:`경쾌한 느낌의 팝`},{color:'y', v:  `평화로운 피아노 선율`},{color:'g', v:`귀에 꽂히는 강렬한 펑크 락`},{color:'b', v: `고풍스러운 클래식`},{color:'p', v: `리드미컬한 재즈`},],
                },
                36:{
                    q: `Q6. 가장 탐스러워 보이는<br/>
 열매를 따서 먹어봅니다.<br/>
 열매는 어떤 맛일까요?`,
                    qlist:[{color:'r', v:`화끈한 맛`},{color:'y', v:  `새콤달콤한 맛`},{color:'g', v:`밍밍한 맛`},{color:'b', v: `달달한 맛`},{color:'p', v: `떫은 맛`},],
                },
                38:{
                    q: `Q7. 갑자기 회색인간과 <br/>
호수에 뛰어든 당신.<br/>
 피부에 닿는 호수물은 <br/>
어떤 느낌일까요?`,
                    qlist:[{color:'r', v:`솜사탕처럼 몽글몽글한 느낌`},{color:'y', v:  `비단처럼 한없이 부드러운 느낌`},{color:'g', v:`유리구슬처럼 단단하고 시원한 느낌`},{color:'b', v: `젤리처럼 응고력이 강한 액체 느낌`},{color:'p', v: `공기처럼 가벼운 느낌`},],
                },
                40:{
                    q: `Q8.  별빛들은 어떤 향기가 날까요?`,
                    qlist:[{color:'r', v:`장미 사탕처럼 달콤한 향`},{color:'y', v:  `짙은 숲 속의 상쾌한 향`},{color:'g', v:`시나몬 느낌의 부드러운 향`},{color:'b', v: `박하, 후추처럼 코가 톡쏘는 강렬한 향`},{color:'p', v: `은은하게 전해오는  씁쓸한 향`},],
                },
                45:{
                    q: `Q9. 이 말을 들은 당신은<br/>
어떤 대답을 할까요 ?`,
                    qlist:[{color:'r', v:`회색인간을 와락 끌어안는다.`},{color:'y', v:  `언젠가 꼭 다시 만나자고 약속한다.`},{color:'g', v:`회색인간과의 마지막을<br/>
 기억하기 위해 함께 사진을 찍는다.`},{color:'b', v: `회색인간의 손을 꼭 잡고<br/>
 눈을 맞추며 당신도 고맙다고 말한다.`},{color:'p', v: `회색인간의 손바닥에<br/>
당신의 연락처를 적어준다.`},],
                }
            }
        }
    }
}
</script>

<style>
.select {
    overflow: scroll;
}
</style>