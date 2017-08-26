FROM python:3.6

RUN adduser --disabled-login --gecos '' aws
VOLUME /home/aws

RUN mkdir -p /awscli
VOLUME /awscli
WORKDIR /awscli

COPY requirements.txt /tmp
RUN pip install --no-cache-dir -r /tmp/requirements.txt

USER aws

ENTRYPOINT ["aws"]
