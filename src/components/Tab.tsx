import '../index.css';

interface TabProps {
    icon: JSX.Element;
    color: string;
    active: boolean;
    panel: () => JSX.Element;
}

const Tab = ({ icon, color, active, panel }: TabProps) => {
    return(
        <button
            onClick={panel}
            style={{
                display: 'flex',
                backgroundColor: color,
                flexGrow: 1,
                cursor: 'pointer',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 0,
            }
        }>
            {icon}
        </button>
    );
};

export default Tab;