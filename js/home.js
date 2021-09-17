import  popUp  from "../js/modules/modal.js";
import { displayMenu } from "./modules/menu.js";
import { accordeon } from "./modules/accordeon.js";

const accordeons = document.querySelectorAll(".accordeon");
const open = document.querySelectorAll('.js-openModal');
const closeModal = document.querySelector('.js--closeModal');
const modal = document.querySelector('.modal');
const btn = document.querySelector('.menu-bottom');
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');

popUp(modal,open,closeModal);
displayMenu(btn,menu,close);
accordeon(accordeons)