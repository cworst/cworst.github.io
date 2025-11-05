class Time:
    def __init__(self, hours, minutes, seconds):
        self.hours = hours
        self.minutes = minutes
        self.seconds = seconds

    def __str__(self):
        if len(str(self.seconds)) == 1:
            sec = "0" + str(self.seconds)
        else:
            sec = str(self.seconds)

        return (str(self.hours) + ":" + str(self.minutes) + ":" + sec )

