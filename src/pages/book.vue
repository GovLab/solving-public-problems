<script>
import { ref } from "vue";
import { Directus } from "@directus/sdk";

export default {
  data() {
    return {
      aboutData: [],
      blurbData: [],
      syllabusData: [],
      peopleData: [],
      formatData: [],
      topicData: [],
      booksData: [],
      directus: new Directus("https://directus.theburnescenter.org/"),
      TeamData: [],
      resourceData: [],
      reviewData: [],
      formData: [],
      researchData: [],
      skillsData: [],
      surveyData: [],
      showMessage: true,
      index_active: 0,
      apiURL: "https://directus.theburnescenter.org/",
    };
  },

  created: function created() {
    this.formslug = window.location.href.split("/");
    this.formslug = this.formslug[this.formslug.length - 1];
    this.fetchAbout();
    this.fetchBlurb();
    this.fetchPeople();
    this.fetchTeam();
    this.fetchFormat();
    this.fetchTopic();
    this.fetchBook();
    this.fetchSurvey();
    this.fetchResources();
    // this.fetchForm();
    this.fetchSkills();
    this.fetchSyllabus();
    this.fetchResearch();
    this.toggleMessage();
    this.fetchPress();
    
  },
  mounted(){


  },

  methods: {
    toggleMessage(index) {
      console.log(self.TeamData);
      this.index_active = index;
      this.showMessage = !this.showMessage;
    },
    fetchPress() {
      self = this;

      this.directus
        .items("reviews")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*"],
        })
        .then((data) => {
          self.reviewData = data.data;
        })
        .catch((error) => console.error(error));
    },
    fetchBlurb() {
      self = this;

      this.directus
        .items("blurbs")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*"],
        })
        .then((data) => {
          self.blurbData = data.data;
        })
        .catch((error) => console.error(error));
    },
    fetchSkills() {
      self = this;

      this.directus
        .items("skills")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*"],
        })
        .then((data) => {
          self.skillsData = data.data;
        })
        .catch((error) => console.error(error));
    },

    fetchSurvey() {
      self = this;

      this.directus
        .items("surveys")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*"],
        })
        .then((data) => {
          self.surveyData = data.data;
        })
        .catch((error) => console.error(error));
    },
    fetchAbout() {
      self = this;

      this.directus
        .items("about")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*"],
        })
        .then((data) => {
          self.aboutData = data.data;
        })
        .catch((error) => console.error(error));
    },
    fetchPeople() {
      self = this;

      this.directus
        .items("people")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*"],
        })
        .then((data) => {
          data.data.sort(function (a, b) {
            var textA = a.last_name.toUpperCase();
            var textB = b.last_name.toUpperCase();
            return textA < textB ? -1 : textA > textB ? 1 : 0;
          });

          self.peopleData = data.data;
        })
        .catch((error) => console.error(error));
    },
    fetchTopic() {
      self = this;

      this.directus
        .items("course_topics")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*"],
        })
        .then((data) => {
          self.topicData = data.data;
        })

        .catch((error) => console.error(error));
    },
    fetchFormat() {
      self = this;

      this.directus
        .items("course_format")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*"],
        })
        .then((data) => {
          self.formatData = data.data;
        })

        .catch((error) => console.error(error));
    },
    fetchBook() {
      self = this;

      this.directus
        .items("book")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: [
            "*.*",
            "old_books.old_book_id.*",
            "old_books.old_book_id.thumbnail.*",
          ],
        })
        .then((data) => {
          self.booksData = data.data;
          console.log(self.booksData )
        })

        .catch((error) => console.error(error));
    },
    fetchResources() {
      self = this;

      this.directus
        .items("resources")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: [
            "*.*",
            "readings.reading_id.*",
            "videos.videos_id.*",
            "worksheet.worksheet_id.*",
          ],
        })
        .then((data) => {
          self.resourceData = data.data;
        })

        .catch((error) => console.error(error));
    },
    fetchForm() {
      self = this;

      this.directus
        .items("worksheet_form", {
          filter: {
            slug: self.formslug,
          },
          fields: [
            "*.*",
            "questions.question_id.*",
            "additional_resources.worksheet_resource_id.*",
          ],
        })
        .then((data) => {
          self.formData = data.data;
        })

        .catch((error) => console.error(error));
    },
    fetchSyllabus() {
      self = this;

      this.directus
        .items("syllabus")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*", "icons.*"],
        })
        .then((data) => {
          self.syllabusData = data.data;
        })

        .catch((error) => console.error(error));
    },
    fetchResearch() {
      self = this;

      this.directus
        .items("research")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: [
            "*.*",
            "publications.publications_id.*",
            "publications.publications_id.thumbnail.*",
            "research_results.research_results_id.*",
            "research_results.research_results_id.image.*",
          ],
        })
        .then((data) => {
          self.researchData = data.data;
        })

        .catch((error) => console.error(error));
    },
    fetchTeam() {
      self = this;
      const client = new Directus("https://directus.theburnescenter.org/thegovlab");

      client
        .items("projects")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: [
            "*.*",
            "project_team.team_id.*",
            "project_team.team_id.picture.*",
          ],
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

    <div id="home-page" style="position:absolute" @click="dismiss_menu()">
    <div id="intro" class="book-hero" :style="{ backgroundImage: 'url(' + directus._url+'assets/'+booksData[0].hero_image.filename_disk+ ')' }">

    </div>

    <div class="hero-button book">
      <a href="index.html" class="button">TAKE THE COURSE</a>
      <a :href="booksData[0].book_link" class="button">BUY THE BOOK</a>
      <a href="https://www.galaxiagutenberg.com/producto/resolver-problemas-publicos/" target="_blank" class="button">EN ESPAÑOL</a>
      <a href="#register" class="button">SIGN UP FOR UPDATES!</a>
    </div>
    <div class="about-book" v-html="booksData[0].about_the_book">

    </div>
    <div class="divider">
      <h1>Excerpt from the book</h1>
    </div>
    <div class="excerpt">

      <div class="excerpt-pdf">
        <div class="about-book" v-html="booksData[0].toc">

        </div>
        <iframe :src="directus._url+'assets/0e6c55a3-03f9-4b58-9d4f-3be70457085c'" scrolling="auto"
          type="application/pdf" width="300px" height="400px"></iframe>
      </div>

    </div>
    <div class="divider">
      <h1>Advance praise for Solving Public Problems</h1>
    </div>
    <div class="blurbs">
      <div class="blurb-item" v-for="blurb in blurbData">
        <p class="content">{{blurb.content}}</p>
        <p class="attribution">{{blurb.attribution}}</p>
      </div>
    </div>
    <div id="reviews" class="divider">
      <h1>In the News</h1>
    </div>
    <div class="blurbs">
      <div class="blurb-item" v-for="review in reviewData">
        <p class="content">{{review.excerpt}}</p>
        <p class="attribution">{{review.attribution}}</p>
        <a :href="review.url" target="_blank" class="review-link">Read the full article</a>
      </div>
    </div>
    <div class="divider">
      <h1>Other Books by Beth Simone Noveck</h1>
    </div>
    <div class="old-books">

      <a class="book-item" v-for="book in booksData[0].old_books" :href="book.old_book_id.url">

        <img :src="directus._url+'assets/'+book.old_book_id.thumbnail.filename_disk">
        <p>{{book.old_book_id.title}}</p>
        </a>
    </div>
    
  </div>
    
    
    

  </section>
</template>