# Зависимости
brew install mason

### Инициализация

В корне проекта вызовите команду `init`, которая создаст папку `.mason/`

```
mason init
```

### Использование 👷

Все готовые `brick'и` хранятся в папке `/bricks`

Для примера попробуем использовать `brick` под названием `base_feature`

```
# Добавляем `brick` себе в mason (посмотреть уже добавленные можно через `mason ls/list`, а удалить через `mason remove`)
mason add base_feature --path bricks/base_feature

# Используем `brick` для в интересующей нас папке (поскольку это шаблон фичи, выбрана папка lib/features/)
mason make base_feature -o lib/features
```

Далее необходимо ответить на вопросы задаваемые в CLI и на основе ответов `brick` сгенериует фичу

### Разработка

В папке `bricks/` вы можете создать свой `brick`

```
# создать hello brick
mason new my_brick_name
```

Далее всю структуру папок и файлов необходимо описать в папке `__brick__`

Для большей информации [читайте и смотрите примеры](https://github.com/felangel/mason/blob/master/packages/mason_cli/README.md)
