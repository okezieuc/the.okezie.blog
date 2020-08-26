---
title: Free and easy ways to create AMP Stories
author: Okezie Chiedozie
date: 2020-08-27T11:00:00.000+00:00
excerpt: AMP stories are the new thing but creating them may be daunting at first.
  Here are some tools that will enable you build your stories faster than ever.
hero: "../images/free-and-easy-ways-to-create-amp-stories-cover.png"
secret: true

---
## What are AMP Stories

AMP stories are part of Google's AMP project that enables supported search results  from google to open as quickly as possible. This is due to the strict restrictions to what scripts or style the website can contain as there are particular scripts that AMP pages work with. Next time when you open a google search result and you see the thunderbolt sign on the url bar, you are on an AMP page

AMP stories are AMP pages that are visually rich and are typically displayed as full screen images with text overlayed on it.  These stories work in a way that is similar to the stories found on social networks. The reader can then tap through the slides of the story by tapping on the edges of the screen.

## Two ways of going about creating AMP Stories

There are two paths I suggest you have to choose between while creating your AMP stories.

1. Creating your own templates and writing code for them
2. Using a WYSIWYG editor

### Creating your own templates and writing code for the

When I started off with creating my AMP story website, I decided to create my own templates.

I first of all created sketches of designs I wanted different parts of my pages to look like. I divided the templaye designs into different categores

* The cover pages
* The pages containing just a very large bold text
* Pages that have text together with a smaller sized descriptin
* Pages that have just small text
* The closing pages
* Page containing just an image

#### Structure of the code on an AMP story

The main portion of the code is wrapped in an `<amp-story>`  element

```html
<amp-story standalone
	title="Title goes here"
    publisher="Publisher goes here"
    poster-potrait-src="../path/to/cover">
    ...
</amp-story>
```

\`

The parameters given here are a self-explanatory. You put the title of the story in place of `Title goes here` and similarly the name of the publisher. AMP stories are given special postitions in search results in some locations so the image that `poster-potrait-src` points to will be the thumbnail that will be displayed on the search results.

The AMP