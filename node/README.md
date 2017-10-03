node and npm commands available from a docker container

# npm:
1. execute
```
docker run --rm  -v "`pwd`":/usr/src/app daverick/node npm
```
2. you can even create an alias
```
alias npm='docker run --rm  -v "`pwd`":/usr/src/app daverick/node npm'
```

# node:
1. execute
```
docker run --rm  -v "`pwd`":/usr/src/app daverick/node node
```
2. you can even create an alias
```
alias node='docker run --rm  -v "`pwd`":/usr/src/app daverick/node node'
```

#node version 6
There is a tag for version 6 of node:
```
daverick/node:6
```

[Source on github](https://github.com/daverick/emporda)
