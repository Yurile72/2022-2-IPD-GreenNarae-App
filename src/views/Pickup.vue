<template>
  <v-card
    max-width="448"
    height="900"
    class="mx-auto"
    color="#F2F0E7"
    flat
  >
    <v-layout>
      <v-dialog v-model="dialog" width="300">
        <v-card>
          <div style="text-align: center">
            <img
              src="../assets/QR-img.png"
              alt="qrcode imgage"
              width="200"
              style="margin: 80px 0 80px 0"
            />
          </div>
        </v-card>
      </v-dialog>
      <!-- 상단바 -->
      <SubBar />
      <!-- 팝업창 -->
      <QrPopup :popup-val="dialog" />

      <v-main>
        <!-- Write Here -->
        <v-container>
          <!-- 수령 방법 -->
          <v-row no-gutters>
            <v-col cols="4" style="margin: auto">
              <v-sheet class="qr-img pa-2 ma-3">
                <!-- <p>내용오오오옹</p> -->
                <!-- QR아이콘 -->
                <a @click="popupOpen()">
                  <!-- <a @pressed-"" v-on="on"></a> -->
                  <img src="../assets/QR-img.png" alt="QR-IMG" />
                </a>
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet
                class="pa-3 ma-4 elevation-2"
                style="background-color: #fbfaf8; border-radius: 15px"
              >
                <div class="wait" style="font-size: 13px">
                  <p>
                    <b>{{ user.name }}</b> 님의 메뉴가
                  </p>
                  <p>
                    <b style="color: #826a4e; font-size: 17px">201호</b>에서
                    기다리고 있습니다.
                  </p>
                </div>
              </v-sheet>
            </v-col>
          </v-row>
          <!-- QR 사용방법 -->
          <v-row no-gutters>
            <!-- <v-col cols="2">
              <v-sheet class="pa-5 ma-2 rounded-lg elevation-9">
                이미지
              </v-sheet>
            </v-col>
            <v-col>
              <v-sheet class="pa-5 ma-2">
                <p>1. 픽업박스는</p>
                <p>201번에서 기다리고 있습니다.</p>
              </v-sheet>
            </v-col> -->
            <v-col>
              <div id="pickup-step">
                <img src="../assets/pickup-step.png" alt="pickup-step-img" />
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <div class="info-btns">
                <a href="Stamp">
                <img src="../assets/go-stamp-btn.png" alt="stamp" />
              </a>
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <div class="info-btns">
                <img src="../assets/notice-btn.png" alt="notice" />
              </div>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col>
              <div class="info-btns">
                <img src="../assets/check-point-btn.png" alt="point" />
              </div>
            </v-col>
          </v-row>
        </v-container>
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
    dialog: false,
  }),
  methods: {
    popupOpen() {
      this.dialog = true;
    },
  },
};
</script>

<style scoped>
.qr-img img {
  /* width: 80px; */
  height: 50px;
  width: 50px;
  margin: 10px 0px 10px 0px;
}

.op-0 {
  opacity: none;
}

.wait {
  margin: 10px;
  /* margin-top: 10px;
  margin-bottom: 10px; */
}

.qr-img {
  text-align: center;
  border-radius: 20px;
}

.op-70 {
  opacity: 0.7;
}

#pickup-step {
  text-align: center;
  /* margin-top: 40px; */
  margin: 30px 0 20px 0;
}

#pickup-step img {
  width: 300px;
}

.info-btns img {
  width: 340px;
}
.info-btns {
  text-align: center;
}
</style>
