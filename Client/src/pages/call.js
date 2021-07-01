import axios from "axios";

export const getData = async (url, sub_Data) => {
  let res = await axios.post(url, sub_Data);
  return res.data;
};
export const getData_GET = async (url, sub_Data) => {
  let res = await axios.get(url, {
    params: sub_Data,
  });
  return res.data;
};
export const readOnlyData = async (url) => {
  let res = await axios.get(url);
  return res.data;
};
export const updateData = async (url, data) => {
  let res = await axios.patch(url, data);
  return res.data;
};
export const deleteItem = async (url, sub_Data) => {
  let res = await axios.delete(url, {
    params: sub_Data,
  });
  return res;
};
export const deleteItemURL = async (url, sub_Data) => {
  let res = await axios.delete(url);
  return res;
};
