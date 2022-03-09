# This program will let you test your ESC and brushless motor.
# Make sure your battery is not connected if you are going to calibrate it at first.
# Since you are testing your motor, I hope you don't have your propeller attached to it otherwise you are in trouble my friend...?

from ESC_functions import manual_drive, calibrate, control, arm, stop

print("For first time launch, select calibrate")
print("Type the exact word for the function you want")
print("calibrate OR manual OR control OR arm OR stop")


#This is the start of the program actually, to start the function it needs to be initialized before calling... stupid python.    
inp = raw_input()
if inp == "manual":
    manual_drive()
elif inp == "calibrate":
    calibrate()
elif inp == "arm":
    arm()
elif inp == "control":
    control()
elif inp == "stop":
    stop()
else :
    print("Invalid input")
