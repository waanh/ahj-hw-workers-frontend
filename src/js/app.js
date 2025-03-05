import List from "./List.js";

const url = "https://loading-styling-backend-0n6y.onrender.com/films/new";

const container = document.querySelector(".page");

const list = new List(url, container);

list.init();
