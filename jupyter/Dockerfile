FROM python:3.6

RUN mkdir -p /usr/src/app

VOLUME /usr/src/app
WORKDIR /usr/src/app

RUN echo "deb http://deb.debian.org/debian jessie-backports main" | tee --append /etc/apt/sources.list.d/jessie-backports.list > /dev/null &&\
      apt-get update  && apt-get install -y --no-install-recommends -t jessie-backports openjdk-8-jre &&\
      cd /tmp &&\
      wget https://raw.githubusercontent.com/alexarchambault/jupyter-scala/master/jupyter-scala && \
      /bin/bash jupyter-scala 

RUN pip3 install bash_kernel

COPY requirements.txt /tmp
RUN pip install --no-cache-dir -r /tmp/requirements.txt

RUN jupyter nbextension enable --py --sys-prefix widgetsnbextension
RUN python -m bash_kernel.install




EXPOSE 8888

ENTRYPOINT ["jupyter","notebook","--ip=*","--allow-root"]
