<template>
  <v-card
    max-width="448"
    height="900"
    class="mx-auto rounded-xl"
    color="#F2F0E7"
    flat
  >
    <v-layout>
      <SubBar />
      <v-main>
        <div class="upper">
          <div class="intro">
            <p>{{ user.name }}님,</p>
            <p>성심빌리지에 오신걸 환영해요!</p>
          </div>
          <img src="../assets/village-char.png" />
        </div>

        <div class="sel-box">
          <div id="sel-info">
            <span>좋아하는 빵의 키워드를 선택해주세요!</span>
          </div>
          <div id="sel-btn">
            <button
              v-for="flaver in flavers"
              :key="flaver.flaver"
              @click="press(flaver)"
              class="flaver-btn"
              :class="{ active: flaver.sel }"
            >
              {{ flaver.flaver }}
            </button>
          </div>
          <div class="complete" @click="submit()">
            <img src="../assets/button.png" alt="선택완료" />
            <p>선택완료</p>
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
  data: () => ({
    count: 0,
    selFlaver: [],
    flavers: [
      { flaver: "촉촉한", sel: false },
      { flaver: "달달한", sel: false },
      { flaver: "짭짤한", sel: false },
      { flaver: "건강한", sel: false },
      { flaver: "매콤한", sel: false },
      { flaver: "담백한", sel: false },
    ],
  }),
  methods: {
    press(flaver) {
      if (this.count < 2) {
        if (flaver.sel == false) {
          this.count++;
          this.selFlaver.push(flaver.flaver);
        } else {
          this.count--;
          this.selFlaver.splice(this.selFlaver.indexOf(flaver.flaver), 1);
        }
        flaver.sel = !flaver.sel;
      } else if (flaver.sel == true) {
        this.count--;
        this.selFlaver.splice(this.selFlaver.indexOf(flaver.flaver), 1);
        flaver.sel = !flaver.sel;
      }
    },
    submit() {
      if (this.count == 2) {
        this.$router.push({
          name: "VillageSelected",
          query: { val: this.selFlaver },
        });
      }
    },
  },
};
</script>

<style scoped>
@keyframes float {
  0% {
    /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
    transform: translatey(0px);
  }
  50% {
    /* box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
    transform: translatey(10px);
  }
  100% {
    /* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
    transform: translatey(00px);
  }
}

.upper img {
  /* width: 320px; */
  /* margin-top: -30px; */
  overflow: hidden;
  transform: translatey(0px);
  animation: float 6s ease-in-out infinite;
}

.upper {
  background-color: #826a4e;
  color: #ffffff;
  font-family: GmarketSansMedium;
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
}

.intro {
  text-align: left;
  margin-left: 10%;
  padding-top: 6%;
}

.active {
  outline: none;
  box-shadow: 0 0 0 2px #826a4e;
  border: #ffffff 2px solid;
  outline-offset: 3px;
  border-radius: 50%;
}

.intro p {
  font-size: 20px;
}

.upper img {
  width: 85%;
  padding-top: 6%;
  padding-bottom: 6%;
  display: inline-block;
}

.sel-box {
  display: inline-block;
  margin-top: -25%;
  border-radius: 20px 20px 0 0;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  /* float: left; */
}

#sel-info {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  margin-bottom: 5px;
  width: 80%;
  height: 39px;
  border-radius: 25px;
  background-color: #826a4e;
  color: #ffffff;
  opacity: 0.8;
}

#sel-info p {
  margin: auto;
}

#sel-btn {
  margin: auto;
  width: 100%;
  display: block;
  padding: 6%;
}

.flaver-btn {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: #826a4e;
  color: #ffffff;
  opacity: 0.6;
  margin: 10px;
  justify-content: center;

}

.complete {
  text-align: center;
  position: relative;
}

.complete img {
  width: 200px;
}

.complete p {
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
}
</style>
