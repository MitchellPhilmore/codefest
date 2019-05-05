import csv
import random

allergies = ["Seasonal", "Latex", "Cat", "Dog", "Shellfish", "Gluten", "Soy", "Peanuts", "Tree-nuts", "Nuts",
             "NSAIDs", "Eggs", "Lactose", "Strawberries"]

# with open('numOfAllergies.csv', 'rb') as k:
#     reader = csv.reader(k)
#     numOfAllergies = list(reader)

theFile = open("numOfAllergies.txt", "r")
theInts = []
for val in theFile.read().split():
    theInts.append(int(val))
theFile.close()

# print(theInts)

csvData = []

for x in theInts:
    listOfThisDudesAllergies = ""
    allergies = ["Seasonal", "Latex", "Cat", "Dog", "Shellfish", "Gluten", "Soy", "Peanuts", "Tree-nuts", "Nuts",
                 "NSAIDs", "Eggs", "Lactose", "Strawberries"]
    random.shuffle(allergies)
    y = x
    while y > 0:
        listOfThisDudesAllergies = listOfThisDudesAllergies + str(allergies.pop()) + ", "
        # listOfThisDudesAllergies = listOfThisDudesAllergies + str(allergies.pop(random.randint(0, exitingThing)))
        y = y-1

    listOfThisDudesAllergies = listOfThisDudesAllergies[:-2]
    csvData.append(listOfThisDudesAllergies)



# for x in theInts:
#     listOfThisDudesAllergies = ""
#     y = theInts[x]
#     if y == 0:
#         exitingThing = len(allergies) - 1
#         listOfThisDudesAllergies = str(allergies.pop(random.randint(0, exitingThing)))
#     else:
#         exitingThing = len(allergies) - 1
#         listOfThisDudesAllergies = listOfThisDudesAllergies + ", " + str(allergies.pop(random.randint(0, exitingThing)))
#
#     csvData.append(listOfThisDudesAllergies)
#

# with open('finalAllergies.csv', "wb") as csv_file:
#         writer = csv.writer(csv_file, delimiter=',')
#         for line in data:
#             writer.writerow(line)


with open('finalAllergies.txt', 'w') as f:
    for item in csvData:
        f.write("%s\n" % item)
# with open('finalAllergies.csv', 'w') as csvFile:
#     writer = csv.writer(csvFile)
#     writer.writerows(csvData)