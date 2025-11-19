const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`âœ… MongoDB Connected: ${conn.connection.host}`);
    console.log(`ðŸ“Š Database: ${conn.connection.name}`);
  } catch (error) {
    console.error(`âŒ MongoDB Connection Error: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
