import random
import csv

bloodType = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]


csvData = []

for x in range(0, 100):
    bloodType = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
    random.shuffle(bloodType)

    csvData.append(bloodType.pop())


with open('finalBloodTypes.txt', 'w') as f:
    for item in csvData:
        f.write("%s\n" % item)
        