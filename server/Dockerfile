FROM openjdk:17-oracle
VOLUME /service
LABEL mentainer="suhas.happy@gmail.com"
ARG JAVA_OPTS
ENV JAVA_OPTS=$JAVA_OPTS
COPY ./target/journalingwebsite-0.0.1-SNAPSHOT.jar journalingwebsite.jar
EXPOSE 8080
# RUN exec java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar journalingwebsite.jar
# RUN mvn clean install
# CMD mvn spring-boot:run
ENTRYPOINT exec java $JAVA_OPTS -jar journalingwebsite.jar


