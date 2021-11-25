<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Home</title>


    <!-- unpkg -->
    <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://unpkg.com/@egjs/flicking/dist/flicking-inline.css" crossorigin="anonymous" />
    <!-- cdnjs -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.css" crossorigin="anonymous" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking-inline.css" crossorigin="anonymous" />


    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        li {
            list-style: none;
        }



    </style>
</head>
<body>
    <div id="app">
        <header-component></header-component>
        
        <home-component :books="{{ $books }}" :categories="{{ $categories }}"></home-component>
        <footer-component></footer-component>
    </div>

    <!-- unpkg -->
    <script src="https://unpkg.com/@egjs/flicking/dist/flicking.pkgd.min.js" crossorigin="anonymous"></script>
    <!-- cdnjs -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/egjs-flicking/4.x.x/flicking.pkgd.min.js" crossorigin="anonymous"></script>

    <script>
        window.isLogin= @json($isLogin);
        window.username = @json($username);
    </script>
    <script src="{{ mix('js/homepage.js') }}"></script>
</body>
</html>