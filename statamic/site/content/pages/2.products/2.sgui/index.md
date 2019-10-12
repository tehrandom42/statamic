---
title: sgui
fieldset: default
id: f51e7bde-3e6e-4732-af43-e72e7d3a7a77
---
VehicleSim products include three major types of programs:

A custom VS Browser provides the graphical user interface (GUI).
VS Solvers calculate the response of the vehicle math models in simulated tests.
VS Visualizer shows simulation results using animation and plotting.
This page describes the VS Browser (GUI) and documentation.

Easiest to Use
Mechanical Simulation is committed to making vehicle simulation available to engineers who need to evaluate vehicle/controller behavior without spending weeks of training or relying on expensive consultants to run the software.

The VehicleSim products BikeSim, CarSim, SuspensionSim, and TruckSim are known for being suitable for casual users. Even though the math models have all the detail needed to simulate tests over the full nonlinear range of conditions, engineers can modify vehicle and test conditions and view the effects with minimal experience. At the same time, the VehicleSim technology supports advanced users who can extend the model for applications that go beyond expectations for simulation even a few years ago.

To support new users, each VehicleSim product has:

A full GUI with access to all of the major parameters and nonlinear tables in the math model. For example, CarSim has about 200 custom screens, each dedicated to a part of the model.
A relational database that includes example vehicles, components, test procedures, plot configurations, animations, and all types of information needed to simulate a wide range of example conditions. For example, CarSim includes over 20 example vehicle types, with about 80 variants, used in almost 200 example simulations.
Extensive documentation, available from buttons and menus, on-line searching. For example, CarSim includes over 1900 pages of information in about 100 PDF files that are all indexed for rapid searching.

Use the main (home) screen to select a vehicle and procedure, make a run, and view results. Click for more detail.
User Interface and Database
Your main connection to the software is through the VS Browser. Click a single button to make a simulated run, click other buttons to see an animation, view engineering plots, or view both (plots synchronized with animation). While using the Quick Start Guide for your software package (CarSim, BikeSim, etc.), you will be making new runs and seeing their results in about an hour. See for yourself: here is the four-part video series for the CarSim Demo Tutorial (total time is 36 minutes).

The VS Browser GUI minimizes the time needed to build a vehicle description and set up run conditions. The database comes with an extensive array of examples and allows you to set up libraries of components, vehicles, tests, etc. This allows you to rapidly go back and forth between different runs to compare results and make changes. You can easily overlay plots and animations to quickly identify the results of your changes.

The vehicle and its properties are defined by parameters and tables that are measurable and available from a variety of sources including tests or suspension design software. The VS Browser sets the standard for minimizing the time needed to assemble a complete vehicle description with detailed math models.

Tables for Nonlinear Relationships
Many of the vehicle properties, control specifications, and road properties are described with nonlinear tables. You can select one of many possible calculation methods, depending on your needs. These range from a constant, to a linear coefficient, to linear interpolation, to a spline, to 2D carpet plots. There are over 15 calculation options, plus many options for transforming both input and output variables to support normalized shape functions.

Tables can be generated and/or transformed with a built-in calculator, or sent to Excel with a button click for more advanced work.

Outputs
The math models generate simulated time histories of hundreds of output variables. Besides providing motion information for animations, they can be inspected graphically using the built-in plotter or exported automatically to Excel or MATLAB, for post-processing analysis.

Output plots and animations are commonly inserted into reports and PowerPoint presentations.

Help and Documentation
The documentation for VehicleSim products is provided in PDF files that can be accessed on line, or printed to provide traditional hard-copies. A VehicleSim product typically has about 100 documents that include broad topics such as the operation of a VS Solver, along with detailed technical descriptions of model features such as tires, steering systems, controllers, etc.

Information is available from several methods at all times.

Right-click on most screen controls and fields for pop-up help.
Type F1 or click the Help button to bring up the document best matched to the current screen, with details of every control and parameter on the current screen.
Use the Help menu to access reference material for every screen in the VS Browser, reference manuals for major components in the VehicleSim software (the VS Browser, VS Solvers, VS Visualizer, etc.), and tech memos covering specific topics such as example applications.
Access to the documentation is shown in this demo video (2015).

Multiple Databases
A VehicleSim database can include datasets for many vehicles, controls, and test conditions. Further, you can have multiple databases on your computer to further organize your work.

Starting with version 9 (2014 and 2015), all data Parsfiles are given unique names through the use of universally unique ID (UUID) hex numbers. These guarantee that datasets created by different users will not have filename conflicts. The UUID names also support version control and other types of archival database managers. They enable reliable and automatic transfer of data between multiple databases. Users are encouraged to use multiple databases on a computer as needed to organize vehicles, tests, and other types of data.