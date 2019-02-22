<template>
  <footer>
    <div class="footer-content">
      <p>&copy; COPYRIGHT 2019, Christian Tola
        <br>This work is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0</a> International License. In other words, share generously but provide attribution.
      </p>
    </div>
    <div class="footer-links">
      <a href="https://twitter.com/ctola91">
        <i class="fa fa-2x fa-twitter"></i>
      </a>
      <a href="https://github.com/cmtp">
        <i class="fa fa-2x fa-github"></i>
      </a>
      <a href="https://www.linkedin.com/in/christian-marcelo-tola-pacheco-436171113/">
        <i class="fa fa-2x fa-linkedin"></i>
      </a>
    </div>
  </footer>
</template>
<style scoped>
footer {
  background: #000000;
  color: #ffffff;
  display: flex;
  flex-direction: column;
}
.footer-content {
  padding: 0px 15px;
  text-align: justify;
}
.footer-links {
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
}
.footer-links a {
  margin-right: 30px;
}
</style>
