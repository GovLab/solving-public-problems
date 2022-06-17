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
      directus: new Directus("https://directus9-dev.thegovlab.com/"),
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
  beforeMount()
  {
let twitterScript = document.createElement("script");
    twitterScript.setAttribute(
      "src",
      "https://platform.twitter.com/widgets.js"
    );
    document.head.appendChild(twitterScript);
  },
  mounted() {

 window.twttr.widgets.load(
  document.getElementById("twitter-feed")
);
console.log(window.twttr)
    // twitter embed script initation
     


  },

  methods: {
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

    <!-- Top Navigation Menu -->
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
      <a class="top_logo" href="index.html"
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
   

    
      <div id="twitter-feed" >
      <a class="tweet-close" @click="dismiss_twitter()"
        ><i class="fas fa-times-circle"></i>CLOSE</a
      >
         <a
        class="twitter-timeline"
        data-height="400"
        href="https://twitter.com/TheGovLab/timelines/1355920542042382340?ref_src=twsrc%5Etfw"
        >Solving Public Problems - Curated tweets by TheGovLab</a
      >
      </div>


    <div @click="dismiss_menu()">
      <div id="intro" class="hero">
        <h1>
          <span id="blue">SOLVING</span><br /><span id="black"
            >PUBLIC PROBLEMS</span
          >
        </h1>
        <img src="../assets/spp-logo.svg" />
        <h4>{{ aboutData[0].subtitle }}</h4>
      </div>

      <div class="hero-button">
        <a href="http://course.solvingpublicproblems.org" class="button"
          >TAKE THE COURSE</a
        >
        <a href="book.html" class="button">READ THE BOOK</a>
        <a href="#register" class="button">SIGN UP FOR UPDATES!</a>
      </div>

      <div class="about-section">
        <div class="vid-desc">
          <div class="video">
            <div class="video-container">
              <div style="padding: 56.25% 0 0 0; position: relative">
                <iframe
                  :src="
                    'https://player.vimeo.com/video/' +
                    aboutData[0].trailer_video_id +
                    '?title=0&byline=0&portrait=0'
                  "
                  style="
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                  "
                  frameborder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="about-text" v-html="aboutData[0].about_text"></div>
      </div>

      <div class="divider">
        <h1>What we will cover</h1>
      </div>
      <div class="topics">
        <div class="syllabus-section">
          <div
            class="syllabus-item"
            v-for="(module_item, index) in syllabusData"
          >
            <button
              @click="toggleMessage(index)"
              class="accordion"
              v-if="module_item.status == 'published'"
            >
              <div class="acc-img">
                <img
                  class="module-icon"
                  :src="
                    directus.url + 'assets/' + module_item.icons.filename_disk
                  "
                />
                <h2>
                  <span id="module-number">Topic {{ index + 1 }}:</span>&nbsp{{
                    module_item.topic
                  }}
                </h2>
                <i class="material-icons down"></i>
              </div>
            </button>
            <div
              v-if="showMessage && index_active == index"
              class="panel"
              v-html="module_item.description"
            ></div>
          </div>
        </div>
      </div>
      <div class="divider">
        <h1>COURSE FORMAT</h1>
      </div>
      <div class="format-section" id="syllabus">
        <div class="card">
          <div class="format-pieces">
            <div class="format-item" v-for="item in formatData">
              <div class="icon">
                <img
                  :src="
                    directus.url + 'assets/' + item.format_icon.filename_disk
                  "
                />
              </div>
              <div class="text">
                <p>{{ item.format_description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="divider">
        <h1>Learning Objectives</h1>
      </div>
      <div class="objectives">
        <div class="row" v-html="aboutData[0].learning_objectives"></div>
      </div>

      <div id="experts" class="divider change">
        <h1>Learn from leading changemakers</h1>
        <p>
          Each session features interviews with problem solvers from government
          agencies, non-profits, schools, and community organizations, all
          working to change the world.
        </p>
      </div>

      <div class="team">
        <div class="team-image" v-for="item in peopleData">
          <div v-if="item.category == 'Guest'">
            <div
              class="square"
              :style="{
                backgroundImage:
                  'url(' +
                  directus.url +
                  'assets/' +
                  item.headshot.filename_disk +
                  ')',
              }"
            >
              <img
                :src="directus.url + 'assets/' + item.headshot.filename_disk"
              />
            </div>
            <h4>{{ item.first_name }}&nbsp{{ item.last_name }}</h4>
            <h5>{{ item.title }}</h5>
            <a v-if="item.link_to_bio" :href="item.link_to_bio" target="_blank"
              ><span id="bio">BIO</span></a
            >
          </div>
        </div>
      </div>
      <div class="divider">
        <h1>About the GovLab</h1>
      </div>
      <div class="objectives govlab">
        <div class="row" v-html="aboutData[0].about_govlab"></div>
      </div>
      <div class="divider">
        <h1>Team</h1>
      </div>
      <div class="team">
        <!-- {{TeamData[21]}} -->
        <div class="team-image" v-for="item in TeamData[56].project_team">
          <div
            class="square"
            :style="{
              backgroundImage:
                'url(' + item.team_id.picture.data.thumbnails[3].url + ')',
            }"
          >
            <img :src="item.team_id.picture.data.full_url" />
          </div>
          <h4>{{ item.team_id.name }}</h4>
          <h5>{{ item.team_id.title }}</h5>
          <a
            :href="'https://www.thegovlab.org/team.html#' + item.team_id.slug"
            target="_blank"
            ><span id="bio">BIO</span></a
          >
        </div>
      </div>
      <div style="margin-top: -40px" id="register" class="hidden">
        <br /><br />
      </div>
      <div class="signup">
        <h2>SIGN UP FOR UPDATES!</h2>
        <p>
          Sign up now to reserve your spot when registrations open and to
          receive updates when we add new content.
        </p>
        <!-- <script type="text/javascript">var submitted = false;</script> -->
        <iframe
          name="hidden_iframe"
          id="hidden_iframe"
          style="display: none"
          onload="if(submitted) {confirm()}"
        >
        </iframe>
        <form
          name="subscribe form"
          class="custom-form"
          action="https://docs.google.com/forms/d/e/1FAIpQLSfumXG0cHNrQwXzaDaaDb9Dvt0AjNo9G7UTd1OECzdUlJ1f4A/formResponse"
          method="post"
          target="hidden_iframe"
          onsubmit="submitted=true;"
          aria-label="form to subscribe"
        >
          <div class="form-row">
            <input
              style="margin-right: 10px"
              type="text"
              placeholder="NAME*"
              name="entry.1978434868"
              aria-hidden="”true”"
            />
            <input
              type="text"
              placeholder="AFFILIATION"
              name="entry.1318681530"
              aria-hidden="”true”"
            />
          </div>
          <div class="form-row">
            <input
              type="text"
              placeholder="EMAIL ADDRESS*"
              name="entry.858743687"
              aria-hidden="”true”"
            />
          </div>
          <div class="form-row">
            <button
              name="subscribe form button"
              class="form-button"
              type="submit"
              aria-hidden="”true”"
            >
              SIGN UP
            </button>
          </div>
        </form>
        <p>* indicates required fields</p>
        <p id="thankyou">Thank you for your submission!</p>
      </div>
    </div>
  </section>
</template>