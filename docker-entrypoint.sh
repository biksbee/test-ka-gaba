#!/bin/sh
set -e

# Ждём пока PostgreSQL будет доступен
echo "Waiting for Postgres..."
while ! nc -z $DATABASE_HOST $DATABASE_PORT; do
  sleep 0.5
done
echo "Postgres is up"

# Запускаем миграции
echo "Running migrations..."
npm run migration:run

# Старт приложения
echo "Starting NestJS..."
exec node dist/main.js