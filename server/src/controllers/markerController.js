import Marker from '../models/marker';

// export const getMarkers = async (req, reply) => {
//   try {
//     console.log('execute getMarkers');
//     const markers = await Marker.find();
//     return markers;
//   } catch (error) {
//     console.log(error);
//     throw new Error();
//   }
// };

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
