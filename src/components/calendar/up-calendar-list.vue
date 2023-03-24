<template>
  <main class="main">
    <div class="main__container container" data-aos="zoom-in">
      <section class="calendar">
        <div class="calendar__container">
          <h2 class="visually-hidden">Список дней</h2>
          <!-- caledar-list--window - активирует окна у итемов -->
          <ul
            class="list-reset calendar__list calendar-list calendar-list--window"
          >
            <!-- неделя -->
            <li class="calendar-list__item">
              <!-- элемент занятый --busy -->
              <button
                class="btn-reset calendar-btn calendar-btn--busy"
                onclick="document.location='calendar-item-windows.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">1</span>
                  <span class="calendar-btn__date">пн</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">2</span>
                  <span class="calendar-btn__date">вт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">3</span>
                  <span class="calendar-btn__date">ср</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">4</span>
                  <span class="calendar-btn__date">чт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">5</span>
                  <span class="calendar-btn__date">пт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">6</span>
                  <span class="calendar-btn__date">сб</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">7</span>
                  <span class="calendar-btn__date">вс</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <!-- неделя -->
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">8</span>
                  <span class="calendar-btn__date">пн</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">9</span>
                  <span class="calendar-btn__date">вт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">10</span>
                  <span class="calendar-btn__date">ср</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">11</span>
                  <span class="calendar-btn__date">чт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">12</span>
                  <span class="calendar-btn__date">пт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">13</span>
                  <span class="calendar-btn__date">сб</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">14</span>
                  <span class="calendar-btn__date">вс</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <!-- неделя -->
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">15</span>
                  <span class="calendar-btn__date">пн</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">16</span>
                  <span class="calendar-btn__date">вт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">17</span>
                  <span class="calendar-btn__date">ср</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">18</span>
                  <span class="calendar-btn__date">чт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">19</span>
                  <span class="calendar-btn__date">пт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">20</span>
                  <span class="calendar-btn__date">сб</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">21</span>
                  <span class="calendar-btn__date">вс</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <!-- неделя -->
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">22</span>
                  <span class="calendar-btn__date">пн</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">23</span>
                  <span class="calendar-btn__date">вт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">24</span>
                  <span class="calendar-btn__date">ср</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">25</span>
                  <span class="calendar-btn__date">чт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">26</span>
                  <span class="calendar-btn__date">пт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">27</span>
                  <span class="calendar-btn__date">сб</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">28</span>
                  <span class="calendar-btn__date">вс</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <!-- неделя -->
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">29</span>
                  <span class="calendar-btn__date">пн</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">30</span>
                  <span class="calendar-btn__date">вт</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
            <li class="calendar-list__item">
              <button
                class="btn-reset calendar-btn"
                onclick="document.location='calendar-item.html'"
              >
                <span class="calendar-btn__top"
                  ><span class="calendar-btn__value">31</span>
                  <span class="calendar-btn__date">ср</span> </span
                ><span class="calendar-btn__descr text-little">Свободно</span>
                <span
                  class="calendar-btn__descr calendar-btn__descr--busy text-little"
                  >Занято</span
                >
                <span class="calendar-btn__windows calendar-windows"
                  ><h3 class="calendar-windows__title text-little">Окна:</h3>
                  <span class="calendar-windows__list"
                    ><span class="calendar-windows__item text-little"
                      >09:00</span
                    >
                    <span
                      class="calendar-windows__item calendar-windows__item--busy text-little"
                      >10:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >11:00</span
                    >
                    <span class="calendar-windows__item text-little"
                      >12:00</span
                    ></span
                  ></span
                >
              </button>
            </li>
          </ul>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-calendar-list",
};
</script>
