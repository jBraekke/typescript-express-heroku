import * as mongoose from 'mongoose';

const connectDatabase = async () => {
  let dbCon;
  try {
    dbCon = await mongoose.connect("mongodb+srv://Dundyne:WYmnoicXwC51QQTk@cluster0.sxqum.mongodb.net/react-vestengveien?retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  } catch (error) {
    console.log(error.message);
  }

  console.log(`Connected to mongodb ${dbCon.connection.host}`);
};

export default connectDatabase;
