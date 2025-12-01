// const axios = require("axios");

// const sendSMS = async (phoneNumber, message) => {
//   debugger;
//   try {
//     // Construct the payload as key-value pairs
//     const payload = new URLSearchParams();
//     payload.append("AccountId", "CI02429138");
//     payload.append("Email", "skipaline.corp@gmail.com");
//     payload.append("Password", "76543210Ha!");
//     payload.append("Recipient", phoneNumber); // Ensure the key is correct (Recipient or Recipient)
//     payload.append("Message", message);

//     console.log("Payload:", payload.toString());

//     // URL with Action=SendSMS as a query parameter
//     const url = "https://api.completesms.net/smsapi/send";

//     const response = await axios.post(
//       url,
//       payload.toString(), // Send the URL-encoded string
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     );

//     console.log("Red Oxygen Response:", response.data);
//     return response.data;
//   } catch (error) {
//     console.error("Failed to send SMS:", error.message);
//     if (error.response) {
//       console.error("Response data:", error.response.data);
//       console.error("Response status:", error.response.status);
//       console.error("Response headers:", error.response.headers);
//     } else if (error.request) {
//       console.error("Request data:", error.request);
//     } else {
//       console.error("Error message:", error.message);
//     }
//     throw new Error(`Failed to send SMS: ${error.message}`);
//   }
// };
const axios = require("axios");

const sendSMS = async (phoneNumber, message) => {
  debugger;
  try {
    // Convert to string and ensure phone number has + prefix
    const phoneStr = String(phoneNumber);
    const formattedPhone = phoneStr.startsWith("+") ? phoneStr : `+${phoneStr}`;
    const cleanMessage = message
      .replace(/[^\x00-\x7F]/g, "") // Remove non-ASCII characters
      .trim();

    const payload = {
      Name: "ROX_API_Request",
      Version: "1.1",
      Product: "SkipalineApp",
      Sender: {
        AccountId: "CI02429141",
        Username: "farhan2203375@gmail.com",
        Password: "Tester@123",
      },
      Messages: {
        ReceiptFlag: 0,
        ReplyType: "E",
        TimeZoneOffset: 0,
        Count: 1,
        1: {
          DestTn: "+923454646445",
          SMSText: "Test Message",
        },
      },
    };

    const response = await axios.post(
      "https://api.completesms.net/smsapi/send",
      payload,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log("CompleteSMS Response:", response.data);
    return response.data;
  } catch (error) {
    console.error("Failed to send SMS:", error.response?.data || error.message);
    throw error;
  }
};

module.exports = sendSMS;
