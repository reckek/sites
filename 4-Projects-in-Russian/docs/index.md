# Starter

## Навигатор
+ **[Особенности](#особенности)**
+ **[Установка](#установка)**
+ **[Файловая структура](#файловая-структура)**
+ **[Команды](#команды)**
+ **[Рекомендации по использованию](#рекомендации-по-использованию)**
  + **[BEM](#bem)**
  + **[Страницы проекта](#страницы-проекта)**
  + **[Шрифты](#шрифты)**
  + **[Изображения](#изображения)**

## Особенности

- Использование классов по [БЭМ](https://ru.bem.info/)
- используется препроцессор [SCSS](https://sass-lang.com/)
- используется препроцессор для html [kit](https://codekitapp.com/help/kit/)
- используется транспайлер [Babel](https://babeljs.io/) для поддержки современного JavaScript (ES6) в браузерах

---

## Установка

- установите [NodeJS](https://nodejs.org/en/) **_12-ой версии_** (на новых версиях NodeJS имеются проблемы с установкой некоторых пакетов) и [Yarn](https://yarnpkg.com/en/docs/install)
- скачайте сборку с помощью [Git](https://git-scm.com/downloads): `git clone https://github.com/reckek/Starter.git`
- установите `gulp` глобально: `yarn global add gulp-cli`
- перейдите в скачанную папку со сборкой: `cd Starter`
- скачайте необходимые зависимости: `yarn`
- чтобы начать работу, введите команду: `yarn run dev` (режим разработки)

---

## Файловая структура

```yaml
Файлы разработки:
├─ build
├─ gulp
├─ src
│  ├─ assets
│  │  ├─ audio
│  │  ├─ fonts
│  │  ├─ icons
│  │  │  ├─ favicon
│  │  │  └─ svg
│  │  ├─ images
│  │  └─ video
│  ├─ bem
│  │  ├─ components
│  │  ├─ modules
│  │  └─ _blocks.scss
│  ├─ js
│  │  ├─ imports
│  │  │  ├─ modules
│  │  │  │  ├─ ismobile.js
│  │  │  │  └─ webp.js
│  │  │  ├─ bem.js
│  │  │  └─ modules.js
│  │  └─ main.js
│  ├─ styles
│  │  ├─ base
│  │  │  ├─ module
│  │  │  │  └─ _grid.scss
│  │  │  ├─ _fonts.scss
│  │  │  ├─ _general.scss
│  │  │  └─ _modules.scss
│  │  ├─ helpers
│  │  │  ├─ _functions.scss
│  │  │  ├─ _mixins.scss
│  │  │  └─ _varibles.scss
│  │  ├─ vendor
│  │  │  ├─ import
│  │  │  │  └─ _reseter.scss
│  │  │  └─ _libs.scss
│  │  └─ main.scss
│  ├─ views
│  └─ index.kit
├─ zip
├─ .babelrc
├─ .editorconfig
├─ .eslintrc
├─ .gitignore
├─ gulpfile.babel.js
└─ package.json
```
- Папка `gulp` - папка с Gulp-tasks

- Папка `build` - готовый вариант сайта

- Папка `gzip` - папка, в которой хранятся собранные файлы из build в формате `.zip`

- Папка `src/`

  - assets для сайта: `src/assets`

  * БЭМ-блоки: `src/bem`
  * JS-файлы: `src/js`
  * SCSS-файлы: `src/styles`
  * HTML-файлы: `src/views`
  * страницы сайта: `src/views/pages`


- Корень папки:

  - `.babelrc` — настройки Babel
  - `.eslintrc` — настройки ESLint
  - `.gitignore` – запрет на отслеживание файлов Git'ом
  - `gulpfile.babel.js` — настройки Gulp
  - `package.json` — список зависимостей

---

## Команды

- `yarn run dev` - запуск сервера для разработки проекта
- `yarn run build` - собрать проект для разработки, но только без запуска сервера
- `yarn run build:prod` - собрать проект с оптимизацией без запуска сервера
- `yarn run build:webp` - Конвертирует картинки в формат webp
- `yarn run build:gzip` - Архивирует готовую сборку
- `yarn run bem-c` - создать BEM компонент (Будет работать только с установленным **bem-cli**, подробнее смотрите [тут](#bem))
- `yarn run bem-m` - создать BEM модификатор (Будет работать только с установленным **bem-cli**, подробнее смотрите [тут](#bem))

---

## Рекомендации по использованию
---
### BEM

Перед работай с bem функциями, установите **глобально** плагин **bem-cli**

`npm i -g bem-cli`

После использования бем создастся файлы **_(Игнорируйте ошибку, она не критична)_**.

Пример структуры папки с БЭМ-блоком:

```yaml
bem
├── component
│   ├── header
│   │   ├── header.html
│   │   ├── header.js
│   │   ├── header.scss
```

После, подключаем их к файлам:

**kit файлы:**

```js
src
├─ views
│  └─ bem.kit

<!-- @import "../bem/components/{component}/{component}.kit" -->
<!-- @import "../bem/modules/{module}/{module}.kit" -->
```

**JavaScript файлы:**

```js
src
├─ js
│  ├─ imports
│  │  └─ bem.js

import {component} from "../../bem/components/{component}/{component}";
import {module} from "../../bem/modules/{module}/{module}";
```

**scss файлы:**

```scss
src
├─ bem
│  ├─ imports
│  │  └─ _blocks.scss

@import "components/{component}/{component}.scss";
@import "modules/{module}/{module}.scss";
```

---

### Страницы проекта

- страницы проекта находятся в папке

  ```yaml
  src/views/pages
  ```

  - главная страница: `src/views/index.html`

---

### Шрифты

- шрифты находятся в папке

  ```yaml
  src/fonts
  ```

  - используйте [форматы](https://caniuse.com/#search=woff) `.woff`, `.woff2`, `ttf`
  - шрифты подключаются в файл `src/styles/base/_fonts.scss`
  - сконвертировать локальные шрифты можно с помощью [данного сервиса](https://onlinefontconverter.com/)

---

### Изображения

- изображения находятся в папке

  ```yaml
  src/img
  ```

  - изображения автоматически конвертируются в формат `.webp`. Подробная информация по использованию [тут](https://habr.com/ru/post/275735/).
