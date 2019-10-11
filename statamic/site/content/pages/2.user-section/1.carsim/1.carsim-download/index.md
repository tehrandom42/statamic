---
title: 'CarSim Download'
fieldset: default
id: 7d180a90-57db-4822-849c-ed14506fd70e
---
CarSim 2019.1 Download Page
The current version of CarSim is 2019.1.

July 1, 2019. This page has downloadable installers for CarSim 2019.1 for Windows and all supported RT systems, Linux, and CarSim DS (desktop driving simulator) for Windows. This major release is recommended for all users.

About CarSim 2019.1
Here are the new features for Windows, and here is a document describing bug fixes and backward compatibility issues for recent versions of CarSim going back to version 9.0.3. Here are the release notes for Linux.

Following are some of the major new features for Windows:

VS Command improvements: user-defined functions, embedded Boolean operators in formulas, improved VS Events
More options for traffic vehicles in ADAS scenarios: brake lights on traffic vehicles, more options for speed/acceleration control
Improvements in closed-loop steer control: works when driving backward, new single-point control option is robust in limit conditions and runs faster, support for steer-by-torque
Powertrain now supports internal combustion (IC), electric (motor + battery), and hybrid (IC + electric + planetary gear)
Speed controller improvements: support for electric vehicles, support for target acceleration
More support for VS Terrain: interactive drag-n-drop in Scene Builder, import external FBX and OpenDRIVE files, new 3D tiles for Mcity and roundabout
Improvements in steering system
Improvements in support of asymmetry
CarSim 2019.1 Installer for Windows and RT Systems
The following two downloads provide a complete CarSim 2019.1 installer for Windows, dSPACE, ETAS LabCar, NI RT, RT-LAB, and Concurrent RT.CarSim Icon

Installer: Setup_CarSim_2019.1_r102238.exe (1.9 GB). This performs a full installation of CarSim 2019.1 for Windows, RT systems, and all third-party support programs.
Disk image: CarSim2019.1_r102238.iso (2.2 GB). This contains the full installer plus separate backup copies of third-party installers that are included on the installation disk.
If you prefer to receive a physical disk, please click here and send a request.

Installing the Software
When you install the software the first time, you MUST log on as an administrator. If the end user account is not an administrator, be sure to install the CarSim data folder in a location with read/write permission for the end user.

The installer includes the CarSim programs, an example CarSim database, and some other components (License Information, NI CVI Engine, Dongle Driver, OpenAL, Adobe Reader). The default options are checked. If you are not sure about a component, it's usually best to install it.

Options for making new runs depend on your license (Basic, +Trailers, +Frame Twist, +Sensors, +AVL Cruise interface, +Engine Mounts, +DS, +RT). For example, you cannot make a new run for a vehicle towing a trailer unless you have a CarSim Trailer license.

You may use the installer without administrator permissions any time you wish to install a new copy of the database. For this reason, we recommend that all users keep a copy of the installer.

Getting Started
If you have not used CarSim recently, please go through the CarSim Quick Start Guide (updated June 2019). New users who wish a very short introduction to the software can try the CarSim Demo Tutorial (Feb 2018).

CarSim 2019.1 for Linux
Each CarSim for Linux tar file contains an installer and a PDF file with instructions. Here are the release notes.

There are two installation packages:

Red Hat Enterprise Linux 7.2 64-bit
CentOS 7 64-bit
OpenSUSE 42.3 64-bit
CarSim_2019.1_Redhat_x86_64_102240.tar.gz (937 MB).

Ubuntu 14, 16, and 18 LTS 64-bit (does not support USB dongles)
CarSim_2019.1_Ubuntu_x86_64_102240.tar.gz (935 MB).

CarSim DS (Driving Simulator)
CarSim DS (driving simulator) includes support for real-time operation under Windows with live animation and driver control hardware. The models can be run alone using the Tabletop DS tools to communicate with hardware (driver controls) and slow the simulation down to real-time, or with example Simulink models that use special DS blocks to handle the hardware communication and real-time simulation.

The DS options require that CarSim for Windows already be installed.

You can download the DS package as a ZIP archive CarSim2019.1_r102213_DS.zip (316 MB) or an ISO CD image CarSim2019.1_r102213_DS.iso (318 MB). Both options include installation and operating instructions.

Additional Example: CarSim Image Analysis with TensorFlow Object Detection
Deep learning has become an integral part of developing highly automated vehicle technology.  While Machine Learning/Deep Learning is complex, implementing the model is less difficult than it used to be due to the advancement of Deep Learning Frameworks like TensorFlow. The user can connect the shared buffer information from CarSim/TruckSim Live Animation to TensorFlow, and analyze the image data.

You can download the TensorFlow example as a Zip archive carsim_tensorflow_example_package_2019_1.zip (7.6 MB). The zip file contains the documentation, cpar example file, a video file, and Python scripts.

This example requires the TensorFlow Object Detection API which is a separate download. TensorFlow Object Detection API Download page.