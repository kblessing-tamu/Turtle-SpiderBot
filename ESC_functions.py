import os     #importing os library so as to communicate with the system
import time   #importing time library to make Rpi wait because its too impatient 
os.system ("sudo pigpiod") #Launching GPIO library
time.sleep(1) # As i said it is too impatient and so if this delay is removed you will get an error
import pigpio #importing GPIO library

ESC=4  #Connect the ESC in this GPIO pin 

pi = pigpio.pi();
pi.set_servo_pulsewidth(ESC, 0) 
                
def calibrate(min_value, max_value):   #This is the auto calibration procedure of a normal ESC
    print("First, disconnect the battery.")
    input("Press Enter when disconnected:")
    pi.set_servo_pulsewidth(ESC, max_value)

    print("Now, plug in the battery. You will hear a series of beeps.")
    input("Press Enter after 3 beeps:")
    pi.set_servo_pulsewidth(ESC, min_value)

    print("Wait for this pattern: 2 short beeps, then 2 long beeps.")
    print("After you hear this pattern, disconnect the battery again.")
    input("Press Enter when disconnected:")

    print("Now, plug the battery back in.")
    print("You should hear 3 short beeps, then a low beep and a high beep.")
    print("If you hear this, then calibration was successful.")

            
def test(min_value, max_value):
    speed = min_value
    loop_bool = True
    print("Controls:")
    print("a - large decrease    s - small decrease")
    print("d - small increase    f - large increase")
    print("q - quit")
    
    while loop_bool:
        pi.set_servo_pulsewidth(ESC, speed)
        print("speed = ", speed)
        inp = input("Input command: ")
        
        if inp == "a":
            speed -= 100    # decrementing the speed like hell
            print("speed = ", speed)
        elif inp == "s":
            speed -= 10     # decrementing the speed
            print("speed = ", speed)
        elif inp == "d":
            speed += 10     # incrementing the speed 
            print("speed = ", speed)
        elif inp == "f":    
            speed += 100    # incrementing the speed like hell
            print("speed = ", speed)
        elif inp == "q":
            speed = 0
            print("speed = ", speed) 
            loop_bool = False
        else:
            print("Invalid input.")
            
def arm(min_value, max_value): # This is the arming procedure of an ESC (Is it really???)
    input("Connect the battery and press Enter")
    pi.set_servo_pulsewidth(ESC, 0)
    time.sleep(1)
    pi.set_servo_pulsewidth(ESC, max_value)
    time.sleep(1)
    pi.set_servo_pulsewidth(ESC, min_value)
    time.sleep(1)
