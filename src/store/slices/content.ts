import type { Plane, PlaneTree } from '@/types/plane';

const enum UPDATE_CONTENT {
  PLANES = 'PLANES',
  PLANE_TREE = 'PLANE_TREE',
  CLICK_LIST = 'CLICK_LIST',
  HREF = 'HREF',
}

export interface ContentState {
  planes: Plane[];
  planeTree: PlaneTree;
  clickedList: number[];
  currentHref: string;
}

interface ContentAction {
  type: UPDATE_CONTENT;
  planeTree?: PlaneTree;
  planes?: Plane[];
  clickedList?: number[];
  currentHref?: string;
}

const initialState: ContentState = {
  planes: [],
  planeTree: { data: [], child: [], $root: null, zIndex: 0 },
  clickedList: [],
  currentHref: '',
};

const content = (
  state: ContentState = initialState,
  action: ContentAction
): ContentState => {
  switch (action.type) {
    case UPDATE_CONTENT.PLANES: {
      if (!action.planes) {
        return state;
      }

      return { ...state, planes: action.planes };
    }
    case UPDATE_CONTENT.CLICK_LIST: {
      if (!action.clickedList) {
        return state;
      }

      return { ...state, clickedList: action.clickedList };
    }
    case UPDATE_CONTENT.HREF: {
      if (!action.currentHref) {
        return state;
      }

      return { ...state, currentHref: action.currentHref };
    }
    case UPDATE_CONTENT.PLANE_TREE: {
      if (!action.planeTree) {
        return state;
      }

      return { ...state, planeTree: action.planeTree };
    }
    default: {
      return state;
    }
  }
};

export const updatePlanes = (planes: Plane[]) => ({
  type: UPDATE_CONTENT.PLANES,
  planes,
});

export const updateClickedList = (clickedList: number[]) => ({
  type: UPDATE_CONTENT.CLICK_LIST,
  clickedList,
});

export const updateCurrentHref = (currentHref: string) => ({
  type: UPDATE_CONTENT.HREF,
  currentHref,
});

export const updatePlaneTree = (planeTree: PlaneTree) => ({
  type: UPDATE_CONTENT.PLANE_TREE,
  planeTree,
});

export default content;
