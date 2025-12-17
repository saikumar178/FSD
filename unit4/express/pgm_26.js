const fs = require("fs");
const { MongoClient } = require("mongodb");

// File paths
const inputFile = "employees.json";
const outputFile = "updated_employees.json";

// MongoDB URL (Use 127.0.0.1 if localhost has connection issues)
const url = "mongodb://127.0.0.1:27017"; 
const client = new MongoClient(url);

async function manageEmployees() {
    try {
        // Step 1: Read employee data from employees.json
        if (!fs.existsSync(inputFile)) {
            console.error(`Error: ${inputFile} not found.`);
            return;
        }
        const employeeData = JSON.parse(fs.readFileSync(inputFile, "utf8"));

        // Step 2: Connect to MongoDB
        await client.connect();
        console.log("Connected to MongoDB");

        const db = client.db("CompanyDB");
        const collection = db.collection("employees");

        // Step 3: Insert employee records
        const insertResult = await collection.insertMany(employeeData);
        console.log(`${insertResult.insertedCount} employees inserted`);

        // Step 4: Update employee with empId = 101
        const updateResult = await collection.updateOne(
            { empId: 101 },
            { $set: { designation: "Senior Developer" } }
        );
        
        if (updateResult.matchedCount > 0) {
            console.log("Record updated for empId = 101");
        } else {
            console.log("No employee found with empId = 101");
        }

        // Step 5: Retrieve all employees
        const allEmployees = await collection.find({}).toArray();

        // Step 6: Write updated records to a new file
        fs.writeFileSync(outputFile, JSON.stringify(allEmployees, null, 2));
        console.log(`All employee records exported to ${outputFile}`);

    } catch (err) {
        console.error("An error occurred:", err.message);
    } finally {
        // Always close the client connection
        await client.close();
        console.log("MongoDB connection closed");
    }
}

// Execute the main function
manageEmployees();
