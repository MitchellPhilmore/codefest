import random

symptoms = ["Abdominal pain", "Blood in stool", "Chest Pain", "Constipation", "Cough", "Diarrhea", "Difficulty swallowing", "Dizziness", "Eye Discomfort", "Eye Problems",
             "Foot/Ankle pain", "Foot/Leg swelling", "Headaches", "Heart palpitations", "Hip pain", "Knee pain", "Low back pain", "Nasal congestion", "Nausea or vomiting",
             "Neck pain", "Numbness or tingling in hands", "Pelvic pain", "Shortness of breath", "Shoulder pain", "Sore throat", "Urinary problems", "Wheezing"]

csvData = []

for x in range(0, 500):
    listOfThisDudesFuckingProblems = ""
    symptoms = ["Abdominal pain", "Blood in stool", "Chest Pain", "Constipation", "Cough", "Diarrhea",
                "Difficulty swallowing", "Dizziness", "Eye Discomfort", "Eye Problems",
                "Foot/Ankle pain", "Foot/Leg swelling", "Headaches", "Heart palpitations", "Hip pain", "Knee pain",
                "Low back pain", "Nasal congestion", "Nausea or vomiting",
                "Neck pain", "Numbness or tingling in hands", "Pelvic pain", "Shortness of breath", "Shoulder pain",
                "Sore throat", "Urinary problems", "Wheezing"]
    random.shuffle(symptoms)
    y = random.randint(2, 5)
    while y > 0:
        listOfThisDudesFuckingProblems = listOfThisDudesFuckingProblems + str(symptoms.pop()) + ", "
        y = y-1

    listOfThisDudesFuckingProblems = listOfThisDudesFuckingProblems[:-2]
    csvData.append(listOfThisDudesFuckingProblems)


with open('finalSymptoms.txt', 'w') as f:
    for item in csvData:
        f.write("%s\n" % item)
