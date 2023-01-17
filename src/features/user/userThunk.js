import customFetch from "../../utils/axios";
import { logoutUser } from "./userSlice";
import { clearAllJobsState } from "../allJobs/allJobsSlice";
import { clearValues } from "../job/jobSlice";

export const registerUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/register", user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const loginUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.post("/auth/login", user);
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const updateUserThunk = async (user, thunkAPI) => {
  try {
    const resp = await customFetch.patch("/auth/updateUser", user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    return resp.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("Unauthorized user! Logging out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const clearStoreThunk = async (message, thunkAPI) => {
  try {
    // logout user
    thunkAPI.dispatch(logoutUser(message));
    // clear Jobs value
    thunkAPI.dispatch(clearAllJobsState());
    // clear job input values
    thunkAPI.dispatch(clearValues());
    return Promise.resolve();
  } catch (error) {
    return Promise.reject();
  }
};
