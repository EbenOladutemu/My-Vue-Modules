<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Mini App Math Quiz</h1>
        <transition name="shutter" appear mode="out-in">
          <component :is="currentComp" :correct="changeSuccess"
                     :correctTwo="changeSuccessTwo" :correctThree="changeSuccessThree" :correctFour="changeSuccessFour" :tryAgain="tryAgain"
                     :incorrectOne="incorrectOne" :incorrectTwo="incorrectTwo" :incorrectThree="incorrectThree"  :redBtnOne="redBtn.one" :redBtnTwo="redBtn.two" :redBtnThree="redBtn.three">
          </component>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import One from './components/QuestionOne'
import Two from './components/QuestionTwo'
import Three from './components/QuestionThree'
import Four from './components/QuestionFour'

export default {
components:{
  appQuestionOne: One,
  appQuestionTwo: Two,
  appQuestionThree: Three,
  appQuestionFour: Four
},
data() {
  return {
    currentComp: 'appQuestionOne',
    //greenBtn: '',
    redBtn:{
      one: '',
      two: '',
      three: ''
    }
  }
},
methods:{
  changeSuccess(){
      //this.greenBtn = 'btn-success',
      this.currentComp == 'appQuestionOne' ? this.currentComp = 'appQuestionTwo' : this.currentComp = 'appQuestionOne'
    },
    changeSuccessTwo(){
      this.currentComp == 'appQuestionTwo' ? this.currentComp = 'appQuestionThree' : this.currentComp = 'appQuestionTwo'
    },
    changeSuccessThree(){
      this.currentComp == 'appQuestionThree' ? this.currentComp = 'appQuestionFour' : this.currentComp = 'appQuestionThree'
    },
    changeSuccessFour(){
      this.currentComp == 'appQuestionFour'
    },
    tryAgain(){
      this.currentComp == 'appQuestionFour' ? this.currentComp = 'appQuestionOne' : this.currentComp = 'appQuestionFour'
    },
    incorrectOne(){
      this.redBtn.one = '',
      timeoutAlert();
    },
    incorrectTwo(){
      this.redBtn.two = '',
      timeoutAlert();
    },
    incorrectThree(){
      this.redBtn.three = '',
      timeoutAlert();
    }
  }
}
function timeoutAlert() {
  setTimeout(() => {
    alert('NAHHH! That\'s Incorrect! Try Again')
  }, 200);
}
</script>
	
<style>
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
