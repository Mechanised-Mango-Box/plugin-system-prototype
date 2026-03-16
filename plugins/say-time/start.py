from datetime import datetime, timedelta

TICKRATE = timedelta(seconds=1/10)

if __name__ == "__main__":
    last_tick = datetime.now()

    while True:
        now = datetime.now()
        if now >= last_tick + TICKRATE:
            last_tick = now
            print(last_tick, flush=True)
