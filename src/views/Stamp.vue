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
        <!-- Write Here -->
        <div class="title">
          <p
            style="
              font-family: GmarketSansMedium;
              font-weight: 700;
              font-size: 25px;
              margin-top: 20px;
            "
          >
            성심스탬프
          </p>
          <p style="font-weight: 500; font-size: 15px">
            픽업박스를 이용할 때 마다 스탬프를 찍어드려요!
          </p>
        </div>
        <div class="stamp">
          <img src="../assets/Stamp-1.png" alt="Stamp">
        </div>
        <div class="complete" @click="submit()">
          <img src="../assets/button.png" alt="선택완료" />
          <p>EVENT</p>
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
.title {
  color: #826a4e;
  text-align: center;
}

.complete {
  text-align: center;
  position: relative;
}

.complete img {
  width: 200px;
}

.stamp img{
  width: 400px ;
  margin-bottom: 20px;
}

.complete p {
  position: absolute;
  top: 43%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
}
</style>
