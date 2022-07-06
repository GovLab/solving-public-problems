import{D as m,T as f,o,c as a,b as s,F as h,d as u,t as c,f as n,n as v}from"./vendor.687ad0bb.js";import{_ as y,a as b,b as p}from"./index.70affe85.js";const k={data(){return{aboutData:[],blurbData:[],syllabusData:[],peopleData:[],formatData:[],topicData:[],booksData:[],directus:new m("https://d9.spp.thegovlab.com/"),TeamData:[],resourceData:[],reviewData:[],formData:[],researchData:[],skillsData:[],surveyData:[],showMessage:!0,index_active:0,apiURL:"https://directus.thegovlab.com/"}},created:function(){this.formslug=window.location.href.split("/"),this.formslug=this.formslug[this.formslug.length-1],this.fetchAbout(),this.fetchBlurb(),this.fetchPeople(),this.fetchTeam(),this.fetchFormat(),this.fetchTopic(),this.fetchBook(),this.fetchSurvey(),this.fetchResources(),this.fetchSkills(),this.fetchSyllabus(),this.fetchResearch(),this.toggleMessage(),this.fetchPress()},mounted(){f.load()},methods:{toggleMessage(e){console.log(self.TeamData),this.index_active=e,this.showMessage=!this.showMessage},fetchPress(){self=this,this.directus.items("reviews").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(e=>{self.reviewData=e.data}).catch(e=>console.error(e))},fetchBlurb(){self=this,this.directus.items("blurbs").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(e=>{self.blurbData=e.data}).catch(e=>console.error(e))},fetchSkills(){self=this,this.directus.items("skills").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(e=>{self.skillsData=e.data}).catch(e=>console.error(e))},fetchSurvey(){self=this,this.directus.items("surveys").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(e=>{self.surveyData=e.data}).catch(e=>console.error(e))},fetchAbout(){self=this,this.directus.items("about").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(e=>{self.aboutData=e.data}).catch(e=>console.error(e))},fetchPeople(){self=this,this.directus.items("people").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(e=>{e.data.sort(function(i,_){var d=i.last_name.toUpperCase(),l=_.last_name.toUpperCase();return d<l?-1:d>l?1:0}),self.peopleData=e.data}).catch(e=>console.error(e))},fetchTopic(){self=this,this.directus.items("course_topics").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(e=>{self.topicData=e.data}).catch(e=>console.error(e))},fetchFormat(){self=this,this.directus.items("course_format").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(e=>{self.formatData=e.data}).catch(e=>console.error(e))},fetchBook(){self=this,this.directus.items("book").readByQuery({meta:"total_count",limit:-1,fields:["*.*","old_books.old_book_id.*","old_books.old_book_id.thumbnail.*"]}).then(e=>{self.booksData=e.data,console.log(self.booksData)}).catch(e=>console.error(e))},fetchResources(){self=this,this.directus.items("resources").readByQuery({meta:"total_count",limit:-1,fields:["*.*","readings.reading_id.*","videos.videos_id.*","worksheet.worksheet_id.*"]}).then(e=>{self.resourceData=e.data}).catch(e=>console.error(e))},fetchForm(){self=this,this.directus.items("worksheet_form",{filter:{slug:self.formslug},fields:["*.*","questions.question_id.*","additional_resources.worksheet_resource_id.*"]}).then(e=>{self.formData=e.data}).catch(e=>console.error(e))},fetchSyllabus(){self=this,this.directus.items("syllabus").readByQuery({meta:"total_count",limit:-1,fields:["*.*","icons.*"]}).then(e=>{self.syllabusData=e.data}).catch(e=>console.error(e))},fetchResearch(){self=this,this.directus.items("research").readByQuery({meta:"total_count",limit:-1,fields:["*.*","publications.publications_id.*","publications.publications_id.thumbnail.*","research_results.research_results_id.*","research_results.research_results_id.image.*"]}).then(e=>{self.researchData=e.data}).catch(e=>console.error(e))},fetchTeam(){self=this,new m("https://directus.thegovlab.com/thegovlab").items("projects").readByQuery({meta:"total_count",limit:-1,fields:["*.*","project_team.team_id.*","project_team.team_id.picture.*"]}).then(i=>{self.TeamData=i.data,console.log(self.TeamData)}).catch(i=>console.error(i))},myFunction(){var e=document.getElementById("myLinks");e.style.display==="block"?e.style.display="none":e.style.display="block"},dismiss_menu(){var e=document.getElementById("myLinks");e.style.display="none"},dismiss_twitter(){var e=document.getElementById("twitter-feed");e.style.display="none"},confirm(){var e=document.getElementById("thankyou");e.style.display="block"},submit(){var e=document.getElementById("thankyou");e.style.display="block"}}},g={class:"topnav"},D={class:"menu-bars"},B={class:"bar-wrap"},T=s("i",{class:"fa fa-bars"},null,-1),w=[T],x=s("a",{class:"top_logo",href:"index.html"},[s("img",{src:b,alt:"The GovLab"})],-1),L=s("a",{class:"top_logo",href:"index.html"},[s("img",{src:p,alt:"The Burnes Center for Social Change"})],-1),C=s("div",{class:"lang-select"},[s("a",{target:"_blank",href:"https://twitter.com/search?q=YourEducationYourVoice&src=typed_query"},[s("i",{class:"e-social-media-item fa fa-twitter","aria-hidden":"true"}),s("b",null,"#YourEducationYourVoice")])],-1),S={id:"myLinks"},M={class:"menu-items"},H=s("a",{href:"index.html"},"Home",-1),Q=[H],R=s("a",{href:"https://course.solvingpublicproblems.org"},"Take the Course",-1),E=[R],F=s("a",{href:"book.html"},"Read the Book",-1),I=[F],j=s("a",{href:"resources.html"},"Resources",-1),A=[j],P=s("a",{href:"blog.html"},"Blog",-1),q=[P],N=s("a",{href:"research.html"},"See the Research",-1),U=[N],V=s("a",{href:"courses.html"},"Other Courses",-1),Y=[V],G=s("a",{href:"https://www.thegovlab.org/about.html"},"About the GovLab",-1),W=[G],z=s("a",{href:"http://thegovlab.org/beth-simone-noveck.html"},"About Beth Simone Noveck",-1),O=[z],J=s("a",{href:"team.html"},"Team",-1),K=[J],X=s("div",{class:"research-hero"},[s("h1",null,"Research")],-1),Z={class:"research-text-section"},$=s("h2",null,"Why Survey",-1),ee=["innerHTML"],se={class:"research-survey-section"},te=["innerHTML"],ie={class:"survey-card-row"},oe={class:"survey-card-col"},ae={class:"survey-card"},re={class:"survey-title"},le={class:"survey-year"},ne={class:"survey-year"},ce={key:0,class:"survey-year"},de={key:1,class:"survey-tags"},he={key:0,class:"survey-tag-1"},ue={key:1,class:"survey-tag-2"},_e={key:2,class:"survey-tag-3"},me={key:2,class:"survey-sponser-title"},fe=["innerHTML"],ve=["href"],ye={key:4,class:"survey-button"},be={style:{"padding-bottom":"0"},class:"research-text-section"},pe=s("h2",null,"Findings",-1),ke=["innerHTML"],ge={style:{"padding-bottom":"0"},class:"research-text-section"},De=s("h2",null,"The Skills",-1),Be=["innerHTML"],Te={style:{"padding-bottom":"0"},class:"research-text-section"},we={class:"skills-item"},xe={class:"skills-item-title"},Le=["innerHTML"],Ce={class:"research-text-section"},Se=s("h2",null,"Publications",-1),Me={class:"publications"},He=["href"],Qe={class:"pub-title"};function Re(e,i,_,d,l,r){return o(),a("section",null,[s("div",g,[s("div",D,[s("div",B,[s("a",{href:"javascript:void(0);",class:"icon",onClick:i[0]||(i[0]=t=>r.myFunction())},w)])]),x,L,C]),s("div",S,[s("div",M,[s("div",{class:"menu-sub",onClick:i[1]||(i[1]=t=>r.dismiss_menu())},Q),s("div",{class:"menu-sub",onClick:i[2]||(i[2]=t=>r.dismiss_menu())},E),s("div",{class:"menu-sub",onClick:i[3]||(i[3]=t=>r.dismiss_menu())},I),s("div",{class:"menu-sub",onClick:i[4]||(i[4]=t=>r.dismiss_menu())},A),s("div",{class:"menu-sub",onClick:i[5]||(i[5]=t=>r.dismiss_menu())},q),s("div",{class:"menu-sub",onClick:i[6]||(i[6]=t=>r.dismiss_menu())},U),s("div",{class:"menu-sub",onClick:i[7]||(i[7]=t=>r.dismiss_menu())},Y),s("div",{class:"menu-sub",onClick:i[8]||(i[8]=t=>r.dismiss_menu())},W),s("div",{class:"menu-sub",onClick:i[9]||(i[9]=t=>r.dismiss_menu())},O),s("div",{class:"menu-sub",onClick:i[10]||(i[10]=t=>r.dismiss_menu())},K)])]),s("div",{id:"home-page",style:{position:"absolute"},onClick:i[11]||(i[11]=t=>r.dismiss_menu())},[X,s("div",Z,[$,s("div",{innerHTML:l.researchData[0].why_survey},null,8,ee)]),s("div",se,[s("div",{class:"about-survey-section",innerHTML:l.researchData[0].about_survey},null,8,te),s("div",ie,[(o(!0),a(h,null,u(l.surveyData,t=>(o(),a("div",oe,[s("div",ae,[s("p",re,c(t.title),1),s("p",le,c(t.year),1),s("p",ne,c(t.audience),1),t.survey_participants?(o(),a("p",ce,"N = "+c(t.survey_participants),1)):n("",!0),t.survey_parts!=""?(o(),a("div",de,[t.survey_parts[0]!=null?(o(),a("p",he,"Skills Use")):n("",!0),t.survey_parts[1]!=null?(o(),a("p",ue,"Innovation Environment")):n("",!0),t.survey_parts[2]!=null?(o(),a("p",_e,"Skills Training")):n("",!0)])):n("",!0),t.sponsor?(o(),a("p",me,"Sponsered By:")):n("",!0),s("div",{class:"survey-sponser",innerHTML:t.sponsor},null,8,fe),t.survey_link?(o(),a("a",{key:3,href:t.survey_link,target:"_blank",class:"survey-button"},"See Survey",8,ve)):n("",!0),t.survey_results?(o(),a("a",ye,"See Results")):n("",!0)])]))),256))])]),s("div",be,[pe,s("div",{innerHTML:l.researchData[0].findings},null,8,ke)]),s("div",ge,[De,s("div",{innerHTML:l.researchData[0].the_skills},null,8,Be)]),s("div",Te,[(o(!0),a(h,null,u(l.skillsData,t=>(o(),a("div",we,[s("p",xe,c(t.title),1),s("div",{class:"skills-item-description",innerHTML:t.description},null,8,Le)]))),256))]),s("div",Ce,[Se,s("div",Me,[(o(!0),a(h,null,u(l.researchData[0].publications,t=>(o(),a("a",{class:"publication-item",href:t.publications_id.url,target:"_blank"},[s("div",{class:"pub-thumb",style:v({backgroundImage:"url("+l.directus._url+"assets/"+t.publications_id.thumbnail.filename_disk+")"})},null,4),s("div",Qe,c(t.publications_id.title),1)],8,He))),256))])])])])}var Ie=y(k,[["render",Re]]);export{Ie as default};
