<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

# ローカルサーバー起動

## フロントエンド

```zsh
yarn
yarn watch
```

## バックエンド

```zsh
cp .env.example .env
composer install
php artisan key:generate
php artisan serve
```

## DB

SQLite

```zsh
touch database/database.sqlite
php artisan migrate --seed
```
