import axios from "axios";
import { FilterTypes, IEvent } from "./types";

const URL = "http://localhost:3004/events";

export const getAllEvents = async (
  type: FilterTypes = FilterTypes.all
): Promise<IEvent[]> => {
  const response = await axios.get(
    URL + (type != FilterTypes.all ? "?type=" + type : "")
  );
  return response.data;
};
