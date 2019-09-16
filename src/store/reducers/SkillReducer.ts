import { SkillAction, SkillActionTypes } from '../../types/store/SkillActionTypes';
import { SkillState } from '../../types/store/SkillReducerTypes';
import { Skill } from '../../types/model/Skill';
import { NO_MATCH, getIdentifiableIndexById } from '../../util';

const initialSkill: Skill = { id: 0, title: '' };
const initialState: SkillState = {
    skills: [],
    selectedSkill: initialSkill,
    searchTerm: '',
    filter: '',
    newSkillTitle: initialSkill.title
};

export function SkillReducer(state: SkillState = initialState, action: SkillAction): SkillState {
    switch (action.type) {
        case (SkillActionTypes.RECEIVE):
            if (!action.skills) {
                return { ...state, error: `Can't received undefined list of skills` };
            } else {
                let selectedSkill = action.skills.length > 0 ? action.skills[0] : { id: Number.MAX_SAFE_INTEGER, title: 'Undefined title' };
                const selectedSkillId = state.selectedSkill.id;
                const maybeSelectedSkillIndex = getIdentifiableIndexById(() => state.skills, selectedSkillId);
                if (maybeSelectedSkillIndex !== NO_MATCH) {
                    selectedSkill = action.skills[maybeSelectedSkillIndex];
                }
                return {
                    ...state,
                    skills: action.skills,
                    selectedSkill,
                    newSkillTitle: selectedSkill.title
                };
            }
        case (SkillActionTypes.SELECT):
            if (!action.skill) {
                return { ...state, error: `Can't select undefined skill` };
            } else {
                return {
                    ...state,
                    selectedSkill: action.skill,
                    newSkillTitle: action.skill.title
                };
            }
        default:
            return state;
    }
}
