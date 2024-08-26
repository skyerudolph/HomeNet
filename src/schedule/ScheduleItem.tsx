class ScheduleItem {
    lastCompleted: Date;
    interval: number;
    taskName: string;

    constructor(props: { lastCompleted: string, interval: number, taskName: string }) {
        this.lastCompleted = new Date(props.lastCompleted);
        this.interval = props.interval;
        this.taskName = props.taskName;
    }

    GetDueDate() {
        const lastDate = new Date(this.lastCompleted);
        return new Date(new Date(lastDate.setDate(lastDate.getDate() + this.interval)).setHours(0, 0, 0, 0));
    }

    GetPriority() {
        const dueDate = this.GetDueDate();
        const now = new Date();
        if(now < dueDate) return 'low';
        const daysOverdue = (now.getTime() - dueDate.getTime()) / (1000 * 60 * 60 * 24);
        const fractionOverdue = daysOverdue / this.interval;
        if(fractionOverdue > .5) return 'high';
        return 'medium';
    }
}

export default ScheduleItem;