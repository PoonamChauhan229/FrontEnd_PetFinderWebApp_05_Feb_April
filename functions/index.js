const functions = require("firebase-functions");
const axios = require("axios");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

exports.checkNewBreedsAndNotify = functions.pubsub
    .schedule("every 24 hours")
    .onRun(async (context) => {
      try {
        const apiUrl = "https://6624dd2604457d4aaf9d281d.mockapi.io/usersdata";
        const response = await axios.get(apiUrl);
        const users = response.data;

        for (const user of users) {
          const selectedBreed = user.selectedBreed;
          const searchedBreeds = user.Searched_Breed_Outof_stock;

          // Check the selected breed for out-of-stock status
          await checkAndNotifyOutOfStock(selectedBreed, user);

          // Check each searched breed for out-of-stock status
          for (const breed of searchedBreeds) {
            await checkAndNotifyOutOfStock(breed, user);
          }
        }

        return null;
      } catch (error) {
        console.error("Error checking new breeds and send ...:", error);
        return null;
      }
    });
/**
 * Check and notify user if breed is out of stock.
 * @param {string} breedName - The name of the breed to check.
 * @param {object} user - The user object containing email information.
 */
async function checkAndNotifyOutOfStock(breedName, user) {
  try {
    const apiUrl = `https://6624dd2604457d4aaf9d281d.mockapi.io/dogs?name=apple${breedName}`;
    const response = await axios.get(apiUrl);

    if (response.data && response.data.length > 0) {
      const breed = response.data[0];

      if (breed.stockStatus === "out_of_stock") {
        // Send email notification
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "poonam.chauhan229@gmail.com",
            pass: "rlmvkhjnegafnwju",
          },
        });

        const mailOptions = {
          from: "poonam.chauhan229@gmail.com",
          to: user.email, // Send notification to user's email
          subject: "Out of Stock Notification",
          html: `<p>The breed (${breedName}) is now out of stock.</p>`,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email notification sent successfully:", breedName);
      }
    }
  } catch (error) {
    console.error("Error checking breed status:", error);
  }
}
