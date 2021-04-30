## A jupyter server with: python3 bash ~~and scala~~ notebooks to be use on local machine on a trusted local network

to use it:
1. go to your notebooks folder
2. execute
```
docker run -it --rm -p 8888:8888 -v "`pwd`":/usr/src/app -d --name=jupyter daverick/jupyter
```
3. connect to http://localhost:8888
4. `docker stop jupyter` will stop your jupyter server

[Source on github](https://github.com/daverick/emporda/tree/master/jupyter)


## jupyter:es
```bash
docker run -it --rm -p 8888:8888 -v "`pwd`":/usr/src/app -d  --name=jupyter daverick/jupyter:es
```
