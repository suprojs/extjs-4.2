# Introduction to Sencha Cmd

[Sencha Cmd](http://www.sencha.com/products/sencha-cmd/download) is a cross-platform 
command line tool that provides many automated tasks
around the full life-cycle of your applications from generating a new project to
deploying an application to production.

Sencha Cmd provides a collection of powerful time-saving features that
work together and in conjunction with the Sencha Ext JS and Sencha Touch frameworks.
Sencha Cmd provides the following capabilities:

 - **Code Generation Tools**: Code generation tools to generate entire applications and extend those applications
 with new MVC components.
 - **JS Compiler**: A framework-aware, JavaScript compiler that knows the semantics of Sencha frameworks
 and can produce minimal footprint builds from your source. In the future, the compiler
 will optimize many of the high-level semantics provided by Sencha frameworks to reduce
 load time of your applications.
 - **Web Server**: Provides a lightweight web server that serves files from localhost.
 - **Packaging**: Native packaging to convert a Sencha Touch application into a first-class, mobile
 application that has access to device functionality and can be distributed in App Stores.
 - **Management System**: Distributed package management system for easy integration of packages (such as Ext JS
 Themes) created by others or from the Sencha Package Repository.
 - **Build Scripts**: Generated build script for applications and packages with "before" and "after" extension
 points so you can customize the build process to fit your specific needs.
 - **Tuning Tools**: Powerful code selection tools for tuning what is included in your application's final
 build, determine common code across pages and partition shared code into "packages" - all
 using high-level set operations to get builds exactly as you want them.
 - **Workspace Management**: Assists in sharing frameworks, packages and custom code between
 applications.
 - **Image Capture**: Converts CSS3 features (such as border-radius and linear-gradient)
 into sprites for legacy browsers.
 - **Flexible Configuration System**: Enables defaults to be specified for command options
 at the application or workspace level or across all workspaces on a machine.
 - **Logging**: Robust logging to help you understand the inner workings of commands and facilitate
 troubleshooting.
 - **Third-party Software**: Sencha Cmd includes a compatible version of Compass, Sass, and 
 Apache Ant.
 - **Code Generation Hooks**: Can be specific to one page or shared by all pages in the
 workspace, for example, to check coding conventions or guidelines as new models are
 generated).

## Compatibility

Sencha Cmd supports Sencha Ext JS version 4.1.1a or higher and Sencha Touch
version 2.1 or higher. Many of the features of Sencha Cmd require framework support
that is only available at these or later version levels. Some low-level commands 
can be used for older versions of Sencha frameworks or JavaScript in general.

If you are using an older version of Ext JS, you may use Sencha Cmd's `build` command to
build via your JSB file. In other words, Sencha Cmd can replace JSBuilder to produce a
compressed build of the files described in a JSB file. Sencha Cmd will not update your JSB
file as was done by the deprecated SDK Tools v2. 

