import {useSelector} from 'react-redux';
import { OBJECTIVE,MULTIPLE,TRUEFALSE,STAR } from '../reducer/format';


import ObjectMake from '../../../component/surveyFormat/ObjectMake';
import MultipleMake from '../../../component/surveyFormat/MultipleMake';

function QuestionMakeList() {
    
    const data = useSelector((state)=> state);
    let list = NaN;
    if(data!==undefined){
        list = data.question.map(
            r => {
                switch (r.type) {
                    case OBJECTIVE:
                        return <ObjectMake id={r.id} title={r.title} />
                    case MULTIPLE:
                        return <MultipleMake id={r.id} title={r.title} response={r.response}/>
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




export default QuestionMakeList;