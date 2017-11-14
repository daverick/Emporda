python3 docker image with requirements.txt module

to use iteractively:
```bash
docker run -it --rm   -v "`pwd`":/usr/app -w /usr/app  daverick/python3
```

to execute a script
```bash
docker run -it --rm   -v "`pwd`":/usr/app -w /usr/app  daverick/python3 python your-script.py ```

if you want to use an alias:
```
alias python3='docker run -it --rm   -v "`pwd`":/usr/app -w /usr/app  daverick/python3 python'
```
