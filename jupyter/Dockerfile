FROM python:3.6

#installing tini
ENV TINI_VERSION v0.15.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini","--"]

#installing bash_kernel
RUN pip3 install bash_kernel

#installing extern requirements
COPY requirements.txt /tmp
RUN pip install --no-cache-dir -r /tmp/requirements.txt

#activating the kernels and extensions
RUN jupyter nbextension enable --py --sys-prefix widgetsnbextension
RUN python -m bash_kernel.install

#folder for mounting the notebooks folder
RUN mkdir -p /usr/src/app
VOLUME /usr/src/app
WORKDIR /usr/src/app


EXPOSE 8888

CMD ["jupyter","lab","--ip=0.0.0.0","--allow-root"]
