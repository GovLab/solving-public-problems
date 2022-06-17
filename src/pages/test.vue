<template>
  <a
    class="twitter-timeline"
    href="https://twitter.com/TwitterDev?ref_src=twsrc%5Etfw"
    >Tweets by TwitterDev</a
  >

</template>

<script>
export default {
  data: () => ({}),
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(recaptchaScript);
  },
  methods: {},
};
</script>