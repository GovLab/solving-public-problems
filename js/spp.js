////////////////////////////////////////
// reload page after Forward and back
///////////////////////////////////////

const TYPE_BACK_FORWARD = 2;

function isReloadedPage() {
  return performance.navigation.type === TYPE_BACK_FORWARD;
}

function main() {
  if (isReloadedPage()) {
    window.location.reload();
  }
}
main();

////////////////////////////////////////////////////////////
///// TEAM  API REQUEST ` `
////////////////////////////////////////////////////////////


Vue.use(VueMeta);

new Vue({
    
  el: '#home-page',

  data () {
  
    return {
      aboutData: [],
      syllabusData: [],
      peopleData: [],
      formatData: [],
      topicData: [],
      booksData: [],
      resourceData: [],
      formData: [],
      researchData: [],
      showMessage: true,
      index_active:0,
      apiURL: 'https://directus.thegovlab.com/solving-public-problems',
    }
  },

  created: function created() {
    this.formslug=window.location.href.split('/');
    this.formslug = this.formslug[this.formslug.length - 1];
    this.fetchAbout();
    this.fetchPeople();
    this.fetchFormat();
    this.fetchTopic();
    this.fetchBook();
    this.fetchResources();
    this.fetchForm();
    this.fetchSyllabus();
    this.fetchResearch();
    this.toggleMessage();
  },


  methods: {
    fetchAbout() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'about',
  {
    fields: ['*.*']
  }
).then(data => {

  self.aboutData = data.data;
})
.catch(error => console.error(error));
    },
    fetchPeople() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'people',
  {
    fields: ['*.*']
  }
).then(data => {

  data.data.sort(function(a, b) {
    
    var textA = a.last_name.toUpperCase();
    var textB = b.last_name.toUpperCase();
    return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;

});

  self.peopleData = data.data;
})
.catch(error => console.error(error));
    },
    fetchTopic() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'course_topics',
  {
    fields: ['*.*']
  }
).then(data => {

  self.topicData = data.data;
})

.catch(error => console.error(error));
    },
    fetchFormat() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'course_format',
  {
    fields: ['*.*']
  }
).then(data => {

  self.formatData = data.data;
})

.catch(error => console.error(error));
    },    
    fetchBook() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'book',
  {
    fields: ['*.*','old_books.old_book_id.*','old_books.old_book_id.thumbnail.*']
  }
).then(data => {

  self.booksData = data.data;
})

.catch(error => console.error(error));
    },
    fetchResources() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'resources',
  {
    fields: ['*.*','readings.reading_id.*','videos.videos_id.*','worksheet.worksheet_id.*']
  }
).then(data => {

  self.resourceData = data.data;
})

.catch(error => console.error(error));
    },    
    fetchForm() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'worksheet_form',
  {
    filter: {
      slug: self.formslug
    },
    fields: ['*.*','questions.question_id.*']
  }
).then(data => {

  self.formData = data.data;
})

.catch(error => console.error(error));
    },
    fetchSyllabus() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'syllabus',
  {
    fields: ['*.*']
  }
).then(data => {

  self.syllabusData = data.data;
})

.catch(error => console.error(error));
    },
    fetchResearch() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.thegovlab.com/",
        project: "solving-public-problems",
        storage: window.localStorage
      });

      client.getItems(
  'research',
  {
    fields: ['*.*','publications.publications_id.*','publications.publications_id.thumbnail.*','research_results.research_results_id.*','research_results.research_results_id.image.*']
  }
).then(data => {

  self.researchData = data.data;
})

.catch(error => console.error(error));
    },
    toggleMessage (index) {
      this.index_active = index;
    	this.showMessage = !this.showMessage
    }

}
});



