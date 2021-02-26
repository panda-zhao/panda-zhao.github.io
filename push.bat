goto start = push_update
:start
@echo off
echo Input your update info

set /p info=

git add .
git commit -m "%info%"
git push

pause

exit