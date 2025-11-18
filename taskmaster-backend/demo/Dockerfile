FROM eclipse-temurin:21-jdk-alpine

WORKDIR /app

COPY . .

# 👇 THIS IS THE MAGIC FIX
# It gives Linux permission to run the build script
RUN chmod +x mvnw

# Build the app
RUN ./mvnw clean package -DskipTests

# Run the app (I changed the name to *.jar to automatically find whatever your app is named)
ENTRYPOINT ["java", "-jar", "target/*.jar"]