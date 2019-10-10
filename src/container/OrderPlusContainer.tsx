import { connect } from "react-redux";
import React, {StatelessComponent } from "react";
import { StoreState } from "../store/modules";
import { bindActionCreators } from "redux";
import {OrdPlusItemState, actionCreators as ordplusActions} from '../store/modules/OrderPlus';
import OrderPlus from "../components/OrderPlus/OrderPlus";

interface Props {
    selectedId : number,
    OrdPlusItems : OrdPlusItemState[],
    OrdPlusActions : typeof ordplusActions
}

const OrderPlusContainer:StatelessComponent<Props> = (props) => {
    const {selectedId, OrdPlusActions, OrdPlusItems} = props;

    const onToggle = (id: number) : void => {
        OrdPlusActions.toggleSelect(id);
    };

    return (
        <OrderPlus
            selectedId={selectedId}
            items={OrdPlusItems}
            onToggle={onToggle}
        />
    );
};

export default connect( 
    ({orderplus} : StoreState) => ({
        selectedId : orderplus.selectedId,
        OrdPlusItems : orderplus.items
    }),
    (dispatch) => ({
        OrdPlusActions : bindActionCreators(ordplusActions, dispatch)
    })
)(OrderPlusContainer);