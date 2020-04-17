SET ASPNETCORE_ENVIRONMENT=Development
SET LAUNCHER_PATH=\WoWTimeOptimisation\bin\Debug\netcoreapp3.1\WoWTimeOptimisation.exe
cd /d "C:\Program Files\IIS Express\"
iisexpress.exe /config:"D:\Development\repos\wow-time-optimisation\WoWTimeOptimisationAPI\.vs\WoWTimeOptimisation\config\applicationhost.config" /site:"WoWTimeOptimisation" /apppool:"WoWTimeOptimisation AppPool"
