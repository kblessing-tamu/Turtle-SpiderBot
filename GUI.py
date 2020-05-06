from Tkinter import * 

def show_values():
	speed = w.get()
	T.delete("1.0","end")
	T.insert(END, "set speed to ")
	T.insert(END, speed)
    
master = Tk() 
w = Scale(master, from_=0, to=100) 
w.set(0)
w.pack()  

T = Text(master, height=2, width=30)
T.pack()


Button(master, text='Set speed', command=show_values).pack()

mainloop() 
