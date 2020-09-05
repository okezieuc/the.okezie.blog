---
title: How to use Python, APIs and Mockaroo to fill your Database with Mock Data
author: Okezie Chiedozie
date: 2020-09-07T00:00:00+01:00
excerpt: Say you have a database with an endpoint for posting data, you can use Python
  to progmatically send data to the API.
hero: ''
secret: true

---
Almost every application has a database location somewhere in the stack.  When developing the application, there are usually people who work on "What happens behind the scenes (the back-end)", and people who work on the "what we see (the front-end)". There front-end developers may need the back-end (which includes databases, of course) to be created for them to stat their work.

But they cannot do anything if there is an empty database, so someone has to fill in the database. You can decide to start filling in the database manually, but that is going to take a lot of energy, creativity and of course time. This is when we need to think of a better way of populating our table.

Today we will be populating a user table for a social media app that doesn't exist. The

> A way of populating our table will be to get a collection of sample data, and somehow have that data sent to our Database

Here are the steps that we are going to take to achieve our goal.

1. Create an API endpoint for our database that we will send the data to.
2. Get a list of mock data for our database from Mockaroo.
3. Write script in python to send the mock data to our database via the API.

If you already have an API that you can use to push data to your database then you can skip the first step and go forward to the seond step.