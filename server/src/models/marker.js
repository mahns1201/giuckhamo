import mongoose from 'mongoose';

const markerSchema = new mongoose.Schema({
  x: { type: Number, required: true },
  y: { type: Number, required: true },
  name: { type: String, required: true },
  href: { type: String, required: true },
  imageSrc: {
    type: String,
    required: true,
    default:
      'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png',
  },
  createdAt: { type: Date, required: true, default: new Date() },
  updatedAt: { type: Date, required: true, default: new Date() },
  deletedAt: { type: Date },
});

const Marker = mongoose.model('Marker', markerSchema);

export default Marker;
