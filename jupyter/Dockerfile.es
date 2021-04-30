FROM python:3

#installing tini
ENV TINI_VERSION v0.15.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini
ENTRYPOINT ["/tini","--"]

COPY requirements.es.txt ./
RUN pip install --no-cache-dir -r requirements.es.txt
RUN pip install pylint

RUN jupyter serverextension enable --py jupyterlab --sys-prefix

#folder for mounting the notebooks folder
RUN mkdir -p /usr/src/app
VOLUME /usr/src/app
WORKDIR /usr/src/app


EXPOSE 8888

CMD ["jupyter","lab","--ip=0.0.0.0","--allow-root"]