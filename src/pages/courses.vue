<script>
import { ref } from "vue";
import { Directus } from "@directus/sdk";

export default {
   data () {
    return {
      sitesData: [],
      aboutData: [],
      directus_thegovlab: new Directus("https://directus.theburnescenter.org/thegovlab"),
      directus_spp: new Directus("https://directus.theburnescenter.org/solving-public-problems"),
    }
  },
  created: function created() {
    this.fetchSites();
    this.fetchAbout();
  },
  methods: {
    fetchAbout() {
      self = this;
      this.directus_spp
        .items("about")
        .readByQuery({
           fields: ['*.*']
        }).then(data => {

  self.aboutData = data.data;
})
.catch(error => console.error(error));
    },
    fetchSites() {
      self = this;
      this.directus_thegovlab
        .items("sites")
        .readByQuery({
           fields: ['*.*','thumbnail.*']
        }).then((data) => {          
  self.indexData = data.data;
  let tempData = self.indexData.filter(items => (items.type.includes("course")));
  self.sitesData = tempData;
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

    <div id="intro" class="resource-hero">
      <h1>Additional Innovation Skills Programs</h1>
        <p v-if="aboutData[0].other_course_description">{{aboutData[0].other_course_description}}</p>
    </div>

    <div  class="site-row">
    
        <div v-for="site in sitesData" class="site-column">
            <a :href="site.url" class="site-item">
                <div class="thumb"
                    :style="{ backgroundImage: 'url(' + site.thumbnail.data.thumbnails[3].url+ ')' }"></div>
    
                <p class="name" target="_blank">{{site.name}}</p>
                <div class="site-tag">
                <p v-if="site.mode=='online'"><i class="fas fa-globe"></i>&nbsp ONLINE</p>
                <p v-if="site.mode=='in-person'"><i class="fas fa-users"></i>&nbsp IN-PERSON</p>
                </div>
                <div class="site-tag">
                    <p v-if="site.synchronous=='synchronous'"><i class="fas fa-sync-alt"></i>&nbsp SYNCHRONOUS</p>
                    <p v-if="site.synchronous=='asynchronous'"><i class="fas fa-spinner"></i>&nbsp ASYNCHRONOUS</p>
                </div>
                <div class="site-description" v-html="site.description"></div>
                
            </a>
        </div>
    </div>
    
    
    

  </section>
</template>