Using node/npm without installing it

# node
## directly
```bash
docker run --rm  -it -v "`pwd`":/usr/src/app -w /usr/src/app node node
```
## alias

```bash
alias node='docker run --rm  -it -v "`pwd`":/usr/src/app -w /usr/src/app node node'
```
# npm
## directly
```bash
docker run --rm  -it -v "`pwd`":/usr/src/app -w /usr/src/app node npm
```
## alias

```bash
alias npm='docker run --rm  -it -v "`pwd`":/usr/src/app -w /usr/src/app node npm'
```

## to run npm exposing the port 8080

```bash
docker run --rm  -it -p 8080:8080 -v "`pwd`":/usr/src/app -w /usr/src/app node npm
```

# specific version

using a tag version of the node image you can use specific version of node:
* `node:4` for node verion 4
* `node:6` for node version 6
* `node:8`
* `node:9`
...

or for using specific image flavour:
* `node:slim` for a smaller image
* `node:alpine`
...
