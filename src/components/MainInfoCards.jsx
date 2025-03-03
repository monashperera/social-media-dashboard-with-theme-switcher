import Followers from '../data/dataFollowers';
import StatIcon from '../data/StatIcon';

const MainInfoCards = () => {
    return (
        <section>
            <div className="container-fluid main-info-container m-0">
                <div className="row m-0 p-0">
                    {Followers.map((data) => (
                        <div key={data.id} className={`col-md card-main ${data.cardBg}`}>
                            <div className="card-container">
                                <div className='card-user'>
                                    <img src={data.icon} alt={data.alt} />
                                    <span>{data.userName}</span>
                                </div>
                                <div className='card-count'>
                                    <p>{data.totalFollowers}</p>
                                    <p>{data.description}</p>
                                </div>
                                <div className='card-stat'>
                                    <img src={(data.followType === 'up') ? StatIcon.up.src : StatIcon.down.src} alt={(data.followType === 'up') ? StatIcon.up.alt : StatIcon.down.alt} />
                                    <span className={`${(data.followType === 'up') ? 'stat-up' : 'stat-down' }`}>{data.followersCount} Today</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainInfoCards;