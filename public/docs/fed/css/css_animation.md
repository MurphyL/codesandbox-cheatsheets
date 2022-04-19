# Fade In/Out

```css
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  100% {
    opacity: 1;
  }
  0% {
    opacity: 0;
  }
}

.fadeIn {
  animation-fill-mode: both;
  animation-name: fadeIn;
}

.fadeOut {
  animation-fill-mode: both;
  animation-name: fadeIn;
}

.useAnimation .fadeIn,
.useAnimation .fadeOut {
  animation-duration: 2s;
}
```
