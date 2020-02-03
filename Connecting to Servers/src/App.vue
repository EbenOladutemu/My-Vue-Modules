<template>
  <div class="container">
    <h2 class="text-center">Using Firebase</h2>
    <div class="form-group">
      <label for="username">Username
        <input type="text" class="form-control" id="username" v-model="user.username">
      </label>
    </div>
    <div class="form-group">
      <label for="username">Email
        <input type="email" class="form-control" id="email" v-model="user.email">
      </label>
    </div>
    <div class="form-group">
      <label for="username">Password
        <input type="password" class="form-control" id="password" v-model="user.password">
      </label>
    </div>
    <div class="form-group">
      <label for="username" class="form-inline">
        <input type="submit" class="form-control btn-primary" id="submit" @click="submit">
      </label>
    </div>
    <div class="container">
      <h3>Posted Data</h3>
      <button class="btn btn-success" @click="fetchData">Get</button><br><br>
      <ul class="list-group">
        <li class="list-group-item" v-for="user in users" :key="user.key">
          {{user.username}} - {{user.email}} - {{user.password}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  components:{
    
  },
  data(){
    return{
      user:{
        username: '',
        email: '',
        password: ''
      },
      users: [],
      resource: {}
    }
  },
  methods:{
    submit(){
      // this.$http.post('data.json', this.user)
      //   .then(response => {
      //     console.log(response);
      //     swal({
      //       title: 'Data sent!',
      //       icon: "success",
      //     });
      //   },error => {
      //     console.log(error);
      //   });
      //this.resource.save({},this.user);
      this.resource.saveAlt(this.user) //creating custom resources
    },
    fetchData(){
      this.$http.get('data.json', this.user) //you can append a route to the url here e.g /allclasses
      .then(response => {
        return  response.json()
      })
      .then(data => {
        const userData = [];
        for(let userKey in data){
          userData.push(data[userKey]);
        }
        this.users = userData;
      });
    }
  },
  created(){
    const customActions = {
      saveAlt:{
        method: 'POST',
        url: 'second.json'
      }
    }
    this.resource = this.$resource('data.json', {}, customActions);
  }
}
</script>
	
<style>

</style>
