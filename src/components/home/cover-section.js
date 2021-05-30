import './cover-section.css';
import coverImg from '../../assets/cover-image.png';

function CoverSection(){
    return(
        <img class='cover-image' src={coverImg}></img>
    );
}

export default CoverSection;