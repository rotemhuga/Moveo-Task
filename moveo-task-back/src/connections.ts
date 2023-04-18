import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
// const token = process.env.TOKENSECRET;
const uri ="mongodb+srv://rotem3007:Rot249853@moveoTask.n1jysmv.mongodb.net/test;"
export const connectToDB = async () => {
	try {
		await connect(`${uri}`);
		('db connected');
	} catch (err) {
		console.log('error connecting to db', err);
	}
};
