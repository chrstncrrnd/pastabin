import requests

pingGetUrl = "http://0.0.0.0:8000/test/ping"
pastePostUrl = "http://0.0.0.0:8000/api/paste"
pasteGetUrl = "http://0.0.0.0:8000/api/get_paste"
recentsGetUrl = "http://0.0.0.0:8000/api/recents"


def ping():
    return requests.get(pingGetUrl).content.decode("UTF-8")


def postPaste(paste):
    return requests.post(pastePostUrl, data=paste).content.decode("UTF-8")


def getPaste(pasteId):
    return requests.get(pasteGetUrl + "/" + pasteId).content.decode("UTF-8")


def getRecents():
    return requests.get(recentsGetUrl).content.decode("UTF-8")


print("Welcome to the pastaBin python client")
while True:

    print("Options:")
    print("A       Ping the server")
    print("B       Post a paste")
    print("C       Get a paste from its id")
    print("D       Get recent pastes")

    option = input("> ").lower()

    if option == "a":
        print(ping())
    elif option == "b":
        paste = input("What do you want to post as a paste? ")
        print("Your paste id is: ", postPaste(paste))
    elif option == "c":
        print(getPaste(input("What is the paste id? ")))
    elif option == "d":
        print(getRecents())