---
title: "Oh, it really is Roxie"
description: "yeah it's really, really Roxie"
author: "Arthur Rigley"
date: "2024-11-18"
featuredImage: "/images/demo/roxie-01.jpeg"
---

# Oh it's roxie
This is roxie

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit dui, sagittis ut dui ac, consectetur sollicitudin lectus. Etiam vehicula diam eu quam elementum, vel varius lorem tincidunt. In hac habitasse platea dictumst. Pellentesque scelerisque porttitor fermentum. Morbi purus diam, venenatis nec dictum et, mollis non nisl. Quisque mollis lobortis orci, non facilisis neque volutpat a. In in libero ipsum. Phasellus ex magna, pharetra vel porttitor quis, porttitor sed eros. Aliquam erat volutpat. Duis congue magna id dui sodales, sit amet posuere tellus tempus. Phasellus faucibus viverra egestas. Morbi dapibus, sem ac volutpat pulvinar, tellus tortor consectetur est, quis pulvinar dui arcu sed eros. Curabitur imperdiet eget felis vehicula gravida. Cras porta quam quis justo feugiat, non pellentesque lorem mollis. Nulla ac cursus eros.

Morbi risus purus, ultricies non tortor vitae, imperdiet luctus lacus. Nullam vel diam ac leo consequat sollicitudin at non neque. In id orci quis lectus laoreet auctor vitae a est. Aenean imperdiet ante pharetra tortor vulputate mollis. Nunc ultrices rutrum pharetra. Fusce et enim mattis, tempor tellus non, vulputate massa. Proin pharetra iaculis erat tincidunt volutpat. Donec tristique est at nunc varius, nec lobortis justo scelerisque. Quisque congue posuere arcu non auctor. Nunc venenatis risus eget sem venenatis, eget pretium felis vulputate. Integer eget libero placerat, imperdiet purus faucibus, bibendum purus.

Proin commodo elit felis, a ultrices risus pretium quis. Etiam aliquam faucibus ultricies. Nullam sit amet euismod dolor. Duis luctus, mi eu maximus sagittis, dolor elit sagittis neque, non efficitur purus magna id orci. Sed feugiat diam in ante ullamcorper scelerisque. Nunc lobortis eros ex, sed ornare urna accumsan ut. Maecenas cursus erat nec justo interdum viverra. Phasellus semper blandit purus, ac fermentum nulla dictum quis. Nulla vulputate tincidunt sem aliquet semper. Curabitur vitae posuere leo, ac convallis quam. Sed rutrum urna a tortor venenatis, ac finibus augue suscipit. Proin a ligula massa. Phasellus maximus placerat ante, et aliquam tortor viverra id.

Sed lacinia dapibus commodo. Suspendisse in risus nulla. Pellentesque ligula diam, lobortis non dui id, vehicula blandit velit. In hac habitasse platea dictumst. Fusce non venenatis turpis. Fusce sodales est malesuada quam hendrerit, in lacinia lacus laoreet. Cras tempus in sapien at auctor. Suspendisse at elit tristique, pellentesque ante et, sodales odio. Proin consectetur et nulla in finibus. Integer ipsum quam, molestie eget finibus sed, lacinia porta arcu. Donec convallis lacinia nisi.

Nunc at massa metus. Nullam at semper dui, nec faucibus enim. Nam ultricies rhoncus dui, fermentum ultricies odio venenatis at. Morbi ultrices pulvinar eros, vel pulvinar elit suscipit in. Quisque viverra dignissim purus eu laoreet. Maecenas suscipit erat dignissim, varius felis non, rutrum risus. Nam quis turpis quis diam tempus sagittis. Sed in lorem nibh. Aenean rutrum porttitor varius.

::alert
---
icon: fxemoji:loudspeaker
---
_This_ rich text tells us that it really is **Roxie**. <a href="https://google.com" target="_blank">Google</a>
::

#### Square images:

::pictures
---
image1: '/images/demo/roxie-01.jpeg'
image2: '/images/demo/roxie-02.jpeg'
image3: '/images/demo/roxie-03.jpeg'
classes: -mx-8
aspectRatio: 'square'
---
::

You can pass in custom tailwind classes too, like above i've added a negative left/right margin to allow it to bleed out of the container

#### Custom letterbox image:

::pictures
---
image1: '/images/demo/landscape-04.jpg'
aspectRatio: 'letterbox'
---
::

#### 4:3 ratio images: 

::pictures
---
image1: '/images/demo/roxie-04.JPG'
image2: '/images/demo/roxie-05.JPG'
aspectRatio: '4:3'
---
::

#### 16:9 ratio images:

::pictures
---
image1: '/images/demo/landscape-01.jpg'
image2: '/images/demo/landscape-02.jpg'
aspectRatio: '16:9'
---
::

Sometimes I want to customise text manually. Tailwind makes this quite easy, simply wrap the text in square brackets: `[Text here]{.class-name}`. Then insert tailwind classes into the curly brackets (separated with a full stop), like this:

```html
[The text you want to customise goes here]{.text-3xl.text-red-500}
```

[Now we can see the fancy custom text]{.text-2xl.text-pink-600.bg-slate-900.p-4.block.text-center.my-4}