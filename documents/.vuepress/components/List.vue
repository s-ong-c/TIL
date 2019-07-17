<template>
    <h1>스피너 끝<br>
    데이터 출력</h1>
</template>

<script>
export default {

}
</script>
<style scoped>
@import "https://fonts.googleapis.com/css?family=Gugi";

.infoContainer {
  text-align: right;
}
h1 {
  font-family: "Gugi", cursive;
  font-weight: 500;
  border-bottom: 17px solid #2981c7;
  word-break: keep-all;
  font-size: 4rem;
}
.name {
  font-weight: 900;
  font-size: 2rem;
}
ul {
  list-style: none;
  line-height: 1.5rem;
}

@media (max-width: 550px) {
  h1 {
    font-size: 4.4rem;
  }

  .name {
    font-size: 1.7rem;
  }
}

@media (max-width: 430px) {
  h1 {
    font-size: 3.4rem;
  }
}
</style>

