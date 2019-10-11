# [In Their Shoes](https://github.com/aprilleperez/realgameoflife_client)

**In Their Shoes** is a Jackbox style game designed as a training tool for nonprofits to lead discussions on privilege and equity. It's a question and answer style game and hosts can either launch the default game or log in and create their own custom game to play.

The game is launched through a *host* device (ideally a device that can be connected to a large monitor or screen) and players join on their mobile devices to play.The *host* device displays the lobby where players wait until everyone has joined, the questions during the game, and the results at the end of the game. Players can choose their avatar, answer the questions, and see their personal results at the end of the game. 

The default game is a basic intro to the idea of privilege and follows five avatars as they encounter typical life events such as graduating high school or starting a new job. Each avatar has stats that affect which responses are available to them. For example, a question might be: 

<i>Q: You've graduated high school! What's next?</i>

And there might be four responses: 

- <i>Get your GED and start a job</i>
- <i>Begin trade school or community college</i>
- <i>Go to a public university for college</i>
- <i>Attend a private college</i>

Every player can see all four responses, however, depending on a player's avatar, it's possible not all responses will be available to them. If a player doesn't have a high enough wealth stat, for example, private college might be unavailable to them. 

Once player's pick their responses, they then see the outcome of their choice. A player who is able to attend public college for example, might see their wealth stat go down but their education stat go up. 

At the end of the game, player's can see how well their avatars did over the course of the game. 

## Playing Real Game of Life
[You can launch a game here!](https://aprilleperez.github.io/realgameoflife_client/)

## Game Breakdown
The game is broken into three sections: 

* Backend - stores user information and all created games.  [Check out the repo here!](https://github.com/cplank/LifeAPI)

* Admin - This is where users can log in to make their own version of the game, and the primary purpose of this project. Here, an admin can make a completely new version of the game based on the experiences and decisions available or unavailable to the communities they serve. [Check out the repo here!](https://github.com/aprilleperez/realgameoflife_admin)

* Player - The main landing page for the project and where a host can begin either a default game, or log in to create their own game. Once a host has started a game (either default or their own), one device serves as the "host" - where players see the lobby, the questions, and the end results of the game. <b>You are currently in the repo for the Player Project</b>


## Game Play Walkthrough

The first thing players see is the lobby where they can wait for the rest of the group to join the game.

![host lobby](/public/images/lobby.PNG)

---

Once all your players have joined, you can launch your game! The first thing that happens is each player is randomly assigned an avatar.

![Assigned Avatars](/public/images/allPlayerPhones.PNG)

As player progress through the game, questions are displayed on the host screen...

![Questions on Host Screen](/public/images/playerQuestion.PNG)

...and players answer on their devices. Since this game is designed to show how privlege affects the choices people can make throughout their lives, depending on the stats assigned to your avatar, you may not be able to choose from all of the responses to the question. Options that aren't available to you are displayed in gray.

![Player Response Options](/public/images/playerChoices.PNG)

Each response has different outcomes. After everyone has answered the question, you can see how your choice affected your stats.

![Question Outcomes](/public/images/playerOutcomes.PNG)

---
Once you've gone through all the questions in the game, players see how their avatars fared throughout the game (which stats went up, which went down)

![End of Game Screen](/public/images/playerGameEnd.PNG)

---

## Built with
- [Socket.io](https://socket.io/)
- [React](https://reactjs.org/)
- [React-Bootstrap](https://react-bootstrap.github.io/)

## Other Dependencies 
- [Axios](https://www.npmjs.com/package/axios)
- [React Router-DOM](https://www.npmjs.com/package/react-router-dom)
---

## Authors
* [James Dizon](https://github.com/jamesssd)
* [Aprille Perez](https://github.com/aprilleperez)
* [Carrie Plank](https://github.com/cplank)
* [Abram Thau](https://github.com/Glacian22)

## Roadmap
We are still working on this project! Next steps for development: 

- Adding random events that bring in a layer of luck to the game. 
- Having players complete a success roll in order to achieve their desired response. If unsuccessful, they default to the lower response level. 
- At the end of the game, having "life achievments"