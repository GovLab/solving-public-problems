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

  el: '#site-page',

  data () {
    return {
      sitesData: [],
      aboutData: [],
      apiURL: 'https://directus.theburnescenter.org'
    }
  },
  created: function created() {
    this.fetchSites();
    this.fetchAbout();
  },
  methods: {
    fetchAbout() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.theburnescenter.org/",
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
    fetchSites() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.theburnescenter.org/",
        project: "thegovlab",
        storage: window.localStorage
      });

      client.getItems(
  'sites',
  {
    fields: ['*.*','thumbnail.*']
  }
).then(data => {
  self.indexData = data.data;
  let tempData = self.indexData.filter(items => (items.type.includes("course")));
  self.sitesData = tempData;
})
.catch(error => console.error(error));
    }
  }
});
