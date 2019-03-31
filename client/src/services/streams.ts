import axios from "axios";

const jsonAPI = axios.create({
  baseURL: "http://localhost:3001"
});

export const createStream = async (values: {
  description: string;
  title: string;
  userID: string;
}) => {
  try {
    // get response
    const response = await jsonAPI.post("/streams", values);

    // check error
    if (response.status !== 201) {
      throw Error(response.data.error_message || "Unable to create stream.");
    }

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const destroyStream = async (id: string) => {
  try {
    await jsonAPI.delete(`/streams/${id}`);
  } catch (e) {
    console.error(e);
  }
};

export const getStream = async (id: string) => {
  try {
    // get response
    const response = await jsonAPI.get(`/streams/${id}`);

    // check error
    if (response.status !== 200) {
      throw Error(
        response.data.error_message ||
          `Unable to retrieve stream with id:${id}.`
      );
    }

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const getAllStreams = async () => {
  try {
    // get response
    const response = await jsonAPI.get("/streams");

    console.log("resonse", response);

    // check error
    if (response.status !== 200) {
      throw Error(response.data.error_message || "Unable to retrieve streams.");
    }

    return response.data;
  } catch (e) {
    console.error(e);
  }
};

export const updateStream = async (
  id: string,
  values: { description: string; title: string }
) => {
  try {
    // get response
    const response = await jsonAPI.patch(`/streams/${id}`, values);

    // check error
    if (response.status !== 200) {
      throw Error(
        response.data.error_message || `Unable to update stream with id:${id}.`
      );
    }

    return response.data;
  } catch (e) {
    console.error(e);
  }
};
