import random

physician = [742190,413743,
448111,877957,
849591,568550,
140037,709314,
977282,305478,
943574,873590,
342704,197842,
404633,659228,
893296,390362,
813621,260529]

csvData = []

for x in range(0, 500):
    physician = [742190, 413743,
                 448111, 877957,
                 849591, 568550,
                 140037, 709314,
                 977282, 305478,
                 943574, 873590,
                 342704, 197842,
                 404633, 659228,
                 893296, 390362,
                 813621, 260529]
    random.shuffle(physician)

    csvData.append(physician.pop())

with open('finalPhysicianNumber.txt', 'w') as f:
    for item in csvData:
        f.write("%s\n" % item)