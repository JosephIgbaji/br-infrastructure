import mongoose from "mongoose"

const deviceSchema = new mongoose.Schema({
    deviceName: String,
    brand: String,
    serialNumber: String,
    issuedTo: String,
    issuedDate: Date
}, {timestamps: true})

const Device = mongoose.model("Device", deviceSchema);

export default Device;