<template>
  <div class="container">
    <h2 class="text-center">Routing in a Vue App</h2>
      <app-nav></app-nav>
      <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'

export default {
  components:{
    appNav: Nav
  }
}
</script>
	
<style>
a{
  color: #000!important;
  text-decoration: none!important;
}

.shutter-enter-active{
  animation: shutter-in 1s ease-out forwards;
}
.shutter-leave-active{
  animation: shutter-out 1s ease-out forwards;
  position: absolute;
}
.shutter-move{
  transition: transform 1s;
}
@keyframes shutter-in {
  from{
    transform: rotateX(90deg)
  }
  to{
    transform: translateY(0)
  }
}
@keyframes shutter-out {
  from{
    transform: translateY(0)
  }
  to{
    transform: rotateY(-90deg)
  }
}
</style>
