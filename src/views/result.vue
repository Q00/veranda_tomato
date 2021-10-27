<template>
  <div class="bg_orange">
    <div class="front svg-wrapper path">
      <simple-svg
          :src="require('@/assets/img/profile.svg')"
      />
     </div>
	<t-section :index="49" />
	<button class="bt3" @click="goFinalResult"><h3 v-html="'회색인간의<br/>본래 색깔 결과 보기'"></h3></button>
	<t-section class="back" :index="50" />
  <p class="footer">ⓒ 2021. 이민아 All Rights Reserved.</p>
  </div>
</template>

<script>
import tSection from '../components/tSection.vue'
import axios from 'axios'

export default {
    name:"result",
    components: { tSection },
    props:['color'],
    methods:{
        goFinalResult(){
            axios.get("https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fq00.github.io%2Fveranda_tomato%2F&count_bg=%2379C83D&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=false").then().catch()
            this.$router.push({name: 'color', params:{color: this.color}})
        }
    }
}
</script>

<style>
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

.path {
  fill: none;
  stroke: white;
  stroke-width: 10px;
  stroke-dasharray: 9;
  stroke-linejoin: round;
}

.front {
	margin-top: 15%;
}

.back {
  margin-bottom: 15%;
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