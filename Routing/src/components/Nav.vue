<template>
  <div>
    <ul class="nav nav-pills">
      <router-link to="/" tag="li" class="nav-link" active-class="active" exact>
        <a>Home</a>
      </router-link> 
      <router-link to="/trial" tag="li" class="nav-link" active-class="active">
        <a>Trial</a>
      </router-link>
      <router-link to="/user" tag="li" class="nav-link" active-class="active"> <!-- navigating dynamically -->
        <a>User</a>
      </router-link>
      <!-- <router-link to="/user/2" tag="li" class="nav-link" active-class="active">
        <a>User 2</a>
      </router-link> -->
    </ul><br><br>
  </div>
</template> 