<script setup lang="ts">

</script>

<template>
  <header class="header">
    <div class="container">
      <a href="#" class="header__logo">
        <img src="/images/logo.svg" alt="" />
      </a>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  .header {
    background: #FF5B35;
    padding: 30px 38px;
    &__logo {
      max-width: 260px;
      height: auto;
      display: block;
      @media (max-width: 767px) {
        max-width: 164px;
        margin: 0 auto;
      }
    }
  }
</style>
