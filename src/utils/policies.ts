import { Project, TeamMember } from "../types/index";

export const isManager = ( managerId: Project["manager"], userId: TeamMember["_id"] ) => {
  return managerId === userId;
};
