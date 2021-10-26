import { createSelector, createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'tryOut',
    initialState: {
        template: "",
        theme: "",
        currentStep: 0
    },
    reducers: {
        setTemplate: (state, { payload: template }) => {
            
            if (template === state.template) {
                state.template = ""
            } else {
                state.template = template
            }
            
            if (state.theme) {
                state.theme = ""
            }
        },
        setTheme: (state, { payload: theme }) => {
            if (theme === state.theme) {
                state.theme = ""
            } else {
                state.theme = theme
            }
        },
        setCurrentStep: (state, { payload: step }) => {
            switch (step) {
                case 'SHOW_THEME_PICKER':
                    state.currentStep = 1
                    break;
                case 'SHOW_TEMPLATE_PICKER':
                    state.currentStep = 0
                    break;
                default:
                    console.log(step, 'unknown in onNextClick')
            }
        }
    }
})

export const { setTemplate, setTheme, setCurrentStep } = slice.actions

export default slice.reducer

export const getTryOut = createSelector(
    state => state.tryOut,
    (tryOut) => tryOut
)

