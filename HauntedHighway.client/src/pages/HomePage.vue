<template>
  <div class="container-fluid bg-image height">
    <div class="row justify-content-center">
      <div class="col-12 text-center">
        <h1 class="glitch mt-5"
            data-text="Haunted Highway"
        >
          Haunted Highway
        </h1>
        <span class="sub ">Hauntfest</span>
      </div>
    </div>
    <div class="row align-items-center">
      <div class="col-12 text-center">
        <router-link :to="{name: 'About'}" class="btn">
          <a href="#" class="arrow-container">
            <div class="arrow"></div>
            <div class="arrow"></div>
            <div class="arrow"></div>
          </a>
        </router-link>
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

.height{
  height: 80vh;
}

// <---------------------------------------Arrow css------------------------------------------------------>
.arrow-container {
  display: block;
  width: 100px;
  height: 100px;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%) rotateZ(0deg);
}
.arrow-container:hover {
  cursor: pointer;
}
.arrow-container:hover .arrow {
  top: 50%;
}
.arrow-container:hover .arrow:before {
  transform: translate(-50%, -50%) rotateZ(-30deg);
}
.arrow-container:hover .arrow:after {
  transform: translate(-50%, -50%) rotateZ(30deg);
}

.arrow {
  position: absolute;
  left: 50%;
  transition: all 0.4s ease;
}
.arrow:before, .arrow:after {
  transition: all 0.4s ease;
  content: "";
  display: block;
  position: absolute;
  transform-origin: bottom right;
  background: #fff;
  width: 4px;
  height: 50px;
  border-radius: 10px;
  transform: translate(-50%, -50%) rotateZ(-45deg);
  background: red;
}
.arrow:after {
  transform-origin: bottom left;
  transform: translate(-50%, -50%) rotateZ(45deg);
}
.arrow:nth-child(1) {
  opacity: 0.3;
  top: 35%;
}
.arrow:nth-child(2) {
  opacity: 0.6;
  top: 55%;
}
.arrow:nth-child(3) {
  opacity: 0.9;
  top: 75%;
}

//  <----------------------------------Background css ------------------------------------------------->

.bg-image{
   background: linear-gradient(rgba(10, 10, 10, 0.6), rgba(0, 0, 0, 0.5)), repeating-linear-gradient(0, transparent, transparent 2px, black 3px, black 3px), url("https://images7.alphacoders.com/929/thumb-350-929881.jpg");
  background-size: cover;
  background-position: center;
}
.sub {
  color: red;
}

.glitch {
  position: relative;
  color: white;
  // font-size: 4em;
  // letter-spacing: 0.5em;
  /* Animation provies a slight random skew. Check bottom of doc
  for more information on how to random skew. */
  animation: glitch-skew 1s infinite linear alternate-reverse;
}
.glitch::before {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: 2px;
  text-shadow: -2px 0 #ff00c1;
  /* Creates an initial clip for our glitch. This works in
  a typical top,right,bottom,left fashion and creates a mask
  to only show a certain part of the glitch at a time. */
  clip: rect(44px, 450px, 56px, 0);
  /* Runs our glitch-anim defined below to run in a 5s loop, infinitely,
  with an alternating animation to keep things fresh. */
  animation: glitch-anim 5s infinite linear alternate-reverse;
}
.glitch::after {
  content: attr(data-text);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  left: -2px;
  text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
  animation: glitch-anim2 1s infinite linear alternate-reverse;
}

