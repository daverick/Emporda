# dynamodDB
a docker file for dynamoDB in local
data is in a container volume.
run in dbShared mode
internal port is 8000

example to launch the container (you can change the name of the volume (dynamodb-data) to have different databases)
```docker run -d -p 8000:8000 --name dynamodb --rm -v dynamodb-data:/data daverick/dynamodb```
