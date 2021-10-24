<template>
  <div :class="bclass" @click="checkCondition($event)">
    <audio v-if="num!==2" loop autoplay src="../assets/music/goorm.mp3"> 
    </audio>
    <tarea v-if="num===30||num===42 ||num===44||num===46||num===47" :index="num" class="tarea" />
    <question v-if="num===24 ||num===26 ||num===28 ||num===32 ||num===34 ||num===36 ||num===38||num===40 ||num===45" :index="num" :vlist="vlist" class="question" />
    <frame v-if="num === 6 || num ===8 || num === 10" class="frame" :class="{'fade-out': fadeOut}" />
    <wall v-if="num===22 ||num===24 ||num===26 ||num===28 ||num===32 ||num===34 ||num===36 ||num===38||num===40 ||num===45" :opacity="0.6" class="wall"/>
    <wall v-if="num===30||num===42 ||num===44" :opacity="0.8" class="wall"/>
    <wall v-if="num===46" :opacity="0.9" class="wall"/>
    <wall v-if="num===47" :opacity="0.7" class="wall"/>
    <div v-if="num===22" class="svg-wrapper stamp" :class="{'fade-out': fadeOut}">
        <simple-svg
          :src="require('@/assets/img/c22.svg')"
        />
      </div>
    <div class="ph" :class="{'fade-out': fadeOut}">
      <top class="top" :index="num"/>
      <image-loading :index="num" />
    </div>
    <div class="pht" :class="{'fade-out': fadeOut}">
      <t-section :index="num" />
      <button class="bt" v-if="num === 1" @click="addNumber"><h3>시작하기</h3></button>
      <button class="bt2" v-if="num === 21" @click="addNumber"><h3>발권하기</h3></button>
    </div>
    <p class="footer">ⓒ 2021. 이민아 All Rights Reserved.</p>
  </div>
</template>

<script>
import imageLoading from '../components/imageLoading.vue'
import tSection from '../components/tSection.vue'
import frame from '../components/frame.vue'
import top from '../components/top.vue'
import wall from '../components/wall.vue'
import question from '../components/question.vue'
import tarea from '../components/tarea.vue'
// import {Howl} from 'howler';


export default {
  
    name: 'CheckNum',
    components:{
        tarea,
        question,
        top,
        wall,
        frame,
        imageLoading,
        tSection
    },
    data() {
        return {
            fadeOut: true,
            num: 1,
            cflag: true,
            dflag: true,
            vlist: [0,0,0,0,0]
            // mflag: true,
        }
    },
    computed:{
        bclass() {
            if(this.num == 4 ||this.num == 21 ||this.num == 22 ){
                return "bg_brown"
            } else if (this.num == 2 || this.num == 3||this.num == 23 ||this.num == 24 ){
                return "bg_black"
            } else if(this.num == 27|| this.num == 28){
                return "bg_brown2"
            } else if(this.num == 29|| this.num == 30){
                return "bg_brown3"
            } else if(this.num == 25 || this.num == 26){
                return "bg_gray"
            } else if(this.num == 41){
                return "bg_orange2"
            } else if(this.num >= 46 && this.num <= 48){
                return "bg_white"
            }  
            return "bg_orange"
        },
    },
    methods: {
        addNumber(){
            this.num +=1;
        },
        checkCondition(event){
            // if(this.mflag){
            //     this.play()
            //     this.mflag = false
            // }

            if(this.num===24 ||this.num===26 ||this.num===28 ||this.num===32 ||this.num===34 ||this.num===36 ||this.num===38||this.num===40 ||this.num===45){

                if(event.target.classList.contains('qt') ||
                 !event.target.classList.contains('qp')){
                    return
                }
            }

            //finish
            if(this.num === 48) {
                const colors = ['r', 'y', 'g', 'b', 'p']

                const max = Math.max(...this.vlist)
                const cindex = this.vlist.indexOf(max)

                this.$router.push({name:'result', params: {color: colors[cindex]}})

            }

            if(this.num > 1 && this.num != 21) {
                if(this.num == 2 && this.cflag){
                    this.play()
                    this.num--
                    this.cflag = false
                } else if (this.num == 22 && this.dflag){
                    this.num--
                    this.dflag = false
                }
                this.addNumber()
                this.changeData()
            }
        },
        changeData() {
            this.fadeOut = true;

            setTimeout(() => {
                this.fadeOut = false;
            }, 500);
        },
        play() {

            // const audio = new Audio("./assets/music/goorm.mp3");
            // audio.load()
            // audio.setAttribute('crossorigin', 'anonymous')
            // audio.crossOrigin = 'anonymous'
            // audio.autoplay = true
            // audio.loop = true
            // audio.play().then().catch(v => console.log(v))
            // const sound = new Howl({
            //     src: ["./assets/music/goorm.mp3"],
            //     autoplay: true,
            //     loop: true,
            //     volume: 0.5,
            //     onplay: function() {
            //         console.log('play2')
            //     },
            //     onload: function() {
            //         console.log('load')
            //     },
            //     onend: function() {
            //         console.log('Finished!');
            //     }
            // });

            // sound.play()
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
.bg_orange {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #dd501f;
  background-color: #dd501f;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_orange2 {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #F08200;
  background-color: #F08200;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_white {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: white;
  background-color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_black {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #000000;
  background-color: #000000;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_gray {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #4F4F4F;
  background-color: #4F4F4F;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_brown {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #783A01;
  background-color: #783A01;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_brown2 {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #8C3213;
  background-color: #8C3213;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_brown3 {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #AA3006;
  background-color: #AA3006;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}


.ph {
  /* flex: 0.5; */
  z-index: 2;
  margin-bottom: 2%;
  width: 100vw;
  /* height: auto; */
}

.pht {
  /* width: 100% */
  /* flex:0.2; */
  align-self: center;
  z-index: 4;
}

.footer {
  /* flex:0.3; */
  text-align: center;
  color: white;
  align-self: center;
  position: fixed;
  bottom: 0;
}

.bt {
  align-self: center;
  color:white; 
  /* width: 20vw; */
  width: 30vw;
  text-align: center;
  background-color:#FF7C03;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
  margin-bottom: 1%;
}

.bt2 {
  align-self: center;
  color:black; 
  width: 30vw;
  text-align: center;
  background-color:#FF7C03;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
}

.frame {
  z-index: 1;
  width: 100%; height: 100%; position: absolute; top:0; left:0;
  overflow: hidden;
}

.wall {
  z-index: 3;
  width: 100%; height: 100%; position: absolute; top:0; left:0;
}

.wall8 {
  z-index: 3;
  width: 100%; height: 100%; position: absolute; top:0; left:0;
  background-color: black;
  opacity:0.8;
}

.stamp {
  z-index: 5;
  width: 100%; height: auto; position: absolute; top:180px; left:50px;
}

.question {
  z-index: 6;
  width: 100%; height: 100%; position: absolute; top:0; left:0;
}

.tarea {
  z-index: 6;
  width: 100%; height: 100%; position: absolute; top:30%; left:0;

}


.top {
  margin-top: 5%;
}

.fade-out {
  animation: fadein 3s;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
}

@keyframes fadein {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-moz-keyframes fadein { /* Firefox */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-webkit-keyframes fadein { /* Safari and Chrome */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
@-o-keyframes fadein { /* Opera */
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
