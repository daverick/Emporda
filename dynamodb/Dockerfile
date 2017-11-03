FROM openjdk

RUN wget https://s3.eu-central-1.amazonaws.com/dynamodb-local-frankfurt/dynamodb_local_latest.tar.gz -q -O - | tar -xz

RUN mkdir /data
VOLUME /data
EXPOSE 8000

ENTRYPOINT ["java", "-jar", "DynamoDBLocal.jar", "-dbPath", "/data", "-sharedDb"]
