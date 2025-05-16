import List from "./List.js";

const url = "https://loading-styling-backend-0n6y.onrender.com/films/new";

const container = document.querySelector(".page");

const list = new List(url, container);

list.init();

document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  const content = document.getElementById("content");

  fetch('/api/data')
    .then(res => res.json())
    .then(data => {
      loadingScreen.classList.add("hidden");
      content.classList.remove("hidden");
      content.innerHTML = `<h1>${data.message}</h1>`;
    })
    .catch(() => {
      loadingScreen.classList.add("hidden");
      content.classList.remove("hidden");
      content.innerHTML = `<h1>Нет соединения с сервером</h1>`;
    });
});

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker зарегистрирован:', registration);
      })
      .catch(error => {
        console.log('Ошибка регистрации Service Worker:', error);
      });
  });
}

