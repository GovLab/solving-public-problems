<script>
import { ref } from "vue";
import { Directus } from "@directus/sdk";
import TwitterWidgetsLoader from "twitter-widgets";

export default {
   data () {
    return {
      TeamData: [],
      directus: new Directus("https://directus.thegovlab.com/thegovlab/"),

    }
  },
  created: function created() {
    this.fetchTeam();
  },
  methods: {

    fetchTeam() {
      self = this;

       this.directus
        .items("projects")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          slug: 'solving-public-problems',
          fields: ['*.*','project_team.team_id.*','project_team.team_id.picture.*'],
        })
        .then((data) => {
            self.TeamData = data.data;
  console.log(self.TeamData);
        })
        .catch((error) => console.error(error));

    },
  
  /* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
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


  },
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
      <a class="top_logo" href="index.html"
        ><img src="../assets/the-govlab-logo-white.svg" alt="The GovLab"
      /></a>
          <a class="top_logo" href="index.html"><img src="../assets/the_burnes_center_logo_white.png" alt="The Burnes Center for Social Change"></a>


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

    <div id="home-page" style="position:absolute" @click="dismiss_menu()">
    
    <div id="intro" class="resource-hero">
      <h1>Team</h1>
    </div>

      <div class="team">

        <div class="team-image" v-for="item in TeamData[56].project_team">
          <div class="square" :style="{ backgroundImage: 'url(' + item.team_id.picture.data.thumbnails[3].url+ ')' }">
            <!-- <img :src="item.team_id.picture.data.full_url"> -->
          </div>
          <h4>{{item.team_id.name}}</h4>
          <h5>{{item.team_id.title}}</h5>
          <a :href="'https://www.thegovlab.org/team.html#'+item.team_id.slug" target="_blank"><span id="bio">BIO</span></a>
        </div>
  

  </div>
    
  </div>
    
    
    

  </section>
</template>