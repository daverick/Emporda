Docker file for a jupyter server with: python3 bash and scala notebooks

to use it:
1- go to your notebooks folder
2- execute docker run -it --rm -p 8888:8888 -p 9001:9001 -v "`pwd`":/usr/src/app daverick/jupyter
