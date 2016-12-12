![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Project 0: The Game

**Read this entire document before writing a line of code.**

## Overview

This is a running back challenge game.  The player starts the game with one try to get the ball in the orange endzone without running into the randomly generated defenders.

### Technologies Used

HTML
CSS
Javascript
jQuery

#### Code I'm Proud Of

for(var i = 0; i < field.length; i++) {
  var obstacle = Math.random();
  if(obstacle > .9) {
    field[i].addClass('enemy');
  } else {
    field[i].addClass('move');
  }
}

##### Screenshots




Let's start out with something fun - **a game!**

![](https://media.giphy.com/media/u0vk7qdooz5Cg/giphy.gif)

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – since you've already gotten your feet wet with Tic Tac Toe and a Memory game, it's your turn to plan and implement a game from scratch.

**You will be working individually for this project**, but we'll be guiding you as you get started. Show us what you've got!


### Technical Requirements

Your app must:

* **Render a game in the browser**
* **Include logic for winning** & **visually display which player won**
* **Include separate HTML, CSS, and JavaScript files**
* Use **native Javascript or jQuery** for **DOM manipulation**
* Be **deployed publicly online**, where the rest of the world can access it (using a github pages project page or bitballoon)
* Use **semantic markup** for HTML and CSS (adhere to best practices)
* Include **custom styling** to convey the state of the game visually (and differentiate your project from any CSS libraries used)
* Demonstrate attention to code quality with a **DRY (Don't Repeat Yourself)** codebase that is **"clean" (well-indented, appropriately commented, organized)** and **readable.** Actually ask somebody else in the class to read your code and see if they can understand it!

---

### Deliverables


* A **working game, built by you**, hosted somewhere on the internet.
* A **git repository hosted on Github**, with a link to your hosted game, and frequent commits dating back to the very beginning of the project
* **A `readme.md` file** with a short description of the project, a list of which technologies you used for which parts of the app, an explanation of your approach (share some part of the code), and optionally a list of unsolved problems,  screenshots, etc.  See the [example readme](https://github.com/sf-wdi-34/readme-example).
* A **link to your hosted working game** in your game's Github repo.
* A **link to your hosted working game** in the "my work" section of your personal website.
* **[Fill out this spreadsheet](https://docs.google.com/spreadsheets/d/1vzxkkVwX2zU40BZArMknoHMYlu_5bVmyNYAEBMJXH5E/edit?usp=sharing)** with your project links.


### Resources

* [How to deploy on github pages!](https://help.github.com/articles/configuring-a-publishing-source-for-github-pages/)
* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(the best reference for all things Javascript, CSS, and HTML)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[GitHub Pages](https://pages.github.com/)** project site or **[Bit Balloon](https://www.bitballoon.com/docs)** _(hosting the game)_
