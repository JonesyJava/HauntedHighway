<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="width: 0;height: 0;">
          <defs>
            <filter id="goo">
              <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
              <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>

        <h1 class="title text-center">
          Haunted Highway
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <span class="drop"></span>
          <!-- <span class="drop"></span> -->
        </h1>
      </div>
    </div>
    <div class="row height align-items-center">
      <div class="col-12 text-center">
        <button class="btn btn-warning w-25">
          Login
        </button>
      </div>
      <div class="col-12 text-center ">
        <button class="btn btn-danger w-25">
          Create Account
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.title {
  font-weight: 800;
  font-size: 6vw;
  margin: 0;
  // filter: url(#goo);
  position: relative;
  font-family: 'Nosifer', cursive;
  color: IndianRed;
  text-transform: uppercase;
}

.height{
  height: 60vh;
}

.drop {
  width: .1em; height: .1em;
  border-radius: 0 100% 100% 100%;
  background-color: currentColor;
  position: absolute;
  top: 72%;
  animation: drop 3s infinite both;

  &:nth-child(1) {
    left: 14%;
  }

  &:nth-child(2) {
    left: 39%;
    animation-delay: -.4s;
  }

  &:nth-child(3) {
    left: 55%;
    animation-delay: -1.5s;
  }

  &:nth-child(4) {
    left: 82%;
    animation-delay: -.8s;
  }

  &:nth-child(5) {
    left: 95.5%;
    animation-delay: -1.3s;
  }
}

@keyframes drop {
  0% {
    transform: translateY(0) scaleX(.85) rotate(45deg);
    animation-timing-function: ease-out;
  }
  60% {
    transform: translateY(120%) scaleX(.85) rotate(45deg);
    animation-timing-function: ease-in;
  }
  80%, 100% {
    transform: translateY(60vh) scaleX(.85) rotate(45deg);
  }
}

</style>
