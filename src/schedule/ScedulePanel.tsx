import ScheduleItemCard from "./ScheduleItemCard";
import Schedule from "./TestScheduleFile.json";

interface ScheduleItem {
    lastCompleted: string,
    interval: number,
    taskName: string,
};

const GetDueDate = (item: ScheduleItem) => {
    const lastDate = new Date(item.lastCompleted);
    return new Date(lastDate.setDate(lastDate.getDate() + item.interval));
}

const GetPriority = (item: ScheduleItem) => {
    const dueDate = GetDueDate(item);
    const now = new Date(Date.now());
    if(now < dueDate) return 'low';
    const daysOverdue = (now.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24);
    const fractionOverdue = daysOverdue / item.interval;
    if(fractionOverdue > .5) return 'high';
    return 'medium';
}

const SchedulePanel = () => {
    return <div 
        style={{
            padding: 5,
        }}>
        {
            Schedule
                .sort((a, b) => GetDueDate(a).getTime() - GetDueDate(b).getTime())
                .map(item => ScheduleItemCard({ dueDate: GetDueDate(item), priority: GetPriority(item), taskName: item.taskName }))
        }
    </div>;
};

export default SchedulePanel;