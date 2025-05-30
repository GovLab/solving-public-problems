<script>
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
      submitted: false,
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
    this.fetchForm();
    this.fetchSkills();
    this.fetchSyllabus();
    this.fetchResearch();
    this.toggleMessage();
    this.fetchPress();
    
  },
  beforeMount ()
  {

  },
  mounted() {


    // twitter embed script initation
     let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);
    this.$nextTick(() => {
         this.fetchTwitter()
      });

  },

  methods: {
fetchTwitter()
    {
       window.twttr.widgets.load(
  document.getElementById("twitter-feed")
)
    },
    toggleMessage(index) {
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
        .items("worksheet_form")
        .readByQuery({
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
    },
  },
};
</script>


<template>
  <section id="home-page">
    <!-- Load an icon library to show a hamburger menu (bars) on small screens -->


    
      <div id="twitter-feed" >
      <a class="tweet-close" @click="dismiss_twitter()"
        ><i class="fas fa-times-circle"></i>CLOSE</a
      >
    <a class="twitter-timeline" 
    height="400"
    href="https://twitter.com/TheGovLab/timelines/1355920542042382340?ref_src=twsrc%5Etfw">Solving Public Problems - Curated tweets by TheGovLab</a> 
      </div>

    
  </section>
</template>