import random

visitType = ["Consultation", "Routine", "Emergency", "Treatment", "Specialty"]

csvData = []

for x in range(0, 500):
    visitType = ["Consultation", "Routine", "Emergency", "Treatment", "Specialty"]
    random.shuffle(visitType)

    csvData.append(visitType.pop())

with open('finalVisitTypes.txt', 'w') as f:
    for item in csvData:
        f.write("%s\n" % item)
