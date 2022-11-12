import {useSelector} from 'react-redux';
import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from '../reducer/format';

import ObjectResult from '../../../component/surveyFormat/ObjectResult';

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
                        return <p> {r.id} {r.type}</p>
                    case TRUEFALSE:
                        return <p> {r.id} {r.type}</p>
                    case STAR:
                        return <p> {r.id} {r.type}</p>
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