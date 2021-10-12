<template>
  <div class="loader">
    <span></span>
  </div>
</template>
<script>
export default {
  name: "wsComponentLoading",
};
</script>
<style scoped>
.loader {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 30vh auto 0 auto;
  border: 2px solid #f0f0f3;
  overflow: hidden;
  border-radius: 50px;
  box-shadow: 5px 5px 10px #a8a8a8, -5px -5px 10px #ffffff,
    inset -5px -5px 5px rgba(218, 218, 218, 0.2),
    inset 10px 10px 10px rgba(59, 59, 59, 0.4);
}

.loader:before {
  content: "";
  position: absolute;
  top: 25px;
  left: 25px;
  right: 25px;
  bottom: 25px;
  z-index: 10;
  background: #f0f0f3;
  border-radius: 30px;
  border: 1px solid #f0f0f3;
  box-shadow: inset -2px -2px 5px rgba(255, 255, 255, 0.2),
    inset 3px 3px 5px rgba(0, 0, 0, 0.5);
}

.loader span {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: linear-gradient(
    -225deg,
    #7e7e7e 0%,
    #7e7e7e 50%,
    #f0f0f3 100%
  );

  filter: blur(20px);
  z-index: -1;
  animation: animate 750ms linear infinite;
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>