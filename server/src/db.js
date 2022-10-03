import mongoose from 'mongoose';

mongoose.connect(
  'mongodb+srv://mahns:zkwn1542@cluster0.dtqis.mongodb.net/giuckhamo?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
);

const db = mongoose.connection;

const handleOpen = () => console.log('✅ Connected to DB');
const handleError = (error) => console.log('❌ DB Error', error);

db.on('error', handleError);
db.once('open', handleOpen);
