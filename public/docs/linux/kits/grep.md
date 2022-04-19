```sh
grep <options> pattern <file...>
```

# Matching options

```sh
-e, --regexp=PATTERN
-f, --file=FILE
-i, --ignore-case
-v, --invert-match
-w, --word-regexp
-x, --line-regexp
```

# Pattern options

```sh
-F, --fixed-strings   # list of fixed strings
-G, --basic-regexp    # basic regular expression (default)
-E, --extended-regexp # extended regular expression
-P, --perl-regexp     # perl compatible regular expression
```

# Context Options

```sh
-B NUM, --before-context=NUM  # print NUM lines before a match
-A NUM, --after-context=NUM   # print NUM lines after a match
-C NUM, --context=NUM         # print NUM lines before and after a match
-NUM                          # same as --context=NUM
```
