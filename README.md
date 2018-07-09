## Simple Time Picker
### A Drupal 7 Module

I whipped this module up because I needed a little more functionality out of the time picker that comes with Date, and everything I found was either too complicated, ugly or for Drupal 8.
It's a simple module that's essentially a vehicle for some JS. It adds an up and down arrow to the right of a time field that increment or decrement the time by 15 minutes. Currently it only supports `h:iA` format but could easily support more with a little more work and implementing Moment.js

### Requirements
---
 - [Date](https://www.drupal.org/project/date)
 - [Font Awesome](https://www.drupal.org/project/fontawesome) and its dependencies.

### Installation
---
 - Drop the simple_time_picker folder in your Drupal 7 modules folder.
 - Enable it from the admin modules menu.

### Uninstallation
---
 - Disable it from the admin modules menu.
 - Remove/delete it from the modules folder.
 