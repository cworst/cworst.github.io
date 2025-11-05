class Time:
    def __init__(self, hours, minutes, seconds):
        self.hours = hours
        self.minutes = minutes
        self.seconds = seconds

    def __str__(self):
        if len(self.seconds) == 1:
            "0" + str(self.seconds) = self.seconds
        return (str(self.hours) + ":" + str(self.minutes) + ":" + str(self.seconds))

