FROM python:3

RUN mkdir -p /usr/src/app

VOLUME /usr/src/app
WORKDIR /usr/src/app


COPY requirements.txt /tmp
RUN pip install --no-cache-dir -r /tmp/requirements.txt

CMD ["pytest"]
