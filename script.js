const characters = [
  {
    name: "空閑 遊真",
    description: "謎多き黒トリガー使い。小柄ながら戦闘能力はA級以上。",
    image:
      "https://blogger.googleusercontent.com/img/a/AVvXsEikkFVajXd2-OVv5uJ4eypeqALxjVJlTmiHfI-VKeDS-BA3CzuupG89RFvGLFSfX8ujudJA4rj5yMIkMK247QMh5tCGsyHalbM08FSjwUNajIneRz0qWy4C-EBomGHNuFcCufQBvjDs4mLM58FU26oqxq0ITTVqcASoSd-SSSeFZYozeuJGiFtocsoWBQ=s400",
  },
  {
    name: "三雲 修",
    description: "戦術と分析を武器に戦う、玉狛第2の頭脳。",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgxBNMbabTZKthacIkfv2lTg6ZILzJyUlYUA456uqdgdrLCIl4RcU7O3X7o6vPC6E3hRAR-NULX2LKSazfIJqVrNR3O-WHLuN5UcbdQpvQn17KpowHB1vhGDVRE1XiivtW-fFhIn73MEeo8/s400/megane_lloyd_man.png",
  },
  {
    name: "雨取 千佳",
    description: "圧倒的なトリオン量を誇るスナイパー。守られるだけじゃない。",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjDu7NC3UP5XWH7DgY5rNLiYr2iZWAcA02viHjNCL5eK9JrTQxNl1-3r5iKGPh-VZX_jbDZaZADDud1SPS7QF28edSkiAkJOv1StoivA7RukHZbOo5O5VVV62_ncEXtCGghG3rFduiW9pg/s300/girl_sleep.png",
  },
];

function showRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  const char = characters[randomIndex];

  document.getElementById("character-card").innerHTML = `
    <img src="${char.image}" alt="${char.name}">
    <h3>${char.name}</h3>
    <p>${char.description}</p>
  `;
}

showRandomCharacter();
