// =============================================================================
// types
// =============================================================================

export interface ProductItemDataParams {
  id: number;         // 상품ID
  title: string;      // 상품명
  price: number;      // 상품가격
  quantity: number;   // 주문수량
  selected: boolean;
}

export interface ProductState {
  productItems: ProductItemDataParams[];
  input: string;
}

export const CREATE = "product/CREATE";
export const REMOVE = "product/REMOVE";
export const TOGGLE = "product/TOGGLE";
export const SUBTRACT = "product/SUBTRACT";
export const ADD = "product/ADD";
export const CHANGE_INPUT = "product/CHANGE_INPUT";

interface CreateAction {
  type: typeof CREATE;
  payload: ProductItemDataParams;
}

interface RemoveAction {
  type: typeof REMOVE;
  meta: {
    id: number;
  };
}

interface ToggleAction {
  type: typeof TOGGLE;
  meta: {
    id: number;
  };
}

interface SubtractAction {
  type: typeof SUBTRACT;
  meta: {
    id: number;
  };
}

interface AddAction {
  type: typeof ADD;
  meta: {
    id: number;
  };
}

interface ChangeInputAction {
  type: typeof CHANGE_INPUT;
  meta: {
    input: string;
  };
}

export type ProductActionTypes =
  | CreateAction
  | RemoveAction
  | ToggleAction
  | SubtractAction
  | AddAction
  | ChangeInputAction;

// =============================================================================
// actions
// =============================================================================

let autoId = 0;
let randomPrice = () => Math.floor(Math.random() * 1000) * 100;

function create(title: string) {
  return {
    type: CREATE,
    payload: {
      id: autoId++,
      title: title,
      selected: false,
      quantity: 1,
      price: randomPrice()
    }
  };
}

function remove(id: number) {
  return {
    type: REMOVE,
    meta: {
      id
    }
  };
}

function toggle(id: number) {
  return {
    type: TOGGLE,
    meta: {
      id
    }
  };
}

function subtract(id: number) {
  return {
    type: SUBTRACT,
    meta: {
      id
    }
  };
}

function add(id: number) {
  return {
    type: ADD,
    meta: {
      id
    }
  };
}

function changeInput(input: string) {
  return {
    type: CHANGE_INPUT,
    meta: {
      input
    }
  };
}

export const actionCreators = {
  create,
  toggle,
  remove,
  subtract,
  add,
  changeInput
};

// =============================================================================
// reducers
// =============================================================================

const initialState: ProductState = {
  productItems: [],
  input: ""
};

export function productReducer(
  state = initialState,
  action: ProductActionTypes
): ProductState {
  switch (action.type) {
    case CREATE:
      return {
        input: "",
        productItems: [...state.productItems, action.payload]
      };
    case REMOVE:
      return {
        ...state,
        productItems: state.productItems.filter(product => product.id !== action.meta.id)
      };
    case TOGGLE:
      return {
        ...state,
        productItems: state.productItems.map(product => {
          if (product.id === action.meta.id) {
            product.selected = !product.selected;
          }
          return product;
        })
      };
    case SUBTRACT:
      return {
        ...state,
        productItems: state.productItems.map(product => {
          if (product.id === action.meta.id) {
            product.quantity > 1 && product.quantity--;
          }
          return product;
        })
      };
    case ADD:
      return {
        ...state,
        productItems: state.productItems.map(product => {
          if (product.id === action.meta.id) {
            product.quantity++;
          }
          return product;
        })
      };
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.meta.input
      };
    default:
      return state;
  }
}