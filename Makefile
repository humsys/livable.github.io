index.html: template.html manifesto.md index.js
	node index.js

manifesto.md:
	mediumexporter https://medium.com/@edelwax/four-ideas-for-better-human-systems-7b1a5661a3fc > manifesto.md
