# Variables

```css
:root {
  --text-color: #30333a;
}

body {
  background: var(--text-color);
  background: color(var(--text-color) shade(30%));
}
```

# Mixins

```css
:root {
  --centered: {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.centered {
  @apply --centered;
}
```

# Colors

```css
a {
  color: color(red alpha(-10%));
}
```
