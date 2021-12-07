<template>
  <div class="info-repository">
    <h1>{{ infos.login }}</h1>
    <p>name : {{ infos.name }}</p>
  </div>
</template>
<script>
export default {
  props: {
    infos: {
      type: Object,
      required: true
    }
  },
  name: 'InfoRepository',
}
</script>
