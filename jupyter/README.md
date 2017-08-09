Docker file for a jupyter server with: python3 bash and scala notebooks

to use it:
1. go to your notebooks folder
2. execute `docker run -it --rm -p 8888:8888 -v "`pwd`":/usr/src/app daverick/jupyter`
3. use the url that appears in the logs to connect to your jupyter notebooks. 
4. CTRL-C to stop the jupyter server. your notebooks will be kept in your notebook folder
