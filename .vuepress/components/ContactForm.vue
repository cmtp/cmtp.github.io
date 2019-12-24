<template>
  <div class="contact-container">
    <div class="form">
      <div class="form-group">
        <label for="firstName">Your Name:</label>
        <input type="text" name="firstName" id="firstName" class="input-form" autocomplete="off" />
      </div>
      <div class="form-group">
        <label for="email">Your Email:</label>
        <input type="text" name="email" id="email" class="input-form" autocomplete="off" />
      </div>
      <div class="form-group">
        <label for="message">Your Message:</label>
        <textarea name="message" id="message" class="input-form" autocomplete="off" />
      </div>
      <div class="form-group">
        <button class="btn">Enviar</button>
      </div>
    </div>
    <div class="contact-info">
      <div>
        <h2>Sigueme en mis redes Sociales</h2>
        <div class="place">
          <p>
            <i class="fa fa-map-marker"></i> Cochabamba, Bolivia
          </p>
          <p>
            <i class="fa fa-envelope"></i> ctolapacheco@gmail.com
          </p>
          <div class="social-networks">
            <a href="https://twitter.com/ctola91" class="twitter">
              <i class="fa fa-2x fa-twitter"></i>
            </a>
            <a href="https://github.com/cmtp" class="github">
              <i class="fa fa-2x fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/christian-marcelo-tola-pacheco-436171113/"
              class="linkedin"
            >
              <i class="fa fa-2x fa-linkedin-square"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.social-networks {
  width: 80%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.social-networks a.twitter {
  color: #55acee;
}
.social-networks a.linkedin {
  color: #4875b4;
}
.social-networks a.github {
  color: #000000;
}
.contact-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.contact-info,
.form {
  width: 45%;
}
.form {
  display: flex;
  flex-wrap: wrap;
}
.form .form-group {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 10px;
}
.form .form-group label {
  font-weight: bold;
}
.form .form-group .input-form {
  width: 100%;
  padding: 0.5rem;
  border: solid 1px #cacaca;
  -webkit-box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
}
textarea#message {
  height: 70px;
}
.form .form-group .input-form:focus {
  outline: none;
  border: 1px solid #8a8a8a;
  background-color: #fefefe;
  -webkit-box-shadow: 0 0 5px #cacaca;
  box-shadow: 0 0 5px #cacaca;
  -webkit-transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  transition: border-color 0.25s ease-in-out, -webkit-box-shadow 0.5s;
  transition: box-shadow 0.5s, border-color 0.25s ease-in-out,
    -webkit-box-shadow 0.5s;
}
.btn {
  background-color: #1779ba;
  color: #fefefe;
  vertical-align: middle;
  margin: 0 0 1rem 0;
  padding: 0.85em 1em;
  border: 1px solid transparent;
}
.btn:hover {
  background-color: #14507a;
  color: #fefefe;
  text-decoration: none;
}

@media screen and (max-width: 520px) {
  .contact-info,
  .form {
    width: 100%;
  }
}
</style>