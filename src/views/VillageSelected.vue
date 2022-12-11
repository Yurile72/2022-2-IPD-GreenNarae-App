<template>
  <v-card
    max-width="448"
    height="900"
    class="mx-auto"
    color="#F2F0E7"
    flat
  >
    <v-layout>
      <SubBar />
      <v-main>
        <div class="completed">
          <div class="keyword">
            <p>빵 키워드</p>
            <p>
              <span>{{ $route.query.val[0] }}</span>
              <span>, </span>
              <span>{{ $route.query.val[1] }}</span>
            </p>
            <div class="underline">
              <img src="../assets/village-underline.png" />
              <img src="../assets/village-underline.png" />
            </div>
            <p>선택 완료!</p>
          </div>
          <img src="../assets/village-completed.png" class="selectedChar" />
          <div id="bottom-bar">
            <div id="bottom-bar-1"></div>
            <div id="bottom-bar-2"></div>
          </div>
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import SubBar from "../components/SubBar";
export default {
  name: "App",
  components: { SubBar },
  data: () => ({}),
};
</script>

<style scoped>
@keyframes float {
  0% {
    /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
    transform: translatey(60px);
  }
  50% {
    /* box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
    transform: translatey(70px);
  }
  100% {
    /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
    transform: translatey(60px);
  }
}

.selectedChar {
  width: 320px;
  margin-top: -30px;
  overflow: hidden;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

.keyword {
  color: #826a4e;
  font-family: GmarketSansMedium;
  font-weight: 700;
  text-align: center;
}

.keyword p {
  font-size: 24px;
}

.keyword span {
  /* margin: 10px; */
  line-height: 70px;
  font-size: 32px;
}

.completed {
  text-align: center;
  margin-top: 25px;
}

.underline {
  margin-top: -30px;
  /* padding-bottom: 10px; */
}

.underline img{
  width: 110px;
}

#bottom-bar {
  /* position: absolute; */
}

#bottom-bar-1 {
  width: 100%;
  height: 8px;
  background-color: #826a4e;
  margin-bottom: 5px;
}

#bottom-bar-2 {
  width: 100%;
  height: 230px;
  background-color: #826a4e;
}
</style>
