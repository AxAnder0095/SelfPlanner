import '../styles/Overview.scss';
import { useTestMocks } from '../hooks/UseTestMocks.tsx';
    
export const Overview = () => {
    const { totaltasks, ongoingTasks, priorityTasks, completedTasks } = useTestMocks();

    return (
        <div className="Overview">
            <section className="overview-header">
                <article className='overview-header-intro'>
                    <h1 className='overview-header-title'>Overview</h1>
                </article>
                <article className='overview-header-stats'>
                    <div className='stat-box stat-box--primary'>
                        <p className='stat-title'>{totaltasks}</p>
                        <p className="stat-desc">Total Tasks</p>
                    </div>
                    <div className='stat-box stat-box--secondary'>
                        <p className='stat-title'>{priorityTasks}</p>
                        <p className="stat-desc">High Priority Tasks</p>
                    </div>
                    <div className='stat-box stat-box--completed'>
                        <p className='stat-title'>{completedTasks}</p>
                        <p className="stat-desc">Completed Tasks</p>
                    </div>
                    <div className='stat-box stat-box--secondary'>
                        <p className='stat-title'>{ongoingTasks}</p>
                        <p className="stat-desc">Ongoing Tasks</p>
                    </div>
                </article>
            </section>
            <section className="overview-content">
                <p style={{fontSize: "6rem"}}>Placeholder</p>
            </section>
        </div>
    )
};