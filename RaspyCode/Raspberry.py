import RPi.GPIO as GPIO
import firebase as firebase

x=y=z=0;
LED=3;
FAN=5;
AC=7;

GPIO.cleanup();
GPIO.setmode(GPIO.BOARD);
GPIO.setup(LED,GPIO.OUT);
GPIO.setup(FAN,GPIO.OUT);
GPIO.setup(AC,GPIO.OUT);

firebase = firebase.FirebaseApplication('https://awesome-9caed.firebaseio.com/',None);
while True:
    x = firebase.get('LIGHT',None);
    y = firebase.get('FAN',None);
    z = firebase.get('AC',None);
    if(x==1):
        GPIO.output(LED,True);
    else:
        GPIO.output(LED,False);
    if(y==1):
        GPIO.output(FAN,True);
    else:
        GPIO.output(FAN,False);
    if(z==1):
        GPIO.output(AC,True);
    else:
        GPIO.output(AC,False);

        
