import random from "./random.js";

export function deleteButtons(selector) {
  const allButtons = document.querySelectorAll(selector);
  allButtons.forEach((item) => item.remove());
}

export function addButton(text, selector = "") {
  const control = document.querySelector(".control");
  const btn = document.createElement("button");
  btn.classList.add(`button`);
  if (selector) {
    btn.classList.add(`${selector}`);
  }
  control.appendChild(btn);
  btn.innerText = text;
  return btn;
}

export function countClick(count = 6, el) {
  const innerText = el.innerText;
  el.innerText = `${innerText}  (${count})`;
  return function () {
    count--;
    if (count === 0) {
      el.disabled = true;
    }
    el.innerText = `${innerText}  (${count})`;
    return count;
  };
}

export function setLevel(levelNext) {
  const level = document.querySelectorAll(".lvl");
  level.forEach((item) => (item.innerText = `Lv. ${levelNext}`));
}

export function generateCommentsFight(firstPerson, secondPerson, count) {
  const LOGS = [
    `${firstPerson.name} вспомнил что-то важное, но неожиданно ${secondPerson.name}, не помня себя от испуга, ударил в предплечье врага. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} поперхнулся, и за это ${secondPerson.name} с испугу приложил прямой удар коленом в лоб врага. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} забылся, но в это время наглый ${secondPerson.name}, приняв волевое решение, неслышно подойдя сзади, ударил. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} пришел в себя, но неожиданно ${secondPerson.name} случайно нанес мощнейший удар. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} поперхнулся, но в это время ${secondPerson.name} нехотя раздробил кулаком <вырезанно цензурой> противника. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} удивился, а ${secondPerson.name} пошатнувшись влепил подлый удар. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} высморкался, но неожиданно ${secondPerson.name} провел дробящий удар. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} пошатнулся, и внезапно наглый ${secondPerson.name} беспричинно ударил в ногу противника. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} расстроился, как вдруг, неожиданно ${secondPerson.name} случайно влепил стопой в живот соперника. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
    `${firstPerson.name} пытался что-то сказать, но вдруг, неожиданно ${secondPerson.name} со скуки, разбил бровь сопернику. -${count},[${firstPerson.hp.current}/${firstPerson.hp.total}]`,
  ];
  const commentsFight = document.querySelector(".commentsFight");
  const newComment = document.createElement(`p`);
  commentsFight.insertBefore(newComment, commentsFight.firstChild);
  newComment.innerText = LOGS[random(1, LOGS.length) - 1];
}

export function deleteCommentsFight() {
  const commentsFight = document.querySelectorAll("div.commentsFight>p");
  commentsFight.forEach((item) => item.remove());
}