/* Creates an animation with 20 steaps. For each step, it calculates
a percentage for the specific step. It then generates a random clip
box to be used for the random glitch effect. Also adds a very subtle
skew to change the 'thickness' of the glitch.*/
@keyframes glitch-anim {
  0% {
    clip: rect(16px, 9999px, 90px, 0);
    transform: skew(0.45deg);
  }
  5% {
    clip: rect(36px, 9999px, 12px, 0);
    transform: skew(0.07deg);
  }
  10% {
    clip: rect(8px, 9999px, 20px, 0);
    transform: skew(0.16deg);
  }
  15% {
    clip: rect(60px, 9999px, 22px, 0);
    transform: skew(0.95deg);
  }
  20% {
    clip: rect(21px, 9999px, 96px, 0);
    transform: skew(0.46deg);
  }
  25% {
    clip: rect(74px, 9999px, 28px, 0);
    transform: skew(0.91deg);
  }
  30% {
    clip: rect(23px, 9999px, 98px, 0);
    transform: skew(0.31deg);
  }
  35% {
    clip: rect(15px, 9999px, 83px, 0);
    transform: skew(0.94deg);
  }
  40% {
    clip: rect(63px, 9999px, 92px, 0);
    transform: skew(0.5deg);
  }
  45% {
    clip: rect(84px, 9999px, 98px, 0);
    transform: skew(0.13deg);
  }
  50% {
    clip: rect(4px, 9999px, 50px, 0);
    transform: skew(0.64deg);
  }
  55% {
    clip: rect(23px, 9999px, 37px, 0);
    transform: skew(0.77deg);
  }
  60% {
    clip: rect(48px, 9999px, 53px, 0);
    transform: skew(0.96deg);
  }
  65% {
    clip: rect(96px, 9999px, 57px, 0);
    transform: skew(0.89deg);
  }
  70% {
    clip: rect(84px, 9999px, 67px, 0);
    transform: skew(0.72deg);
  }
  75% {
    clip: rect(3px, 9999px, 64px, 0);
    transform: skew(1deg);
  }
  80% {
    clip: rect(6px, 9999px, 80px, 0);
    transform: skew(0.35deg);
  }
  85% {
    clip: rect(60px, 9999px, 88px, 0);
    transform: skew(0.63deg);
  }
  90% {
    clip: rect(15px, 9999px, 61px, 0);
    transform: skew(0.61deg);
  }
  95% {
    clip: rect(66px, 9999px, 89px, 0);
    transform: skew(0.99deg);
  }
  100% {
    clip: rect(76px, 9999px, 43px, 0);
    transform: skew(0.71deg);
  }
}
@keyframes glitch-anim2 {
  0% {
    clip: rect(68px, 9999px, 8px, 0);
    transform: skew(0.29deg);
  }
  5% {
    clip: rect(100px, 9999px, 60px, 0);
    transform: skew(0.17deg);
  }
  10% {
    clip: rect(5px, 9999px, 66px, 0);
    transform: skew(0.17deg);
  }
  15% {
    clip: rect(75px, 9999px, 88px, 0);
    transform: skew(0.5deg);
  }
  20% {
    clip: rect(31px, 9999px, 57px, 0);
    transform: skew(0.84deg);
  }
  25% {
    clip: rect(53px, 9999px, 94px, 0);
    transform: skew(0.44deg);
  }
  30% {
    clip: rect(98px, 9999px, 78px, 0);
    transform: skew(0.22deg);
  }
  35% {
    clip: rect(2px, 9999px, 32px, 0);
    transform: skew(0.03deg);
  }
  40% {
    clip: rect(63px, 9999px, 39px, 0);
    transform: skew(0.03deg);
  }
  45% {
    clip: rect(73px, 9999px, 40px, 0);
    transform: skew(0.82deg);
  }
  50% {
    clip: rect(12px, 9999px, 34px, 0);
    transform: skew(0.44deg);
  }
  55% {
    clip: rect(8px, 9999px, 97px, 0);
    transform: skew(0.84deg);
  }
  60% {
    clip: rect(59px, 9999px, 100px, 0);
    transform: skew(0.66deg);
  }
  65% {
    clip: rect(12px, 9999px, 97px, 0);
    transform: skew(0.2deg);
  }
  70% {
    clip: rect(29px, 9999px, 64px, 0);
    transform: skew(0.54deg);
  }
  75% {
    clip: rect(9px, 9999px, 39px, 0);
    transform: skew(0.69deg);
  }
  80% {
    clip: rect(65px, 9999px, 4px, 0);
    transform: skew(0.28deg);
  }
  85% {
    clip: rect(5px, 9999px, 53px, 0);
    transform: skew(0.18deg);
  }
  90% {
    clip: rect(62px, 9999px, 33px, 0);
    transform: skew(0.52deg);
  }
  95% {
    clip: rect(80px, 9999px, 76px, 0);
    transform: skew(0.98deg);
  }
  100% {
    clip: rect(83px, 9999px, 72px, 0);
    transform: skew(0.99deg);
  }
}
@keyframes glitch-skew {
  0% {
    transform: skew(4deg);
  }
  10% {
    transform: skew(0deg);
  }
  20% {
    transform: skew(-2deg);
  }
  30% {
    transform: skew(-3deg);
  }
  40% {
    transform: skew(0deg);
  }
  50% {
    transform: skew(2deg);
  }
  60% {
    transform: skew(-2deg);
  }
  70% {
    transform: skew(2deg);
  }
  80% {
    transform: skew(4deg);
  }
  90% {
    transform: skew(1deg);
  }
  100% {
    transform: skew(-3deg);
  }
}

</style>
