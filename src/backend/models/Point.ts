import TypesPointList from "./TypesPointList";
import StatusPoint from "./StatusPoint";
import Evaluation from "./Evaluation";

export default interface Point {
    x : number
    y : number
    type : TypesPointList
    status : StatusPoint
    description? : string
    evaluations : Array<Evaluation>
    rating?  : 0
    countVotesToCreate : 0
    countVotesToDelete : 0
    createDate: Date
}