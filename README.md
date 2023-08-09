# mf-rtk
Webpack Module Federation + Redux Toolkit App

[Shell repository](https://github.com/MaximePeterburg/Shell-mf-rtk)

[Shell link](https://maximepeterburg.github.io/Shell-mf-rtk/)

[Microfrontend-1 repository](https://github.com/MaximePeterburg/MF1-mf-rtk)

[Microfrontend-1 link](https://maximepeterburg.github.io/MF1-mf-rtk/)

[Microfrontend-2 repository](https://github.com/MaximePeterburg/MF2-mf-rtk)

[Microfrontend-2 link](https://maximepeterburg.github.io/MF2-mf-rtk/)

## Описание сборки 🇷🇺
Shell и микрофронты были созданы с помощью скрипта [create-mf-app](https://github.com/jherr/create-mf-app). Путь к каждому модулю был настроен в зависимости от режима работы приложения. 
В режиме разработки файлы подгружаются с localhost, а в production - с Github pages.
### Module Federation
Через ModuleFederationPlugin подключается Module Federation. В нём указываются название модуля, название файла для удалённого доступа и необходимые зависимости. 
Shell предоставляет микрофронтам модули store и Header, которые они используют. Из store берут increment, decrement и их диспатчат. Также берут компонент Header со счётчиком.

Файлы JavaScript транспилируются с помощью Babel. Файлы CSS и SCSS обрабатываются с помощью style-loader, css-loader и postcss-loader.

Сборка сконфигурирована для деплоя на Github pages.
## Build Description 🇬🇧
The shell and microfronends have been created with [create-mf-app](https://github.com/jherr/create-mf-app). The public path of each module has been setup depending on the app mode. 
In development mode, the assets are served from localhost, while in production mode, they are served from Github pages.

### Module Federation
The ModuleFederationPlugin is configured to enable module federation. It includes name of the module, filename of the remote entry file and shared dependencies between all modules.
The shell exposes modules from the application that can be used by other microfrontends. The microfrontends are consumeing these remote modules.

JavaScript files are transpiled using Babel. CSS and SCSS files are processed using style-loader, css-loader, and postcss-loader.

The build is configured to be deployed on Github pages
