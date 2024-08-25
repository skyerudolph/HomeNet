import TabButton from './TabButton';
import ScheduleSVG from '../assets/ScheduleSVG';
import SpongeSVG from '../assets/SpongeSVG';
import RecipesSVG from '../assets/RecipesSVG';
import SchedulePanel from '../schedule/ScedulePanel';
import { useState } from 'react';

enum Tab {
    Schedule,
    Housework,
    Recipes,
}

const AppContainer = () => {
    const [activeTab, setActiveTab] = useState<Tab>(Tab.Schedule);

    const getSchedulePanel = () => {
        document.body.style.backgroundColor = '#ffddff';
        setActiveTab(Tab.Schedule);
    };
    
    const getHouseworkPanel = () => {
        document.body.style.backgroundColor = '#ddffff';
        setActiveTab(Tab.Housework);
    };
    
    const getRecipesPanel = () => {
        document.body.style.backgroundColor = '#ffffdd';
        setActiveTab(Tab.Recipes);
    };

    return <div>
        <div
            id='TabList'
            style={{
                display: 'flex',
                paddingBottom: 10,
                position: 'relative',
                width: '100%',
            }}>
            <TabButton icon={ScheduleSVG} color='#dd99dd' onClick={getSchedulePanel} />
            <TabButton icon={SpongeSVG} color='#99dddd' onClick={getHouseworkPanel} />
            <TabButton icon={RecipesSVG} color='#dddd99' onClick={getRecipesPanel} />
        </div>
        <div
            id='Content'
            style={{
                alignContent: 'center',
                width: '100%',
            }}>
                {
                    activeTab == Tab.Schedule ? <SchedulePanel /> :
                    activeTab == Tab.Housework ? <div></div> :
                    activeTab == Tab.Recipes ? <div></div> :
                    <div></div>
                }
        </div>
    </div>;
};

export default AppContainer;