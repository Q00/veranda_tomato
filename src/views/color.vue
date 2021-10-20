<template>
  <div :class="bclass.c">
    <top class="front" :index="49" />
    <image-loading :index="color" />
    <t-section :index="bclass.i" />
    <button class="bt3" @click="share" ><h3 v-html="'결과 공유하기'"></h3></button>
    <button class="bt4" @click="back" ><h3 v-html="'다시하기'"></h3></button>
    <p class="footer">ⓒ 2021. 이민아 All Rights Reserved.</p>
  </div>
</template>

<script>
import top from '../components/top.vue'
import imageLoading from '../components/imageLoading.vue'
import tSection from '../components/tSection.vue'

export default {
    name:"color",
    props:['color'],
    components:{
        top,
        imageLoading,
        tSection,
    },
    computed:{
        bclass() {
            switch (this.color) {
            case 'r':
                return { c:'bg_red', i: 51 }
            case 'y':
                return {c:'bg_yellow', i:52}
            case 'g':
                return {c:'bg_green', i:53}
            case 'b':
                return {c:'bg_blue', i:54}
            default:
                return {c:'bg_purple', i:55}
            }
        }
    },
    methods:{
        share(){
            const title = "베란다 토마토 심리테스트"
            const text = "당신에게 나타난 회색 인간의 색깔을 맞춰보세요!"
            const url = `${location.host}/color/${this.color}`

            // if(navigator.share){
            navigator.share({
                title,
                text,
                url
            }).then().catch(v => console.log(v))
            // } else {
            //     alert("공유하기를 지원하지 않는 환경입니다.")
            // }
        },
        back(){
            this.$router.push('/')
        }
    }
}
</script>

<style>
.bg_red {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #E8373F;
  background-color: #E8373F;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_yellow {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #F8EE13;
  background-color: #F8EE13;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_blue {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #2CBCF0;
  background-color: #2CBCF0;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_green {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #8DC420;
  background-color: #8DC420;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bg_purple {
  background-blend-mode: fixed;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background: #9C68A8;
  background-color: #9C68A8;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  align-content: center;
  overflow: scroll;
}

.bt3 {
  align-self: center;
  color:white; 
  /* width: 20vw; */
  width: 50vw;
  text-align: center;
  background-color:black;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
  margin-bottom: 1%;
}

.bt4 {
  align-self: center;
  color:black; 
  /* width: 20vw; */
  width: 50vw;
  text-align: center;
  background-color:white;
  box-shadow: 0 4px 4px rgba(0,0,0,0.25);
  border-radius: 15px;
  margin-bottom: 15%;
}

.front {
	margin-top: 15%;
}

.footer {
  /* flex:0.3; */
  text-align: center;
  color: white;
  align-self: center;
  position: fixed;
  bottom: 0;
}
</style>