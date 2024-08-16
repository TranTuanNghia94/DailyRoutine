import {statusTask} from '../utils/constant';


export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';

export interface TaskDto {
  id?: string;
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: string;
  date?: Date;
}
