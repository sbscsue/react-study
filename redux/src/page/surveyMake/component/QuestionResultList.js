import {useSelector} from 'react-redux';
import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from '../reducer/format';

import ObjectResult from '../../../component/surveyFormat/ObjectResult';
import MultipleResult from '../../../component/surveyFormat/MultipleResult';
import TrueFalseResult from '../../../component/surveyFormat/TrueFalseResult';
import RatingResult from '../../../component/surveyFormat/RatingResult';



function QuestionResultList() {
    const data = useSelector((state)=> state);
    let list = NaN;
    if(data!==undefined){
        list = data.question.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectResult id={r.id} title={r.title} />
                    case MULTIPLE:
                        return <MultipleResult id={r.id} title={r.title} canMulti={r.canMulti} response={r.response}/>
                    case TRUEFALSE:
                        return <TrueFalseResult id={r.id} title={r.title}/>
                    case STAR:
                        return <RatingResult id={r.id} title={r.title}/>
                }
            }
        )
    }
    
    return (
        <div>
            {list}
        </div>
    );
}

export default QuestionResultList;