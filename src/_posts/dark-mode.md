---
title: Converting pdfs to dark mode
date: 2020-09-19
tags:
  - hacks
author: Shivam Tripathi
location: Bengaluru, Karnataka
---

<ToggleDarkMode/>

### Introduction
Reading pdfs at night can be real hassle, especially when you have turned off the lights. The glare
is simply too harsh on eyes. Nowadays, there is a "dark mode" for almost everything - dark mode
inbuilt in the OS, extentions like [darkreader](https://github.com/darkreader/darkreader) in the
browser, color fix in ebooks etc. However, pdfs unfortunately donot have a simple way to be turned
to "dark mode" (atleast with available tools in mac).

### Solution
I figured if we can turn the pdf to html, then maybe I can tweak the css to make it more easy on the
eyes. So I used one of the online services to convert my pdf to html. It all worked out great,
except that the background and images in pdf were combined and converted into a series of images
stored in a separate folder, liked to the html page containing text (and relevant css).

So, there was no css to change background color. That's bad news! But I realized that if could
invert color of images being used as background (white in color), and fix the text's css - I might
get lucky. I tested it out on one of the pages, and it looked pretty good. So I decided to run it
on the entire html-converted pdf.

### Steps
- First, I defined the function to invert color of background images

    ```bash
    imginvert () {
    convert $1 -channel RGB -negate $1
    }
    ```

- I use zsh, and unfortunately in zsh - we cannot run function directly with `xargs`, I had to
stringify the function (it's basically a hack, albeit a very common one. For more information, search on the web).

    ```bash
    IMG_INVERT=$(functions imginvert); echo $IMG_INVERT
    ```

For Bash, we can use `-c` with xargs directly.

- Next, I ran the image invert function on all images:

    ```bash
    ls | xargs -I{} zsh -c "eval $IMG_INVERT; imginvert {}"
    ```

- In the html page, convert all RGB/hex black color for fonts to white. Use any text editor of
choice. Or use the `sed` command:
    ```bash
    sed -i -e 's/black/white/g' /path/to/file.html
    ```
The `black` color could be hex or rgb. You'll have to inspect the html file to determine what all
needs to replaced. You can also choose color apart from white when replacing - a little bit more
warmer white would probably look and feel a lot more better.
- Open the pdf in browser and viola - dark mode for pdf. `cmd+p` would convert it to pdf as well.

### Conclusion
I was successfully able to convert my pdf to "dark mode". Although it requires manual work, it
gives enough results and for one-time effort it's not that bad.
Images for reference:
- Before
![Before](/images/dark-mode/before.png)
- After
![After](/images/dark-mode/after.png)
