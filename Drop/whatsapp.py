import pyautogui
import time

n = 5  # number of messages
message = "write massage here"

print("5 seconds wait... chat box pe click rakho")
time.sleep(5)  # tum chat pe click kar sako

for i in range(n):
    pyautogui.typewrite(f"{message} ({i+1})", interval=0.05)
    pyautogui.press("enter")
    time.sleep(2)  # gap between messages
