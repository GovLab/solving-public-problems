<script>
import { ref } from "vue";
import { Directus } from "@directus/sdk";
import TwitterWidgetsLoader from "twitter-widgets";

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
      directus: new Directus("https://directus9-dev.thegovlab.com/"),
      TeamData: [],
      resourceData: [],
      reviewData: [],
      formData: [],
      researchData: [],
      skillsData: [],
      surveyData: [],
      showMessage: true,
      index_active: 0,
      apiURL: "https://directus.thegovlab.com/",
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
  TwitterWidgetsLoader.load();

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
      const client = new Directus("https://directus.thegovlab.com/thegovlab");

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
    

    <div class="research-hero">
      <h1>Research</h1>
      <!-- <div v-html="researchData[0].take_survey"></div> -->
    </div>
    <!-- <div class="hero-button">
      <a href="" class="button inverted-color">See the results</a>
    </div> -->
    <div class="research-text-section">
      <h2>Why Survey</h2>
      <div v-html="researchData[0].why_survey"></div>
    </div>
    <div class="research-survey-section">
      <div class="about-survey-section" v-html="researchData[0].about_survey"></div>
      <div class="survey-card-row">
        <div class="survey-card-col" v-for="survey in surveyData">
          <div class="survey-card">
            <p class="survey-title">{{survey.title}}</p>
            <p class="survey-year">{{survey.year}}</p>
            <p class="survey-year">{{survey.audience}}</p>
            <p class="survey-year" v-if="survey.survey_participants">N = {{survey.survey_participants}}</p>
            <div class="survey-tags" v-if="survey.survey_parts != ''">
              <p class="survey-tag-1" v-if="survey.survey_parts[0] != null">Skills Use</p>
              <p class="survey-tag-2" v-if="survey.survey_parts[1] != null">Innovation Environment</p>
              <p class="survey-tag-3" v-if="survey.survey_parts[2] != null">Skills Training</p>
            </div>
            <p v-if="survey.sponsor" class="survey-sponser-title">Sponsered By:</p>
            <div class="survey-sponser" v-html="survey.sponsor"></div>
            <a v-if="survey.survey_link" :href="survey.survey_link"  target="_blank" class="survey-button">See Survey</a>
            <a v-if="survey.survey_results" class="survey-button">See Results</a>
          </div>
        </div>
      </div>
    </div>
    <div style="padding-bottom:0" class="research-text-section">
      <h2>Findings</h2>
      <div v-html="researchData[0].findings"></div>
      <!-- <a class="survey-button">See Full Findings</a> -->
    </div>
    <div style="padding-bottom:0"  class="research-text-section">
      <h2>The Skills</h2>
      <div v-html="researchData[0].the_skills"></div>
    </div>
    <div style="padding-bottom:0" class="research-text-section">
      <div class="skills-item" v-for="skills in skillsData">
        <p class="skills-item-title">{{skills.title}}</p>
        <div class="skills-item-description" v-html="skills.description"></div>
      </div>
    </div>
    <div class="research-text-section">
      <h2>Publications</h2>
      <div class="publications">
        <a class="publication-item" v-for="ritem in researchData[0].publications" :href="ritem.publications_id.url" target="_blank">
          
          <div class="pub-thumb"
          :style="{ backgroundImage: 'url(' + directus._url+'assets/'+ritem.publications_id.thumbnail.filename_disk+ ')' }"></div>
  
          <div class="pub-title">
            {{ritem.publications_id.title}}
          </div>
        </a>
      </div>
    </div>
  
    
  </div>
    
    
    

  </section>
</template>