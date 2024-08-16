import Tab from './Tab';
import ScheduleSVG from '../assets/ScheduleSVG';
import SpongeSVG from '../assets/SpongeSVG';
import RecipesSVG from '../assets/RecipesSVG';

const getSchedulePanel = () => {
    document.body.style.backgroundColor = '#ffddff';
    return <div />;
};

const getHouseworkPanel = () => {
    document.body.style.backgroundColor = '#ddffff';
    return <div />;
};

const getRecipesPanel = () => {
    document.body.style.backgroundColor = '#ffffdd';
    return <div />;
};

const AppContainer = () => {
    return (
        <div className='TabList'
            style={{
                width: '100%',
                display: 'flex',
                position: 'relative',
                justifyContent: 'center',
            }}>
            <Tab icon={ScheduleSVG} color='#dd99dd' active={true} panel={getSchedulePanel} />
            <Tab icon={SpongeSVG} color='#99dddd' active={false} panel={getHouseworkPanel} />
            <Tab icon={RecipesSVG} color='#dddd99' active={false} panel={getRecipesPanel} />
        </div>
    )
};

export default AppContainer;