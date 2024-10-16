import mongoose from "mongoose"

const vmSchema = new mongoose.Schema({
    deviceName: String,
    brand: String,
    serialNumber: String,
    issuedTo: String,
    issuedDate: Date
}, {timestamps: true})

const VirtualMachine = mongoose.model("VirtualMachine", vmSchema);

export default VirtualMachine;