import { Link } from 'react-router-dom';
import { Mapsitems } from './Compo/Maps items';

function Maps() {
    return (
        <div>
            {Mapsitems.map((map) => (
                <div key={map.id} className="my-4">
                    <Link to={`/Information/Maps/${map.id}`}>
                        <p className='font-body text-xl'>{map.Titlemap}</p>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Maps;