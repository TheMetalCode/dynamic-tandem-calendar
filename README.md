Dynamic Tandem Calendar
=========

Let's say:

- Your organization has a [Tandem](https://www.tandemcal.com/) calendar.
- You'd like to include this calendar view in a website that you manage.
- This website that you manage uses a CMS that does not allow you to embed script tags.
- You'd still like to have your Tandem calendar automatically scoped to the current month and year and don't want to manually update the calendar's query string parameters.

If the above describes your situation, the dynamic-tandem-calendar script is for you.

###Usage

Given your predicament, one thing you might do is host a basic html page externally (on an AWS S3 bucket configured for public website hosting, for example) that consumes this script, and then iframe that external site into a page managed by your CMS.

First, create a directory and make an `index.html` (or some kind of `.html`).

Move `dist/dynamic-tandem-calendar.min.js` and `dist/dynamic-tandem-calendar.map.js` into the above directory.
  
Construct your `.html` file to look something like this:
  
```html
<html>
	<head>
		<meta charset="utf-8">
		<title>My Org's Monthly Calendar</title>
		<script src="./dynamic-tandem-calendar.min.js"></script>
	</head>
	<body onload="setIframe('tandemcal-subdomain', 'Your Organization Name', 'Numerical Filter Code', 'Desired View: year, month, week, day, or list', 'my-monthly-cal')">
		<div id="my-monthly-cal">
		</div>
	</body>
</html>
```  

Feel free to use inline styling to size and style the containing div in the body according to whatever will look best when iframed into your CMS-managed website.

Once you're satisfied with the look, feel free to deploy the above html, along with `dynamic-tandem-calendar.min.js` and `dynamic-tandem-calendar.map.js` to your external location of choice. 

###Contributing

If you'd like to contribute, make sure to lint (via `npm test`) and compile (via `npm run build`) before submitting a pull request.