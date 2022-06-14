const mongoose = require("mongoose");

module.exports = async () => {
    try {
        const connectionParams = {
        };
        await mongoose.connect(
            "mongodb://localhost/todo-app",
            connectionParams
        );
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
