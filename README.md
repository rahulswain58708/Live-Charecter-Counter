# 📝 Live Character Counter

A simple and clean real-time character counter built using **HTML**, **CSS**, and **JavaScript**.  
This widget shows how many characters are left, warns the user when the limit is crossed, and prevents extra input.

## 🚀 Features
- Real-time character counting
- Maximum character limit (e.g., 20 chars)
- Red warning when limit is exceeded
- Prevents typing extra characters
- Simple and clean UI

## 📂 Technologies Used
- HTML
- CSS
- JavaScript (Input Event + DOM Manipulation)

## Live :- https://live-charecter-counter.vercel.app/

## 📜 Code Snippet
```js
inp.addEventListener("input", (e) => {
  let len = e.target.value.length;
  let charleft = max - len;

  if (len > max) {
    inp.value = inp.value.slice(0, max);
  }

  result.innerText = charleft < 0 ? 0 : charleft;
  result.style.color = charleft <= 0 ? "red" : "black";
});
