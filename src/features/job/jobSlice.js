import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import customFetch from "../../utils/axios";
import getUserFromLocalStorage from "../../utils/localStorage";

const initialState = {
  isLoading: false,
  position: "",
  company: "",
  jobLocation: "",
  jobTypeOptions: ["full-time", "part-time", "remote", "internship"],
  jobType: "full-time",
  statusOptions: ["pending", "interview", "declined"],
  status: "pending",
  isEditing: false,
  editJobID: "",
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default jobSlice.reducer;
