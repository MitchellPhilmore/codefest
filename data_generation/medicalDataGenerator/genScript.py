import json
import random
import csv
import person

# these are the arrays that I am making for random value generation

bloodType = ["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]
allergies = ["Seasonal", "Latex", "Cat", "Dog", "Shellfish", "Gluten", "Soy", "Peanuts", "Tree-nuts", "Nuts",
             "NSAIDs", "Eggs", "Lactose", "Strawberries"]

with open('IDsRandomOrder.csv', 'rb') as g:
    reader = csv.reader(g)
    uniqueId = list(reader)

with open('persons.csv', 'rb') as f:
    reader = csv.reader(f)
    personList = list(reader)

with open('dobs.csv', 'rb') as h:
    reader = csv.reader(h)
    dobs = list(reader)

with open('ssns.csv', 'rb') as i:
    reader = csv.reader(i)
    ssns = list(reader)

with open('phoneNumbers.csv', 'rb') as j:
    reader = csv.reader(j)
    tels = list(reader)

with open('gendersInOrder.csv', 'rb') as k:
    reader = csv.reader(k)
    genders = list(reader)

with open('numOfAllergies.csv', 'rb') as k:
    reader = csv.reader(k)
    numOfAllergies = list(reader)

people = {}

for x in range(100):
    people = (uniqueId[x], personList[x], dobs[x], ssns[x], tels[x], genders[x], bloodType[random.randint(0, 7)])

    # listOfThisDudesAllergies = ""
    # people['userID'] = uniqueId.pop()
    # people['fullName'] = personList.pop()
    # people['dob'] = dobs.pop()
    # people['ssn'] = ssns.pop()
    # people['tel'] = tels.pop()
    # people['gender'] = genders.pop()
    # people['bloodType'] = str(bloodType[random.randint(0, 7)])
    #
    # for lol in numOfAllergies[x]:
    #     if lol == 0:
    #         listOfThisDudesAllergies = allergies[random.randint(0, 13)]
    #     else:
    #         listOfThisDudesAllergies = allergies[random.randint(0, 13)] + ", " + listOfThisDudesAllergies
    #
    # people['allergies'] = listOfThisDudesAllergies
    #

with open('personalCollection.json', 'w') as fp:
    json.dumps(people, default=lambda o: o.__dict__)

