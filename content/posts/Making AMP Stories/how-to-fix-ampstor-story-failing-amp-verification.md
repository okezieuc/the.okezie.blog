---
title: How to fix Ampstor Story Failing AMP validation
date: 2020-09-01 23:00:00 Z
author: Okezie Chiedozie
excerpt: Did you finish making a story on Ampstor, but the story failed AMP validation,
  this article is for you. Learn how to fix the errors and improve the AMP Story
hero: ''
secret: true
---

Ampstor is no doubt a very great site to create your AMP Stories. In fact I created most of the stories on [one of my sites](https://stories.okezie.dev "Stories by Okezie") with Ampstor, and Ampstor made it really easy for me to be able to create stories quickly, thanks to the intuitive interface and in-built availability of Unsplash images.

However, if you export to HTML after editing and pass the file through an [AMP verifier](https://validator.ampproject.org/ "AMP Story Verifier"), the results may say that the document is not a valid AMP document but don't worry, we'll show you how to fix it.

## How to fix the invalid AMP document error on Ampstor

To do this you will need a text editor, I will suggest [Notepad++](https://notepad-plus-plus.org/ "Notepad++ Website") or Atom, as these are the ones I am familiar with.

You can right-click on the HTML file that was exported from Ampstor and open it in your text-editor. Go to find and search for null, you may find some results that look like this. This is gotten from the HTML file that was produced from [my AMP Story on Cities](https://stories.okezie.dev/guess-the-city).

```html
<amp-story-grid-layer class="bottom" template="vertical">
	<div style="">
		<null style="color: #ffffff;font-family: Roboto; ...">
			Paris is a tourist city in france known for its beautiful culture and ...
		</null>
	</div>
</amp-story-grid-layer>
```

You will notice that there is a `<null></null>` tag in the file and this tag is not among the tags that are allowed in an AMP Story. The fix for this is just to replace each `<null>` with a `<p>.` You can do this manually for all the places where `<null>` is located or you can use the search and replace feature and replace every `null` with a `p`. After this everything will be alright as long as there is no null somewhere in the text of your story.

I will at a later time write about further ways of improving your Ampstor made AMP Story and making it more production ready. You can also look at [our comparison](https://blog.okezie.dev/Free-and-easy-ways-to-create-AMP-Stories "Choosing Ampstor or MakeStories") between Ampstor and [MakeStories](https://stories.okezie.dev "MakeStories AMP Maker"), two best free AMP story makers.