```sh
scp <options> source_path destination_path
```

# Commands

```sh
scp file user@host:/path/to/file                        # copying a file to the remote system using scp command
scp user@host:/path/to/file /local/path/to/file         # copying a file from the remote system using scp command
```

# Options

```
-r      # transfer directory
-v      # see the transfer details
-C      # copy files with compression
-l 800  # limit bandwith with 800
-p      # preserving the original attributes of the copied files
-P      # connection port
-q      # hidden the output
```
