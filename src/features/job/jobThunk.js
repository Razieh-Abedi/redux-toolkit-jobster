import { showLoading, hideLoading, getAllJobs } from "../allJobs/allJobsSlice";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";
import { clearValues } from "./jobSlice";
import { logoutUser } from "../user/userSlice";

export const createJobThunk = async (job, thunkAPI) => {
  try {
    const res = await customFetch.post("/jobs", job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return res.data.msg;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
      return thunkAPI.rejectWithValue("unauthorized! logging out...");
    }
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const deleteJobThunk = async (jobId, thunkAPI) => {
  thunkAPI.dispatch(showLoading());
  try {
    const resp = await customFetch.delete(`/jobs/${jobId}`, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(getAllJobs());
    return resp.data.msg;
  } catch (error) {
    thunkAPI.dispatch(hideLoading());
    //return thunkAPI.rejectWithValue(error.response.data.msg);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const editJobThunk = async ({ jobId, job }, thunkAPI) => {
  try {
    const resp = await customFetch.patch(`/jobs/${jobId}`, job, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user.token}`,
      },
    });
    thunkAPI.dispatch(clearValues());
    return resp.data;
  } catch (error) {
    //return thunkAPI.rejectWithValue(error.response.data.msg);
    return checkForUnauthorizedResponse(error, thunkAPI);
  }
};
