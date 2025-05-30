<script>
import { Directus } from "@directus/sdk";
import CardComponent from './instructor_card.vue'


export default{
  components: {
    'card-component': CardComponent
  },
  data() {
    return {
    slideIndex:0,
    images:[],
    prevIndex: 0,
    activeIndex: 0,
    nextIndex: 1,
      aboutData: [],
      currentData: [],
      filterSlug: this.getSlugFromUrl(),
      directus: new Directus("https://directus.theburnescenter.org/"),
      instructorData: [],
      apiURL: "https://directus.theburnescenter.org/",
    };
  },

  created: function created() {
    this.formslug = window.location.href.split("/");
    this.formslug = this.formslug[this.formslug.length - 1];
    this.instructors = this.directus.items("SPP_CoursePartner_Instructors");
    this.fetchAbout();
    this.getCarouselImages(this.currentData?.gallery);
  },

  computed: {
    showPrevButton() {
      return this.activeIndex > 0;
    },
    showNextButton() {
      return this.activeIndex < this.images.length - 1;
    }
  },

  methods: {
    filteredData() {
      var temp =  this.aboutData.find(item => item.slug.toLowerCase() === this.filterSlug.toLowerCase());
      this.getCarouselImages(temp?.gallery);
      return temp;

    },

    getSlugFromUrl() {
      return this.$route.params.slug;
    },
    getCarouselImages(image_data){
        if(image_data?.length >=2){
            this.activeIndex = 0
            this.prevIndex = image_data?.length -1
            this.nextIndex = 1
        }
        else if(image_data?.length == 2){
            this.activeIndex = 0;
            this.nextIndex = this.prevIndex = 1;
        }
        else{
            this.activeIndex = this.prevIndex = this.nextIndex = 0;
        }
    },

    fetchAbout() {
      self = this;
      this.directus
        .items("SPP_CoursePartner")
        .readByQuery({
          meta: "total_count",
          limit: -1,
          fields: ["*.*","instructors.SPP_CoursePartner_Instructors_id.*","gallery.SPP_CoursePartner_gallery_id.*"],
        })
        .then((data) => {
          console.log(data)
          self.aboutData = data.data;
          this.currentData = this.filteredData();
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
    checkForLast(position,len){
    if(position < len-1){
        return ++position;
    }
    else{
        return 0;
    }
    },
    checkForFirst(position,len){
    if(position > 0){
        return position--;
    }
    else{
        return len-1;
    }
    },
moveLeft() {
      this.activeIndex = this.checkForFirst(this.activeIndex , this.currentData?.gallery?.length);
      this.prevIndex = this.checkForFirst(this.prevIndex , this.currentData?.gallery?.length);
      this.nextIndex = this.checkForFirst(this.nextIndex , this.currentData?.gallery?.length);
    },
    moveRight() {
      this.activeIndex = this.checkForLast(this.activeIndex , this.currentData?.gallery?.length);
      this.prevIndex = this.checkForLast(this.prevIndex , this.currentData?.gallery?.length);
      this.nextIndex = this.checkForLast(this.nextIndex , this.currentData?.gallery?.length);
    },

// next() {
//       if (this.activeIndex < this.currentData?.gallery?.length - 1) {
//         this.activeIndex++;
//       } else {
//         this.activeIndex = 1; // Skip the first because it cannot be centered
//       }
//     },
//     prev() {
//       if (this.activeIndex > 1) {
//         this.activeIndex--;
//       } else {
//         this.activeIndex = this.currentData?.gallery?.length - 2; // Skip the last because it cannot be centered
//       }
//     }
}
};
</script>


<template>
    <div>
        
    </div>
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

    <section id="partner-page">
      <div id="partner_intro" class="partner_hero" >
        <h1>
          SOLVING PUBLIC PROBLEMS
        </h1>
        <h2>MOROCCO</h2>
        <h4 v-html="currentData.about"></h4>
        <img :src="directus._url + 'assets/' + this.currentData?.logo?.filename_disk" class="logo"/>

        <!-- <img src="directusUrl + 'assets/' + currentData?.logo?.filename_disk "/> -->
      </div>

      <div>

      </div>

      <!-- <div class="slider">
        <div class="slider-inner" :style="{ 'transform': 'translateX(' + (-activeIndex * 100 / 3) + '%)' }"> -->
            <!-- <div v-for="item in  this.currentData?.gallery?"> -->
                <!-- <img v-for="(image, index) in this.currentData?.gallery" :src="directus._url + 'assets/' + image.SPP_CoursePartner_gallery_id?.gallery_image" :key="index" class="slide"/> -->
                <!-- <img v-for="(image, index) in images" :src="image.url" :key="index" :alt="image.alt" class="slide" /> -->
            <!-- </div> -->
            <!-- </div>
            <button @click="prev()" class="slider-button left">&lt;</button>
            <button @click="next()" class="slider-button right">&gt;</button>
</div> -->
<div class="gallery-container">
<div class="gallery">
<div  class="image-wrapper">
    <img :src="directus._url + 'assets/' + this.currentData?.gallery[prevIndex].SPP_CoursePartner_gallery_id?.gallery_image" class="left-img"/>
    <img :src="directus._url + 'assets/' + this.currentData?.gallery[activeIndex].SPP_CoursePartner_gallery_id?.gallery_image" class="active-img"/>
    <img :src="directus._url + 'assets/' + this.currentData?.gallery[nextIndex].SPP_CoursePartner_gallery_id?.gallery_image" class="right-img"/>
</div>
<button  @click="moveLeft" class="nav-button left">&lt;</button>
<button  @click="moveRight" class="nav-button right">&gt;</button>

</div>

</div>

      <div id="about_course" class="more_about_course">
        <h1>MORE ABOUT THE COURSE</h1>
        <p v-html="currentData.about_course"></p>
      </div>

      <div class="course_curriculum">
        <h1>COURSE CURRICULUM</h1>
        <p v-html="currentData.course_curriculum"></p>
      </div>

      <div class="instructors_container">
        <h1>INSTRUCTORS</h1>
      <div class="instructors">
        <div v-for="item in currentData.instructors">
        <card-component 
        :fname="item.SPP_CoursePartner_Instructors_id.first_name"
        :lname="item.SPP_CoursePartner_Instructors_id.last_name"
        :dept="item.SPP_CoursePartner_Instructors_id.department"
        :title="item.SPP_CoursePartner_Instructors_id.title"
        :imgUrl = "this.directus._url + 'assets/' + item.SPP_CoursePartner_Instructors_id.headshot"
         />
    </div>
</div>
      </div>

      
  </section>
</template>
