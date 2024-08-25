

interface ScheduleItemProps {
    dueDate: Date;
    priority: string;
    taskName: string;
};

const priorityColorMap: { [priority: string] : string } = {
    'low': 'green',
    'medium': 'orange',
    'high': 'red',
}

const ScheduleItemCard = ({ dueDate, priority, taskName }: ScheduleItemProps) => {
    return <button
        style={{
            backgroundColor: priorityColorMap[priority] ?? 'blue',
            borderRadius: 10,
            color: 'white',
            fontSize: 18,
            marginBottom: 5,
            marginTop: 5,
            padding: 10,
            width: '100%',
        }}>
        <div style={{ display: 'inline', float: 'left' }}>{ taskName }</div>
        <div style={{ display: 'inline', float: 'right' }}>{ dueDate.toLocaleString('default', { month: 'long', day: 'numeric' }) }</div>
    </button>;
};

export default ScheduleItemCard;