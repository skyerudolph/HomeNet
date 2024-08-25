import '../index.css';

interface TabProps {
    icon: JSX.Element;
    color: string;
    onClick: () => void;
};

const TabButton = ({ icon, color, onClick }: TabProps) => {
    return <button
            onClick={onClick}
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
    </button>;
};

export default TabButton;