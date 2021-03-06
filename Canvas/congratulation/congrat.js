{
  const text = `Юленька, мой самый любимый человечек на земле!!!
  Поздравляю тебя с твоим юбилеем, С Днем Рождения!
  Прежде всего, Желаю тебе крепкого здоровья!!! Береги его!!!
  Желаю чтобы успех и удача всегда были твоими верными союзниками!!!
  Пусть твоя красота никогда не угасает, а наоборот с каждым годом только расцветает!!!
  По жизни пусть тебя окружают только светлые и добрые люди!!!
  Которые всегда будут ценить тебя, любить и уважать такой какая ты есть!!!
  Пусть у твоей доченьки и вообще в твоей семье всегда все будет хорошо!!!
  Пусть исполняються все твои сокровенные мечты и желания!!!
  Всегда иди по жизни со своей ослепительной улыбкой, верь в хорошее и все получиться!!!
  Счастья, любви, добра и успехов во всем!!!`;

  window.addEventListener("sceneFinish", () => {
    document.querySelector(".container").style.display = "block";

    const div = document.createElement("div");
    div.style.position = "absolute";
    div.style.fontFamily = "Pacifico";
    const sz = window.innerHeight / 33;
    div.style.fontSize = sz + "px";
    div.style.textAlign = "center";
    // div.style.color = '#FFF587';
    div.style.width = "70%";
    div.style.left = "50%";
    div.style.transform = "translateX(-50%)";
    // div.style.bottom = '60px';
    div.style.top = "48%";
    div.textContent = text;
    document.body.append(div);
  });
}

const moveBallons = () => {
  const balloons = document.querySelectorAll(".balloon>div");

  let timeout = 5;
  Array.from(balloons).forEach(balloon => {
    balloon.querySelector("span").style.fontSize = innerHeight / 16 + "px";
    balloon.style.width = innerWidth / 15 + "px";
    balloon.style.height = innerHeight / 6 + "px";
    let position = 130;
    timeout += 10;
    const interval = setInterval(() => {
      if (position <= 10) {
        clearInterval(interval);
      }
      position -= 5;
      balloon.style.top = position + "%";
    }, timeout);
  });
};
moveBallons();
