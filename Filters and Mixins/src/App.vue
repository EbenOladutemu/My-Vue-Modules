<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<h1>Filters & Mixins</h1>
				<p>{{greeting | upperCase | lowerCase}}</p>
				<input type="search" class="form-control" v-model="searchedText"><br>
				<button class="btn btn-success" @click="addLaptop">Add Item</button>
				<!-- Vue creates another copy of the instance in each component so that changes can be made only in component without affecting the other -->
				<ul>
					<li v-for="laptop in searchedLatops" :key="laptop" v-text="laptop"></li>
				</ul>
			</div>
		</div>
		<hr>
		<app-list></app-list>
	</div>
</template>

<script>
import List from "./List";
import { laptopsMixin } from "./mixin";

export default {
	components:{
		appList: List
	},
	data(){
		return{
			greeting: 'Good Morning Sir Eben'
		}
	},
	filters:{
		upperCase(value){
			return value.split('').reverse().join('').toUpperCase()
		}
	},
	mixins: [laptopsMixin], //Mixins intelligently get appended to the existing Vue instance without altering it
												//Data or Values in Mixins get overriden by components
}
</script>

<style>

</style>