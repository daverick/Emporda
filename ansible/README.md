no need of a specific docker image. using https://hub.docker.com/r/williamyeh/ansible/


```
alias ansible='docker run --rm -v "`pwd`":/usr/playbooks -w /usr/playbooks williamyeh/ansible:alpine3 ansible-playbook'
```
