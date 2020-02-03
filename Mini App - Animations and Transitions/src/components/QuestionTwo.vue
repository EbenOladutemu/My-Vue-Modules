<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card text-center">
          <div class="card-header"><h5>100 divided by 14 * 3.5 is </h5></div>
          <div class="card-body">
            <div class="row">
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectOne" :class="redBtnOne">{{wrongTwo.one}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectTwo" :class="redBtnTwo">{{wrongTwo.two}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" @click="incorrectThree" :class="redBtnThree">{{wrongTwo.three}}</button>
              </div>
              <div class="col-3">
                <button class="btn btn-primary" v-b-modal.modal-1>{{answerTwo}}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div>
      <b-modal id="modal-1" hide-footer title="Question 2">
        <h3 class="my-4 text-center">Way to go Champ!!</h3>
        <b-button class="mt-3" variant="outline-success" block @click="correctTwo()">Proceed to Question 3</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>

export default {
props:['correctTwo', 'incorrectOne', 'incorrectTwo', 'incorrectThree',
       'redBtnOne', 'redBtnTwo', 'redBtnThree'],
data() {
  return {
    answerTwo: (100/16) * 3.5,
      wrongTwo:{
        one: 3.23,
        two: 64,
        three: 34.5
      }
    }
  }
}
</script>
	
<style>
li{
  cursor: pointer;
}
li:hover{
  background-color: lightcoral;
}
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
 