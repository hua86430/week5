<template>
  <nav
    id="navbar-top"
    class="navbar navbar-expand-lg navbar-light bg-light sticky-top py-2"
    :class="[classList.navInner, classList.bgInner]"
  >
    <div class="container">
      <router-link to="home" class="navbar-brand">Shoes Story</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-lg-0">
          <li class="nav-item my-auto">
            <router-link to="home" class="nav-link" aria-current="page">Home</router-link>
          </li>
          <li class="nav-item my-auto">
            <router-link to="products" class="nav-link" aria-current="page">Products</router-link>
          </li>
          <li class="nav-item ms-3">
            <router-link to="carts" class="nav-link" aria-current="page"
              ><i class="bi bi-cart3" style="font-size:2em"></i>
              <span>➠</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      classList: {
        navInner: '',
        bgInner: '',
      },
    };
  },

  mounted() {
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;
      const main = document.querySelector('#main');
      if (windowY > main.offsetTop) {
        this.classList = {
          navInner: 'navbar-dark',
          bgInner: 'bg-dark',
        };
      } else {
        this.classList = {
          navInner: 'navbar-light',
          bgInner: 'bg-light',
        };
      }
    });
  },
};
</script>

<style scoped>
#navbar-top {
  transition: 0.25s background-color;
}
</style>
