# Videos & Audio

## Videos in HTML

```html
<video width="750" height="=250" controls>
  <source src="" type="" alt="your bowser does not support the video type" />
</video>
```

Why do we use controls?
The controls attribute adds built-in video player controls — so users can play, pause, adjust volume, seek, or fullscreen the video.

Without controls:
The video loads, but the user can’t play it (unless you use autoplay, which plays it automatically — but users can’t pause or control it).

With controls:
You get a nice control bar.

| Feature       | What it does                     |
| ------------- | -------------------------------- |
| ▶️ Play/Pause | Start and stop the video          |
| 🔊 Volume     | Adjust sound                     |
| ⏩ Seek bar   | Jump to a specific time in video |
| ⛶ Fullscreen  | Expand to full screen           |

It’s a Boolean attribute — you just write controls (no need for a value like controls="true").

## Audios in HTML

```html
<audio width="750" height="=250" controls>
  <source src="" type="" alt="your bowser does not support the audio type" />
</audio>
```

## Fav Icon

Search on Google: favicon.io & favicon.cc

Generate a logo of your own on Canvas or etc.

Just link the image in the header and the image will appear beside the title of the document
