#running this script on mac os lets you run multiple instances of expo on different ios simulators at the same time
#!/bin/bash
#list of simlator id's
declare -a simulators=("C2253002-26F7-425D-96F2-399A39AACA4A" "1219A3E2-2F23-40B9-8066-D8EFA1B06206" "B6EEB939-AF5D-4987-A367-4DF372EF70A5" "E6528795-F1E0-4F92-A1CC-5C46E2C668CD")

for i in "${simulators[@]}"
do
    xcrun instruments -w $i
    xcrun simctl install $i ~/.expo/ios-simulator-app-cache/Exponent-2.16.0.tar.app
    xcrun simctl openurl $i exp://127.0.0.1:19000
done