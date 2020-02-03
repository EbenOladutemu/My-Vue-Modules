<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Mutliple Elements</h1>
        <button class="btn btn-success" @click="isDanger" :class="danger" >Show Info</button><br><br>
        <hr>
         
        <transition name="shutter" mode="out-in">
          <p class="alert alert-info" v-if="!hide" key="info">Some Basic Info</p>
          <p class="alert alert-danger" v-else key="danger">Some Basic Alert</p>
        </transition>
        <transition name="slide" type="animation"> 
          <!-- use type attr to set which style (animation/transition) the element removal should depend on -->
          <p class="alert alert-warning" v-if="hide">Some Basic Warning</p>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      hide: false,
      danger: '',
      //mode: 'out-in'
    }
  },
  methods:{
    isDanger(){
      this.hide =! this.hide,
      this.danger = 'btn-danger'
    }
  }
}
</script>
	
<style>
  .fade-enter{
		opacity: 0;
	}
	.fade-enter-active{
    transition: opacity 1s;
	}
  .fade-leave{
		/* opacity: 1 */
	}
	.fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
	}

  .slide-enter{
    opacity: 0;
  }
  .slide-enter-active{
    animation: slide-in 1s ease-out forwards;
    transition: opacity 1s;
  }
  .slide-leave{

  }
  .slide-leave-active{
    animation: slide-out 1s ease-out forwards;
    
  }

  @keyframes slide-in {
    from{
      transform: translateY(30px)
    }
    to{
      transform: translateY(0)
    }
  }
  @keyframes slide-out {
    from{
      transform: translateY(0)
    }
    to{
      transform: translateY(30px);
      transition: opacity 3s;
      opacity: 0;
    }
  }

  .shutter-enter{

  }
  .shutter-enter-active{
    animation: shutter-in 1s ease-out forwards;
  }
  .shutter-leave{

  }
  .shutter-leave-active{
    animation: shutter-out 1s ease-out forwards;
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
