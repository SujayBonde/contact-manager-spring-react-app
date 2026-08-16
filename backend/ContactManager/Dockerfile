# Use an official JDK 21 runtime image
FROM eclipse-temurin:21-jdk

# Set working directory inside container
WORKDIR /app

# Copy the JAR file built by Maven into the container
COPY target/ContactManager-0.0.1-SNAPSHOT.jar app.jar

# Expose the port your Spring Boot app runs on
EXPOSE 8080

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
