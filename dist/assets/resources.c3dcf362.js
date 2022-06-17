import{D as b,T as v,o as a,c as r,b as e,F as h,d as u,e as c,t as n,f as m}from"./vendor.687ad0bb.js";import{_ as y,a as p,b as g}from"./index.70affe85.js";const k={data(){return{aboutData:[],blurbData:[],syllabusData:[],peopleData:[],formatData:[],topicData:[],booksData:[],directus:new b("https://directus9-dev.thegovlab.com/"),TeamData:[],resourceData:[],reviewData:[],formData:[],researchData:[],skillsData:[],surveyData:[],showMessage:!0,index_active:0,apiURL:"https://directus.thegovlab.com/"}},created:function(){this.formslug=window.location.href.split("/"),this.formslug=this.formslug[this.formslug.length-1],this.fetchAbout(),this.fetchBlurb(),this.fetchPeople(),this.fetchTeam(),this.fetchFormat(),this.fetchTopic(),this.fetchBook(),this.fetchSurvey(),this.fetchResources(),this.fetchSkills(),this.fetchSyllabus(),this.fetchResearch(),this.toggleMessage(),this.fetchPress()},mounted(){v.load()},methods:{toggleMessage(t){console.log(self.TeamData),this.index_active=t,this.showMessage=!this.showMessage},fetchPress(){self=this,this.directus.items("reviews").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.reviewData=t.data}).catch(t=>console.error(t))},fetchBlurb(){self=this,this.directus.items("blurbs").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.blurbData=t.data}).catch(t=>console.error(t))},fetchSkills(){self=this,this.directus.items("skills").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.skillsData=t.data}).catch(t=>console.error(t))},fetchSurvey(){self=this,this.directus.items("surveys").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.surveyData=t.data}).catch(t=>console.error(t))},fetchAbout(){self=this,this.directus.items("about").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.aboutData=t.data}).catch(t=>console.error(t))},fetchPeople(){self=this,this.directus.items("people").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{t.data.sort(function(s,f){var _=s.last_name.toUpperCase(),d=f.last_name.toUpperCase();return _<d?-1:_>d?1:0}),self.peopleData=t.data}).catch(t=>console.error(t))},fetchTopic(){self=this,this.directus.items("course_topics").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.topicData=t.data}).catch(t=>console.error(t))},fetchFormat(){self=this,this.directus.items("course_format").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.formatData=t.data}).catch(t=>console.error(t))},fetchBook(){self=this,this.directus.items("book").readByQuery({meta:"total_count",limit:-1,fields:["*.*","old_books.old_book_id.*","old_books.old_book_id.thumbnail.*"]}).then(t=>{self.booksData=t.data,console.log(self.booksData)}).catch(t=>console.error(t))},fetchResources(){self=this,this.directus.items("resources").readByQuery({meta:"total_count",limit:-1,fields:["*.*","readings.readings_id.*","videos.videos_id.*","worksheet.worksheet_id.*"]}).then(t=>{self.resourceData=t.data}).catch(t=>console.error(t))},fetchForm(){self=this,this.directus.items("worksheet_form",{filter:{slug:self.formslug},fields:["*.*","questions.question_id.*","additional_resources.worksheet_resource_id.*"]}).then(t=>{self.formData=t.data}).catch(t=>console.error(t))},fetchSyllabus(){self=this,this.directus.items("syllabus").readByQuery({meta:"total_count",limit:-1,fields:["*.*","icons.*"]}).then(t=>{self.syllabusData=t.data}).catch(t=>console.error(t))},fetchResearch(){self=this,this.directus.items("research").readByQuery({meta:"total_count",limit:-1,fields:["*.*","publications.publications_id.*","publications.publications_id.thumbnail.*","research_results.research_results_id.*","research_results.research_results_id.image.*"]}).then(t=>{self.researchData=t.data}).catch(t=>console.error(t))},fetchTeam(){self=this,new b("https://directus.thegovlab.com/thegovlab").items("projects").readByQuery({meta:"total_count",limit:-1,fields:["*.*","project_team.team_id.*","project_team.team_id.picture.*"]}).then(s=>{self.TeamData=s.data,console.log(self.TeamData)}).catch(s=>console.error(s))},myFunction(){var t=document.getElementById("myLinks");t.style.display==="block"?t.style.display="none":t.style.display="block"},dismiss_menu(){var t=document.getElementById("myLinks");t.style.display="none"},dismiss_twitter(){var t=document.getElementById("twitter-feed");t.style.display="none"},confirm(){var t=document.getElementById("thankyou");t.style.display="block"},submit(){var t=document.getElementById("thankyou");t.style.display="block"}}},D={class:"topnav"},B={class:"menu-bars"},w={class:"bar-wrap"},T=e("i",{class:"fa fa-bars"},null,-1),E=[T],x=e("a",{class:"top_logo",href:"index.html"},[e("img",{src:p,alt:"The GovLab"})],-1),C=e("a",{class:"top_logo",href:"index.html"},[e("img",{src:g,alt:"The Burnes Center for Social Change"})],-1),S=e("div",{class:"lang-select"},[e("a",{target:"_blank",href:"https://twitter.com/search?q=YourEducationYourVoice&src=typed_query"},[e("i",{class:"e-social-media-item fa fa-twitter","aria-hidden":"true"}),e("b",null,"#YourEducationYourVoice")])],-1),R={id:"myLinks"},L={class:"menu-items"},Q=e("a",{href:"index.html"},"Home",-1),A=[Q],F=e("a",{href:"https://course.solvingpublicproblems.org"},"Take the Course",-1),I=[F],N=e("a",{href:"book.html"},"Read the Book",-1),U=[N],O=e("a",{href:"resources.html"},"Resources",-1),j=[O],H=e("a",{href:"blog.html"},"Blog",-1),V=[H],q=e("a",{href:"research.html"},"See the Research",-1),M=[q],P=e("a",{href:"courses.html"},"Other Courses",-1),Y=[P],G=e("a",{href:"https://www.thegovlab.org/about.html"},"About the GovLab",-1),K=[G],W=e("a",{href:"http://thegovlab.org/beth-simone-noveck.html"},"About Beth Simone Noveck",-1),$=[W],z=e("a",{href:"team.html"},"Team",-1),J=[z],X={id:"home-page",onclick:"dismiss_menu()"},Z={id:"intro",class:"resource-hero resource-page"},ee=e("h1",null,"Resources",-1),te=e("div",{class:"resource-text"},[e("p",null,[c("Frequently updated with new items, these resources are organized by topic. To suggest a reading, video or exercise, please email us at hello@solvingpublicproblems.org. "),e("br"),e("br"),e("b",null,"READ"),c("- HELPFUL READINGS "),e("br"),e("b",null," WATCH "),c("- INTERESTING VIDEOS "),e("br"),e("b",null," DO "),c("- WORKSHEETS ")])],-1),se={class:"hero-button book"},oe=e("a",{href:"index.html",class:"button"},"TAKE THE COURSE",-1),ie=["href"],ae={class:"resource-section"},re={class:"resource-container"},le={class:"resource-title"},ne={class:"resource-body"},ce=e("div",{class:"resource-type"},[e("p",null,"READ")],-1),de={class:"resource-readings"},he=["href"],ue=e("i",{class:"fas fa-circle"},null,-1),_e=c("\xA0\xA0"),me={id:"underline"},fe={key:0},be=e("div",{class:"resource-type"},[e("p",null,"watch")],-1),ve={class:"resource-videos"},ye=["href"],pe=e("i",{class:"fas fa-circle"},null,-1),ge=c("\xA0\xA0"),ke={id:"underline"},De={key:0},Be=e("div",{class:"resource-type"},[e("p",null,"do")],-1),we={class:"resource-worksheets"},Te=["href"],Ee=e("i",{class:"fas fa-circle"},null,-1),xe=c("\xA0\xA0"),Ce={id:"underline"},Se={key:0};function Re(t,s,f,_,d,l){return a(),r("section",null,[e("div",D,[e("div",B,[e("div",w,[e("a",{href:"javascript:void(0);",class:"icon",onClick:s[0]||(s[0]=o=>l.myFunction())},E)])]),x,C,S]),e("div",R,[e("div",L,[e("div",{class:"menu-sub",onClick:s[1]||(s[1]=o=>l.dismiss_menu())},A),e("div",{class:"menu-sub",onClick:s[2]||(s[2]=o=>l.dismiss_menu())},I),e("div",{class:"menu-sub",onClick:s[3]||(s[3]=o=>l.dismiss_menu())},U),e("div",{class:"menu-sub",onClick:s[4]||(s[4]=o=>l.dismiss_menu())},j),e("div",{class:"menu-sub",onClick:s[5]||(s[5]=o=>l.dismiss_menu())},V),e("div",{class:"menu-sub",onClick:s[6]||(s[6]=o=>l.dismiss_menu())},M),e("div",{class:"menu-sub",onClick:s[7]||(s[7]=o=>l.dismiss_menu())},Y),e("div",{class:"menu-sub",onClick:s[8]||(s[8]=o=>l.dismiss_menu())},K),e("div",{class:"menu-sub",onClick:s[9]||(s[9]=o=>l.dismiss_menu())},$),e("div",{class:"menu-sub",onClick:s[10]||(s[10]=o=>l.dismiss_menu())},J)])]),e("div",X,[e("div",Z,[ee,te,e("div",se,[oe,e("a",{href:d.booksData[0].book_link,class:"button"},"BUY THE BOOK",8,ie)])]),e("div",ae,[(a(!0),r(h,null,u(d.resourceData,o=>(a(),r("div",re,[e("div",le,[e("h3",null,n(o.module_name),1),e("p",null,n(o.short_description),1)]),e("div",ne,[ce,(a(!0),r(h,null,u(o.readings,i=>(a(),r("div",de,[e("a",{href:i.readings_id.url,target:"_blank"},[ue,_e,e("span",me,n(i.readings_id.title),1),i.readings_id.content?(a(),r("span",fe,",\xA0"+n(i.readings_id.content),1)):m("",!0)],8,he)]))),256)),be,(a(!0),r(h,null,u(o.videos,i=>(a(),r("div",ve,[e("a",{href:i.videos_id.url,target:"_blank"},[pe,ge,e("span",ke,n(i.videos_id.title),1),i.videos_id.content&&i.videos_id.content!="NULL"?(a(),r("span",De,",\xA0"+n(i.videos_id.content),1)):m("",!0)],8,ye)]))),256)),Be,(a(!0),r(h,null,u(o.worksheet,i=>(a(),r("div",we,[e("a",{href:i.worksheet_id.url,target:"_blank"},[Ee,xe,e("span",Ce,n(i.worksheet_id.title),1),i.worksheet_id.content&&i.worksheet_id.content!="NULL"?(a(),r("span",Se,",\xA0"+n(i.worksheet_id.content),1)):m("",!0)],8,Te)]))),256))])]))),256))])])])}var Ae=y(k,[["render",Re]]);export{Ae as default};