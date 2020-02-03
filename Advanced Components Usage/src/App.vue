<template>
    <div class="container">
			<button @click="selected = 'appExample'">Example</button>
			<button @click="selected = 'appAnother'">Another</button>
			<button @click="selected = 'appCheeksy'">Cheeksy</button>
			<hr>
			This is the {{selected}}
        <div class="row">
            <div class="col-xs-12">
							<keep-alive>
								<component :is="selected">
									<p>Something has to be here</p>
								</component>
							</keep-alive>
							

              <!-- <app-example welcome="Welcome to the new World!">	
								<h2 slot="eben">My name is {{name}}!</h2>
								<p slot="glory">Hey guys!!!!</p>
							</app-example> -->
            </div>
        </div>
    </div>
</template>

<script>
import Example from './components/Example';
import Another from './components/Another';
import Cheeksy from './components/Cheeksy';

	export default {
		data(){
			return{
				name: '	Eben',
				selected: 'appExample'
			}
		},
		components: {
			appExample: Example,
			appAnother: Another,
			appCheeksy: Cheeksy
		} 
}
</script>

<style scoped>
	p{
    color: rgb(240, 110, 3)
  }
</style>
