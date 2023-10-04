"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9759],{75602:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>p,toc:()=>m});var n=a(87462),l=a(63366),o=(a(67294),a(3905)),r=["components"],i={id_old:"version-1.3-social",title:"utils.social",id:"social"},s=void 0,p={unversionedId:"api/social",id:"version-1.3/api/social",title:"utils.social",description:"A namespace that contains various utilities to help you extract social handles from text, URLs and and HTML documents.",source:"@site/versioned_docs/version-1.3/api/social.md",sourceDirName:"api",slug:"/api/social",permalink:"/sdk/js/docs/1.3/api/social",draft:!1,tags:[],version:"1.3",lastUpdatedBy:"renovate[bot]",lastUpdatedAt:1696424038,formattedLastUpdatedAt:"Oct 4, 2023",frontMatter:{id_old:"version-1.3-social",title:"utils.social",id:"social"},sidebar:"version-1.3/docs",previous:{title:"utils.puppeteer",permalink:"/sdk/js/docs/1.3/api/puppeteer"},next:{title:"AutoscaledPoolOptions",permalink:"/sdk/js/docs/1.3/typedefs/autoscaled-pool-options"}},c={},m=[{value:"<code>social.LINKEDIN_REGEX</code>",id:"sociallinkedin_regex",level:2},{value:"<code>social.LINKEDIN_REGEX_GLOBAL</code>",id:"sociallinkedin_regex_global",level:2},{value:"<code>social.INSTAGRAM_REGEX</code>",id:"socialinstagram_regex",level:2},{value:"<code>social.INSTAGRAM_REGEX_GLOBAL</code>",id:"socialinstagram_regex_global",level:2},{value:"<code>social.TWITTER_REGEX</code>",id:"socialtwitter_regex",level:2},{value:"<code>social.TWITTER_REGEX_GLOBAL</code>",id:"socialtwitter_regex_global",level:2},{value:"<code>social.FACEBOOK_REGEX</code>",id:"socialfacebook_regex",level:2},{value:"<code>social.FACEBOOK_REGEX_GLOBAL</code>",id:"socialfacebook_regex_global",level:2},{value:"<code>social.YOUTUBE_REGEX</code>",id:"socialyoutube_regex",level:2},{value:"<code>social.YOUTUBE_REGEX_GLOBAL</code>",id:"socialyoutube_regex_global",level:2},{value:"<code>social.EMAIL_REGEX</code>",id:"socialemail_regex",level:2},{value:"<code>social.EMAIL_REGEX_GLOBAL</code>",id:"socialemail_regex_global",level:2},{value:"<code>social.emailsFromText(text)</code>",id:"socialemailsfromtexttext",level:2},{value:"<code>social.emailsFromUrls(urls)</code>",id:"socialemailsfromurlsurls",level:2},{value:"<code>social.phonesFromText(text)</code>",id:"socialphonesfromtexttext",level:2},{value:"<code>social.phonesFromUrls(urls)</code>",id:"socialphonesfromurlsurls",level:2},{value:"<code>social.parseHandlesFromHtml(html, [data])</code>",id:"socialparsehandlesfromhtmlhtml-data",level:2}],u={toc:m},d="wrapper";function h(e){var t=e.components,a=(0,l.Z)(e,r);return(0,o.kt)(d,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("a",{name:"social"}),(0,o.kt)("p",null,"A namespace that contains various utilities to help you extract social handles from text, URLs and and HTML documents."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nconst emails = Apify.utils.social.emailsFromText('alice@example.com bob@example.com');\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"linkedin_regex"}),(0,o.kt)("h2",{id:"sociallinkedin_regex"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.LINKEDIN_REGEX")),(0,o.kt)("p",null,"Regular expression to exactly match a single LinkedIn profile URL. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/^...$/i")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.linkedin.com/in/alan-turing\nen.linkedin.com/in/alan-turing\nlinkedin.com/in/alan-turing\n")),(0,o.kt)("p",null,"The regular expression does NOT match URLs with additional subdirectories or query parameters, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.linkedin.com/in/linus-torvalds/latest-activity\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (Apify.utils.social.LINKEDIN_REGEX.test('https://www.linkedin.com/in/alan-turing')) {\n    console.log('Match!');\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"linkedin_regex_global"}),(0,o.kt)("h2",{id:"sociallinkedin_regex_global"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.LINKEDIN_REGEX_GLOBAL")),(0,o.kt)("p",null,"Regular expression to find multiple LinkedIn profile URLs in a text or HTML. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/.../ig")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.linkedin.com/in/alan-turing\nen.linkedin.com/in/alan-turing\nlinkedin.com/in/alan-turing\n")),(0,o.kt)("p",null,"If the profile URL contains subdirectories or query parameters, the regular expression extracts just the base part of the profile URL. For example,\nfrom text such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.linkedin.com/in/linus-torvalds/latest-activity\n")),(0,o.kt)("p",null,"the expression extracts just the following base URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.linkedin.com/in/linus-torvalds\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const matches = text.match(Apify.utils.social.LINKEDIN_REGEX_GLOBAL);\nif (matches) console.log(`${matches.length} LinkedIn profiles found!`);\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"instagram_regex"}),(0,o.kt)("h2",{id:"socialinstagram_regex"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.INSTAGRAM_REGEX")),(0,o.kt)("p",null,"Regular expression to exactly match a single Instagram profile URL. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/^...$/i")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.instagram.com/old_prague\nwww.instagram.com/old_prague/\ninstagr.am/old_prague\n")),(0,o.kt)("p",null,"The regular expression does NOT match URLs with additional subdirectories or query parameters, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.instagram.com/cristiano/followers\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (Apify.utils.social.INSTAGRAM_REGEX.test('https://www.instagram.com/old_prague')) {\n    console.log('Match!');\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"instagram_regex_global"}),(0,o.kt)("h2",{id:"socialinstagram_regex_global"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.INSTAGRAM_REGEX_GLOBAL")),(0,o.kt)("p",null,"Regular expression to find multiple Instagram profile URLs in a text or HTML. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/.../ig")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.instagram.com/old_prague\nwww.instagram.com/old_prague/\ninstagr.am/old_prague\n")),(0,o.kt)("p",null,"If the profile URL contains subdirectories or query parameters, the regular expression extracts just the base part of the profile URL. For example,\nfrom text such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.instagram.com/cristiano/followers\n")),(0,o.kt)("p",null,"the expression extracts just the following base URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.instagram.com/cristiano\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const matches = text.match(Apify.utils.social.INSTAGRAM_REGEX_GLOBAL);\nif (matches) console.log(`${matches.length} Instagram profiles found!`);\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"twitter_regex"}),(0,o.kt)("h2",{id:"socialtwitter_regex"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.TWITTER_REGEX")),(0,o.kt)("p",null,"Regular expression to exactly match a single Twitter profile URL. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/^...$/i")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.twitter.com/apify\ntwitter.com/apify\n")),(0,o.kt)("p",null,"The regular expression does NOT match URLs with additional subdirectories or query parameters, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.twitter.com/realdonaldtrump/following\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (Apify.utils.social.TWITTER_REGEX.test('https://www.twitter.com/apify')) {\n    console.log('Match!');\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"twitter_regex_global"}),(0,o.kt)("h2",{id:"socialtwitter_regex_global"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.TWITTER_REGEX_GLOBAL")),(0,o.kt)("p",null,"Regular expression to find multiple Twitter profile URLs in a text or HTML. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/.../ig")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.twitter.com/apify\ntwitter.com/apify\n")),(0,o.kt)("p",null,"If the profile URL contains subdirectories or query parameters, the regular expression extracts just the base part of the profile URL. For example,\nfrom text such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.twitter.com/realdonaldtrump/following\n")),(0,o.kt)("p",null,"the expression extracts only the following base URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.twitter.com/realdonaldtrump\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const matches = text.match(Apify.utils.social.TWITTER_REGEX_STRING);\nif (matches) console.log(`${matches.length} Twitter profiles found!`);\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"facebook_regex"}),(0,o.kt)("h2",{id:"socialfacebook_regex"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.FACEBOOK_REGEX")),(0,o.kt)("p",null,"Regular expression to exactly match a single Facebook profile URL. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/^...$/i")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.facebook.com/apifytech\nfacebook.com/apifytech\nfb.com/apifytech\nhttps://www.facebook.com/profile.php?id=123456789\n")),(0,o.kt)("p",null,"The regular expression does NOT match URLs with additional subdirectories or query parameters, such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.facebook.com/apifytech/photos\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (Apify.utils.social.FACEBOOK_REGEX.test('https://www.facebook.com/apifytech')) {\n    console.log('Match!');\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"facebook_regex_global"}),(0,o.kt)("h2",{id:"socialfacebook_regex_global"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.FACEBOOK_REGEX_GLOBAL")),(0,o.kt)("p",null,"Regular expression to find multiple Facebook profile URLs in a text or HTML. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/.../ig")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.facebook.com/apifytech\nfacebook.com/apifytech\nfb.com/apifytech\n")),(0,o.kt)("p",null,"If the profile URL contains subdirectories or query parameters, the regular expression extracts just the base part of the profile URL. For example,\nfrom text such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.facebook.com/apifytech/photos\n")),(0,o.kt)("p",null,"the expression extracts only the following base URL:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.facebook.com/apifytech\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const matches = text.match(Apify.utils.social.FACEBOOK_REGEX_GLOBAL);\nif (matches) console.log(`${matches.length} Facebook profiles found!`);\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"youtube_regex"}),(0,o.kt)("h2",{id:"socialyoutube_regex"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.YOUTUBE_REGEX")),(0,o.kt)("p",null,"Regular expression to exactly match a single Youtube video URL. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/^...$/i")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.youtube.com/watch?v=kM7YfhfkiEE\nhttps://youtu.be/kM7YfhfkiEE\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"if (Apify.utils.social.YOUTUBE_REGEX.test('https://www.youtube.com/watch?v=kM7YfhfkiEE')) {\n    console.log('Match!');\n}\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"youtube_regex_global"}),(0,o.kt)("h2",{id:"socialyoutube_regex_global"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.YOUTUBE_REGEX_GLOBAL")),(0,o.kt)("p",null,"Regular expression to find multiple Youtube video URLs in a text or HTML. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/.../ig")," and matches URLs such as:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://www.youtube.com/watch?v=kM7YfhfkiEE\nhttps://youtu.be/kM7YfhfkiEE\n")),(0,o.kt)("p",null,"Example usage:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const matches = text.match(Apify.utils.social.YOUTUBE_REGEX_GLOBAL);\nif (matches) console.log(`${matches.length} Youtube videos found!`);\n")),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"email_regex"}),(0,o.kt)("h2",{id:"socialemail_regex"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.EMAIL_REGEX")),(0,o.kt)("p",null,"Regular expression to exactly match a single email address. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/^...$/i"),"."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"email_regex_global"}),(0,o.kt)("h2",{id:"socialemail_regex_global"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.EMAIL_REGEX_GLOBAL")),(0,o.kt)("p",null,"Regular expression to find multiple email addresses in a text. It has the following form: ",(0,o.kt)("inlineCode",{parentName:"p"},"/.../ig"),"."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"emailsfromtext"}),(0,o.kt)("h2",{id:"socialemailsfromtexttext"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.emailsFromText(text)")),(0,o.kt)("p",null,"The function extracts email addresses from a plain text. Note that the function preserves the order of emails and keep duplicates."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"text")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - Text to search in.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array<string>")," - Array of emails addresses found. If no emails are found, the function returns an empty array."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"emailsfromurls"}),(0,o.kt)("h2",{id:"socialemailsfromurlsurls"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.emailsFromUrls(urls)")),(0,o.kt)("p",null,"The function extracts email addresses from a list of URLs. Basically it looks for all ",(0,o.kt)("inlineCode",{parentName:"p"},"mailto:")," URLs and returns valid email addresses from them. Note\nthat the function preserves the order of emails and keep duplicates."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"urls")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Array<string>")," - Array of URLs.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array<string>")," - Array of emails addresses found. If no emails are found, the function returns an empty array."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"phonesfromtext"}),(0,o.kt)("h2",{id:"socialphonesfromtexttext"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.phonesFromText(text)")),(0,o.kt)("p",null,"The function attempts to extract phone numbers from a text. Please note that the results might not be accurate, since phone numbers appear in a large\nvariety of formats and conventions. If you encounter some problems, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apify/apify-js/issues",target:"_blank",rel:"noopener"},"file an issue"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"text")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - Text to search the phone numbers in.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array<string>")," - Array of phone numbers found. If no phone numbers are found, the function returns an empty array."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"phonesfromurls"}),(0,o.kt)("h2",{id:"socialphonesfromurlsurls"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.phonesFromUrls(urls)")),(0,o.kt)("p",null,"Finds phone number links in an array of URLs and extracts the phone numbers from them. Note that the phone number links look like ",(0,o.kt)("inlineCode",{parentName:"p"},"tel://123456789"),",\n",(0,o.kt)("inlineCode",{parentName:"p"},"tel:/123456789")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"tel:123456789"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"urls")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"Array<string>")," - Array of URLs.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Array<string>")," - Array of phone numbers found. If no phone numbers are found, the function returns an empty array."),(0,o.kt)("hr",null),(0,o.kt)("a",{name:"parsehandlesfromhtml"}),(0,o.kt)("h2",{id:"socialparsehandlesfromhtmlhtml-data"},(0,o.kt)("inlineCode",{parentName:"h2"},"social.parseHandlesFromHtml(html, [data])")),(0,o.kt)("p",null,"The function attempts to extract emails, phone numbers and social profile URLs from a HTML document, specifically LinkedIn, Twitter, Instagram and\nFacebook profile URLs. The function removes duplicates from the resulting arrays and sorts the items alphabetically."),(0,o.kt)("p",null,"Note that the ",(0,o.kt)("inlineCode",{parentName:"p"},"phones")," field contains phone numbers extracted from the special phone links such as ",(0,o.kt)("inlineCode",{parentName:"p"},"[call us](tel:+1234556789)")," (see\n",(0,o.kt)("a",{parentName:"p",href:"/sdk/js/docs/1.3/api/social#phonesfromurls",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"social.phonesFromUrls()")),") and potentially other sources with high certainty, while ",(0,o.kt)("inlineCode",{parentName:"p"},"phonesUncertain")," contains phone\nnumbers extracted from the plain text, which might be very inaccurate."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example usage:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"const Apify = require('apify');\n\nconst browser = await Apify.launchPuppeteer();\nconst page = await browser.newPage();\nawait page.goto('http://www.example.com');\nconst html = await page.content();\n\nconst result = Apify.utils.social.parseHandlesFromHtml(html);\nconsole.log('Social handles:');\nconsole.dir(result);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"html")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - HTML text"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"[data]")),": ",(0,o.kt)("inlineCode",{parentName:"li"},"*")," | ",(0,o.kt)("inlineCode",{parentName:"li"},"null")," ",(0,o.kt)("code",null," = ")," - Optional object which will receive the ",(0,o.kt)("inlineCode",{parentName:"li"},"text")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"$")," properties that contain text content of the\nHTML and ",(0,o.kt)("inlineCode",{parentName:"li"},"cheerio")," object, respectively. This is an optimization so that the caller doesn't need to parse the HTML document again, if needed.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns"),":"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"../typedefs/social-handles",target:null,rel:null},(0,o.kt)("inlineCode",{parentName:"a"},"SocialHandles"))," - An object with the social handles."),(0,o.kt)("hr",null))}h.isMDXComponent=!0},3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(a),d=l,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);