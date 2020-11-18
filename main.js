import {
  deleteButtons,
  countClick,
  addButton,
  generateCommentsFight,
  setLevel,
  deleteCommentsFight,
} from "./init.js";
import generatePlayer from "./generatePlayer.js";
import getFight from "./getFight.js";

function resetGame(player1, player2) {
  player1.hp.current = player1.hp.total;
  player1.resetHP();
  player2.hp.current = player2.hp.total;
  player2.resetHP();
  deleteButtons(".button");
  deleteCommentsFight();
  start(player1, player2);
}

async function startGame() {
  const player1 = await generatePlayer("player1");
  const player2 = await generatePlayer("player2");

  player1.redrawing();
  player2.redrawing();
  player1.resetHP();
  player2.resetHP();

  deleteButtons(".button");
  deleteCommentsFight();
  start(player1, player2);
}

function start(player1, player2) {
  let level = 1;
  setLevel(level);

  player1.attacks.forEach((element) => {
    const btn = addButton(element.name, "shot");
    const btnCount = countClick(element.maxCount, btn);
    btn.addEventListener("click", async () => {
      btnCount();
      let { kick } = await getFight(player1.id, element.id, player2.id);

      player2.changeHP(kick.player2, function (count) {
        generateCommentsFight(player2, player1, count);
      });
      player1.changeHP(kick.player1, function (count) {
        generateCommentsFight(player1, player2, count);
      });
      if (player1.losing) {
        alert("Вы проиграли!Игра окончена!");
        deleteButtons(".shot");
      }
      if (player2.losing) {
        player2 = await generatePlayer("player2");
        player2.resetHP();
        player2.redrawing();
        ++level;
        setLevel(level);
      }
    });
  });

  const btnReset = addButton("RESET GAME");
  btnReset.addEventListener("click", () => {
    resetGame(player1, player2);
  });

  const btnNewGame = addButton("NEW GAME");
  btnNewGame.addEventListener("click", () => {
    startGame();
  });
}

startGame();
