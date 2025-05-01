import Theme from "https://esm.sh/jsr/@iv/themes@1.0.2";

const themes = [
  "https://raw.githubusercontent.com/hundredrabbits/Themes/refs/heads/master/themes/pico8.svg",
  "https://raw.githubusercontent.com/hundredrabbits/Themes/refs/heads/master/themes/marble.svg",
  "https://raw.githubusercontent.com/hundredrabbits/Themes/refs/heads/master/themes/gotham.svg",
  "https://raw.githubusercontent.com/hundredrabbits/Themes/refs/heads/master/themes/pawbin.svg",
];

const theme = new Theme();
theme.install();
theme.start();

let i = 0;
const btn = document.getElementById("theme-switcher");
btn.onclick = () => {
  if (i++ === themes.length - 1) i = 0;
  fetch(themes[i]).then((res) => res.text()).then(theme.load);
};
