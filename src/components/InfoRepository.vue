<template>
  <div class="info-repository">
    <h1>Login : {{ informations.login }}</h1>
    <p>Name : {{ informations.name }}</p>
    <p>Public repos : {{ informations.public_repos }}</p>
    <p>Public gists : {{ informations.public_gists }}</p>
    <p>Blog : {{ informations.blog }}</p>
    <p>Twitter : {{ informations.twitter_username }}</p>
    <p>Location : {{ informations.location }}</p>
    <p>Followers : {{ informations.followers }}</p>
    <p>Following : {{ informations.following }}</p>
  </div>
</template>

<script>
export default {
  name: 'InfoRepository',

  props: {
    informations: {
      type: Object,
      required: true
    }
  },
}
</script>
