# xsolla-project-setup
## Запуск проекта
1. Клонировать репозиторий `git clone https://github.com/MarkiGrig/xsolla-project-setup`;
2. Запустить json server: `json-server src/_data/events.json`;
3. Запустить команду `yarn start` для старта фронта (перед этим пока нужно собрать проект командой `yarn build`, скоро исправлю);

## Что сделано:

##### 1. Компонент App рендерится в #root;
##### 2. Подключен scss (2 коммит), добавлены переменные в scss файл;
##### 3. Подключена горячая замена модулей (все работает как на гифке из дз);
##### 4. Реализован проект Event Listing с использованием React, React Hooks, Scss, Redux, React-Router;
##### 5. Добавлена загрузка данных с json-server:
Для этого необходимо ввести команду `json-server src/_data/events.json`
