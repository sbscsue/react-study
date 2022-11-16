import {useSelector} from 'react-redux';
import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from '../reducer/format';


import Make from '../../../component/surveyFormat/Make';
import MultipleMake from '../../../component/surveyFormat/MultipleMake';

function QuestionMakeList() {
    
    const data = useSelector((state)=> state);
    let list = NaN;
    if(data!==undefined){
        list = data.question.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <Make id={r.id} title={r.title+" 주관식"} />
                    case MULTIPLE:
                        return <MultipleMake id={r.id} title={r.title+" 객관식"} canMulti={r.canMulti} response={r.response}/>
                    case TRUEFALSE:
                        return <Make id={r.id} title={r.title+" 찬반"} />
                    case STAR:
                        return <Make id={r.id} title={r.title+" 별점"} />
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




export default QuestionMakeList;