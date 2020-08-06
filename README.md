<p align="center"><img src="https://res.cloudinary.com/dtfbvvkyp/image/upload/v1566331377/laravel-logolockup-cmyk-red.svg" width="400"></p>

# ローカルサーバー起動

## バックエンド

```zsh
cp .env.example .env
composer install
php artisan key:generate
php artisan serve
```

## フロントエンド

```zsh
yarn
yarn watch
```
