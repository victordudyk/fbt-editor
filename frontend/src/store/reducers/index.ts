import { combineReducers } from 'redux';
import { errorsReducer as errors } from '../duck/errors';
import { fileContentReducer as fileContent } from '../duck/fileContent';
import { projectItemsReducer as projectItems } from '../duck/projectItems';
import { projectsReducer as projects } from '../duck/projects';
import { recentFilesReducer as recentFiles } from '../duck/recentFiles';
import { authReducer as users } from '../duck/auth';

export default combineReducers({
  errors,
  projects,
  projectItems,
  recentFiles,
  fileContent,
  users,
});
