import Overview from "../data/dataOverview";
import StatIcon from "../data/StatIcon";

const OverViewCards = () => {
    return (
        <div className="container-fluid p-0 overview-container">
            <div className="col-12 p-0 pb-4">
                <h2>Overview - Today</h2>
            </div>
            <div className="row m-0 p-0">

                {Overview.map((data) => (
                    <div key={data.id} className="card-overview">
                        <div className="card-overview-info">
                            <span>{data.description}</span>
                            <img src={data.icon} alt={data.alt} />
                        </div>
                        <div className="card-overview-stat">
                            <span>{data.countTot}</span>
                            <p>
                                <img src={(data.countType === 'up') ? StatIcon.up.src : StatIcon.down.src} alt={(data.countType === 'up') ? StatIcon.up.alt : StatIcon.down.alt} />
                                <span className={`${(data.countType === 'up') ? 'stat-up' : 'stat-down'}`}>{data.countPercent}</span>
                            </p>
                        </div>
                    </div>
                ))}

            </div>

        </div>
    );
};

export default OverViewCards;