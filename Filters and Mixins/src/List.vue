<template>
	<div class="container">
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<input type="search" class="form-control" v-model="searchedText"><br>
				<button class="btn btn-success" @click="laptops.push('Samsung')">Add Item</button>
				<ul>
					<li v-for="laptop in searchedLatops" :key="laptop" v-text="laptop"></li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import { laptopsMixin } from "./mixin";

export default {
  mixins: [laptopsMixin],
  created(){
    console.log('Mixin created in component'); 
    /*Order of execution is Global Mixin => External Mixin => Code in the vue instance of the component (This would override the other 2 mixins) External Mixin would override Global Mixin.*/
  }
}
</script>

<style>

</style>