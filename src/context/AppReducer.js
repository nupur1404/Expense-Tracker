import Transactions from "../components/Transactions";

export default (state, action) => {
    switch(action.type){
        case'Delete_Transaction' :
            return {
                ...state,
                transactions:state.transactions.filter(transaction => transaction.id !== action.payload)
            }
            case'ADD_TRANSACTION':
            return {
                ...state,
                transactions:[ action.payload ,...state.transactions]
            }
        default:
            return state ;
    }
}