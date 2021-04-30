---
title: "Paypr"
date: 2021-03-23
lastmod: 2021-03-23
summary: "A script to make a perfectly sized wallpaper from any image."
tags: ["Python", "pytest", "pillow", "click"]
categories: ["Python"]
path: "/tech/2021/04/paypr"
category: "Programming"
images: ["images/blog/tech/2021/03/paypr-after.png"]
---

# Paypr

_This is an Open Source project, you can find the repo [here](https://github.com/thejayhaykid/paypr)._

Have a folder of images that you have your computer shuffle through as your wallpapers? Have some images you want to add that aren't quite the right size or aspect ratio? Have you put pictures in your Chromecast Ambient mode folder and noticed that images that don't quite fit have a cool affect so that it fits on the screen and you can see the whole image?

Well this project aims to bring that simple thing that the Chromecast Ambient mode does to any image. If you look at the code, you will see that it is very simple. All it does it take the image, copy it stretch it to fit whatever resolution the user decides (with FHD 1920x1080 being the default), blurs that and then centers the original image, shrinking it to fit if necessary. That's it. Now you have a new picture that can be used as a wallpaper and can be the exact size of your screen!

I used to do this by hand, but thought that I could automate it so I did. I just believe having the image blurred looks better than having whatever the windows color is on the sides when the image doesn't fit.

Give it a try for yourself! Or fork the code and submit a PR if you can think of a helpful feature!

---

## Before

![Before](images/blog/tech/2021/03/paypr-after.png)
![Before](../../../resource/images/blog/tech/2021/03/paypr-before.png)
![Before](../../../../resource/images/blog/tech/2021/03/paypr-before.png)
![Before](../../../../../resource/images/blog/tech/2021/03/paypr-before.png)
![Before](../../../../../../resource/images/blog/tech/2021/03/paypr-before.png)
![Before](../../../../../../../resource/images/blog/tech/2021/03/paypr-before.png)
![Before](../../../../../../../../resource/images/blog/tech/2021/03/paypr-before.png)
![Before](../../../../../../../../../resource/images/blog/tech/2021/03/paypr-before.png)

## After

![After](../../../../../resource/images/blog/tech/2021/03/paypr-after.png)
