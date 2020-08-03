export const layoutStore = {
  errorModal: { display: false, message: '' },
  visibleModal: false,
  visibleModalSearch: false,
  searchVisible: false,
  visibleModalAdvancedSearch: false,
  visibleSidebar: true,
  visibleSidebarMobile: false,
  init: false,
  loading: false,
  defaultFilters: {},
};

export const searchStore = {
  resultQuery: {},
  dataCount: { count: 0 },
  filterSearch: [],
  filterValues: {},
  termSearch: {},
  paginator: {
    from: 0,
    size: 20,
    page: 1,
  },
  searchProps: false,
};

export const comparisonStore = {
  comparisonBasket: [],
  first360: {},
  second360: {},
};

export const view360Store = {
  result360: {},
  detailViewData: [],
};

export const initialState = {
  layout: layoutStore,
  search: searchStore,
  compare: comparisonStore,
  view360: view360Store,
};
