1. склонировал репозиторий
2. создать файл .env в корне проекта. Переменные окружения:
    

    PORT=30110
    DATABASE_HOST=postgres
    DATABASE_PORT=5432
    DATABASE_USER=postgres
    DATABASE_PASSWORD=}Aq6a.b3X=_zz9Z
    DATABASE_NAME=postgres-ka-gaba
(вставить эти переменные в фаайл .env)

3. запустить команду

   
     docker compose up -d --build 

4. после запуска, либо в логах контейнера nest-api(и перейти по ссылке), либо сразу перейти в сваггер и тестировать эндпоинты.

##### Swagger docs: http://localhost:30110/api/docs
