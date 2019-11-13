---
title: History
fieldset: default
id: f936c7df-8a41-4b68-9333-c927aba27644
---
Account
History of Mechanical Simulation
Mechanical Simulation Corporation was founded in 1996 to make simulation technology from a University Research Institute available to the automotive community.

Vehicle Dynamics
Starting in the late 1960s, the University of Michigan Transportation Research Institute (UMTRI) was a pioneer in developing knowledge about vehicle dynamic behavior and modeling. Knowledge about vehicle dynamics came from experimental testing, development of math models and algorithms, and special laboratory tests and measurements to obtain the vehicle/tire properties needed to use the models.

The early research projects included extensive work in which modeling assumptions were validated by direct comparison with test data.

The modeling concepts and assumptions developed at UMTRI and elsewhere underlie the CarSim and TruckSim models. In addition to emphasizing the correctness of the physics and associated math, we apply the research results to include vehicle properties that are both significant and measurable.

VehicleSim Technology for Physics Models
In the late 1980s, UMTRI scientist Dr. Michael Sayers developed the world's most advanced automated code generation capability for vehicles and other multibody systems. The code generator (originally called AutoSim) was used at UMTRI to create new vehicle models with unparalleled computational efficiency.

Mechanical Simulation continues to extend and develop the vehicle math models to meet the requirements of OEMs and suppliers. The original symbolic multibody program, now called VS Lisp, has been continuously developed and maintained at Mechanical Simulation in order to generate the core equations for the 3D multibody vehicle models in BikeSim, CarSim, and TruckSim.

Each software tool from Mechanical Simulation has components (math model programs, graphical user interface (GUI), database, visualization program, utility programs, and documentation) that work together in an architecture called VehicleSim.

VehicleSim technology supports several characteristics of our software development:

We can create new models and extend existing models quickly. All of the equations involving multibody dynamics are machine-generated in just minutes by VS Lisp for specific custom physics models that represent unique vehicle configurations (suspension types, number of axles, trailers, etc.).
VS Solvers (math model programs) run fast, as required to support real-time and optimization applications.
A scripting language called VS Commands allows users to add variables, add equations, change units, and run complicated procedures scripted by monitoring variables and changing parameters and/or tables when specified conditions occur (these are called VS Events).
VS Solvers work well with other simulation software, such as Simulink, LabVIEW, and ASCET. Users typically combine core vehicle models from a VehicleSim product with controller algorithms from Simulink or other software used by the controller developers.
Source code for VS Solvers is 100% ANSI C, which is supported by all major real-time (RT) computer platforms. VS Solvers provided for RT platforms are compiled from the same source code as used on our Windows OS versions.
VS Solvers have an application program interface (API) that allows them to be run under the control of other software. For example, most existing driving simulators that use CarSim or TruckSim were produced by other companies that simply purchased the VehicleSim product and integrated the VS Solvers using the API.
We tend to support new interface and operating-system requirements rapidly by extending the runtime library shared by all vehicle math models.
If the API or the math model architecture does not work for some new application, we can extend VS Lisp or the VS API as needed.
Other Parts of VehicleSim
Soon after realistic physics models were validated for simulating tests of interest, it became clear that a major practical limit for using simulation was the time needed to learn how to use the software (training and education).

Graphical User Interface (GUI)
Extensive development was done at UMTRI in the 1990s to provide simulation tools for use by engineers in government and industry. This involved the development of a graphical user interface (GUI), standard formats for input and output files, programs to view results via plotting and animation, and documentation. Since 1996, this development has continued at Mechanical Simulation. Given the increasing importance of simulation, along with the decreasing time available to engineers, it has always been a high priority to make our software understandable to new users, yet efficient for advanced users.

Our vehicle dynamics simulation products have become the most popular for OEMs worldwide, in part because they are exceptionally easy to use.

Visualization of Simulation Results
In addition to our extensive background in vehicle dynamics, the development team at Mechanical Simulation includes programmers and graphic artists from the video gaming industry. Improvements for animation, originally introduced for immersive driving simulators, greatly enhance the visualization of vehicle motions simulated by our physics models.

Documentation
Coming from a university background, we originally provided extensive documentation about the models and technical methods. The same priority was given to usage documentation. In addition to reference manuals for all parts of the software, the documentation includes quick start guides and technical memos describing how to use the software for common activities.

As VehicleSim products are improved to support more features and options, the documentation is continuously updated and extended. All VehicleSim products include extensive documentation in PDF files that can be accessed from the software, searched, printed for later reading, etc. Besides providing access from the F1 key, Help buttons on every window, and a Help menu, the PDF files are indexed by machine to support rapid searching using keywords.

Example Datasets
Given validated math models and a software GUI that avoids the need for extensive training, there is still a major challenge in providing valid model parameters for the vehicle model. Today, the major limit for simulating specific vehicles and test conditions is the time and effort needed to obtain data for the vehicle and road properties. Recognizing this, the models are created by a development team at Mechanical Simulation experienced in measuring vehicle properties. Nearly all properties in the math models are directly measurable.

Many datasets are immediately available for use in VehicleSim products:

VehicleSim products are in use by more than 110 OEM and Tier 1 suppliers, including all automotive OEMs in the United States, Japan, and Korea. There are many datasets in existence at these companies.
VehicleSim products include many example datasets. For example, CarSim includes over 20 example vehicles, with about 80 variants. These ensure new users can start work immediately, modifying examples as custom data become available.