<template>
  <RouterView />
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/notosanskr.css);
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

.notosanskr * {
 font-family: 'Noto Sans KR', sans-serif;
}

body {
  font-family: "Noto Sans KR", sans-serif;
  background-color: #F2F0E7;
}
</style>
