with open('VotingLocations.html') as f:
    lines = f.readlines()
n = len(lines)
i = 0
while (i < n) and (lines[i].find("Early Voting Poll Places") == -1):
    i += 1

while (i < n):
    while (i < n) and (lines[i].find("<tr>") == -1):
        i += 1
    i += 1
    if (i < n+3):
        name = lines[i][4:-6]
        i += 1
        address = lines[i][4:-6].replace("<br>","")

        print("    addMarker(\"",name,"\",\"",address,"\");")

