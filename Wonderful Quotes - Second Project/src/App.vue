<template>
	<div class="container">
		<app-progress :maxQuotes="maxQ" :count="quotesArray.length"></app-progress>

		<app-add-quote :quotesArr="quotesArray" :count="countQ" :max="maxReached"></app-add-quote>
		<app-quotes :quotes="quotesArray"></app-quotes>

		<div class="alert alert-info text-center mt-4">Click on a Quote to delete it</div>
	</div>
</template>

<script>
import Quotes from './components/Quotes'
import AddQuote from './components/AddQuote'
import Progress from './components/Progress'

export default {
	components:{
		appQuotes: Quotes,
		appAddQuote: AddQuote,
		appProgress: Progress
		
	},
	data(){
		return{
			quotesArray: ['Default Quote'],
			countQ: 1,
			maxQ: 10,
			disableBtn: false
		}
	},
	methods:{
		maxReached(){
			if (this.countQ >= 10){
				this.disableBtn = true
			}		
		}
	}
}
</script>

<style scoped>

</style>