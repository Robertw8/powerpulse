import { operationWrapper } from "../../../helpers";
import { apiService } from "../../../services";


const getWaistExercises = operationWrapper({
    path: "exercises/getWaistExercises",
    handler: async () => {
        const response = await apiService({
            method: "get", url: "exercises"
        });
        return response.data;
    }
});

export {getWaistExercises};