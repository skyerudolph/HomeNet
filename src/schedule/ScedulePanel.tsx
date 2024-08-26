import { useState } from "react";
import ScheduleItem from "./ScheduleItem";
import ScheduleItemCard from "./ScheduleItemCard";
import Schedule from "./TestScheduleFile.json";

const LoadItems = () => {
    return Schedule.map(item => new ScheduleItem(item));
}

const SaveItems = (items: ScheduleItem[]) => {

}

const SchedulePanel = () => {
    const [items, setItems] = useState(LoadItems);

     return <div 
        style={{
            padding: 5,
        }}>
        {
            items
                .sort((a, b) => a.GetDueDate().getTime() - b.GetDueDate().getTime())
                .map(item => ScheduleItemCard({
                dueDate: item.GetDueDate(),
                priority: item.GetPriority(),
                taskName: item.taskName,
                onClick: () => {
                    item.lastCompleted = new Date();
                    setItems([...items]);
                    SaveItems(items);
                }
            }))
        }
    </div>;
};

export default SchedulePanel;