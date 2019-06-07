# Renamed: In Their Shoes
This is the front end of a full stack application, designed to be both a game and game development platform. We designed this as a tool for non-profits to do quick, fun, informative trainings with their staff. Via the admin panel, a custom game can be designed specifically for a given non-profit's focus.

### Playing the Game
The deployed version is currently hosted at http://cutit.org/Intheirshoes. To play the short sample game, click on "launch default game". That computer acts as the host (typically connected to a projector), and once loaded provides instructions for players to connect via their smartphones.

![host lobby](https://i.ibb.co/zh12YnQ/lobby.png)

Once all players have joined, click "launch game" on the host, and the game will start. Questions will be displayed on the host, and client devices will show a list of answers. As the game is supposed to simulate the lived experience of the community a non-profit is helping, each player is assigned a precreated avatar, complete with RPG style stats. Access to higher quality responses is dependent on having higher-level stats, so some players will be at a distinct advantage. This is by design, as wealth, ethnicity, gender, etc all impact the options available to a real individual as they live their life. 

At the end of the game, each player can see how their stats improved or declined over the course of their "life".

### Technologies
* MongoDB - particularly the use of detailed schemas and sub-schemas
* Express
* React
* React Bootstrap
* Socket.io
* Passport
