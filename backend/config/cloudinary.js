const cloudinary = require("cloudinary").v2;


const connectCloudinary = () => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUD_NAME,
      api_key: process.env.CLOUD_API_KEY,
      api_secret: process.env.CLOUD_API_SECRET,
    });
    console.log("✅ Cloudinary configured successfully");
  } catch (error) {
    console.error("❌ Error configuring Cloudinary:", error);
    throw new Error("Cloudinary configuration failed");
  }
};

module.exports = connectCloudinary;

