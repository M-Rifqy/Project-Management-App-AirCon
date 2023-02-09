<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <style> 
            @import url('https://fonts.googleapis.com/css2?family=Clicker+Script&family=Comfortaa:wght@300&family=Mea+Culpa&family=Monoton&family=Montserrat:ital,wght@1,900&family=Orbitron&family=Play&family=Poppins:ital,wght@0,200;0,300;0,500;0,600;1,200&family=Quicksand:wght@300;400;500;600;700&display=swap');
            
            html {
            scroll-behavior: smooth;
            }

            body {
                overflow: hidden;
            }

            *,
            *::before,
            *::after {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                user-select: none;
                box-sizing: border-box;
                /* outline: 1px solid rgb(108, 216, 108) !important; */
                /* background-color: rgb(0 100 0 / 0.1) !important; */
            }
        </style>

        <!-- Scripts -->
        @routes
        @viteReactRefresh
        @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
        @inertiaHead
    </head>
    <body style="background-color:rgba(232, 234, 236, 0.619);">
        @inertia
    </body>
</html>
