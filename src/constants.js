export const STATUS_NONE = '__';
export const STATUS_UNSTARTED = 'Unstarted';
export const STATUS_INPROGRES = 'In Progress';
export const STATUS_COMPLETED = 'Completed';

export const TASK_STATUSES = [ STATUS_UNSTARTED, STATUS_INPROGRES, STATUS_COMPLETED ];

//Actions

export const ACTION_CREATE_TASK = 'ACTION_CREATE_TASK';
export const ACTION_SET_TASK_STATUS = 'ACTION_SET_TASK_STATUS';
export const ACTION_REMOVE_TASK = 'ACTION_REMOVE_TASK';