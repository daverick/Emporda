Amazon Web Services CLI with the awscli configuration in a docker volume.
( the serverless framework is available on a tagged docker image)

to use only awscli :
```bash
docker run -it --rm  -v aws-config:/home/aws -v "`pwd`":/awscli daverick/awscli --version
```
you can create an alias too (bash)
```bash
alias aws='docker run -it --rm  -v aws-config:/home/aws -v "`pwd`":/awscli daverick/awscli'
```

to use serverless:
```bash
docker run -it --rm  -v aws-config:/home/aws -v "`pwd`":/awscli --entrypoint=serverless daverick/awscli:serverless --version
```
you can create an alias too (bash)
```bash
alias serverless='docker run -it --rm  -v aws-config:/home/aws -v "`pwd`":/awscli --entrypoint=serverless daverick/awscli:serverless'
```

if you run
```bash
aws configure
```
you will save the configuration created in a docker volume named aws-config
