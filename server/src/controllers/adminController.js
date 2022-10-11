import Admin from '../models/admin.js';

/**
 * @param {params} id
 */
export const getAdmin = async (params) => {
  try {
    const { id } = params;
    const result = await Admin.find({ id });
    return result;
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

/**
 * @param {string} id
 * @param {string} password
 */
export const login = async (params) => {
  try {
    const { id, password } = params;
    const admin = await Admin.findOne({ id });

    if (!admin) {
      throw new Error(`Cannot find admin`);
    }

    if (password !== admin.password) {
      throw new Error(`Password is wrong`);
    }

    return {
      statusCode: 200,
      message: `${id} is successfully login`,
    };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};

/**
 * @param {string} id
 * @param {string} password
 */
export const signUp = async (params) => {
  try {
    const admin = new Admin(params);
    await admin.save();

    return {
      statusCode: 201,
      message: `New id ${params.id} is successfully created`,
    };
    // console.log(`Admin: ${Admin}`);
    // console.log(`params: ${JSON.stringify(params)}`);
    // const { id, password } = params;
    // console.log(id, password);
    // const admin = await Admin.findOne({ id });
    // console.log(`admin: ${admin}`);
    // if (!admin) {
    //   throw new Error(`Cannot find admin`);
    // }

    // if (password !== admin.password) {
    //   throw new Error(`Password is wrong`);
    // }

    // return { statusCode: 200, message: 'Login success' };
  } catch (error) {
    console.error(error);
    throw new Error(error.message);
  }
};
