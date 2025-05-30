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
      TeamData: [],
      apiURL: 'https://directus.theburnescenter.org'
    }
  },
  created: function created() {
    this.fetchTeam();
  },
  methods: {

    fetchTeam() {
      self = this;
      const client = new DirectusSDK({
        url: "https://directus.theburnescenter.org/",
        project: "thegovlab",
        storage: window.localStorage
      });

      client.getItems(
  'projects',
  {
    filter: {
      slug: 'solving-public-problems'
    },
    fields: ['*.*','project_team.team_id.*','project_team.team_id.picture.*']
  }
).then(data => {
  self.TeamData = data.data;
  console.log(self.TeamData);
})
.catch(error => console.error(error));
    }
  }
});
