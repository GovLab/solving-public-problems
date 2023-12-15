<script>

import { ref } from "vue";
import { Directus } from "@directus/sdk";
import CardComponent from './card.vue';
// import card from '../assets/'

export default{
  components: {
    'card-component': CardComponent
  },
  data() {
    return {
      aboutData: [],
      currentData: [],
      filterSlug: this.getSlugFromUrl(),
      directus: new Directus("https://content.thegovlab.com/"),
      instructorData: [],
      apiURL: "https://content.thegovlab.com/",
    };
  },

  created: function created() {
    this.formslug = window.location.href.split("/");
    this.formslug = this.formslug[this.formslug.length - 1];

    this.fetchAbout();
    this.fetchInstructors();
    // this.fetchGallery();
  },

  methods: {

    filteredData() {
      console.log(this.filterSlug)

      return this.aboutData.find(item => item.slug.toLowerCase() === this.filterSlug.toLowerCase());
    },

    getSlugFromUrl() {
      return this.$route.params.slug;
    },

    fetchAbout() {
      self = this;

      this.directus
        .items("SPP_CoursePartner")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*","instructors.Spp_CoursePartner_Instructors_id.*","instructors.Spp_CoursePartner_Instructors_id.first_name"],
        })
        .then((data) => {
          console.log(data)
          self.aboutData = data.data;

          this.currentData = this.filteredData();
          console.log(this.currentData)
        })
        .catch((error) => console.error(error));
    },

    fetchInstructors() {
      self = this;
      const client = new Directus("https://content.thegovlab.com/");

      client
        .items("SPP_CoursePartner")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: [
            "*.*",
            "instructors.Spp_CoursePartner_Instructors_id.*",
          ],
        })
        .then((data) => {
          console.log(data.data)
          self.instructorData = data.data;

          this.currentData = this.filteredData();

          console.log(this.currentData)
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
    },
  }
}
</script>

<template>
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
      <a class="top_logo" href="/"
        ><img
          src="../assets/the_burnes_center_logo_white.png"
          alt="The Burnes Center for Social Change"
      /></a>

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
          <a href="partner">Course Partners</a>
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
   

    
      <!-- <div id="twitter-feed" >
      <a class="tweet-close" @click="dismiss_twitter()"
        ><i class="fas fa-times-circle"></i>CLOSE</a
      >
        <twitter-comp class="blog-twitter-section"></twitter-comp>
      </div> -->

<section id="home-page">
    <div @click="dismiss_menu()" >
      <div id="partner_intro" class="partner_hero" >
        <h1>
          SOLVING PUBLIC PROBLEMS
        </h1>
        <h2>MOROCCO</h2>
        <h4 v-html="currentData.about"></h4>
        <img src="directusUrl + 'assets/' + currentData?.logo?.filename_disk "/>
      </div>

      <div>

      </div>

      <div id="about_course" class="more_about_course">
        <h1>MORE ABOUT THE COURSE</h1>
        <p v-html="currentData.about_course"></p>
      </div>

      <div class="course_curriculum">
        <h1>COURSE CURRICULUM</h1>
        <p v-html="currentData.course_curriculum"></p>
      </div>
      </div>

      <!-- <div class="instructors">
        <div class="instructorContainer">
    <div v-for="instructor_item in instructorData">
        <card-component 
        :fname="Mark"
        :lname="Klein"
        :work_location= "School Collective Intelligence"
        :title="Affiliate Professor"
        :imgUrl = "../assets/lastIndex.png"
        />
    </div>
    </div>
      </div> -->


      
  </section>
</template>