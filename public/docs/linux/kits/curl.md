```sh
curl [options...] <url>
```

# Request

```sh
-X POST   # --request
-L        # follow link if page redirects
-F        # --form: HTTP POST data for multipart/form-data
```

# Options

```sh
-o <file>       # --output: write to file
-u user:pass    # --user: Authentication
```

# Headers

```sh
-A <str>         # --user-agent
-b name=val      # --cookie
-b FILE          # --cookie
-H "X-Foo: y"    # --header
--compressed     # use deflate/gzip
```

# Data

```sh
-d 'data'        # --data: HTTP post data, URL encoded (eg, status="Hello")
```
