const input = document.getElementById('user-name');
const button = document.getElementById('button');
const header = document.getElementById('header');
const result = document.getElementById('result');

const answer = [
  '🌟 大吉！願っていたことに近づけるチャンスの日。自信を持って動こう。',
  '😊 中吉！小さな幸せに気づける日。感謝の気持ちを忘れずに。',
  '🙂 小吉！今日は準備の日。明日に向けて力をためよう。',
  '😐 吉！穏やかな一日。無理せず自然体でいけばOK。',
  '😵 末吉！少し慎重さが必要な日。確認を忘れずに。',
  '⚡ 凶！無理をすると空回りしやすい日。休むのも大事。',
  '💀 大凶！ピンチはチャンスの種。落ち着いて乗り越えよう。',
];

const time = Date.now();
const dateToday = Math.floor(time / 1000 / 60 / 60 / 24);
console.log(dateToday);
function inputEnd() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
  const username = input.value
  let number = 0;
  if (username.length === 0) {
    return;
  };
  for (let i = 0; i < username.length; i++) {
    number = number + username.charCodeAt(i);
  };
  let number2 = (number + dateToday) % answer.length;
  const end = answer[number2];

  const title = document.createElement('h1');
  title.innerHTML = `<span class = 'username'>${username}</span> さんの結果は！？🤔`;
  header.appendChild(title);

  const underTitle = document.createElement('p');
  underTitle.innerText = end
  result.appendChild(underTitle)
}

button.addEventListener(
  'click',
  inputEnd,
);

document.addEventListener(
  'keydown',
  function (event) {
    if (event.key === 'Enter') {
      inputEnd()
    }
  },
);