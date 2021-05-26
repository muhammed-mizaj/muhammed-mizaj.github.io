import time
from plyer import notification
if __name__ =="__main__":
    while True:
        notification.notify(
            title="Drink Water",
            message="Drink water,It's an Hour",
            app_icon="glass.ico",
            timeout=10
        )
        time.sleep(3600)