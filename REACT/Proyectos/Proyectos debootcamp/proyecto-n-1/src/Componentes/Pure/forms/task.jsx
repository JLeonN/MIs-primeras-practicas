import React from 'react';
import PropTypes from 'prop-types';
import { Task } from '../../../models/task.class';


const TaskComponent = ({task}) => {
  return (
    <div>
      
    </div>
  );
};


TaskComponent.propTypes = {
  task: propTypes.instanceOf(Task)
};


export default TaskComponent;
