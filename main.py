from flask import Flask
from views import views

app = Flask(__name__)
app.register_blueprint(views, url_prefix="/views")


if __name__ == '__main__':
    app.run(debug=True, port=8000)

# Beginner: I’m just starting to learn tennis
# Intermediate: I used to play tennis or started playing recently and want to keep improving
# Advanced: I play regularly and control shots with placement, spin, and power

# Beginner = 1, intermediate = 2, advanced = 3, $99- = 1, $100-$199 = 2, $200+ = 3

# Calculate quality of racquet based on above point system
# 4- = lower quality
# 5+ = higher quality

# Good for spin, power, control, comfort can all be true or false

database = [
    
    # TTTTT
    {"name":"Wilson Pro Staff v13", "high-quality": True, "comfortable": True, "control": True, "power": True, "spin": True},

    # TTTTTF
    {"name":"Head Boom MP", "high-quality": True, "comfortable": True, "control": True, "power": True, "spin": False},
    
    # What I use
    # TTTTFT
    {"name":"Wilson Clash 100", "high-quality": True, "comfortable": True, "control": True, "power": False, "spin": True},
    
    # TTFTT
    {"name":"Babolat Pure Drive", "high-quality": True, "comfortable": True, "control": False, "power": True, "spin": True},

    # All skill level
    # TFFFTT
    {"name":"Head Extreme MP", "high-quality": True, "comfortable": False, "control": False, "power": True, "spin": True},

    # Bad strings
    # FTFFTF
    {"name":"Head Titanium Ti.S6 Strung", "high-quality": False, "comfortable": True, "control": False, "power": True, "spin": False},

    # FTFTFT
    {"name":"Prince Ripstick 100", "high-quality": False, "comfortable": True, "control": True, "power": False, "spin": True},

    # Very Cheap
    # FTFTFF
    {"name":"Head MicroGEL Radical OS", "high-quality": False, "comfortable": True, "control": True, "power": False, "spin": False},

    # FFFFFF
    {"name":"Walmart Racquet", "high-quality": False, "comfortable": False, "control": False, "power": False, "spin": False}
    
]

def scan_database(answer, property):
    if answer == "y":
        ans = True
    elif answer == "n":
        ans = False
    
    to_remove = []
    for i in database:
        if i[property] != ans:
            to_remove.append(i)
    
    for i in to_remove:
        database.remove(i)

    if len(database) == 1:
        print("\nYour ideal racquet is the " + database[0]["name"])
        quit()

    elif len(database) == 0:
        print("\nSadly, we could not find the perfect racquet for you. I recommend the Wilson Clash 100 since it's the racquet I use, but if you want a more personalized racquet try again with different answers!")
        quit()
        

print("This is a program for you to find the ideal tennis racquet!\n\n")
while True:

    quality_value = 0

    ans = int(input("What is your budget? "))
    if (ans < 100 and ans >= 0):
        quality_value += 1
    elif (ans < 200):
        quality_value += 2
    elif (ans >= 200):
        quality_value += 3

    ans = input("\n\n\nAre you a beginner, intermediate, or advanced player\n\n\tBeginner: I am just starting to learn tennis\n\tIntermediate: I used to play tennis or started playing recently and want to keep improving\n\tAdvanced: I play regularly and control shots with placement, spin, and power\n\nEnter \"b\", \"i\", or \"a\" here: ")
    if (ans == "b"):
        quality_value += 1
    elif (ans == "i"):
        quality_value += 2
    elif (ans == "a"):
        quality_value += 3

    if (quality_value > 4):
        ans = "y"
    elif (quality_value <= 4):
        ans = "n"

    scan_database(ans, "high-quality")


    ans = input("Do you want more comfort? (y/n): ")
    scan_database(ans, "comfortable")

    ans = input("Do you want control? (y/n): ")
    scan_database(ans, "control")

    ans = input("Do you want power? (y/n): ")
    scan_database(ans, "power")

    ans = input("Do you want spin? (y/n): ")
    scan_database(ans, "spin")

    break