# Covid-19 Registration App in Node.js (CLI)

Command line interface for registering users. Uses Commander.js, Inquirer.js, PostgreSQL, etc.

The reason for creating this app is to understand the capability of CLI Apps created in Node.js without additional front-end network.

### Version
1.0.0

## Usage

### Installation

Install the dependencies

```sh
$ npm install
```

### Create Symlink

```sh
$ npm link
```

### Commands

List registered users (list or l)
```sh
$ Covid_checkin_app list
```

Add a new user (new or n)
```sh
$ Covid_checkin_app new
```

### Screenshots

* App Overview

![Screenshot 2022-01-21 150005](https://user-images.githubusercontent.com/88268603/150463847-5e77d19f-fbee-440a-afb6-880ceaf21611.png)
* Functionality (including validation errors)

![Screenshot 2022-01-21 150122](https://user-images.githubusercontent.com/88268603/150463855-8b237663-1417-43a2-bf13-38f0699f108d.png)
* Testing

![Screenshot 2022-01-21 150159](https://user-images.githubusercontent.com/88268603/150463859-73ab0101-2ad3-49fb-affc-0f1be2c0f38b.png)

### What I have learnt

* Working with input (Date input in particular) in command line where there is no formating or date picker available.
* Working with color codes for design and interface of the app
* Working with PostgreSQL in Node.js