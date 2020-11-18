class Selectors {
  constructor(selector) {
    this.elHP = document.getElementById(`health-${selector}`);
    this.elProgressBar = document.getElementById(`progressbar-${selector}`);
    this.elImg = document.getElementById(`img-${selector}`);
    this.elName = document.getElementById(`name-${selector}`);
  }
}

export default class Pokemon extends Selectors {
  constructor({ name, hp, type, selector, img, attacks, id }) {
    super(selector);
    this.name = name;
    this.hp = {
      current: hp,
      total: hp,
    };
    this.img = img;
    this.attacks = attacks;
    this.type = type;
    this.id = id;
    this.renderHP();
    this.losing = false;
  }

  renderHPLife = () => {
    const {
      elHP,
      hp: { current, total },
    } = this;
    elHP.innerText = current + "/" + total;
  };

  renderHP = () => {
    this.renderHPLife();
    this.renderProgressBarHP();
  };

  renderProgressBarHP = () => {
    const {
      elHP,
      hp: { current, total },
      elProgressBar,
    } = this;
    elProgressBar.style.width = (current / total) * 100 + "%";
    if (current > 20 && current < 60) {
      elProgressBar.classList.add("low");
    } else if (current < 20) {
      elProgressBar.classList.add("critical");
    }
  };

  resetHP = () => {
    this.renderHP();
    this.elProgressBar.classList.remove("low", "critical");
    this.losing = false;
  };

  changeHP = (count, cb) => {
    this.hp.current -= count;
    if (this.hp.current < 0) {
      this.hp.current = 0;
      this.losing = true;
    }
    this.renderHP();
    cb && cb(count);
  };

  redrawing = () => {
    this.elImg.src = this.img;
    this.elName.innerText = this.name;
  };
}
