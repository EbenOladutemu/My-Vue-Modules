<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center">Animations</h1>
        <button class="btn btn-success" @click="isDanger" :class="danger" >Show Info</button><br><br>
        <hr>
        <!-- Animate element Onload -->
        <transition name="shutter" appear>
          <p class="alert alert-success">Some Basic Success</p>
        </transition> 
        <transition name="fade">
          <p class="alert alert-danger" v-if="hide">Some Basic Alert</p>
        </transition> 
        <transition name="shutter">
          <p class="alert alert-info" v-show="hide">Some Basic Info</p>
        </transition>
        <transition name="slide" type="animation"> 
          <!-- use type attr to set which style (animation/transition) the element removal should depend on -->
          <p class="alert alert-warning" v-if="hide">Some Basic Warning</p>
        </transition>
      </div>
    </div>
    <!-- <transition name="shutter" mode="out-in">
      <component :is="selectedComp"></component>
    </transition> -->

    <div class="row">
      <div class="col-">
        <button class="btn btn-secondary mr-2" @click="addItem">Add Item</button>
      </div>
      <div class="col-5">
        <input type="text" v-model="item" class="form-control">
      </div>
      <div class="col-12 mt-4">
        <p>Click on an item to delete it</p>
        <ul class="list-group"></ul>
        <transition-group name="shutter">         
            <li v-for="(food, i) in foods" :key="food" class="list-group-item" @click="removeItem(i)">{{i}}. {{food}}</li>
        </transition-group>
      </div>
    </div> 
  </div>
</template>

<script>
import Dynamic from "./components/DynamicNames";
import Multiple from "./components/MultipleElements";
import JSA from "./components/JSAnimations";
import Group from "./components/GroupItems";

export default {
  components:{
    appDynamic: Dynamic,
    appMultiple: Multiple,
    appJsa: JSA,
    appGroup: Group
  },
  data() {
    return {
      hide: false,
      danger: '',
      selectedComp: 'app-dynamic',
      foods: ['Rice', 'Beans', 'Yam', 'Bread', 'Garri'],
      item: ''
    }
  },
  methods:{
    isDanger(){
      this.hide =! this.hide,
      this.danger = 'btn-danger'
    },
    addItem(){
      this.foods.push(this.item),
      this.item = ''
    },
    removeItem(i){
      this.foods.splice(i,1)
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
