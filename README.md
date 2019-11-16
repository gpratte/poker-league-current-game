# poker-league-current-game (react/redux)

I've worked through the Redux Basic Tutorial (https://redux.js.org/basics/basic-tutorial).

The following shows what I did step by step.

Each step can be found on the cooresponding branch.

## step 01 create development environment
To get started did the following.

From https://reactjs.org/docs/create-a-new-react-app.html#create-react-app

* _npx create-react-app poker-league-current-game_
* _cd poker-league-current-game_

Removed the .git directory
* _rm -rf .git_

Created github repository poker-league-current-game
Hooked up react-redux-tutorial with the github repository

* _git init_
* _git add ._
* _git commit -m "initial commit"_
* _git remote add origin https://github.com/gpratte/poker-league-current-game.git_
* _git push origin poker-league-current-game_

Make sure the initial react application works. Run
* _npm start_

should see the default react page in the web browser at http://localhost:3000/

From the redux tutorial "Usage with React" https://redux.js.org/basics/usage-with-react install react-redux
* _npm install --save react-redux_

Push changes
* _git add ._
* _git commit -m "added react-redux npm package"_
* _git push origin poker-league-current-game_

Push to master
* _git checkout master_
* _git merge step-01-create-development-environment_
* _git push origin master_

## step 02 screen layout
* _git checkout -b step-02-screen-layout_

The current game is the heart of the poker league application. 
It is fashioned after what you would see if playing in a tournment in a casino.

A simplified mock up 

![current poker game](this-and-that/img/PokerLeagueGames.png)

There is so much more to a game than what is depicted in the mockup but
it is a good place to start (and then iterate on what is missing).

#### Presentation (react) components
* Details
* Clock
* Players
* Seating

