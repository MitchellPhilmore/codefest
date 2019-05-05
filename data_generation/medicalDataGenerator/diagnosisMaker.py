import random

diagnosis = ["Hypertension", "Hyperlipidemia", "Diabetes", "Back pain", "Anxiety", "Obesity", "Allergic rhinitis",
             "Reflux esophagitis", "Respiratory problems", "Hypothyroidism", "Visual refractive errors", "Cancer",
             "Osteoarthritis", "Fibromyalgia/Myositis", "Malaise and fatigue", "Pain in joint",
             "Acute laryngopharyngitis", "Acute maxillary sinusitis", "Major depressive disorder", "Acute bronchitis",
             "Asthma", "Depressive disorder", "Nail fungus", "Coronary atherosclerosis", "Urinary tract infection"]

csvData = []

for x in range(0, 500):
    diagnosis = ["Hypertension", "Hyperlipidemia", "Diabetes", "Back pain", "Anxiety", "Obesity", "Allergic rhinitis",
                 "Reflux esophagitis", "Respiratory problems", "Hypothyroidism", "Visual refractive errors", "Cancer",
                 "Osteoarthritis", "Fibromyalgia/Myositis", "Malaise and fatigue", "Pain in joint",
                 "Acute laryngopharyngitis", "Acute maxillary sinusitis", "Major depressive disorder",
                 "Acute bronchitis",
                 "Asthma", "Depressive disorder", "Nail fungus", "Coronary atherosclerosis", "Urinary tract infection"]
    random.shuffle(diagnosis)

    csvData.append(diagnosis.pop())

with open('finalDiagnosis.txt', 'w') as f:
    for item in csvData:
        f.write("%s\n" % item)