Sencha Touch 2.0 and Sencha Ext JS 4.0 require the deprecated 
[SDK Tools v2](http://www.sencha.com/products/sdk-tools), which cannot be used 
with later Touch or Ext JS versions.

## System Setup

Download and install this software:

 - **JRE** Sencha Cmd is written in Java and requires 
   [Java Runtime Environment](http://www.oracle.com/technetwork/java/javase/downloads/jre7-downloads-1880261.html) 
   version 1.6 or 1.7 (best)
 - [Sencha Cmd](http://www.sencha.com/products/sencha-cmd/download)
 - **Ruby 1.9.3** (or earlier): Sencha Cmd does not work with Ruby 2.0. Ruby differs by OS:
  - **Windows**: Download Ruby 1.9.3.n from [rubyinstaller.org](http://rubyinstaller.org/downloads/).
    Get the .exe file version of the software and install it.
  - **Mac OS**: Ruby is pre-installed. You can test which version you have with the 
    **Ruby -v** command. If you have version 2.0, download the [Ruby version manager](https://rvm.io/) (rvm). 
    Use this command to download and install Ruby: **rvm install 1.9.3 --with-gcc=clang** and set 
    your PATH variable to point to the Ruby 1.9.3 install directory.
  - **Ubuntu**: Use **sudo apt-get install ruby1.9.3** to download Ruby 1.9.3.
 - **iOS Packaging**: Apple [Xcode](https://developer.apple.com/xcode/)
 - **Android Packaging**: [Android SDK Tools](http://developer.android.com/sdk/index.html) and [Eclipse](http://www.eclipse.org/) (optional).
 
Add the install paths to your PATH environmental variable.

### Verify Installation

To verify that Sencha Cmd is working properly, open a command line, change directory to
your application, and type the `sencha` command. 

You should see output that starts with:

    Sencha Cmd vn.n.n
    ...


## Upgrading Sencha Cmd

The `sencha upgrade` feature lets you upgrade Sencha Cmd.

Check for new updates to Sencha Cmd:

    sencha upgrade --check

Without the `--check` option, the `sencha upgrade` command downloads and installs the
latest version if you don't already have it:

    sencha upgrade

If you want to check for beta releases, use:

    sencha upgrade --check --beta

To install the latest beta version:

    sencha upgrade --beta

After the installer is done, start a new console or terminal
to pick up the changes to your PATH environment variable.

Because multiple versions of Sencha Cmd can be installed side-by-side, you can safely try
the Beta channel and then uninstall the beta (or adjust the PATH) to go back to the stable
version. Upgrading your applications using `sencha upgrade` however, is something you
may need "roll back" if you downgrade to an older Sencha Cmd.

**Note** It is possible that the most current release is in either the "beta" or stable
channel. That is to say, `sencha upgrade --beta` may install a beta that predates the
current release that would be installed by `sencha upgrade`.

## Command Basics

Sencha Cmd features are arranged in categories (or modules) and commands:

    sencha [category] [command] [options...] [arguments...]

Help is available using the `help` command.

    sencha help [module] [action]

For example, try this:

    sencha help

And you should see this:

    Sencha Cmd vn.n.n
    ...

    Options
      * --cwd, -cw - Sets the directory from which commands should execute
      * --debug, -d - Sets log level to higher verbosity
      * --nologo, -n - Suppress the initial Sencha Cmd version display
      * --plain, -pl - enables plain logging output (no highlighting)
      * --quiet, -q - Sets log level to warnings and errors only
      * --sdk-path, -s - The location of the SDK to use for non-app commands
      * --time, -ti - Display the execution time after executing all commands

    Categories
      * app - Perform various application build processes
      * compass - Wraps execution of compass for sass compilation
      * compile - Compile sources to produce concatenated output and metadata
      * fs - Utility commands to work with files
      * generate - Generates models, controllers, etc. or an entire application
      * io - Create, deploy and manage applications on the Sencha.io cloud platform
      * iofs - Manage Files stored in the Sencha.io cloud platform
      * manifest - Extract class metadata
      * package - Manages local and remote packages
      * repository - Manage local repository and remote repository connections
      * theme - Commands for low-level operations on themes

    Commands
      * ant - Invoke Ant with helpful properties back to Sencha Cmd
      * build - Builds a project from a legacy JSB3 file.
      * config - Load a properties file or sets a configuration property
      * help - Displays help for commands
      * js - Executes arbitrary JavaScript file(s)
      * upgrade - Upgrades Sencha Cmd
      * which - Displays the path to the current version of Sencha Cmd

## Current Directory

In many cases, Sencha Cmd requires that you set a specific current directory. Or it may
just need to know details about the relevant SDK. The appropriate SDK can be determined
automatically by Sencha Cmd when it is run from a generated application folder or, for
some few commands, from an extracted SDK folder.

**Important** For the following commands, Sencha Cmd needs to be run from the root folder
of a generated application. The commands fail if not run from the application's root folder.

    * `sencha generate ...` (for commands other than `app`, `package` and `workspace`)
    * `sencha app ...`

To generate an application, run the following command from an extracted SDK folder:

    cd /path/to/SDK
    sencha generate app ...

Or you can use the `-sdk` switch:

    sencha -sdk /path/to/sdk generate app ...

When using the compiler, Sencha Cmd detects the framework in use when run from an
application folder. If you are not running from a generated application, you may need to
use the `-sdk` switch:

    sencha -sdk /path/to/sdk compile ...

**Important** Do not specify the `-sdk` parameter for `sencha app` commands. As noted
above, these commands must be run from the application's root folder and therefore 
automatically know which SDK to use. Using `-sdk` on these commands causes Sencha Cmd
to believe your current directory is the SDK specified which is not the proper current
directory for an application.

## Developing Applications

The starting point for most projects is to generate an application skeleton. This is done
using the following:

    sencha -sdk /path/to/sdk generate app MyApp /path/to/MyApp

Ext JS and Sencha Touch applications are structured differently from each other. Further,
particularly with Ext JS, applications can be quite large and may contain multiple pages.

To get started building applications using Sencha Cmd, consult the
[Using Sencha Cmd](#!/guide/command_app) guide.

### Sencha Cmd Web Server

The Sencha Cmd web server lets you serve files from your applications directory. 
Use this command to start the web server:

    sencha fs web [-port 8000] start -map <dir_name>

(You can use any available TCP port number or omit it and use the default.)

To access the Sencha Cmd web server, use: 

    http://localhost:8000/

## Beyond The Basics

There are many other details related to using Sencha Cmd that can be helpful. The `help`
command is a great reference, but if you want to walk through all the highlights, consult
[Advanced Sencha Cmd](#!/guide/command_advanced).

## Troubleshooting

Here are some tips for solving common problems encountered when using Sencha Cmd.

### Command Not Found

If running `sencha` results in the error message `sencha: command not found` on OSX/Linux
or `'sencha' is not recognized as an internal or external command, operable program or
batch file` on Windows, follow these steps:

- Close all existing terminal/command prompt windows and reopen them. 
- Make sure that Sencha Cmd is properly installed:
    - The installation directory exists. By default, the installation path is:
        - Windows: `C:\Users\Me\bin\Sencha\Cmd\{version}`
        - Mac OS X: `~/bin/Sencha/Cmd/{version}`
        - Linux: `~/bin/Sencha/Cmd/{version}`
    - The path to Sencha Cmd directory is prepended to your PATH environment variable.
      From the terminal, run `echo %PATH%` on Windows or `echo $PATH` on Mac or Linux.
      The Sencha Cmd directory should be displayed in part of the output. If this is not
      the case, add it to your PATH manually.
    - The environment variable `SENCHA_CMD_{version}` is set, with the value being
      the absolute path to the installation directory mentioned above. From the command
      line, use the **echo** command to view this variable. If the output is
      empty, set the environment variable manually. 

### Cannot find Ruby

If you see an error related to not recognizing or finding `"ruby"` this is likely because
Ruby is not installed or is not in your PATH. See the previous System Setup section.

### Wrong Current Directory

A common mistake is to perform a command that requires the current directory to be either
an extracted SDK directory or an application directory, but such a directory has not been
set. If this requirement is not met, Sencha Cmd displays an error and exits.
	
Note that a valid application directory is one that was generated by Sencha Cmd.

### Errors While Resolving Dependencies

The `sencha app build` command works by reading your `index.html` and scanning for
required classes. If your application does not properly declare the classes it requires,
the build usually completes but will not contain all the classes needed by your application.

To ensure that you have all required classes specified, always develop with the debugger
console enabled ("Developer Tools" in IE/Chrome, FireBug in FireFox and Web Inspector in
Safari) and resolve all warnings and error messages as they appear.

Whenever you see a warning like this:

    [Ext.Loader] Synchronously loading 'Ext.foo.Bar'; consider adding 'Ext.foo.Bar' explicitly as a require of the corresponding class
	
Immediately add 'Ext.foo.Bar' inside the `requires` array property of the class from
which the dependency originates. If it is a application-wide dependency, add it to the
`requires` array property inside `Ext.application(...)` statement.
