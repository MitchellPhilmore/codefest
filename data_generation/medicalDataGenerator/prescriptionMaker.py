import random

prescriptions = ["Vicodin", "Simvastatin", "Lisinopril", "Levothyroxine", "Azithromycin", "Metformin", "Lipitor", "Amlodipine",
             "Amoxicillin", "Hydrochlorothiazide", "Losartan", "Prednisone", "Omeprazole", "Cetirizine", "Ibuprofen"]

csvData = []

for x in range(0, 500):
    listOfThisDudesFuckingMeds = ""
    prescriptions = ["Vicodin", "Simvastatin", "Lisinopril", "Levothyroxine", "Azithromycin", "Metformin", "Lipitor",
                     "Amlodipine",
                     "Amoxicillin", "Hydrochlorothiazide", "Losartan", "Prednisone", "Omeprazole", "Cetirizine",
                     "Ibuprofen"]
    random.shuffle(prescriptions)
    if random.randint(0, 9) > 5:
        y = random.randint(0, 3)
    else:
        y = 0
    while y > 0:
        listOfThisDudesFuckingMeds = listOfThisDudesFuckingMeds + str(prescriptions.pop()) + ", "
        y = y-1

    listOfThisDudesFuckingMeds = listOfThisDudesFuckingMeds[:-2]
    csvData.append(listOfThisDudesFuckingMeds)


with open('finalPrescriptions.txt', 'w') as f:
    for item in csvData:
        f.write("%s\n" % item)