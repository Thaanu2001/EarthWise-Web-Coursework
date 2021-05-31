import './cover-section.css';
import coverImg from '../../assets/cover-image.png';

function CoverSection() {
    return (
        <div class='cover-section'>
            <div class='cover-image'></div>
            <div class='container'>
                <div class='row cover-content'>
                    <div class='col'>
                        <div class='row'>
                            <div class='col'>
                                <div class='cover-text'>LOREM IPSUM<br />DOLOR SIT AMET</div>
                            </div>
                        </div>
                        <div class='row'>
                            <div class='col col-lg-2'>
                                <button type="button" class="btn cover-button btn-outline-light">MORE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoverSection;