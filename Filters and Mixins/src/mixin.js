export const laptopsMixin = {
  data(){
		return{
			laptops: ['Dell', 'HP', 'Lenovo', 'Acer', 'Toshiba'],
      searchedText: '',
			greeting: 'Yooooo',
			list: 'Mac'
		}
	},
	computed:{
		searchedLatops(){
			return this.laptops.filter((element) => {
				return element.match(this.searchedText);
			})
		}
  },
	methods:{
		addLaptop(){
			this.laptops.push(this.list)
		}
	},
  created(){
    console.log('Mixin Created externally')
  }
}