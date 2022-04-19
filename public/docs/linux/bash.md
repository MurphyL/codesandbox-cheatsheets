# Array

```shell
Fruits=('Apple' 'Banana' 'Orange')

echo ${Fruits[0]}           # Element #0
echo ${Fruits[-1]}          # Last element
echo ${Fruits[@]}           # All elements, space-separated

for i in "${Fruits[@]}"; do
  echo $i
done
```

# Brace expansion

```shell
echo {A,B}      # Same as A B
echo {A,B}.js   # Same as A.js B.js
echo {1..5}     # Same as 1 2 3 4 5
```

# Redirection

```shell
python hello.py > output.txt   # stdout to (file)
python hello.py >> output.txt  # stdout to (file), append
python hello.py 2> error.log   # stderr to (file)
python hello.py 2>&1           # stderr to stdout
python hello.py 2>/dev/null    # stderr to (null)
python hello.py &>/dev/null    # stdout and stderr to (null)
```

# Options

```shell
set -eux pipefail
```
