# Яндекс Практикум

# Тестовое задание автора курсов для Fronted-разработчиков

Привет!

Спасибо, что решили выполнить тестовое. Оно состоит из двух заданий: в первом мы посмотрим на ваши навыки и подход к написанию кода, во втором — на манеру подачи материала.

Выполненное задание присылайте в виде ссылки на публичный репозиторий в GitHub (задание 1) и ссылки на Notion (задание 2).

### **Задание 1**

С помощью TypeScript и библиотеки React реализуйте компонент DropdownMenu. Используйте только функциональные компоненты.

Контент должен задаваться снаружи компонента. DropdownMenu должен уметь автоматически определять сторону открытия контента и раскрывать его по клику и ховеру в ту сторону, где будет больше места относительно триггера.

Допустимые позиции:

- вниз-вправо,
- вверх-вправо,
- вниз-влево,
- вверх-влево.

Сделайте триггер изменяемым и представьте его любым элементом интерфейса. Клик внутри контента не должен закрывать дропдаун, тогда как клик снаружи или повторный клик в триггер должны закрывать активный дропдаун.

Может быть только один активный дропдаун. Если открывается другой, текущий должен быть закрыт.

Если при скролле дропдауна не хватает места для отрисовки, то он должен перерисоваться в новое место так, чтобы контент отобразился корректно. При выходе инициирующего элемента из вьюпорта скрывать дропдаун, а про появлении — отображать снова.

Ширина контента дропдауна должна быть ограничена 260 пикселями.

Для иконок (опционально) можно воспользоваться паком `feather-icons`. Избегайте `any` в типах и постарайтесь типизировать весь компонент. Для вёрстки используйте любое удобное решение.

Очень хорошо, если клик на пункт меню будет вызывать соответствующий ему колбэк, а после этого закрывать дропдаун.

Постарайтесь не использовать сторонние библиотеки, ограничьтесь React и react-dom.

Прототип:

!https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4640cdb2-1305-4170-9557-3acbed4f5ed1/IMG_20210113_193017_888.png

[IMG_20210113_193017_888.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36f0c451-4ddd-4bfe-afe5-fa2fc4292322/IMG_20210113_193017_888.png)

![IMG_20210113_193017_888.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d62c2062-5c22-4c6b-a97e-a0c541f7cb82/IMG_20210113_193017_888.png)

Сопроводите код инструкцией по запуску проекта в `[README.md](<http://readme.md>)` репозитория на GitHub.

---

## Задание 2

Рефакторинг уже написанного контента будет важной частью работы. Приводим одну из тем курса и предлагаем выполнить несколько заданий на написание и изменение контента:

[3.1 Роутинг в приложениях](https://www.notion.so/3-1-fde0032a7efe49da8f9c1967a1de38a9?pvs=21)

Результатом должна стать ссылка на документ в Notion, где будет ваша оценка контента, а также его версия, переработанная по заданию.

1. Прочитайте тему и дайте оценку: что здесь хорошо, а чего не хватает? Предлагаем подумать с позиции студента и написать несколько абзацев.
2. Перепишите один из уроков, где вам это кажется необходимым, или дополните тему новым уроком. Объясните, почему именно такие изменения контента, на ваш взгляд, здесь нужны.
3. Придумайте задачу, которую должен решить студент, чтобы закрепить знания. Задача должна включать: — текст задания; — исходный код — болванку кода, в которую студент допишет решение (ссылка на codepen или аналогичный сервис); — итоговый код — эталонное решение (ссылка на codepen или аналогичный сервис); — подсказку; — текст, который студенты увидят, если успешно решат задач

[Вакансия: Автор курсов для Frontend-разработчиков](https://www.notion.so/Frontend-b292e5ade3d740e4ab4dc6480c9f3895?pvs=21)

[3.1 Роутинг в приложениях](https://www.notion.so/3-1-fde0032a7efe49da8f9c1967a1de38a9?pvs=21)




## решение  [**Краткое резюме Главная идея проекта**](https://www.notion.so/57fe6b9e078c4ea68c0690d130f7789f?pvs=21)