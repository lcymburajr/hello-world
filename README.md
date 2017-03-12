# Setting up a project

## Overview
This covers Setting up  your computer to deploying an app.
The goal of this project is to make a "Hello World" html page and pass it through a whole deploy process.
This project for now is for Mac OS only.

### Steps

You'll want an easy way to keep up with all your Mac packages this can be done with Homebrew. It good to download apps with this so you can keep up with updates. To do this use `brew update`

1. Download Homebrew  https://brew.sh/

2. Download Homebrew Cask http://gillesfabio.github.io/homebrew-cask-homepage/

3. With Homebrew Cask install Virturalbox `brew cask install virturalbox`

4. With Homebrew Cask install Vagrant `brew cask install vagrant` and vagrant-hostmanager `brew cask install vagrant-hostmanager` Alternatively you can create a bash script with all the apps you need to install inside. `sh brew.sh`

5. Download an IDE like: Sublime Text, WebStorm, Brackets, etc. I use WebStorm by Jetbrains. https://www.jetbrains.com/webstorm/download/#section=mac
This can also be installed with Homebrew Cask `brew cask install webstorm`

6. Sign up for Github https://github.com/

7. Download an Two-Factor Authentication app for your phone https://www.authy.com/

8. Setup Two-Factor Authentication
Click on you profile icon and select settings > security and click "Set up two factor authentication"

9. Create an SSH key to associated with your account.https://help.github.com/articles/connecting-to-github-with-ssh/

10. Create a git Repo initialize this repository with a README.

11. For git notifications Sign up for Slack and create a team https://slack.com/

12. Add webhook from slack into your github repo. In Slack click on your user name and select "App & integrations"
   • Search for git and install.
   • Pick a channel to post to and click add integration
   • Slack your repo, choose events and click save integration now when you make a commit you with see a post in Slack.
   • To verify your webhook is hooked up correctly go to your Github repo under your profile > settinngs > webhooks you should see a Slack URL.

13. Clone your repo to you computer in a project folder. `git clone <repo url>`

14. Open your project from you IDE.

15. Create a Vagrantfile run `vagrant init`


