# Webpack BEM frontend-project-start

frontend-project-start – это шаблонный репозиторий для создания БЭМ-проектов. Он содержит необходимый минимум конфигурационных файлов и директорий, который позволяет быстро развернуть проект с нуля.

В frontend-project-start по умолчанию подключены основные БЭМ-библиотеки:

* [bem-core](https://ru.bem.info/libs/bem-core/)
* [bem-components](https://ru.bem.info/libs/bem-components/)

## Требования к установке

* [Node.js 18](https://nodejs.org) – это программная платформа, основанная на языке JavaScript и позволяющая легко создавать быстрые и масштабируемые сетевые приложения.
* [npm 9+](https://www.npmjs.com/) – для пользователей операционной системы Windows.

## Поддерживаемые браузеры

Список поддерживаемых браузеров - [используемый в ИНТЕРВОЛГЕ](https://www.intervolga.ru/blog/projects/standart-podderzhki-brauzerov-2016/).

## Установка

Клонируем репозиторий и устанавливаем все необходимые зависимости:

```bash
git clone https://gitlab.intervolga.ru/artem/frontend-project-start.git --depth 1 frontend-project-start
cd frontend-project-start
npm install
```

**Важно:** Не используйте права суперпользователя (`root`) при установке npm-зависимостей.

### Сборка проекта

```bash
npm run XXX
```

### Базовые команды

Все команды необходимо выполнять в терминале локально.

#### Старт сервера

```bash
npm run dev:watch
```

На вашем компьютере запустился сервер для разработки. Чтобы проверить это, откройте в браузере [http://localhost:8080/](http://localhost:8080/).

#### Сборка production-версии

```bash
npm run prod:build
```

#### Сборка иконок

```bash
npm run icon:build
```

На уровне src/blocks.01-base/fi cj.соберутся иконки в проекте
