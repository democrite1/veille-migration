@echo off
set "PATH=C:\Program Files\nodejs;%PATH%"
rem next-intl 4 loads @swc/core, whose native addon rejects caches under
rem AppData\Local on this machine (ACL) and paths over 260 characters.
set "SWC_NATIVE_BINDING_CACHE=%~dp0..\.swc"
cd /d "%~dp0.."
"C:\Program Files\nodejs\npm.cmd" run dev
