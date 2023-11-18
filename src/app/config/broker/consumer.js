import mqtt from "mqtt";
import axios from "axios";
import infosBusiness from "../../api/v1/infos/infos-business.js";

// HiveMQ Cloud Cluster settings
const MQTT_BROKER = "eb74db825f97475fb842783f5553a247.s2.eu.hivemq.cloud";
const MQTT_PORT = 8883; // Port for secure MQTT (TLS/SSL)
const MQTT_TOPIC = "your/topic"; // Atualize com o tópico desejado
const API_ENDPOINT = "https://pi-4-server.vercel.app/api/v1/infos"; // Atualize com o endpoint da sua API

const consumer = () => {
  const client = mqtt.connect({
    host: MQTT_BROKER,
    port: MQTT_PORT,
    username: "cassiotakarada",
    password: "Kunglao7*",
    protocol: "mqtts", // TLS/SSL
    rejectUnauthorized: true, // Certificado SSL é exigido
  });

  client.on("connect", () => {
    console.log(`Connected to MQTT broker`);
    client.subscribe(MQTT_TOPIC);
  });

  client.on("message", async (topic, message) => {
    console.log(`Received message: ${message.toString()} on topic ${topic}`);
    try {
      // Parse the received message payload
      const msgPayload = JSON.parse(message.toString());

      // Prepare data in the format expected by your API
      const data = {
        equipmentSerialNumber: msgPayload.equipmentSerialNumber,
        temperature: msgPayload.airTemperature,
        soilMoisture: msgPayload.soilHumidity,
        airMoisture: msgPayload.airHumidity,
      };

      // Send data to your API endpoint
      try {
        const response = await infosBusiness.create(data);
        console.log(`Data sent to API, response status code ${response}`);
      } catch (error) {
        console.error(`Error: ${error.message}`);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      }
    } catch (e) {
      console.error(`Error: ${e.message}`);
    } finally {
      client.end();
    }
  });
};

export default consumer;
