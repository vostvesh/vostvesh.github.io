{
  const text = `Дорогая Юленька, Поздравляю тебя с Днем Рождения!
  В первую очередь, конечно же, желаю крепкого здоровья, без него никуда!!!
  Пускай успех и удача всегда будут твоими союзниками!!!
  Пусть тебя окружают только светлые и добрые люди!!!
  Желаю всегда оставаться такой же красивой и с каждым годом только расцветать!!!
  Желаю всегда быть ценной, любимой и желанной!
  Пусть у твоей доченьки и вообще в твоей семье всегда все будет хорошо!
  Всегда иди по жизни со своей ослепительной улыбкой, верь в хорошее и все получиться!!!
  Счастья, любви, добра и света!!!`;

window.addEventListener('sceneFinish', () => {
  document.querySelector('.container').style.display = 'block';
  
  const div = document.createElement('div');
  div.style.position = 'absolute';
  div.style.fontFamily = 'Pacifico';
  const sz = window.innerHeight / 33;
  div.style.fontSize = sz + 'px';
  div.style.textAlign = 'center';
  // div.style.color = '#FFF587';
  div.style.width = '70%';
  div.style.left = '50%';
  div.style.transform = 'translateX(-50%)';
  div.style.bottom = '60px';
  div.textContent = text;
  document.body.append(div);
});

}

const moveBallons = () => {
  const balloons = document.querySelectorAll('.balloon>div');
  
    let timeout = 5;
    Array.from(balloons).forEach(balloon => {
      let position = 130;
      timeout += 10;
      const interval = setInterval(() => {
        if (position <= 10) {
          clearInterval(interval);
        }
        position -= 5;
        balloon.style.top = position + '%';
      }, timeout);
  });
};
moveBallons();