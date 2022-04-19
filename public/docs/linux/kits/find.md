```sh
find <path> <conditions> <actions>
```

# Conditions

```sh
-name "*.c"

-user jonathan
-nouser

-type f            # File
-type d            # Directory
-type l            # Symlink

-depth 2           # At least 3 levels deep
-regex PATTERN

-size 8            # Exactly 8 512-bit blocks
-size -128c        # Smaller than 128 bytes
-size 1440k        # Exactly 1440KiB
-size +10M         # Larger than 10MiB
-size +2G          # Larger than 2GiB
```
