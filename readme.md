# Steller Singers website!

To edit anything here, the Steller google account has access to this repo. Just sign in to Github using the "Sign in with Google" button.

## Editing bios

Find the `data` folder and open `bios.txt`. The format should be something like this:
```
Name 1
image.png
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
===
Name 2
image_2.png
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
```

All the data is split by line (do not add any newlines in your bios, just trust that the text will wrap on the website). The data should be input as follows:

1. The first line is the name.
2. The second line is the name of the image file of the singer. This image needs to be put in the folder: `data/member_images`. Make sure to include the file extension (such as `.png`, `.jpg`, etc.).
3. The third line is the bio. If you want more styling or would like to add things like links, you can use markdown. [Here's a handy guide if you've never used it before.](https://www.markdownguide.org/cheat-sheet/)
4. Between each entry put "===" as a divider.

## Updating logos

To update any logos used go to the `logos` folder and replace any of the images within it with a file that has the same name and extension.
