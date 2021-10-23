import time
import requests

startTime = time.time()


pastePostUrl = "http://0.0.0.0:8000/api/paste"
pasteGetUrl = "http://0.0.0.0:8000/api/get_paste"

def postPaste(paste):
    return requests.post(pastePostUrl, data=paste).content.decode("UTF-8")
def getPaste(pasteId):
    return requests.get(pasteGetUrl + "/" + pasteId).content.decode("UTF-8")

ammountOfTimesToPost = int(input("How many times do you want to post? "))

pastes = []

for i in range(0, ammountOfTimesToPost):
    x = postPaste("Hello this is paste: " + str(i))
    print(x)
    pastes.append(x)


for paste in pastes:
    print(getPaste(paste))


executionTime = (time.time() - startTime)
print('That took: ' + str(executionTime) + "s")
