import faker from 'faker';

// =============================================================================
// faker
// =============================================================================
faker.locale = "ko";

let autoId = 0;

const getFakerProductItem = (): ProductItemDataParams => ({
  id : faker.random.number(),
  title: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price()) * 100,
  imageUrl: faker.random.image(),
  quantity: 1,
  selected: false,
});

const initialFakerProductItems: ProductItemDataParams[] = Array(5).fill('').map( () => getFakerProductItem() );

// =============================================================================
// types
// =============================================================================

export interface ProductItemDataParams {
  id: number;         // 상품ID
  title: string;      // 상품명
  price: number;      // 상품가격
  imageUrl: string;   // 상품이미지 Url
  quantity: number;   // 주문수량
  selected: boolean;
}

export interface ProductState {
  total: number;
  count: number;
  productItems: ProductItemDataParams[];
}

export const REMOVE = "product/REMOVE";
export const TOGGLE = "product/TOGGLE";
export const SUBTRACT = "product/SUBTRACT";
export const ADD = "product/ADD";

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

export type ProductActionTypes =
  | RemoveAction
  | ToggleAction
  | SubtractAction
  | AddAction;

// =============================================================================
// actions
// =============================================================================

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

export const actionCreators = {
  toggle,
  remove,
  subtract,
  add,
};

// =============================================================================
// reducers
// =============================================================================

const initialState: ProductState = {
  total: 0,
  count: 0,
  productItems: initialFakerProductItems,
};

function totalReducer(prev: number, next: ProductItemDataParams): number {
  prev += (next.selected ? (next.price * next.quantity) : 0);
  return prev;
}

function countReducer(prev: number, next: ProductItemDataParams): number {
  next.selected && prev++;
  return prev;
}

export function productReducer(
  state = initialState,
  action: ProductActionTypes
): ProductState {
  let tempProductItems: ProductItemDataParams[];
  
  switch (action.type) {
    case REMOVE:
      tempProductItems = state.productItems.filter(product => product.id !== action.meta.id)
      return {
        ...state,
        productItems: tempProductItems,
        total: tempProductItems.reduce(totalReducer, 0),
      };
    case TOGGLE:
      tempProductItems = state.productItems.map(product => {
        if (product.id === action.meta.id) {
          product.selected = !product.selected;
        }
        return product;
      });
      return {
        ...state,
        productItems: tempProductItems,
        total: tempProductItems.reduce(totalReducer, 0),
        count: tempProductItems.reduce(countReducer, 0),
      };
    case SUBTRACT:
      tempProductItems = state.productItems.map(product => {
        if (product.id === action.meta.id) {
          product.quantity > 1 && product.quantity--;
        }
        return product;
      });
      return {
        ...state,
        productItems: tempProductItems,
        total: tempProductItems.reduce(totalReducer, 0),
      };
    case ADD:
      tempProductItems = state.productItems.map(product => {
        if (product.id === action.meta.id) {
          product.quantity++;
        }
        return product;
      });
      return {
        ...state,
        productItems: tempProductItems,
        total: tempProductItems.reduce(totalReducer, 0),
      };
    default:
      return state;
  }
}