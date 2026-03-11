import "../styles/Finished.scss";
import { useTestMocks } from "../hooks/UseTestMocks.tsx";
import { useState } from "react";
import { PiChartBarHorizontalFill } from "react-icons/pi";
import { PiSquaresFourFill } from "react-icons/pi";
import { PiExcludeSquareFill } from "react-icons/pi";

export const Finished = () => {
    const { completedTasks } = useTestMocks();

    // Display types
    const BAR_DISPLAY: string = "finished-tasks-bar";
    const SQUARE_DISPLAY: string = "finished-tasks-square";
    const BAR_TASK: string = "finished-task-bar";
    const SQUARE_TASK: string = "finished-task-square";

    // State for display types
    const [displayType, setDisplayType] = useState<string>(BAR_DISPLAY);
    const [taskDisplayType, setTaskDisplayType] = useState<string>(BAR_TASK);

    const displayMockTasks = () => {
        if (completedTasks.length === 0) return <p>No tasks available.</p>;

        return (
            completedTasks.map(task => (
                <div key={task.id} className={taskDisplayType}>
                    <div className='finished-task-icon'>
                        <p><PiExcludeSquareFill size={40} /></p>
                    </div>
                    <div className='finished-task-header'>
                        {/* <h3>Task</h3> */}
                        <h3>{task.task}</h3>
                        <p>{task.date.toDateString()}</p>
                    </div>
                    <div className='finished-task-description'>
                        {/* <h3>Description</h3> */}
                        <p>{task.description}</p>
                    </div>
                    <div className='finished-task-status'>
                        {/* <h3>Status</h3> */}
                        <p>{task.isOngoing ? "Ongoing" : "Finished"}</p>
                        <p>{task.isPriority ? "High Priority" : "Low Priority"}</p>
                    </div>
                    <div className='finished-task-actions'>
                        {/* <h3>Actions</h3> */}
                        <button aria-label='edit button'>Edit</button>
                        <button aria-label='delete button'>Delete</button>
                    </div>
                </div>
            ))
        )
    };

    const toggleDisplayType = (tasksDisplayType: string, taskDisplayType: string) => {
        setDisplayType(tasksDisplayType);
        setTaskDisplayType(taskDisplayType);
    };

    
    return (
        <div className="Finished">
            <section className="finished-header">
                <article className='finished-header-intro'>
                    <h1 className='finished-header-title'>Finished</h1>
                </article>
                <article className='finished-format-buttons'>
                    <button
                        type='button'
                        aria-label='bar button'
                        aria-pressed={displayType === BAR_DISPLAY}
                        className={`bar-format ${displayType === BAR_DISPLAY ? 'is-active' : ''}`}
                        onClick={() => toggleDisplayType(BAR_DISPLAY, BAR_TASK)}
                    >
                        <PiChartBarHorizontalFill />
                    </button>
                    <button
                        type='button'
                        aria-label='square button'
                        aria-pressed={displayType === SQUARE_DISPLAY}
                        className={`square-format ${displayType === SQUARE_DISPLAY ? 'is-active' : ''}`}
                        onClick={() => toggleDisplayType(SQUARE_DISPLAY, SQUARE_TASK)}
                    >
                        <PiSquaresFourFill />
                    </button>
                </article>
            </section>
            <section className={displayType}>
                {displayMockTasks()}
            </section>
        </div>
    )
};