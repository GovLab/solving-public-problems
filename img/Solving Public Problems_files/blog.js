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
      blogData: [],
      
      apiURL: 'https://directus.theburnescenter.org'
    }
  },
  created: function created() {
    this.fetchPosts();
  },
  methods: {

    fetchPosts() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.theburnescenter.org/",
        project: "thegovlab",
        storage: window.localStorage
      });

      client.getItems(
  'blog',
  {
    sort:"-created_on",
    fields: ['*.*']
  }
).then(data => {
  self.fullData = data.data;
  let tempData = self.fullData.filter(items => (items.categories.includes('cat_38')));
self.blogData = tempData;
})
.catch(error => console.error(error));
    }
  }
});

