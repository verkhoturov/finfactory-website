#!/bin/bash

USER="root"
PASS="wytznTqhEsk6sdjY"
HOST="37.18.89.18"
REMOTE_DIR="/var/www/ff-website" 

# Выполнить синхронизацию локального проекта и проекта на сервере
echo "📦 Синхронизация проекта с сервером..."
sshpass -p "$PASS" rsync -avz \
  --exclude "node_modules/" \
  --exclude ".next/" \
  --exclude ".git/" \
  --delete -e ssh ./ "$USER@$HOST:$REMOTE_DIR"

# логика команды синхронизации: 
# 1) sshpass для указания пароля для подключения к серверу
# 2) rsync -avz синхронизировать всё, сохраняя структуру и метаданные
# 3) --exclude исключения (например, на сервер не надо передавать каталог билда (.next) и каталог зависимостей (node_modules), так как это все будет собрано уже на сервере)
# 4) --delete удалять файлы проекта на сервере, если они были удалены в локальной версии проекта
# 5) ssh ./ (каталог откуда брать данные (текущий каталог проекта)) "$USER@$HOST:$REMOTE_DIR" (от какого пользователя, на какой сервер и в какой каталог положить файлы)

echo -e "🚀 Сборка и перезапуск проекта на сервере..."
sshpass -p "$PASS" ssh -T -o StrictHostKeyChecking=no "$USER@$HOST" << EOF
  set -e
  cd "$REMOTE_DIR"

  echo -e "\n \e[36m 📥 Установка зависимостей... \e[0m \n " 
  npm install

  echo -e "\n  \e[36m 🏗️ Сборка во временный каталог... \e[0m \n " 
  TEMP_BUILD_DIR=build_temp npm run build

  echo -e "\n \e[36m 🔁 Подмена build_temp → build \e[0m \n " 
  rm -rf .next
  mv build_temp .next

  echo -e "\n \e[36m ♻️ Перезапуск pm2... \e[0m \n " 
  pm2 restart finfactory-website || pm2 start npm --name "finfactory-website" -- start

  echo -e "\n  \e[32m ✅ Развертывание завершено! \e[0m"
  echo -e "   Не забудьте проверить работу сайта\n\n"
EOF

# логика команды сборки и перезапуска: 
# 1) "npm install" установка новых зависимостей (если они есть)
# 2) "TEMP_BUILD_DIR=build_temp npm run build" сборка проекта во временный каталог "build_temp". Это сделано на случай, если новая сборка не пройдет, тогда старая сборка останется на месте, а процесс перезапуска будетт остановлен
# 3) "rm -rf .next && mv build_temp .next" удаление старой сборка и подмена на новую
# 4) "pm2 restart finfactory-website || pm2 start npm --name "finfactory-website" -- start" перезапуск процесса с именем finfactory-website, используется утилита pm2 (https://pm2.keymetrics.io/docs/usage/pm2-doc-single-page/)
