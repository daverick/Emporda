FROM python:2.7

RUN mkdir -p /ansible/playbooks
VOLUME /ansible/playbooks
WORKDIR /ansible/playbooks

COPY requirements.txt /tmp
RUN pip install --no-cache-dir -r /tmp/requirements.txt

ENTRYPOINT ["ansible-playbook"]
