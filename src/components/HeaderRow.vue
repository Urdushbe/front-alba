<template>
  <div class="row">
    <div class="col p-0 mb-1">
      <!-- Navbar start -->
      <nav class="navbar navbar-expand-md navbaruz">
        <div class="container-fluid">
          <router-link class="navbar-brand btn" to="/">
            <ion-icon name="home-outline"></ion-icon>
          </router-link>

            <SideBar/>

          <button class="navbar-toggler activeuz" type="button" data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link class="nav-link active" aria-current="page" to="/login">Kirish</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link" to="/job-add">Ish joylash</router-link>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled">Arxiv</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Qidirish" aria-label="Search">
              <button class="btn btn-outline-warning activeuz" type="submit">Qidirish</button>
            </form>
          </div>
        </div>
      </nav>
      <!-- Navbar stop -->
    </div>
  </div>

</template>

<script>
import SideBar from "@/components/SideBar.vue";
export default {
  name: "HeaderRow",
    components: {SideBar},

}
</script>

<style scoped>

</style>