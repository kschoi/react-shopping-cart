import { action } from "typesafe-actions";
import { Reducer } from 'redux';

// use typescript enum rather than action constants
export enum actionTypes {
    TOGGLE_SELECT = 'ordplus/TOGGLESELECT'
}

// action creator
export const actionCreators = {
    toggleSelect: (id: number) => action(actionTypes.TOGGLE_SELECT, id)
};

export interface OrdPlusItemState {
    id : number,
    mallName? : string,
    delivType? : string,
    desc1? : string,
    desc2? : string,
    desc3? : string
    disabled? : boolean,
    newOrder? : boolean,
    checked? : boolean,
    onToggle?(id : number) : void
}

// state type
export type OrdPlusState = Readonly<{
    selectedId : number,
    items : OrdPlusItemState[]
}>;

let id = 0;

const initialState: OrdPlusState = {
    selectedId : 0,
    items : [
        {
            id : id++,
            mallName : "이마트몰",
            delivType : "쓱배송 투모로우",
            desc1 : "04.20 토요일 10:00 ~ 13:00 배송",
            desc2 : "04.20 토요일",
            desc3 : "05:00 까지 주문",
            checked : true
        },
        {
            id : id++,
            mallName : "트레이더스",
            delivType : "쓱배송",
            desc1 : "04.20 토요일 10:00 ~ 13:00 배송",
            desc2 : "주문더하기를 이미 하셨습니다.",
            disabled : true,
            checked : false
        },
        {
            id : id++,
            newOrder : true,
            checked : false
        }
    ]
}

const reducer: Reducer<OrdPlusState> = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.TOGGLE_SELECT:
            return {
                ...state,
                selectedId: action.payload
            };
        default:
            return state;
    }
}

export { reducer as OrderPlusReducer }