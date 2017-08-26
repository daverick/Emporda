FROM python:3.6

RUN mkdir -p /awscli

VOLUME /awscli
WORKDIR /awscli


COPY requirements.txt /tmp
RUN pip install --no-cache-dir -r /tmp/requirements.txt

ENTRYPOINT ["aws"]
