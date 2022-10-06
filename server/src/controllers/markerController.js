import Marker from '../models/marker.js';

export const getMarkers = async () => {
  try {
    console.log('execute getMarkers: ', Marker);
    const markers = await Marker.find({});
    console.log({ markers });
    return markers;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

// exports.getMarker = async (req, reply) => {
//   try {
//     const id = req.params.id
//     const car = await Car.findById(id)
//     return car
//   } catch (err) {
//     throw boom.boomify(err)
//   }
// }

export const insertMarker = async (req, reply) => {
  try {
    const marker = new Marker(req);
    console.log(marker);
    return marker.save();
  } catch (error) {
    console.log(error);
    throw new Error();
  }
};
