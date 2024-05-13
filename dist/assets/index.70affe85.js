import{r as k,o as n,c as l,a as w,F as _,b as e,D as v,T as D,t as d,d as m,e as b,f,n as g,g as T,h as L,i as E,j as B}from"./vendor.687ad0bb.js";const C=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function c(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(i){if(i.ep)return;i.ep=!0;const r=c(i);fetch(i.href,r)}};C();const S=e("footer",{class:"bg-gray-300 h-10"},null,-1),x={setup(t){return(o,c)=>{const a=k("router-view");return n(),l(_,null,[w(a),S],64)}}},A="modulepreload",y={},O="./",u=function(o,c){return!c||c.length===0?o():Promise.all(c.map(a=>{if(a=`${O}${a}`,a in y)return;y[a]=!0;const i=a.endsWith(".css"),r=i?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${r}`))return;const s=document.createElement("link");if(s.rel=i?"stylesheet":A,i||(s.as="script",s.crossOrigin=""),s.href=a,document.head.appendChild(s),i)return new Promise((h,p)=>{s.addEventListener("load",h),s.addEventListener("error",p)})})).then(()=>o())};var I="./assets/the-govlab-logo-white.33f93d79.svg",R="./assets/the_burnes_center_logo_white.9bbed17d.png",P="./assets/spp-logo.430711ab.svg",M=(t,o)=>{for(const[c,a]of o)t[c]=a;return t};const j={data(){return{aboutData:[],blurbData:[],syllabusData:[],peopleData:[],formatData:[],topicData:[],booksData:[],directus:new v("https://directus10.thegovlab.com/"),TeamData:[],resourceData:[],reviewData:[],formData:[],researchData:[],skillsData:[],surveyData:[],showMessage:!0,index_active:0,apiURL:"https://directus.thegovlab.com/"}},created:function(){this.formslug=window.location.href.split("/"),this.formslug=this.formslug[this.formslug.length-1],this.fetchAbout(),this.fetchBlurb(),this.fetchPeople(),this.fetchTeam(),this.fetchFormat(),this.fetchTopic(),this.fetchBook(),this.fetchSurvey(),this.fetchResources(),this.fetchSkills(),this.fetchSyllabus(),this.fetchResearch(),this.toggleMessage(),this.fetchPress()},mounted(){D.load()},methods:{toggleMessage(t){console.log(self.TeamData),this.index_active=t,this.showMessage=!this.showMessage},fetchPress(){self=this,this.directus.items("reviews").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.reviewData=t.data}).catch(t=>console.error(t))},fetchBlurb(){self=this,this.directus.items("blurbs").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.blurbData=t.data}).catch(t=>console.error(t))},fetchSkills(){self=this,this.directus.items("skills").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.skillsData=t.data}).catch(t=>console.error(t))},fetchSurvey(){self=this,this.directus.items("surveys").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.surveyData=t.data}).catch(t=>console.error(t))},fetchAbout(){self=this,this.directus.items("about").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.aboutData=t.data}).catch(t=>console.error(t))},fetchPeople(){self=this,this.directus.items("people").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{t.data.sort(function(o,c){var a=o.last_name.toUpperCase(),i=c.last_name.toUpperCase();return a<i?-1:a>i?1:0}),self.peopleData=t.data}).catch(t=>console.error(t))},fetchTopic(){self=this,this.directus.items("course_topics").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.topicData=t.data}).catch(t=>console.error(t))},fetchFormat(){self=this,this.directus.items("course_format").readByQuery({meta:"total_count",limit:-1,fields:["*.*"]}).then(t=>{self.formatData=t.data}).catch(t=>console.error(t))},fetchBook(){self=this,this.directus.items("book").readByQuery({meta:"total_count",limit:-1,fields:["*.*","old_books.old_book_id.*","old_books.old_book_id.thumbnail.*"]}).then(t=>{self.booksData=t.data}).catch(t=>console.error(t))},fetchResources(){self=this,this.directus.items("resources").readByQuery({meta:"total_count",limit:-1,fields:["*.*","readings.reading_id.*","videos.videos_id.*","worksheet.worksheet_id.*"]}).then(t=>{self.resourceData=t.data}).catch(t=>console.error(t))},fetchForm(){self=this,this.directus.items("worksheet_form",{filter:{slug:self.formslug},fields:["*.*","questions.question_id.*","additional_resources.worksheet_resource_id.*"]}).then(t=>{self.formData=t.data}).catch(t=>console.error(t))},fetchSyllabus(){self=this,this.directus.items("syllabus").readByQuery({meta:"total_count",limit:-1,fields:["*.*","icons.*"]}).then(t=>{self.syllabusData=t.data}).catch(t=>console.error(t))},fetchResearch(){self=this,this.directus.items("research").readByQuery({meta:"total_count",limit:-1,fields:["*.*","publications.publications_id.*","publications.publications_id.thumbnail.*","research_results.research_results_id.*","research_results.research_results_id.image.*"]}).then(t=>{self.researchData=t.data}).catch(t=>console.error(t))},fetchTeam(){self=this,new v("https://directus.thegovlab.com/thegovlab").items("projects").readByQuery({meta:"total_count",limit:-1,fields:["*.*","project_team.team_id.*","project_team.team_id.picture.*"]}).then(o=>{self.TeamData=o.data,console.log(self.TeamData)}).catch(o=>console.error(o))},myFunction(){var t=document.getElementById("myLinks");t.style.display==="block"?t.style.display="none":t.style.display="block"},dismiss_menu(){var t=document.getElementById("myLinks");t.style.display="none"},dismiss_twitter(){var t=document.getElementById("twitter-feed");t.style.display="none"},confirm(){var t=document.getElementById("thankyou");t.style.display="block"},submit(){var t=document.getElementById("thankyou");t.style.display="block"}}},N={class:"topnav"},Q={class:"menu-bars"},F={class:"bar-wrap"},H=e("i",{class:"fa fa-bars"},null,-1),G=[H],U=e("a",{class:"top_logo",href:"index.html"},[e("img",{src:I,alt:"The GovLab"})],-1),V=e("a",{class:"top_logo",href:"index.html"},[e("img",{src:R,alt:"The Burnes Center for Social Change"})],-1),q=e("div",{class:"lang-select"},[e("a",{target:"_blank",href:"https://twitter.com/search?q=YourEducationYourVoice&src=typed_query"},[e("i",{class:"e-social-media-item fa fa-twitter","aria-hidden":"true"}),e("b",null,"#YourEducationYourVoice")])],-1),W={id:"myLinks"},z={class:"menu-items"},Y=e("a",{href:"index.html"},"Home",-1),K=[Y],J=e("a",{href:"https://course.solvingpublicproblems.org"},"Take the Course",-1),X=[J],Z=e("a",{href:"book.html"},"Read the Book",-1),$=[Z],ee=e("a",{href:"resources.html"},"Resources",-1),te=[ee],se=e("a",{href:"blog.html"},"Blog",-1),oe=[se],ie=e("a",{href:"research.html"},"See the Research",-1),re=[ie],ae=e("a",{href:"courses.html"},"Other Courses",-1),ne=[ae],le=e("a",{href:"https://www.thegovlab.org/about.html"},"About the GovLab",-1),ce=[le],de=e("a",{href:"http://thegovlab.org/beth-simone-noveck.html"},"About Beth Simone Noveck",-1),ue=[de],he=e("a",{href:"team.html"},"Team",-1),_e=[he],me={class:"twitter-tweet",id:"twitter-feed"},fe=e("i",{class:"fas fa-times-circle"},null,-1),pe=b("CLOSE"),ve=[fe,pe],be=e("a",{class:"twitter-timeline","data-height":"400",href:"https://twitter.com/TheGovLab/timelines/1355920542042382340?ref_src=twsrc%5Etfw"},"Solving Public Problems - Curated tweets by TheGovLab",-1),ge={id:"intro",class:"hero"},ye=e("h1",null,[e("span",{id:"blue"},"SOLVING"),e("br"),e("span",{id:"black"},"PUBLIC PROBLEMS")],-1),ke=e("img",{src:P},null,-1),we=e("div",{class:"hero-button"},[e("a",{href:"http://course.solvingpublicproblems.org",class:"button"},"TAKE THE COURSE"),e("a",{href:"book.html",class:"button"},"READ THE BOOK"),e("a",{href:"#register",class:"button"},"SIGN UP FOR UPDATES!")],-1),De={class:"about-section"},Te={class:"vid-desc"},Le={class:"video"},Ee={class:"video-container"},Be={style:{padding:"56.25% 0 0 0",position:"relative"}},Ce=["src"],Se=["innerHTML"],xe=e("div",{class:"divider"},[e("h1",null,"What we will cover")],-1),Ae={class:"topics"},Oe={class:"syllabus-section"},Ie={class:"syllabus-item"},Re=["onClick"],Pe={class:"acc-img"},Me=["src"],je={id:"module-number"},Ne=e("i",{class:"material-icons down"},null,-1),Qe=["innerHTML"],Fe=e("div",{class:"divider"},[e("h1",null,"COURSE FORMAT")],-1),He={class:"format-section",id:"syllabus"},Ge={class:"card"},Ue={class:"format-pieces"},Ve={class:"format-item"},qe={class:"icon"},We=["src"],ze={class:"text"},Ye=e("div",{class:"divider"},[e("h1",null,"Learning Objectives")],-1),Ke={class:"objectives"},Je=["innerHTML"],Xe=e("div",{id:"experts",class:"divider change"},[e("h1",null,"Learn from leading changemakers"),e("p",null," Each session features interviews with problem solvers from government agencies, non-profits, schools, and community organizations, all working to change the world. ")],-1),Ze={class:"team"},$e={class:"team-image"},et={key:0},tt=["src"],st=["href"],ot=e("span",{id:"bio"},"BIO",-1),it=[ot],rt=e("div",{class:"divider"},[e("h1",null,"About the GovLab")],-1),at={class:"objectives govlab"},nt=["innerHTML"],lt=e("div",{class:"divider"},[e("h1",null,"Team")],-1),ct={class:"team"},dt={class:"team-image"},ut=["src"],ht=["href"],_t=e("span",{id:"bio"},"BIO",-1),mt=[_t],ft=e("div",{style:{"margin-top":"-40px"},id:"register",class:"hidden"},[e("br"),e("br")],-1),pt=e("div",{class:"signup"},[e("h2",null,"SIGN UP FOR UPDATES!"),e("p",null," Sign up now to reserve your spot when registrations open and to receive updates when we add new content. "),e("iframe",{name:"hidden_iframe",id:"hidden_iframe",style:{display:"none"},onload:"if(submitted) {confirm()}"},`
        `),e("form",{name:"subscribe form",class:"custom-form",action:"https://docs.google.com/forms/d/e/1FAIpQLSfumXG0cHNrQwXzaDaaDb9Dvt0AjNo9G7UTd1OECzdUlJ1f4A/formResponse",method:"post",target:"hidden_iframe",onsubmit:"submitted=true;","aria-label":"form to subscribe"},[e("div",{class:"form-row"},[e("input",{style:{"margin-right":"10px"},type:"text",placeholder:"NAME*",name:"entry.1978434868","aria-hidden":"\u201Dtrue\u201D"}),e("input",{type:"text",placeholder:"AFFILIATION",name:"entry.1318681530","aria-hidden":"\u201Dtrue\u201D"})]),e("div",{class:"form-row"},[e("input",{type:"text",placeholder:"EMAIL ADDRESS*",name:"entry.858743687","aria-hidden":"\u201Dtrue\u201D"})]),e("div",{class:"form-row"},[e("button",{name:"subscribe form button",class:"form-button",type:"submit","aria-hidden":"\u201Dtrue\u201D"}," SIGN UP ")])]),e("p",null,"* indicates required fields"),e("p",{id:"thankyou"},"Thank you for your submission!")],-1);function vt(t,o,c,a,i,r){return n(),l("section",null,[e("div",N,[e("div",Q,[e("div",F,[e("a",{href:"javascript:void(0);",class:"icon",onClick:o[0]||(o[0]=s=>r.myFunction())},G)])]),U,V,q]),e("div",W,[e("div",z,[e("div",{class:"menu-sub",onClick:o[1]||(o[1]=s=>r.dismiss_menu())},K),e("div",{class:"menu-sub",onClick:o[2]||(o[2]=s=>r.dismiss_menu())},X),e("div",{class:"menu-sub",onClick:o[3]||(o[3]=s=>r.dismiss_menu())},$),e("div",{class:"menu-sub",onClick:o[4]||(o[4]=s=>r.dismiss_menu())},te),e("div",{class:"menu-sub",onClick:o[5]||(o[5]=s=>r.dismiss_menu())},oe),e("div",{class:"menu-sub",onClick:o[6]||(o[6]=s=>r.dismiss_menu())},re),e("div",{class:"menu-sub",onClick:o[7]||(o[7]=s=>r.dismiss_menu())},ne),e("div",{class:"menu-sub",onClick:o[8]||(o[8]=s=>r.dismiss_menu())},ce),e("div",{class:"menu-sub",onClick:o[9]||(o[9]=s=>r.dismiss_menu())},ue),e("div",{class:"menu-sub",onClick:o[10]||(o[10]=s=>r.dismiss_menu())},_e)])]),e("blockquote",me,[e("a",{class:"tweet-close",onClick:o[11]||(o[11]=s=>r.dismiss_twitter())},ve),be]),e("div",{id:"home-page",onClick:o[12]||(o[12]=s=>r.dismiss_menu())},[e("div",ge,[ye,ke,e("h4",null,d(i.aboutData[0].subtitle),1)]),we,e("div",De,[e("div",Te,[e("div",Le,[e("div",Ee,[e("div",Be,[e("iframe",{src:"https://player.vimeo.com/video/"+i.aboutData[0].trailer_video_id+"?title=0&byline=0&portrait=0",style:{position:"absolute",top:"0",left:"0",width:"100%",height:"100%"},frameborder:"0",allow:"autoplay; fullscreen; picture-in-picture",allowfullscreen:""},null,8,Ce)])])])]),e("div",{class:"about-text",innerHTML:i.aboutData[0].about_text},null,8,Se)]),xe,e("div",Ae,[e("div",Oe,[(n(!0),l(_,null,m(i.syllabusData,(s,h)=>(n(),l("div",Ie,[s.status=="published"?(n(),l("button",{key:0,onClick:p=>r.toggleMessage(h),class:"accordion"},[e("div",Pe,[e("img",{class:"module-icon",src:i.directus.url+"assets/"+s.icons.filename_disk},null,8,Me),e("h2",null,[e("span",je,"Topic "+d(h+1)+":",1),b("\xA0"+d(s.topic),1)]),Ne])],8,Re)):f("",!0),i.showMessage&&i.index_active==h?(n(),l("div",{key:1,class:"panel",innerHTML:s.description},null,8,Qe)):f("",!0)]))),256))])]),Fe,e("div",He,[e("div",Ge,[e("div",Ue,[(n(!0),l(_,null,m(i.formatData,s=>(n(),l("div",Ve,[e("div",qe,[e("img",{src:i.directus.url+"assets/"+s.format_icon.filename_disk},null,8,We)]),e("div",ze,[e("p",null,d(s.format_description),1)])]))),256))])])]),Ye,e("div",Ke,[e("div",{class:"row",innerHTML:i.aboutData[0].learning_objectives},null,8,Je)]),Xe,e("div",Ze,[(n(!0),l(_,null,m(i.peopleData,s=>(n(),l("div",$e,[s.category=="Guest"?(n(),l("div",et,[e("div",{class:"square",style:g({backgroundImage:"url("+i.directus.url+"assets/"+s.headshot.filename_disk+")"})},[e("img",{src:i.directus.url+"assets/"+s.headshot.filename_disk},null,8,tt)],4),e("h4",null,d(s.first_name)+"\xA0"+d(s.last_name),1),e("h5",null,d(s.title),1),s.link_to_bio?(n(),l("a",{key:0,href:s.link_to_bio,target:"_blank"},it,8,st)):f("",!0)])):f("",!0)]))),256))]),rt,e("div",at,[e("div",{class:"row",innerHTML:i.aboutData[0].about_govlab},null,8,nt)]),lt,e("div",ct,[(n(!0),l(_,null,m(i.TeamData[56].project_team,s=>(n(),l("div",dt,[e("div",{class:"square",style:g({backgroundImage:"url("+s.team_id.picture.data.thumbnails[3].url+")"})},[e("img",{src:s.team_id.picture.data.full_url},null,8,ut)],4),e("h4",null,d(s.team_id.name),1),e("h5",null,d(s.team_id.title),1),e("a",{href:"https://www.thegovlab.org/team.html#"+s.team_id.slug,target:"_blank"},mt,8,ht)]))),256))]),ft,pt])])}var bt=M(j,[["render",vt]]);const gt=[{name:"blog",path:"/blog",component:()=>u(()=>import("./blog.f71b148c.js"),["assets/blog.f71b148c.js","assets/vendor.687ad0bb.js"]),props:!0},{name:"book",path:"/book",component:()=>u(()=>import("./book.a6292198.js"),["assets/book.a6292198.js","assets/vendor.687ad0bb.js"]),props:!0},{name:"courses",path:"/courses",component:()=>u(()=>import("./courses.056e1c70.js"),["assets/courses.056e1c70.js","assets/vendor.687ad0bb.js"]),props:!0},{name:"index",path:"/",component:bt,props:!0},{name:"research",path:"/research",component:()=>u(()=>import("./research.fd6131a5.js"),["assets/research.fd6131a5.js","assets/vendor.687ad0bb.js"]),props:!0},{name:"resources",path:"/resources",component:()=>u(()=>import("./resources.c3dcf362.js"),["assets/resources.c3dcf362.js","assets/vendor.687ad0bb.js"]),props:!0},{name:"team",path:"/team",component:()=>u(()=>import("./team.ad069aba.js"),["assets/team.ad069aba.js","assets/vendor.687ad0bb.js"]),props:!0}],yt=T({history:L(),base:"./",routes:gt});E(x).use(yt,B,{config:{id:"G-LS299J2EWH"},enabled:!0}).mount("#app");export{M as _,I as a,R as b};