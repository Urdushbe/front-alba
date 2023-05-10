<template>
  <div class="row">

    <div class="d-block" style="padding-top: 46.56px"></div>
    <div class="bg-blur text-center border-top fixed-bottom">
        <div class="container">
            <div class="row">
                <div class="col">
                    <router-link class="nav-panel" to="/">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                            <path d="M23.121,9.069,15.536,1.483a5.008,5.008,0,0,0-7.072,0L.879,9.069A2.978,2.978,0,0,0,0,11.19v9.817a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V11.19A2.978,2.978,0,0,0,23.121,9.069ZM15,22.007H9V18.073a3,3,0,0,1,6,0Zm7-1a1,1,0,0,1-1,1H17V18.073a5,5,0,0,0-10,0v3.934H3a1,1,0,0,1-1-1V11.19a1.008,1.008,0,0,1,.293-.707L9.878,2.9a3.008,3.008,0,0,1,4.244,0l7.585,7.586A1.008,1.008,0,0,1,22,11.19Z"></path>
                        </svg>
                        <span> Home </span>
                    </router-link>
                </div>
                <div class="col">
                    <a class="nav-panel" href="https://uzfor.net/mail.php">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                            <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z"></path>
                        </svg>
                        <span> Mail </span>
                    </a>
                </div>
                <div class="col my-auto">
                    <router-link class="nav-panel" to="/job-add">
                        <svg xmlns="http://www.w3.org/2000/svg" style="width: 32px; height: 32px;" viewBox="0 0 24 24" class="icon" stroke-width="2" stroke="black" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 12h6"></path>
                            <path d="M12 9v6"></path>
                            <path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z"></path>
                        </svg>
                    </router-link>
                </div>
                <div class="col">
                    <a class="nav-panel" href="https://uzfor.net/chat">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon">
                            <path d="M24,16v5a3,3,0,0,1-3,3H16a8,8,0,0,1-6.92-4,10.968,10.968,0,0,0,2.242-.248A5.988,5.988,0,0,0,16,22h5a1,1,0,0,0,1-1V16a5.988,5.988,0,0,0-2.252-4.678A10.968,10.968,0,0,0,20,9.08,8,8,0,0,1,24,16ZM17.977,9.651A9,9,0,0,0,8.349.023,9.418,9.418,0,0,0,0,9.294v5.04C0,16.866,1.507,18,3,18H8.7A9.419,9.419,0,0,0,17.977,9.651Zm-4.027-5.6a7.018,7.018,0,0,1,2.032,5.46A7.364,7.364,0,0,1,8.7,16H3c-.928,0-1-1.275-1-1.666V9.294A7.362,7.362,0,0,1,8.49,2.018Q8.739,2,8.988,2A7.012,7.012,0,0,1,13.95,4.051Z"></path>
                        </svg>
                        <span> Chat </span>
                    </a>
                </div>
                <div class="col">
                    <router-link class="nav-panel position-relative" to="/profile">
                        <svg xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                        <span> Profile </span>
                    </router-link>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "FooterRow"
}
</script>

<style scoped>

</style>