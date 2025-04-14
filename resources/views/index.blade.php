<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Gerenciador de Tarefas</title>
    <link rel="icon" href="/img/brand.png">
    @viteReactRefresh
    @vite(['resources/js/main.jsx', 'resources/css/app.css'])
</head>
<body class="bg-zinc-900">
    <div id="root">

    </div>
</body>
</html>