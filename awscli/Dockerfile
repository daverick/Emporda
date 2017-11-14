FROM python:3.6

RUN adduser --disabled-login --gecos '' aws
VOLUME /home/aws

RUN mkdir -p /awscli
VOLUME /awscli
WORKDIR /awscli

COPY requirements.txt /tmp
RUN pip install --no-cache-dir -r /tmp/requirements.txt

RUN apt-get update && apt-get install -y --no-install-recommends \
  groff 

USER aws

ENTRYPOINT ["aws"]
