# HackTheBurgh ARM mbed Workshop
<img src="https://developer.mbed.org/static/img/armmbed.png" width="250px">

## Get yourself a dev board
Come see the guys in ARM t-shirts and we can loan you a set of hardware. Remember to fillout the register sheet.

1. [Seeed Tiny BLE](https://developer.mbed.org/platforms/Seeed-Tiny-BLE/) with built in BLE, 6 DOF accelerometer/gyro and RGB LED. OR
1. [ST NUCLEO-F401RE Board](https://developer.mbed.org/platforms/ST-Nucleo-F401RE/) + [X-NUCLEO-IDB04A1 Bluetooth Low Energy Shield](https://developer.mbed.org/components/X-NUCLEO-IDB04A1/) + [ST MEMS Sensor Shield](https://developer.mbed.org/teams/ST-Americas-mbed-Team/wiki/Getting-Started-with-Nucleo-Sensors).

## Be Prepared
1. Sign up to an account on [developer.mbed.org](https://developer.mbed.org).
2. Download [Evothings Studio](https://evothings.com/download/) on your computer and [Evothings Viewer](https://evothings.com/download/) on your phone.
3. Sign up to an [Firebase](https://www.firebase.com/) account and create a demo database you are going to use.

## Get Started
The demo have 3 parts:

1. App that runs on the dev board.
2. App that runs on the Mobile phone that controls an LED on the dev board via BLE
3. A webapp that controls the LED romotely via the phone

### App that runs on the dev board
1. Goto the example program [here](https://developer.mbed.org/teams/Bluetooth-Low-Energy/code/BLE_GATT_Example/). Click `import this program` on the top right. This should open up your online compiler.
2. In the online compiler, Select main.cpp from the folder you just imported. Change the name of your device where is says `"ChangeMe!!"`
3. On the top right corner, select target platform. You may need to click `Add platform`. For the ST BLE shield, you will need also import this [Library](https://developer.mbed.org/teams/ST/code/X_NUCLEO_IDB0XA1/).
4. Now click compile, a binary file will be downloaded.
5. Plugin your mbed dev board, it will show up as a USB storage device, drap and drop the binary file you just downloaded into the device.
6. For a quick check of success. Just install a BLE inspection app on your phone. See instructions [here](https://github.com/ARMmbed/ble-examples/tree/master/BLE_LED#checking-for-success)

### Phone App
1. Open Evothings Studio on your laptop, connect your Evothings viewer from your phone by typing in the ip address provided in the Studio.
2. Clone this repository:
 ```
 git clone https://github.com/ARMmbed/hacktheburgh-workshop.git
 ```
3. Edit [phoneapp/app.json#L19](https://github.com/ARMmbed/hacktheburgh-workshop/blob/master/phoneapp/app.js#L19). Change the firebase database URL to the one you created ealier.
3. Drag and drop the file phoneapp/index.html in to the evothings studio. Click RUN and it will start running on your phone.
4. Now type the name of your dev board which you set ealier into the phone app and see if you can connect and toggle the led

### Web App
1. Edit [webapp/js/app.json#L4](https://github.com/ARMmbed/hacktheburgh-workshop/blob/master/webapp/js/app.js#L4). Change the firebase database URL to the one you created ealier.
2. Make sure your dev board is now connected to your phone. Open webapp/index.html from a browser, click the button to see the LED change.

# Hack Away
* Come talk to us about what you want to build. We have more dev boards and sensors and we can help you figure out what to do.
* For more information about mbed, see the developer [website](https://developer.mbed.org/teams/Bluetooth-Low-Energy/).
* More BLE examples can be found [here](https://developer.mbed.org/teams/Bluetooth-Low-Energy/).
