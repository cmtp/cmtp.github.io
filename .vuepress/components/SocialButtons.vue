<template>
  <div>
    <div id="share-buttons">
      <!-- Facebook -->
      <a
        class="facebook"
        :href="'http://www.facebook.com/sharer.php?u=' + url"
        onclick="window.open(this.href, 'twitter-share','width=580,height=296');return false;"
      >
        <!-- <img src="https://simplesharebuttons.com/images/somacro/facebook.png" alt="Facebook"> -->
        <i class="fa fa-facebook" aria-hidden="true"></i>
      </a>

      <!-- Twitter -->
      <a
        class="twitter"
        :href="'https://twitter.com/share?url=' + url + '&amp;text=' + this.$page.title"
        onclick="window.open(this.href, 'facebook-share','width=580,height=296');return false;"
      >
        <!-- <img src="https://simplesharebuttons.com/images/somacro/twitter.png" alt="Twitter"> -->
        <i class="fa fa-twitter" aria-hidden="true"></i>
      </a>

      <!-- LinkedIn -->
      <a
        class="linkedin"
        :href="'http://www.linkedin.com/shareArticle?mini=true&amp;url=' + url"
        onclick="window.open(this.href, 'linkedin-share','width=580,height=296');return false;"
      >
        <!-- <img src="https://simplesharebuttons.com/images/somacro/linkedin.png" alt="LinkedIn"> -->
        <i class="fa fa-linkedin" aria-hidden="true"></i>
      </a>

      <!-- Google+ -->
      <a
        class="google"
        :href="'https://plus.google.com/share?url=' + url"
        onclick="window.open(this.href, 'googleplus-share','width=580,height=296');return false;"
      >
        <!-- <img src="https://simplesharebuttons.com/images/somacro/google.png" alt="Google"> -->
        <i class="fa fa-google" aria-hidden="true"></i>
      </a>

      <!-- Reddit -->
      <a
        class="reddit"
        :href="'http://reddit.com/submit?url=' + url + '&amp;title=' + this.$page.title"
        onclick="window.open(this.href, 'reddit-share','width=580,height=296');return false;"
      >
        <!-- <img src="https://simplesharebuttons.com/images/somacro/reddit.png" alt="Reddit"> -->
        <i class="fa fa-reddit-alien" aria-hidden="true"></i>
      </a>

      <!-- Email -->
      <a
        class="email"
        :href="'mailto:?Subject=' + this.$page.title + '&amp;Body=I%20saw%20this%20and%20thought%20of%20you!%20 ' + url"
      >
        <!-- <img src="https://simplesharebuttons.com/images/somacro/email.png" alt="Email"> -->
        <i class="fa fa-envelope" aria-hidden="true"></i>
      </a>

      <!-- Print -->
      <a href="javascript:;" onclick="window.print()" class="print">
        <!-- <img src="https://simplesharebuttons.com/images/somacro/print.png" alt="Print"> -->
        <i class="fa fa-print" aria-hidden="true"></i>
      </a>

      <!-- Pinterest -->
      <!-- <a
        href="javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('type','text/javascript');e.setAttribute('charset','UTF-8');e.setAttribute('src','http://assets.pinterest.com/js/pinmarklet.js?r='+Math.random()*99999999);document.body.appendChild(e)%7D)());"
      >
        <img src="https://simplesharebuttons.com/images/somacro/pinterest.png" alt="Pinterest">
      </a>-->
      <!-- Buffer -->
      <!-- <a href="https://bufferapp.com/add?url=https://simplesharebuttons.com&amp;text=Simple Share Buttons" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/buffer.png" alt="Buffer" />
      </a>-->
      <!-- Digg -->
      <!-- <a href="http://www.digg.com/submit?url=https://simplesharebuttons.com" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/diggit.png" alt="Digg" />
      </a>-->
      <!-- StumbleUpon-->
      <!-- <a href="http://www.stumbleupon.com/submit?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/stumbleupon.png" alt="StumbleUpon" />
      </a>-->
      <!-- Tumblr-->
      <!-- <a href="http://www.tumblr.com/share/link?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" />
      </a>-->
      <!-- VK -->
      <!-- <a href="http://vkontakte.ru/share.php?url=https://simplesharebuttons.com" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/vk.png" alt="VK" />
      </a>-->
      <!-- Yummly -->
      <!-- <a href="http://www.yummly.com/urb/verify?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons" target="_blank">
        <img src="https://simplesharebuttons.com/images/somacro/yummly.png" alt="Yummly" />
      </a>-->
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    url: function() {
      console.log(window.location.href);
      return window.location.href;
    },
    info: function() {
      return this.$page.path;
    }
  },
  methods: {
    share: function(event) {
      window.open(this.href, "facebook-share", "width=580,height=296");
      return false;
    }
  }
};
</script>
<style scoped>
#share-buttons {
  margin-top: 10px;
  display: flex;
  flex-flow: wrap;
}
#share-buttons img {
  width: 35px;
  padding: 5px;
  border: 0;
  box-shadow: 0;
  display: inline;
}
#share-buttons a {
  padding: 10px;
  width: 20px;
  border: 0;
  text-align: center;
  color: #ffffff;
}
.facebook {
  background: #3b5998;
}
.twitter {
  background: #55acee;
}
.linkedin {
  background: #4875b4;
}
.reddit {
  background: #ff4500;
}
.google {
  background: #d94734;
}
.email {
  background: grey;
}
.print {
  background: grey;
}
</style>
