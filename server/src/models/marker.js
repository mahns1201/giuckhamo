import mongoose from 'mongoose';

const markerSchema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  name: { type: String, required: true },
  href: { type: String, required: true },
  markerImage: {
    type: String,
    required: true,
    default:
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
  },
  artistImage: {
    type: String,
    required: true,
    default:
      'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
  },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
  deletedAt: { type: Date },
});

const Marker = mongoose.model('Marker', markerSchema);

export default Marker;
