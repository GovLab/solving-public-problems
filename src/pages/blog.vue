<script>
import { ref } from "vue";
import { Directus } from "@directus/sdk";


export default {

  data () {
    return {
      blogData: [],
      directus: new Directus("https://directus.theburnescenter.org"),
      apiURL: 'https://directus.theburnescenter.org'
    }
  },
  created: function created() {
    this.fetchPosts();
  },
  methods: {

    fetchPosts() {
      self = this;
    
    
     this.directus
        .items("blog")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          sort:"-created_on",
          fields: ["*.*"],
        })
        .then((data) => {
          self.fullData = data.data;

          // Safely filter items where categories exists and is an array
          let tempData = Array.isArray(self.fullData)
            ? self.fullData.filter(
                item =>
                  Array.isArray(item.categories) &&
                  item.categories.includes('spp')
              )
            : [];

          console.log(tempData, "tempData");
          self.blogData = tempData;
        })
        .catch((error) => console.error(error));
    
    },
    myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  },
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
  dismiss_menu() {
    var x = document.getElementById("myLinks");
    x.style.display = "none";
  },
  dismiss_twitter() {
    var x = document.getElementById("twitter-feed");
    x.style.display = "none";
  },
   confirm() {
    var x = document.getElementById("thankyou");

    x.style.display = "block";

  },
 submit() {
    var x = document.getElementById("thankyou");
    x.style.display = "block";
  }



  }
};
</script>


<template>
  <section>
    <!-- Load an icon library to show a hamburger menu (bars) on small screens -->

   <div class="topnav">
      <div class="menu-bars">
        <div class="bar-wrap">
          <a href="javascript:void(0);" class="icon" @click="myFunction()">
            <i class="fa fa-bars"></i>
          </a>
        </div>
      </div>
      <a class="top_logo" href="/"
        ><img src="../assets/the-govlab-logo-white.svg" alt="The GovLab"
      /></a>
          <a class="top_logo" href="/"><img src="../assets/the_burnes_center_logo_white.png" alt="The Burnes Center for Social Change"></a>


      <!-- Navigation links (hidden by default) -->

      <div class="lang-select">
        <a
          target="_blank"
          href="https://twitter.com/search?q=YourEducationYourVoice&src=typed_query"
          ><i class="e-social-media-item fa fa-twitter" aria-hidden="true"></i
          ><b>#YourEducationYourVoice</b></a
        >
      </div>
    </div>
    <div id="myLinks">
      <div class="menu-items">
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="/">Home</a>
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="https://course.solvingpublicproblems.org">Take the Course</a>
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="book">Read the Book</a>
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="resources">Resources</a>
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="blog">Blog</a>
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="research">See the Research</a>
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="courses">Other Courses</a>
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="https://www.thegovlab.org/about.html">About the GovLab</a>
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="http://thegovlab.org/beth-simone-noveck.html"
            >About Beth Simone Noveck</a
          >
        </div>
        <div class="menu-sub" @click="dismiss_menu()">
          <a href="team">Team</a>
        </div>
      </div>
    </div>

    <div id="site-page" @click="dismiss_menu()">
    <div id="intro" class="resource-hero">
      <h1>Blog</h1>
    </div>

<div class="blog-page">
  <p v-if="blogData.length == 0">Coming soon!</p>
  <div class="posts" v-for="post in blogData">
    <div class="title">
      {{post.title}}
    </div>
    <div class="description">
      <div v-html="post.excerpt"></div>
    </div>
    <div class="read-more">
      <a :href="'http://blog.thegovlab.org/post/'+ post.slug" target="_blank">Read More</a>
    </div>
  </div>
  </div>
  </div>
    
    
    

  </section>
</template>