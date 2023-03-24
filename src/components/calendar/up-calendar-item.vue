<template>
  <main class="main">
    <div class="main__container container">
      <section class="edit section-block--big">
        <div class="edit__container">
          <h2 class="visually-hidden">Меню позиции дня</h2>
          <ul class="list-reset list-menu" data-aos="zoom-in">
            <li class="list-menu__item">
              <p class="list-menu__descr text-little">
                Выберите одно из значений, чтобы применить ко всем окнам
                значение «Занято» или «Свободно»:
              </p>
            </li>
            <li class="list-menu__item">
              <div class="form-radio form-radio--checkbox">
                <input
                  class="input"
                  id="calendar-item-1"
                  type="checkbox"
                  name="calendar-item"
                  value="1"
                />
                <label class="label" for="calendar-item-1">Свободно</label>
              </div>
            </li>
            <li class="list-menu__item">
              <div class="form-radio form-radio--checkbox">
                <input
                  id="calendar-item-2"
                  type="checkbox"
                  name="calendar-item"
                  value="2"
                />
                <label for="calendar-item-2">Занято</label>
              </div>
            </li>
            <li class="list-menu__item">
              <p class="list-menu__descr text-little">
                Добавление окон и их настройка:
              </p>
            </li>
            <li class="list-menu__item">
              <div class="form-radio form-radio--checkbox">
                <input
                  class="input"
                  id="checkbox-window-setting"
                  type="checkbox"
                  name="windows-in-calendar-days"
                  value="1"
                />
                <label class="label" for="checkbox-window-setting"
                  >Окна в днях</label
                >
              </div>
            </li>
            <li class="list-menu__item">
              <div class="window-settings" id="window-settings">
                <ul class="list-reset window-settings__list">
                  <!-- итем добавления окна -->
                  <li class="window-settings__item window-item">
                    <label class="label window-item__label"
                      ><input
                        type="time"
                        name="Время"
                        class="input-reset input window-item__input"
                        placeholder="Время"
                      />
                      <span>Выбрать время</span></label
                    >
                    <button class="btn-reset btn">Удалить окно</button
                    ><!-- Выбор значения итема -->
                    <div class="select">
                      <input class="select__input" type="hidden" name="" />
                      <div class="select__name"><span>09:00</span></div>
                      <div class="select__head">Нет значения</div>
                      <ul class="select__list" style="display: none">
                        <li class="select__item">Свободно</li>
                        <li class="select__item">Занято</li>
                      </ul>
                    </div>
                    <!-- --- -->
                  </li>
                  <li class="window-settings__item"></li>
                  <li class="window-settings__item">
                    <button class="btn-reset btn btn--med list-menu__btn">
                      Добавить окно
                    </button>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
          <div class="edit__bottom btns-panel">
            <label class="label label--comments"
              ><button class="btn-rest btn btn--fit" id="btn-textarea">
                <i class="fa-solid fa-delete-left"></i>
              </button>
              <textarea
                name="comments"
                id="textarea"
                cols="30"
                rows="3"
                class="textarea-reset textarea textarea--comments"
                placeholder="Место для личных заметок"
              ></textarea>
              <span>Написать заметку</span></label
            >
            <button class="btn-reset btn btn--med list-menu__btn">
              Сохранить изменения
            </button>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
export default {
  name: "up-calendar-item",
};
</script>

