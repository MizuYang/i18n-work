<template>
  <div class="container p-5">
    <p>{{ $t('nav.chi') }}</p>
    <p>{{ $t('nav.eng') }}</p>
    <p>{{ $t('nav.personalCenter') }}</p>
    <p>{{ $t('nav.logout') }}</p>
    <div>
      <button type="button" class="btn btn-primary mx-2" @click="toggleLang('tw')">中文</button>
      <button type="button" class="btn btn-primary" @click="toggleLang('en')">EN</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleLang (labg) {
      this.$i18n.locale = labg
    }
  }
}
</script>
