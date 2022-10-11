import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
  id: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, required: false, default: new Date() },
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
