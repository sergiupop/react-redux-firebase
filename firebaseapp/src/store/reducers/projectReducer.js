const initState = {
    projects: [
        { id: '1', title: 'Project 1', content: 'Content1' },
        { id: '2', title: 'Project 2', content: 'Content2' },
        { id: '3', title: 'Project 3', content: 'Content3' }
    ]
};

const projectReducer = (state = initState, action) => {
    return state;
};

export default projectReducer;