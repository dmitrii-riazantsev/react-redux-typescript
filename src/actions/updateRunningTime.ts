import { ActionType } from '../constants/actionType';


export interface UpdateRunningTimeAction
{
    type: ActionType;
}

export default function updateRunningTime(): UpdateRunningTimeAction 
{
    const action =
    {
        type: ActionType.UpdateRunningTime
    };

    return action;
}