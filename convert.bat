
@echo off

rem Atribua os argumentos a variáveis
set "js_file=eitri-app.conf.js"
set "json_file=eitri-app.conf.json"

if not exist "%js_file%" (
    echo Erro: Arquivo JavaScript não encontrado: %js_file%
    exit /b 1
)

node -e "console.log(JSON.stringify(require('./%js_file%'), null, 2))" > "%json_file%"

