import { RotatingLines } from 'react-loader-spinner';
import { SpinnerLoad } from './Loader.styled';

function Loader() {
    return (
        <SpinnerLoad>
            <RotatingLines
                strokeColor="grey"
                strokeWidth="5"
                animationDuration="0.75"
                width="96"
                visible={true}
            />
        </SpinnerLoad>
    );
}

export default Loader;
