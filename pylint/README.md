pylint docker image
works for files or modules that are in the ciurrent working directory or below

to use iteractively:
```bash
docker run -it --rm   -v "`pwd`":/usr/app -w /usr/app  daverick/pylint yourfile.py
```


if you want to use an alias:
```bash
alias pylint='docker run -it --rm   -v "`pwd`":/usr/app -w /usr/app  daverick/pylint pylint'
```

or use a bash script
```bash
#! /bin/bash
docker run  --rm -v "`pwd`":/usr/app -w /usr/app daverick/pylint pylint $@
```
